import React from "react"
import "./Footer.css"
import SocialMediaIcons from "../SocialMediaIcons"

const socialMediaIcons = {
  urls: ["http://twitter.com/StackGen", "http://facebook.com/StackGen"],
  color: "#FF0000"
}

const Footer = () => {
  return (
    <div className="footer">
      <SocialMediaIcons urls={socialMediaIcons.urls} />
      <img
        className="logo"
        alt="starter logo"
        src="http://stackgen.io/logos/logo-192x192.png"
      />

      <div className="clearfix d-lg-none">
        Built in San Francisco by{" "}
        <a
          href="http://starter.io"
          className="font-weight-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Starter Inc.
        </a>
      </div>
    </div>
  )
}

export default Footer
