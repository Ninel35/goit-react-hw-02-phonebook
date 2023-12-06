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

      if (prevState.contacts.find(({name}) => name.toLowerCase() === evt.target.elements.name.value.toLowerCase())) {
        alert(evt.target.elements.name.value + " is already in contacts")
        return;
      }

      return {
        contacts: [...prevState.contacts, { id: nanoid(), name: evt.target.elements.name.value, number: evt.target.elements.number.value }]
         }
    })
    
    // setTimeout(() => {
    //   evt.target.elements.name.value = "";
    //   evt.target.elements.number.value = "";
    // }, 0);
  };


  handlerFilter = (evt) => {
    this.setState(() => {
      return {
        filter: evt.target.value,
      }
    });
  };



   handleDelete = (evt) => {
      this.setState((prevState) => {
        return {
          contacts: prevState.contacts.filter((item, index, arr) => {
            return item.id !== evt.target.parentElement.id
          })
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
          <Contacts contactList={this.state.contacts.filter((elem) => {
                    if (this.state.filter === '' || elem.name.toLowerCase().includes(this.state.filter.toLowerCase())) {
                        return true
                    } else return false
          })}
             handleDelete={this.handleDelete} />
          </>
  );
}
};







