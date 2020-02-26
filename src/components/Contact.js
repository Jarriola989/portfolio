import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="contact">
        <div className="message-name">
          Name: <br />
          <input type="text" className="message" />
        </div>
        <div className="message-email">
          Email:
          <input type="text" className="message" />
        </div>
        <div className="message-content">
          Message:
          <br />
          <input
            type="text"
            className="message"
            placeholder="</> COMING SOON </>"
          />
        </div>
      </div>
    );
  }
}

export default Contact;
