import React, { useState } from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"

import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import "./StackGenManager.css"

const templateStack = {
  adminServerHost: "localhost",
  adminServerPort: "8009",
  artifactId: "ignite",
  dbGenDropTable: true,
  dbName: "TEST",
  dbPassword: "ABDCEDF",
  dbUrl: "db.mycompany.rds.us-west-2.rds.amazonaws.com",
  dbUser: "igniteuser",
  hostName: "localhost",
  hostPort: "6969",
  myBatisJava: "gen/src/main/java/io/starter/ignite/model/",
  myBatisMain: "gen/src/",
  name: "My Microservice API",
  orgName: "io.starter",
  ownerId: 0,
  schemaData: "Complete OpenAPI Schema Contents...",
  schemaName: "starter",
  starterIgniteSecureKey: "=W34sdcwdsfwC34=",
  status: "available"
}

class StackGenManager extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = { validated: false }
  }

  handleSubmit(event) {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    this.setState({ validated: true })
    alert("whooee!")
  }

  render() {
    const template = { templateStack }
    const { validated } = this.state
    return (
      <div>
        <div>
          <Tabs defaultActiveKey="Field Mapper">
            <Tab eventKey="Create New API" title="Create New API">
              <div className="row">
                <Card style={({ backgroundColor: "black" }, { width: "100%" })}>
                  <Card.Body>
                    <Card.Title>Create New Instance</Card.Title>
                    <Card.Text>
                      Configure the Code Generation for your API Build
                    </Card.Text>

                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={e => this.handleSubmit(e)}
                    >
                      <Form.Row>
                        <Form.Group
                          as={Col}
                          md="4"
                          controlId="validationCustom01"
                        >
                          <Form.Label>Artifact ID</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="ie: CustomerAPI"
                            defaultValue="stackgen"
                          />
                          <Form.Control.Feedback>
                            Validated!
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="4"
                          controlId="validationCustom02"
                        >
                          <Form.Label>Organization Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Organization name"
                            defaultValue="Starter Inc."
                          />
                          <Form.Control.Feedback>
                            Nice Work!
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="4"
                          controlId="validationCustomUsername"
                        >
                          <Form.Label>Username</Form.Label>
                          <InputGroup>
                            <InputGroup.Prepend>
                              <InputGroup.Text id="inputGroupPrepend">
                                @
                              </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                              type="text"
                              placeholder="Username"
                              aria-describedby="inputGroupPrepend"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please choose a username.
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group
                          as={Col}
                          md="6"
                          controlId="validationCustom03"
                        >
                          <Form.Label>Schema Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Schema Name"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a va1lid schema name (Database must
                            exist).
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          md="3"
                          controlId="validationCustom04"
                        >
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="State"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="3"
                          controlId="validationCustom05"
                        >
                          <Form.Label>Zip</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Zip"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Form.Row>
                      <Form.Group>
                        <Form.Check
                          required
                          label="Agree to terms and conditions"
                          feedback="You must agree before submitting."
                        />
                      </Form.Group>
                      <Button type="submit">Create New</Button>
                    </Form>
                    <Button variant="warning">Edit</Button>
                  </Card.Body>
                </Card>
              </div>
            </Tab>

            <Tab eventKey="List APIs" title="List APIs">
              <div className="row">
                <Card
                  style={({ backgroundColor: "black" }, { width: "18rem" })}
                >
                  <Card.Img
                    variant="bottom"
                    src="https://uploads.codesandbox.io/uploads/user/43c839be-4fb4-4287-8d5c-fe4126a728b4/c0ob-BIG.png"
                  />
                  <Card.Body>
                    <Card.Title>TradeBot API</Card.Title>
                    <Card.Text>
                      Automate and revel in your trading glory
                    </Card.Text>
                    <Button variant="info">Buy</Button>
                  </Card.Body>
                </Card>

                <Card
                  style={({ backgroundColor: "black" }, { width: "18rem" })}
                >
                  <Card.Img
                    variant="bottom"
                    src="https://uploads.codesandbox.io/uploads/user/43c839be-4fb4-4287-8d5c-fe4126a728b4/c0ob-BIG.png"
                  />
                  <Card.Body>
                    <Card.Title>Sheetster PRO</Card.Title>
                    <Card.Text>Coming Soon!</Card.Text>
                    <Button variant="warning">Edit</Button>
                  </Card.Body>
                </Card>

                <Card
                  style={({ backgroundColor: "black" }, { width: "18rem" })}
                >
                  <Card.Img
                    variant="bottom"
                    src="https://uploads.codesandbox.io/uploads/user/43c839be-4fb4-4287-8d5c-fe4126a728b4/c0ob-BIG.png"
                  />
                  <Card.Body>
                    <Card.Title>CSAT Plugin</Card.Title>
                    <Card.Text>CSAT Pliugin API</Card.Text>
                    <Button variant="warning">Edit</Button>
                  </Card.Body>
                </Card>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default StackGenManager
