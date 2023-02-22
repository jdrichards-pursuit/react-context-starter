import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // no need to make this work. out of scope of project
  };

  return (
    <>
      <h1>Hello! 😃!</h1>
      <h2>
        Choose Your Language <span>FR</span> |<span>EN</span>
      </h2>
      <p>Please Fill Out This Form</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={name.firstName}
          value={name.firstName}
          id={name.firstName}
          onChange={(e) => setName({ ...name, [e.target.id]: e.target.value })}
        />
        <input
          type="text"
          placeholder={name.lastName}
          value={name.lastName}
          id={name.lastName}
          onChange={(e) => setName({ ...name, [e.target.id]: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
