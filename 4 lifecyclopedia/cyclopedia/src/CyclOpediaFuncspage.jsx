import React, { useEffect, useId, useRef, useState } from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./InstructorFunc";

const CyclOpediaFuncPage = () => {
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

  const totalRender = useRef(0);
  const prevStudentCount = useRef(0);
  const inputFeedbackRef = useRef(null);
  const inputId = useId("");

  useEffect(() => {
    totalRender.current = totalRender.current + 1;
    console.log("Render" + totalRender.current);
  });

  useEffect(() => {
    inputFeedbackRef.current.focus();
    return () => {};
  }, []);

  useEffect(() => {
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
    if (prevStudentCount.current < state.studentCount) {
      getUser();
    } else if (prevStudentCount.current > state.studentCount) {
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [],
        };
      });
    }
  }, [state.studentCount]);

  useEffect(() => {
    prevStudentCount.current = state.studentCount;
  }, [state.studentCount]);

  useEffect(() => {
    console.log("this will be called on Initial/first render / Mount");
    const getUser = async () => {
      const response = await getRandomUser();
      setState((prevState) => {
        return {
          ...prevState,
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone,
          },
        };
      });
    };
    getUser();
    return () => {
      console.log("this will be called on when component will be UNMOUNT");
    };
  }, [state.hideInstructor]);

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
    <div className="border">
      <div className="p-3 ">
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
          id={`${inputId} name`}
        ></input>{" "}
        <label for={`${inputId} name`}>Value : </label>{inputName.inputName}
        <br />
        <textarea
          placeholder="Feedback..."
          value={inputFeedback.inputFeedback}
          ref={inputFeedbackRef}
          onChange={(text) => {
            setInputFeedbackState({ inputFeedback: text.target.value });
          }}
          id={`${inputId} feedback`}
        ></textarea>
        <label for={`${inputId} feedback`}>Feedback Value :</label>
      </div>
      <div className="p-3">
        <span className="h4 text-success">Student</span>
        <div> Student Count: {state.studentCount}</div>
        <div> Total render: {totalRender.current}</div>
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
        {state.studentList.map((student, index) => {
          return (
            <div className="border text-white text-center" key={index}>
              -{student.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CyclOpediaFuncPage;
