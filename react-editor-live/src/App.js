import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import Terminal from "./components/Terminal";
import ThemeToggle from "./components/ThemeToggle";
import { AppBar, Toolbar, Button } from "@mui/material";
import { fetchGeminiSuggestion } from "./api/geminiApi";

const App = () => {
  const [code, setCode] = useState(
    `export default function App() { return <h1>Hello World</h1>; }`
  );
  const [theme, setTheme] = useState("light");

  const handleAISuggestion = async () => {
    const newCode = await fetchGeminiSuggestion(code);
    if (newCode) setCode(newCode);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button
            onClick={handleAISuggestion}
            variant="contained"
            color="secondary"
          >
            AI Suggestion
          </Button>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </Toolbar>
      </AppBar>
      <CodeEditor code={code} setCode={setCode} theme={theme} />
      <Terminal />
    </div>
  );
};

export default App;
