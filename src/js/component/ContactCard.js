import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactCard = ({ contact }) => {

    const { actions } = useContext(Context);

    const deleteContact = () => {
        actions.deleteContact(contact.id);
    }

    return (
        <div className="contact-card">
            <img src={contact.image} alt={contact.name}></img>
            <p>{contact.full_name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.address}</p>
            <div className="contact-actions">
                <Link to={`/contacts/edit/${contact.id}`}>
                    <i className="fas fa-pencil-alt"></i> Edit
                </Link>
                <button onClick={deleteContact}>
                    <i className="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    );
};

export default ContactCard;