import React, { useState, useRef, useEffect } from "react";
import { CometChat } from "@cometchat-pro/chat";

const GROUP_ID = "bceo01";

const Chat = ({ loggedInUser, messages, setMessages }) => {
  const [messageText, setMessageText] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // ✅ Send message function (without re-authentication)
  const sendMessage = () => {
    if (!messageText.trim()) {
      alert("⚠️ Message cannot be empty!");
      return;
    }

    if (!loggedInUser) {
      alert("⚠️ Please log in first before sending a message.");
      return;
    }

    const textMessage = new CometChat.TextMessage(
      GROUP_ID,
      messageText,
      CometChat.RECEIVER_TYPE.GROUP
    );

    CometChat.sendMessage(textMessage).then(
      (message) => {
        console.log("✅ Message Sent:", message);
        setMessages((prevMessages) => [...prevMessages, message]); // ✅ Update chat UI
        setMessageText("");
        scrollToBottom();
      },
      (error) => {
        console.error("❌ Message Sending Failed:", error);
        alert("❌ Message failed to send!");
      }
    );
  };

  // ✅ Scroll to the latest message
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Welcome, {loggedInUser?.name || "Guest"}!</h2>
      <div
        style={{
          border: "1px solid black",
          height: "300px",
          overflowY: "scroll",
          padding: "10px",
        }}
      >
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <p key={index}>
              <b>{msg.sender?.name || "Unknown"}:</b> {msg.text} <br />
              <small style={{ color: "gray" }}>
                {new Date(msg.sentAt * 1000).toLocaleTimeString()}
              </small>
            </p>
          ))
        ) : (
          <p>No messages yet. Start chatting!</p>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* ✅ Input field for messages */}
      <input
        type="text"
        value={messageText}
        placeholder="Type a message..."
        onChange={(e) => setMessageText(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
