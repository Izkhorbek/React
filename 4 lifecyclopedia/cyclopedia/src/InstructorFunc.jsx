import React, { useEffect } from "react";

const InstructorFunc = (props) => {
  useEffect(() => {
    console.log("useEffect didMount - Instructor");
    return () => {
      console.log("useEffect WillUnMount");
    };
  },[]);

  // componentDidUpdate = async () => {
  //   console.log("DidUpdate - Instructor");
  // };
  // componentDidMount = async () => {
  //   console.log("DidMount - Instructor");
  // };

  // componentWillUnmount() {
  //   console.log("WillUnmount - Instructor");
  // }
  return (
    <div className="p-3">
      Name: {props.instructor.name}
      <br />
      Email: {props.instructor.email}
      <br />
      Phone: {props.instructor.phone}
    </div>
  );
};

export default InstructorFunc;
