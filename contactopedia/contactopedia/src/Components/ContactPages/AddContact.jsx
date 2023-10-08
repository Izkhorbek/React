import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      successMessage: undefined,
    };
  }

  handleAddContactFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.ContactName.value.trim();
    const email = e.target.elements.ContactEmail.value.trim();
    const phone = e.target.elements.ContactPhone.value.trim();
    const checkResponse = this.props.handleAddContact({
      name: name,
      email: email,
      phone: phone,
    });

    if (checkResponse.status == "success") {
      this.setState({
        errorMessage: undefined,
        successMessage: checkResponse.msg,
      });
      document.querySelector(".contact-form").reset();
    } else {
      this.setState({
        errorMessage: checkResponse.msg,
        successMessage: undefined,
      });
    }
  };

  render() {
    return (
      <div className="border col-12 text-white p-2">
        <form
          onSubmit={this.handleAddContactFormSubmit}
          className="contact-form"
        >
          <div className=" row p-2">
            <div className="col-12 text-white-50">Add a new Contact</div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Name..."
                name="ContactName"
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Email..."
                name="ContactEmail"
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Phone..."
                name="ContactPhone"
              ></input>
            </div>

            {this.state.errorMessage == undefined ? (
              <div></div>
            ):(
              (<div className="col-12 text-center text-danger">{this.state.errorMessage}</div>)
            )}
            {this.state.successMessage == undefined ? (
              <div></div>
            ):(
              (<div className="col-12 text-center text-success">{this.state.successMessage}</div>)
            )}

            <div className="col-12 col-md-6 offset-md-3 p-1">
              <button className="btn btn-primary btn-sm form-control">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
