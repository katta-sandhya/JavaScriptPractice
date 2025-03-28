import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

const CodeEditor = ({ code, setCode, theme }) => {
  return (
    <Sandpack
      template="react"
      theme={theme}
      files={{ "/App.js": code }}
      options={{ editorHeight: 400 }}
      customSetup={{ dependencies: {} }}
      onCodeChange={setCode}
    />
  );
};

export default CodeEditor;
