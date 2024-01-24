import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/addContact.css";

const AddContact = ({ history }) => {
    const { actions } = useContext(Context);

    const defaultImage = "https://imgs.search.brave.com/a876Da81HKl25GlgRhekUOvAsbnK9T556iwGHh9_xVE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLWNsaXBhcnQv/MjAyMTA5MTcvb3Vy/bWlkL3BuZ3RyZWUt/ZXhxdWlzaXRlLXdl/YnBhZ2Utd2l0aC1h/dmF0YXItdXNlci1w/bGFjZWhvbGRlci1w/bmctaW1hZ2VfMzkx/MDExMS5qcGc";

    const [newContact, setNewContact] = useState({
        image: defaultImage,
        full_name: "",
        address: "",
        phone: "",
        email: "",
    });

    const inputChange = (e) => {
        if (e.target.name === "image") {
            const file = e.target.files[0];
            setNewContact({ ...newContact, image: file });
        } else {
            setNewContact({ ...newContact, [e.target.name]: e.target.value });
        }
    };

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            await actions.addContact({
                full_name: newContact.full_name,
                email: newContact.email,
                agenda_slug: "my_agenda",
                address: newContact.address,
                phone: newContact.phone,
                image: newContact.image,
            });

            setNewContact({
                image: defaultImage,
                full_name: "",
                email: "",
                phone: "",
                address: "",
            });

            history.push("/contacts");
        } catch (error) {
            console.error("Error adding contact: ", error);
        }
    };

    return (
        <div className="add-contact">
            <div className="container">
                <h2>Add New Contact</h2>
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="full_name"
                            value={newContact.full_name}
                            onChange={inputChange}
                            placeholder="Enter full name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            name="email"
                            value={newContact.email}
                            onChange={inputChange}
                            placeholder="Enter email"
                            required
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="inputPhone">Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="inputPhone"
                            name="phone"
                            value={newContact.phone}
                            onChange={inputChange}
                            placeholder="Enter phone number"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputAddress">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            name="address"
                            value={newContact.address}
                            onChange={inputChange}
                            placeholder="Enter address"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">
                            Save contact
                        </button>
                    </div>
                </form >
            </div>
        </div >
    );
};

export default AddContact;