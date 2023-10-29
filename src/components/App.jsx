import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import {
//   Section,
//   ContactAddForm,
//   Input,
//   Button,
//   ContactsList,
//   ContactsListItem,
// } from 'components';
import { nanoid } from 'nanoid';
import { dataContacts } from './data/dataContacts';

export class App extends Component {
  state = {
    contacts: dataContacts,
    filter: '',
  };

  getFilteredData = () => {
    // method return data filtered by this.state.filter
    // transform this.state.contacts values &&  this.state.filter to loverCase
    const defalutDataContacts = this.state.contacts;
    const filterValue = this.state.filter;
    if (defalutDataContacts.length === 0 || !filterValue) {
      // interrupt method if the array is empty or the filter value is missing
      return;
    }

    // filter data by filter value in loverCase
    return defalutDataContacts.filter(item =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  getContactList = () => {
    const defalutDataContacts = this.state.contacts;
    const filterValue = this.state.filter;
    // method to select filtered data or data by default
    // if filterValue !== null return callback filter method
    // else if filterValue === null return defalutDataContacts
    if (!defalutDataContacts.length) {
      return [];
    }
    return filterValue ? this.getFilteredData() : defalutDataContacts;
  };

  resetForm = (refName, refTel) => {
    // method for reset form input
    refName.value = '';
    refTel.value = '';
    return;
  };

  createContactObj = (valueName, valueTel) => {
    // method return contact object
    return { name: valueName, tel: valueTel, id: nanoid(5) };
  };

  checkAddDoubleContact = name => {
    // method check is name contain in this.state.contacts
    // toLowerCase name comparison
    const check = this.state.contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    return check ? true : false;
  };

  onFilterInput = e => {
    // method update filter in state
    console.log('lasdkfj');
    this.setState({
      filter: e.target.value,
    });
  };

  onSubmitButtonContactAdd = e => {
    e.preventDefault();
    // method listen add button
    const refInputName = e.target.elements.name;
    const refInputTel = e.target.elements.tel;
    const refInputNameValue = refInputName.value;
    const refInputTelValue = refInputTel.value;

    const checkDoubleContact = this.checkAddDoubleContact(refInputNameValue);
    // check checking for duplicate names
    // if true name dublicated, interrupt method

    if (checkDoubleContact) {
      // show user dublicate contact
      Notify.failure(
        `The contact ${refInputNameValue} has already been added before`
      );
      //reset input to ''
      this.resetForm(refInputName, refInputTel);
      return;
    }

    // create new object by name && tel
    const contactObj = this.createContactObj(
      refInputNameValue,
      refInputTelValue
    );

    // update state, spread new object to this.state.contacts, reset filter
    this.setState({
      contacts: [...this.state.contacts, { ...contactObj }],
      filter: '',
    });

    // show the contact that has been added
    Notify.success(`The contact ${refInputNameValue} successfully added`);
    this.resetForm(refInputName, refInputTel);
    return;
  };

  onContactDeleteButtonClick = e => {
    // method get event, delete element from this.state.contacts by id
    const deleteContactId = e.target.dataset.id;
    const newArray = this.state.contacts.filter(
      item => item.id !== deleteContactId
    );

    //update state without delete element
    this.setState({ contacts: newArray });
    Notify.success(`Contact deleted successfully`);
  };

  render() {
    return;
    // (
    //   <>
    //     <Section title="Phonebook">
    //       <ContactAddForm
    //         onSubmitButtonContactAdd={this.onSubmitButtonContactAdd}
    //       >
    //         <Input type="text" name="name" />
    //         <Input type="tel" name="tel" />
    //         <Button type="submit" text="Add contact" />
    //       </ContactAddForm>
    //     </Section>
    //     <Section title="Contacts">
    //       <Input type="text" name="filter" onFilterInput={this.onFilterInput} />
    //       {/* get data form getContactList */}
    //       {/* if this.state.filter === '' return this.state.contacts */}
    //       {/* if this.state.filter !== '' return data filtered by this.state.filter */}
    //       <ContactsList>
    //         {this.getContactList(this.state.contacts, this.state.filter).map(
    //           item => (
    //             <ContactsListItem
    //               data={item}
    //               key={item.id}
    //               onContactDeleteButtonClick={this.onContactDeleteButtonClick}
    //             />
    //           )
    //         )}
    //       </ContactsList>
    //     </Section>
    //   </>
    // );
  }
}
