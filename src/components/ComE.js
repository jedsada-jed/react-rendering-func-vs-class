import React, { Component, PureComponent } from "react";

export default class ComE extends PureComponent {
  constructor(props) {
    super(props);
    console.log("ComE constructor");
  }

  render() {
    console.log("ComE render");

    return <p>ComE</p>;
  }
}
