const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contactList: []
        },
        actions: {
            // otras acciones...

            deleteContact: async (contactId) => {
                const userConfirmed = window.confirm("¿Estás seguro de que quieres eliminar este contacto?");
                if (!userConfirmed) {
                    return;
                }

                try {
                    const resp = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
                        method: "DELETE",
                    });
                    const data = await resp.json();
                    // Eliminar el contacto de la lista de contactos en el store
                    const updatedList = getStore().contactList.filter(contact => contact.id !== contactId);
                    setStore({ contactList: updatedList });
                } catch (error) {
                    console.error("Error deleting contact: ", error);
                }
            }
        }
    };
};

export default getState;
