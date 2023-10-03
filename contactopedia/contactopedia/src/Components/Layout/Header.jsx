import logo from "../../Images/logo192.png";
export default function Header() {
  return (
    <div className="py-2  pl-2" style={{ borderBottom: "1px solid #ff0000" }}>
      <img src={logo} style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 pt-4 m-2 text-white-50">
        React Course - ContactOpedia
      </span>
    </div>
  );
}
