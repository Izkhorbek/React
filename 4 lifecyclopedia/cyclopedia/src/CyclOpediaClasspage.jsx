import React from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./Instructor";

class CyclOpediaClassPage extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = JSON.parse(localStorage.getItem("Cyclopedia")) || {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedback: "",
    };
  }

  componentDidMount = async () => {
    console.log("Component DidMount");
    if (JSON.parse(localStorage.getItem("Cyclopedia"))) {
      //this.setState(JSON.parse(localStorage.getItem("Cyclopedia")));
    } else {
      const response = await getRandomUser();
      this.setState((prevState) => {
        return {
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    }
  };

  componentDidUpdate = async (previousProps, previousState) => {
    console.log("Component DidUpdate");
    localStorage.setItem("Cyclopedia", JSON.stringify(this.state));
    console.log("Old State - " + previousState.studentCount);
    console.log("New State - " + this.state.studentCount);

    if (previousState.studentCount < this.state.studentCount) {
      const response = await getRandomUser();

      this.setState((prevState) => {
        return {
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + " " + response.data.last,
            },
          ],
        };
      });
    } else if (previousState.studentCount > this.state.studentCount) {
        this.setState((prevState) => {
            return {
              studentList: [],
            };
          });
    }
  };

  componentWillUnmount() {
    console.log("Component WillUnmount");
  }

  handleAddStudent = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  handleRemoveAllStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: 0,
      };
    });
  };

  handleToggleChange = () => {
    this.setState((prevState) => {
      return {
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };
  render() {
    console.log("Render Component");
    return (
      <div>
        <div className="p-3">
          <span className="h4 text-success"> Instructor </span>
          <i
            onClick={this.handleToggleChange}
            className={`bi ${
              this.state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
            } btn btn-success btn-sm`}
          ></i>
        </div>
        {!this.state.hideInstructor && this.state.instructor ? (
          <Instructor instructor={this.state.instructor} />
        ) : null}

        <div className="p-3">
          <span className="h4 text-success ">Feedback </span>
          <br />
          <input
            type="text"
            placeholder="Name..."
            value={this.state.inputName}
            onChange={(e) => {
              this.setState({ inputName: e.target.value });
            }}
          ></input>{" "}
          <br />
          <textarea
            placeholder="Feedback..."
            value={this.state.inputFeedback}
            onChange={(text) => {
              this.setState({ inputFeedback: text.target.value });
            }}
          ></textarea>
        </div>
        <div className="p-3">
          <span className="h4 text-success">Student</span>
          <div> Student Count: {this.state.studentCount}</div>
          <button
            className="btn btn-success btn-sm"
            onClick={this.handleAddStudent}
          >
            Add Student
          </button>
          &nbsp;
          <button
            className="btn btn-danger btn-sm"
            onClickCapture={this.handleRemoveAllStudent}
          >
            Remove Students
          </button>
          {this.state.studentList.map((student, index) => {
            <div className="text-white" key={index}>
              {" "}
              - {student}
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default CyclOpediaClassPage;
