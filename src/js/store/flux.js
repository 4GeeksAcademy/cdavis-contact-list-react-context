const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: []

		},
		actions: {
			loadData: async () => {
				try {
					const resp = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda");
					const data = await resp.json();
					setStore({ contactList: data });
				} catch (error) {
					console.error("Error fetching data: ", error);
				}
			},

			addContact: async (newContact) => {
				try {
					const resp = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(newContact),
					});
					const data = await resp.json();
					setStore({ contactList: [...getStore().contactList, data] });
				} catch (error) {
					console.error("Error adding contact: ", error);
				}
			},

			editContact: async (contactId, updatedContact) => {
				try {
					const resp = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(updatedContact),
					});
					const data = await resp.json();
					const updatedList = getStore().contactList.map(contact => (contact.id === contactId ? data : contact));
					setStore({ contactList: updatedList });
				} catch (error) {
					console.error("Error editing contact: ", error);
				}
			},

			deleteContact: async (contactId) => {
				const userConfirmed = window.confirm("Are you sure you want to delete this contact?");
				if (!userConfirmed) {
					return;
				}

				try {
					const resp = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
						method: "DELETE",
					});
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