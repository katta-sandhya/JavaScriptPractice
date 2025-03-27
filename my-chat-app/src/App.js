import React, { useState, useEffect } from "react";
import { CometChat } from "@cometchat-pro/chat";
import chat from "./Chat";

const APP_ID = "2722097ff6de7695";
const REGION = "in";
const AUTH_KEY = "e035147557627a8fa5c558accc91171cae190ade";
const API_KEY = "28352e93e9ec3b78fdd7e11999a9b2d916a6c6ec";
const GROUP_ID = "bceo01";

const App = () => {
  const [userId, setUserId] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  // ✅ Initialize CometChat once
  useEffect(() => {
    CometChat.init(
      APP_ID,
      new CometChat.AppSettingsBuilder().setRegion(REGION).build()
    )
      .then(() => console.log("✅ CometChat Initialized Successfully"))
      .catch((error) =>
        console.error("❌ CometChat Initialization Failed", error)
      );
  }, []);

  // ✅ Function to log in user (or create if they don't exist)
  const createAndLoginUser = () => {
    if (!userId.trim()) {
      alert("Please enter a User ID!");
      return;
    }

    CometChat.getUser(userId)
      .then(() => loginUser(userId)) // ✅ If user exists, log in
      .catch(() => createUser()); // ✅ If user doesn't exist, create
  };

  // ✅ Function to create a user
  const createUser = () => {
    const user = new CometChat.User(userId);
    user.setName(userId);

    CometChat.createUser(user, API_KEY)
      .then(() => loginUser(userId))
      .catch((error) => {
        console.error("❌ User Creation Failed:", error);
        alert("User creation failed! Check API Key.");
      });
  };

  // ✅ Function to log in the user
  const loginUser = (id) => {
    CometChat.login(id, AUTH_KEY)
      .then((user) => {
        console.log("✅ Login Successful:", user);
        setLoggedInUser(user);
        localStorage.setItem("userId", id);
        joinGroup(id);
        fetchMessages();
        listenForMessages();
      })
      .catch((error) => {
        console.error("❌ Login Failed:", error);
        alert("Login Failed! Check User ID.");
      });
  };

  // ✅ Function to join the group
  const joinGroup = (id) => {
    CometChat.joinGroup(GROUP_ID, CometChat.GROUP_TYPE.PUBLIC)
      .then(() => console.log(`✅ ${id} Joined Group Successfully`))
      .catch((error) => {
        if (error.code !== "ERR_ALREADY_JOINED") {
          console.log("⚠️ User already in the group.");
          fetchMessages();
        } else {
          console.error("❌ Group Join Failed:", error);
        }
      });
  };

  // ✅ Fetch Past Messages
  const fetchMessages = () => {
    const messagesRequest = new CometChat.MessagesRequestBuilder()
      .setGUID(GROUP_ID)
      .setLimit(50)
      .build();

    messagesRequest.fetchPrevious().then(
      (fetchedMessages) => {
        console.log("✅ Messages Loaded:", fetchedMessages);
        setMessages(fetchedMessages);
      },
      (error) => console.error("❌ Fetching Messages Failed:", error)
    );
  };

  // ✅ Listen for New Messages
  const listenForMessages = () => {
    CometChat.addMessageListener(
      "MESSAGE_LISTENER",
      new CometChat.MessageListener({
        onTextMessageReceived: (message) => {
          console.log("📩 New Message Received:", message);
          setMessages((prevMessages) => [...prevMessages, message]);
        },
      })
    );
  };

  // ✅ Send message
  const sendMessage = () => {
    if (!messageText.trim() || !loggedInUser) {
      alert("You must log in first!");
      return;
    }

    const textMessage = new CometChat.TextMessage(
      GROUP_ID,
      messageText,
      CometChat.RECEIVER_TYPE.GROUP
    );

    CometChat.sendMessage(textMessage).then(
      (message) => {
        console.log("✅ Message sent successfully:", message);
        setMessages((prev) => [...prev, message]);
        setMessageText("");
      },
      (error) => console.error("❌ Message sending failed:", error)
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>CometChat Group Chat</h1>
      {/* ✅ Input fields for User ID and Message */}
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={createAndLoginUser}>Login</button>{" "}
      {/* ✅ NEW LOGIN BUTTON */}
      {loggedInUser && (
        <>
          <h2>Welcome, {loggedInUser.name}!</h2>
          <div
            style={{
              border: "1px solid black",
              height: "300px",
              overflowY: "scroll",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <p key={index}>
                <b>{msg.sender?.name}:</b> {msg.text}
              </p>
            ))}
          </div>

          {/* ✅ Input field for message */}
          <input
            type="text"
            placeholder="Enter a message"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </>
      )}
    </div>
  );
};

export default App;
