import React from "react";
import { render } from "react-dom";
import {
  FileExplorer,
  CodeMirror,
  BrowserPreview,
  SandpackProvider
} from "react-sandpack";

const files = {
  "/index.js": {
    code: "document.body.innerHTML = `<div>${require('uuid')}</div>`"
  }
};

const dependencies = {
  uuid: "latest"
};

class APIEditor extends React.Component {
  render() {
    return (
      <SandpackProvider
        files={files}
        dependencies={dependencies}
        entry="/index.js"
      >
        <div style={{ display: "flex", width: "25%", height: "25%" }}>
          <FileExplorer style={{ width: 300 }} />
          <CodeMirror style={{ flex: 1 }} />
          <BrowserPreview style={{ flex: 1 }} />
        </div>
      </SandpackProvider>
    );
  }
}

export default APIEditor;
