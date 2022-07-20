import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { ContactBtn } from './ContactForm.styled'

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    inputId = nanoid();

    handlerChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        })
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.rest()
    }

    rest = () => {
        this.setState({
            name: '',
            number: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <label htmlFor={this.inputId}>
                    Name
                    <br />
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handlerChange}
                        id={this.inputId}
                    />
                </label>
                <br />
                <label htmlFor={this.inputId}>
                    Number
                    <br />
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handlerChange}
                        id={this.inputId}
                    />
                </label>
                <br />
                <br />
                <ContactBtn type='submit'>Add contact</ContactBtn>
            </form>
        )
    }
}

export default ContactForm;