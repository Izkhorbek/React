import React from "react";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "99890-5871-4695",
          email: "ben@naver.com",
          isFavorite: true,
        },
        {
          id: 2,
          name: "Kathy Patrick",
          phone: "99890-2154-1102",
          email: "kethy@naver.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Paul Shown",
          phone: "99891-9987-0015",
          email: "paul@naver.com",
          isFavorite: false,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }
  handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return { status: "failure", msg: "Please Enter a valid Name" };
    } else if (newContact.phone == "") {
      return { status: "failure", msg: "Please Enter a valid Phone Number" };
    }
    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name == newContact.name && x.phone == newContact.phone) {
        return true;
      }
    });

    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate Record" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
      };

      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Contact was added successfully" };
    }
  };

  handleToggleFavorite = (contact) => {
    this.setState((item) => {
      return {
        contactList: item.contactList.map((obj) => {
          if (obj.id == contact.id) {
            return { ...obj, isFavorite: !obj.isFavorite };
          }
          return obj;
        }),
      };
    });
  };

  handleDeleteContact = (contactId) => {
    this.setState((item) => {
      return {
        contactList: item.contactList.filter((obj) => {
          return obj.id != contactId ;
        }),
      };
    });
  };

  handleRemoveAllContact = () => {
    this.setState((contact) => {
      return {
        contactList: [],
      };
    });
  };

  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id:
        this.state.contactList.length > 0
          ? this.state.contactList[this.state.contactList.length - 1].id + 1
          : 1,
      isFavorite: false,
    };

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
  };

  handleUpdateClick = (contact) => {
    console.log(contact);
    this.setState((contact) => {
      return {
        selectedContact: contact,
        isUpdating:true,
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                handleAddRandomContact={this.handleAddRandomContact}
              />
            </div>
            <div className="col-4 row">
              <RemoveAllContact
                handleRemoveAllContact={this.handleRemoveAllContact}
              />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact handleAddContact={this.handleAddContact} />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row" name="favoriteContact">
                <FavoriteContacts
                  contacts={this.state.contactList.filter(
                    (item) => item.isFavorite == true
                  )}
                  handleToggleFavorite={this.handleToggleFavorite}
                  handleDeleteContact={this.handleDeleteContact}
                  updateContact={this.handleUpdateClick}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (item) => item.isFavorite == false
                  )}
                  handleToggleFavorite={this.handleToggleFavorite}
                  handleDeleteContact={this.handleDeleteContact}
                  updateContact={this.handleUpdateClick}
                />
              </div>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactIndex;
