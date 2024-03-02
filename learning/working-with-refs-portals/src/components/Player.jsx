import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleChange (event) {
    setEnteredPlayerName(event.target.value);
  }

  console.log(enteredPlayerName)

  return (
    <section id="player">
      <h2>Welcome unknown entity</h2>
      <p>
        <input type="text" onChange={handleChange}/>
        <button>Set Name</button>
      </p>
    </section>
  );
}
