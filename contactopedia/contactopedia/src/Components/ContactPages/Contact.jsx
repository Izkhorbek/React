const Contact = (props) => {
  return (
    <div className="row p-md-2 mb-2"
    style={{borderRadius:"20px",
    border :"1px solid #555"}}>
        <div className="col-2 col-md-1 pt-2 pt-md-1">
            <img src={`https://ui-avatars.com/api/?name=${props.contact.name}`} alt="" ></img>
        </div>
      <button className="btn btn-secondary form-control my-1">{props.contact.name}</button>
    </div>
  );
};

export default Contact;
