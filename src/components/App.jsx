import { Component } from "react";
import FormUser from "./FormUser/FormUser";
import Contacts from "./Contacts/Contacts";



export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  handlerSubmit = (evt) => {
    evt.preventDefault();
    this.setState((prevState) => {
      console.log(prevState);
      return {
        contacts: [...prevState.contacts].push(evt.target.elements.name.value)
      }
    })
      console.log(this.state.contacts);

  };


  
  render() {
      return(
    <>
          <FormUser handler={this.handlerSubmit} />
          <Contacts contactList={this.state.contacts} />
    </>
  );
}

};


