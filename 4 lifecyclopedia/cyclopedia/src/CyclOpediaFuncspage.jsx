import React, { useEffect, useState } from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./InstructorFunc";

const CyclOpediaFuncPage = () => {
  // constructor(prop) {
  //   super(prop);
  //    state = JSON.parse(localStorage.getItem("Cyclopedia")) || {
  //     instructor: undefined,
  //     studentList: [],
  //     studentCount: 0,
  //     hideInstructor: false,
  //     inputName: "",
  //     inputFeedback: "",
  //   };
  // }

  // componentDidMount = async () => {
  //   console.log("Component DidMount");
  //   if (JSON.parse(localStorage.getItem("Cyclopedia"))) {
  //     // setState(JSON.parse(localStorage.getItem("Cyclopedia")));
  //   } else {
  //     const response = await getRandomUser();
  //      setState((prevState) => {
  //       return {
  //         instructor: {
  //           name: response.data.first_name + " " + response.data.last_name,
  //           email: response.data.email,
  //           phone: response.data.phone_number,
  //         },
  //       };
  //     });
  //   }
  // };

  // componentDidUpdate = async (previousProps, previousState) => {
  //   console.log("Component DidUpdate");
  //   localStorage.setItem("Cyclopedia", JSON.stringify( state));
  //   console.log("Old State - " + previousState.studentCount);
  //   console.log("New State - " +  state.studentCount);

  //   if (previousState.studentCount <  state.studentCount) {
  //     const response = await getRandomUser();

  //      setState((prevState) => {
  //       return {
  //         studentList: [
  //           ...prevState.studentList,
  //           {
  //             name: response.data.first_name + " " + response.data.last,
  //           },
  //         ],
  //       };
  //     });
  //   } else if (previousState.studentCount >  state.studentCount) {
  //      setState((prevState) => {
  //       return {
  //         studentList: [],
  //       };
  //     });
  //   }
  // };

  // componentWillUnmount() {
  //   console.log("Component WillUnmount");
  // }
  const [state, setState] = useState(() => {
    return {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  });

  const [inputName, setInputNameState] = useState(() => {
    return {
      inputName: "",
    };
  });

  const [inputFeedback, setInputFeedbackState] = useState(() => {
    return {
      inputFeedback: "",
    };
  });
  useEffect(() => {
    console.log("this will be called on every render");
    console.log(state.studentList.length);
  });

  useEffect(() => {
    console.log("this will be called on Initial/first render / MOUNT");
    const getUser = async () => {
      const response = await getRandomUser();
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
            },
          ],
        };
      });
    };
    if (state.studentList.length < state.studentCount) {
      getUser();
    } else if(state.studentList.length > state.studentCount){
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [],
        };
      });
    };
  }, [state.studentCount]);

  // useEffect(() => {
  //   console.log(
  //     "This will be called on whenever value of hideInstructor changes"
  //   );

  //   const getUser = async () => {
  //     const response = await getRandomUser();
  //     setState((prevState) => {
  //       return {
  //         ...prevState,
  //         instructor: {
  //           name: response.data.first_name + " " + response.data.last_name,
  //           email: response.data.email,
  //           phone: response.data.phone_number,
  //         },
  //       };
  //     });
  //   };
  //   if (state.hideInstructor) {
  //     getUser();
  //   }
  // }, [inputName, inputFeedback, state.hideInstructor]);

  useEffect(() => {
    console.log("this will be called on Initial/first render / Mount");
    return () => {
      console.log("this will be called on when component will be UNMOUNT");
    };
  }, []);

  // inputFeedback: "",

  const handleAddStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  const handleRemoveAllStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: 0,
      };
    });
  };

  const handleToggleChange = () => {
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  return (
    <div>
      <div className="p-3">
        <span className="h4 text-success"> Instructor </span>
        <i
          onClick={handleToggleChange}
          className={`bi ${
            state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
          } btn btn-success btn-sm`}
        ></i>
      </div>
      {!state.hideInstructor && state.instructor ? (
        <Instructor instructor={state.instructor} />
      ) : null}

      <div className="p-3">
        <span className="h4 text-success ">Feedback </span>
        <br />
        <input
          type="text"
          placeholder="Name..."
          value={inputName.inputName}
          onChange={(e) => {
            setInputNameState({ inputName: e.target.value });
          }}
        ></input>{" "}
        <br />
        <textarea
          placeholder="Feedback..."
          value={inputFeedback.inputFeedback}
          onChange={(text) => {
            setInputFeedbackState({ inputFeedback: text.target.value });
          }}
        ></textarea>
      </div>
      <div className="p-3">
        <span className="h4 text-success">Student</span>
        <div> Student Count: {state.studentCount}</div>
        <button className="btn btn-success btn-sm" onClick={handleAddStudent}>
          Add Student
        </button>
        &nbsp;
        <button
          className="btn btn-danger btn-sm"
          onClickCapture={handleRemoveAllStudent}
        >
          Remove Students
        </button>
          {
           
          
          }
        }
      </div>
    </div>
  );
};

export default CyclOpediaFuncPage;
