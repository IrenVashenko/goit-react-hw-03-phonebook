import { ContactsList, ContactItem, ContactBtn } from './ContactList.styled'

const ContactList = ({ value, onDeleteContact }) => {
    return (
        <ContactsList>
            {value.map((item) => (
                <ContactItem key={item.id}>
                    <span>{item.name}: </span>
                    <span>{item.number}</span>
                    <ContactBtn type="button" onClick={() => onDeleteContact(item.id)}>Delete</ContactBtn>
                </ContactItem>
            ))}
        </ContactsList>
    )
}

export default ContactList;