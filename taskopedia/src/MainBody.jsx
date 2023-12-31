import { faker } from "@faker-js/faker";
import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";
import React from "react";

class MainBody extends React.Component {
  render() {
    const whatWillLearn = "React JS";
    const totalLecture = 3;

    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          In this course, we will learn {whatWillLearn} by building TaskOpedia!
          <br />
          Total Lecture - {totalLecture}
        </p>
        <ul>
          <li>Basic Foundation </li>
          <li>Functional and Class Components</li>
        </ul>
        <div className="container row">Students Enrolled.</div>
        <Student
          experience={2}
          fullName="Ben Keys"
          headshot={faker.image.avatar()}
        >
          <StudentReview />
        </Student>
        <Student
          experience={5}
          fullName="Kell Denies"
          headshot={faker.image.avatar()}
        >
          <StudentReview />
        </Student>
        <Student
          experience={7}
          fullName="Bull Fedree"
          headshot={faker.image.avatar()}
        />
      </div>
    );
  }
}

export default MainBody;
