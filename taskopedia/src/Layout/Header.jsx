import logo from "../Images/react.png";

function MainHeader() {
    return (
      <div className="pt-3 pl-2" style={{backgroundColor:"black"}}>
        <img src= {logo} alt="" style={{height: "35px", verticalAlign: "top" }}></img>
       <span className="h2 pt-4 text-white-50"> REACT COURSE - TaskOpedia </span>
      </div>
    );
  }

const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgray",
};

function SubHeader() {
    return <p style={subHeaderStyle} className="text-center">This will be an exciting course</p>;
}

const Header = ()=> {
    return (
      <div>
        <MainHeader/>
        <SubHeader/>
      </div>
    );
}
export default Header; 
  