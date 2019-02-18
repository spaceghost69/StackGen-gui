import React from "react"
import ReactDOM from "react-dom"

// React-Bootstrap
import Button from "react-bootstrap/Button"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Card from "react-bootstrap/Card"
import "bootstrap/dist/css/bootstrap.css"

// TODO: import APIEditor from "./components/sg-api-editor";
// import Footer from "./components/footer"
import MainHeader from "./components/MainHeader"
import FieldMapper from "./components/FieldMapper"
import StackGenManager from "./components/StackGenManager"

import "./styles.css"

function App() {
  return (
    <div className="App">
      <MainHeader title="StackGen Dashboard">
        <div className="titleFont">StackGen Dashboard</div>
        <div className="subTitleFont">
          edit and manage StackGen APIs and instances
        </div>
        <div className>
          <Button variant="primary" size="sm">
            logout
          </Button>
        </div>
      </MainHeader>
      <div className="tabBG">
        <Tabs defaultActiveKey="Field Mapper">
          <Tab eventKey="profile" title="APIs">
            <br />
            <br />
            <br />
            <StackGenManager />
          </Tab>

          <Tab eventKey="home" title="Field Mapper">
            <br />
            <br />
            <br />
            <FieldMapper />
          </Tab>

          <Tab eventKey="Sheetster PRO" title="Sheetster PRO">
            <br />
            <br />
            <br />
            <div className="row">
              <Card style={({ backgroundColor: "black" }, { width: "18rem" })}>
                <Card.Img
                  variant="bottom"
                  src="https://uploads.codesandbox.io/uploads/user/43c839be-4fb4-4287-8d5c-fe4126a728b4/c0ob-BIG.png"
                />
                <Card.Body>
                  <Card.Title>Sheetster PRO</Card.Title>
                  <Card.Text>Coming Soon!</Card.Text>
                  <Button variant="warning">Signup for BETA</Button>
                </Card.Body>
              </Card>

              <Card style={({ backgroundColor: "black" }, { width: "18rem" })}>
                <Card.Img
                  variant="bottom"
                  src="https://uploads.codesandbox.io/uploads/user/43c839be-4fb4-4287-8d5c-fe4126a728b4/c0ob-BIG.png"
                />
                <Card.Body>
                  <Card.Title>Sheetster PRO</Card.Title>
                  <Card.Text>Coming Soon!</Card.Text>
                  <Button variant="warning">Signup for BETA</Button>
                </Card.Body>
              </Card>

              <Card style={({ backgroundColor: "black" }, { width: "18rem" })}>
                <Card.Img
                  variant="bottom"
                  src="https://uploads.codesandbox.io/uploads/user/43c839be-4fb4-4287-8d5c-fe4126a728b4/c0ob-BIG.png"
                />
                <Card.Body>
                  <Card.Title>Sheetster PRO</Card.Title>
                  <Card.Text>Coming Soon!</Card.Text>
                  <Button variant="warning">Signup for BETA</Button>
                </Card.Body>
              </Card>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
