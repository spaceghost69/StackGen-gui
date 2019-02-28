import React from "react"
import ReactDOM from "react-dom"

// React-Bootstrap
import {
  ButtonToolbar,
  Button,
  Row,
  Col,
  Tabs,
  Tab,
  Container,
  Card
} from "react-bootstrap"

// TODO: import APIEditor from "./components/sg-api-editor";
// import Footer from "./components/footer"
import MainHeader from "./components/MainHeader"
import Charts from "./components/Charts"
import FieldMapper from "./components/FieldMapper"
import StackGenManager from "./components/StackGenManager"
import Cal from "./components/FullCalendar"
import Footer from "./components/Footer"
import DashboardList from "./components/DashboardList"
import HeaderBar from "./components/HeaderBar"
import GitDeploy from "./components/GitDeploy"

// STYLES

// import "bootstrap/dist/css/bootstrap.css"
// import "./css/bootstrap-cosmo.css"
// import "./css/bootstrap-cyborg.css"
// import "./css/bootstrap-solar.css"
import "./css/bootstrap-slate.css"
// import "./css/bootstrap-sketchy.css"
//import "./css/bootstrap-darkly.css"
//import "./css/bootstrap-flatly.css"
//import "./css/bootstrap-materia.css"
//import "./css/bootstrap-superhero.css "

import "./styles.css"
import "fullcalendar/dist/fullcalendar.min.css"
import "fullcalendar-scheduler/dist/scheduler.min.css"

function App() {
  return (
    <div className="App">
      <HeaderBar>StackGen Dashboard</HeaderBar>

      <div className="tabBG">
        <Tabs defaultActiveKey="dashboard">
          <Tab eventKey="dashboard" title="Dashboard">
            <Card className="flexRow">
              <Card.Body>
                <Card.Title>StackGen PRO</Card.Title>
                <Card.Text>system nominal</Card.Text>
                <DashboardList>Monitoring Dashboard</DashboardList>
              </Card.Body>
            </Card>

            <Card className="flexRow">
              <Card.Body>
                <Card.Title>Deploy to Codesandbox.io</Card.Title>
                <Card.Text>
                  selected github project into Codesandbox.io
                </Card.Text>
                <GitDeploy />
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>System Events</Card.Title>
                <Card.Text>system scheduled event calendar</Card.Text>
                <Cal />
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Performance</Card.Title>
                <Card.Text>instance performance metrics</Card.Text>
                <Row>
                  <Col>
                    <Charts />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="APIs" title="APIs">
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
      <Footer />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
