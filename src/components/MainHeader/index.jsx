import React from "react"
import "./MainHeader.css"

class MainHeader extends React.Component {
  render() {
    const { children } = this.props
    return <header className="mainHeader">{children}</header>
  }
}

export default MainHeader
