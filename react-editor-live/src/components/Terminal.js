import React, { useEffect, useRef, useState } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import { TextField, Button } from "@mui/material";

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const term = useRef(null);
  const [npmPackage, setNpmPackage] = useState("");

  useEffect(() => {
    if (!term.current) {
      term.current = new Terminal();
      term.current.open(terminalRef.current);
    }
  }, []);

  const installPackage = () => {
    if (npmPackage) {
      term.current.writeln(`Installing ${npmPackage}...`);
      setTimeout(() => {
        term.current.writeln(`${npmPackage} installed successfully!`);
        setNpmPackage("");
      }, 2000);
    }
  };

  return (
    <div>
      <TextField
        value={npmPackage}
        onChange={(e) => setNpmPackage(e.target.value)}
        placeholder="Install NPM package"
        variant="outlined"
        size="small"
      />
      <Button onClick={installPackage} variant="contained" color="primary">
        Install
      </Button>
      <div
        ref={terminalRef}
        style={{ height: "200px", background: "black", color: "white" }}
      />
    </div>
  );
};

export default TerminalComponent;
