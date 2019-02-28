import React, { Component } from "react"
import { Button, ProgressBar, Row, Col } from "react-bootstrap"
import CodeSandboxer from "react-codesandboxer"
// import pkgJSON from '../package.json';

/**
 *
 * Take a given github repo and copy into Codesandbox to edit
 *
 */
export default () => (
  <CodeSandboxer
    examplePath="src/index.js"
    // pkgJSON={pkgJSON}
    gitInfo={{
      account: "spaceghost69",
      repository: "StackGen-gui",
      host: "github"
    }}
    //importReplacements={[["src", pkgJSON.name]]}
    // dependencies={{
    // "@atlaskit/css-reset": "latest"
    // [pkgJSON.name]: pkgJSON.version
    //}}
    // providedFiles={{ 'index.js': content: { 'abcde....' } }}
    afterDeploy={console.log}
  >
    {({ isLoading, error }) =>
      error ? (
        console.log(error.toString())
      ) : (
        <Row>
          <Col>
            <Button type="submit" disabled={!!isLoading}>
              Upload to CodeSandbox
              <ProgressBar animated now={45} visible="{isLoading}" />
            </Button>
          </Col>
        </Row>
      )
    }
  </CodeSandboxer>

  /**
  <CodeSandboxer
    examplePath="src/app.js"
    gitInfo={{
      account: "spaceghosts69",
      repository: "StackGen-gui",
      host: "github"
    }}
  >
    {() => <button type="submit">Upload to CodeSandbox</button>}
    
  </CodeSandboxer>
  */
)
