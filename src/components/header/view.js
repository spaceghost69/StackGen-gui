import React, { forwardRef } from "react"
import "./styles.css"

export default forwardRef(({ children, heading }, ref) => {
  return (
    <div class="container" ref={ref}>
      <h2>{heading}</h2>
      <div className="body">{children}</div>
    </div>
  )
})
