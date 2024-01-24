import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ContactCard from "./ContactCard";

const ContactList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadData();
    }, []);



    return (
        <div className="contact-list">
            {store.contactList.length > 0 ? (
                store.contactList.map((contact, index) => (
                    <ContactCard key={index} contact={contact} />
                ))
            ) : (
                <p>No contacts available. Add new contacts</p>
            )}
        </div>
    );
};

export default ContactList;