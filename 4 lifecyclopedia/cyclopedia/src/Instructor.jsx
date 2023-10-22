import React from "react";

class Instructor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate = async () => {
    console.log("DidUpdate - Instructor");
  };
  componentDidMount = async () => {
    console.log("DidMount - Instructor");
  };

  componentWillUnmount() {
    console.log("WillUnmount - Instructor");
  }

  render() {
    console.log("Render - Instructor");
    return (
      <div className="p-3">
        Name: {this.props.instructor.name}
        <br />
        Email: {this.props.instructor.email}
        <br />
        Phone: {this.props.instructor.phone}
      </div>
    );
  }
}

export default Instructor;
