import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function updateContact(event) {
    const { name, value, email } = event.target;

    setContact((prev) => {
      if (name === "fName") {
        return { fName: value, lName: prev.lName, email: prev.email };
      } else if (name === "lName") {
        return { fName: prev.fName, lName: value, email: prev.email };
      } else {
        return { fName: prev.fName, lName: prev.lName, email: value };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          value={contact.fName}
          onChange={updateContact}
          placeholder="First Name"
        />
        <input
          name="lName"
          value={contact.lName}
          onChange={updateContact}
          placeholder="Last Name"
        />
        <input
          name="email"
          value={contact.email}
          onChange={updateContact}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
