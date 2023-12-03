import { Component } from "react";
import FormUser from "./FormUser/FormUser";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import { nanoid } from "nanoid";



export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  handlerSubmit = (evt) => {
    evt.preventDefault();
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name: evt.target.elements.name.value, number: evt.target.elements.number.value }]
         }
    })
  
    setTimeout(() => {
      evt.target.elements.name.value = "";
      evt.target.elements.number.value = "";
    }, 0);
  };


  handlerFilter = (evt) => {
    this.setState((prevState) => {
      return {
        filter: evt.target.value,
    }
  })
}

  
  render() {
      return(
        <>
            <h1>Phonebook</h1>

          <FormUser handler={this.handlerSubmit} />
          <h2>Contacts</h2>
          <Filter handlerFilter={this.handlerFilter} />
          <Contacts contactList={this.state.contacts}  filter={this.state.filter}/>
          
    </>
  );
}
};


