import React, { useRef } from "react";
import View from "./view";

export default ({ children }) => {
  const dropRef = useRef();
  return <View>{children}</View>;
};
