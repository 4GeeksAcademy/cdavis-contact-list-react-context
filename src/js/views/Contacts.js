import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";

export const Contacts = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // Cargar los contactos al cargar la página
        actions.loadData();
    }, []);

    return (
        <div className="container">
            <div>
                <p className="text-right my-3">
                    <Link className="btn btn-success" to="/add">
                        Add new contact
                    </Link>
                </p>
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <ul className="list-group pull-down" id="contact-list">
                        {/* Renderizar cada contacto desde el estado global */}
                        {store.contactList.map(contact => (
                            <ContactCard key={contact.id} contact={contact} onDelete={() => actions.deleteContact(contact.id)} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
