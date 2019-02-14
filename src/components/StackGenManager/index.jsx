import React, { useState } from "react"
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
  render() {
    const template = { templateStack }
    return <div className="box">StackGenManager YO</div>
  }
}

export default StackGenManager
