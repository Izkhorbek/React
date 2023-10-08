import Contact from "./Contact";

const FavoriteContacts = (props) => {
  return (
    <div className="col-12 py-2"
    style={{borderRadius:"10px", backgroundColor:"#323637"}}>
      <div className="text-center text-white-50"> Favorites</div>
      <div className="p-2"></div>
      {props.contacts.map((contact, index) => (
        <Contact contact={contact} key={index} 
        handleToggleFavorite ={props.handleToggleFavorite}
        handleDeleteContact = {props.handleDeleteContact}
        updateContact = {props.updateContact}/>
      ))}
    </div>
  );
};

export default FavoriteContacts;
