import React from "react"
import "./DashboardList.css"
import { Card, ListGroup, Badge } from "react-bootstrap"

class DashboardList extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Header>{children}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center">
            <Badge pill variant="primary">
              33
            </Badge>
            &nbsp;&nbsp;Scheduled Events Today
          </ListGroup.Item>
          <ListGroup.Item>
            <Badge pill variant="secondary">
              3
            </Badge>
            &nbsp;&nbsp;High Priority
          </ListGroup.Item>
          <ListGroup.Item>
            <Badge pill variant="danger">
              2
            </Badge>
            &nbsp;&nbsp;Error Events
          </ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}

export default DashboardList
