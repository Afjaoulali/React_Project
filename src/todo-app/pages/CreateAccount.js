import React, { useState } from "react";

export default function CreateAccount() {
  const [loading, setLoading] = useState(false);
  const sendAccount = (ev) => {
    // Pour annuler le rechargement de page,
    // nous utilisons "preventDefault"
    ev.preventDefault();
    setLoading(true);

    //pour récupperer les donné de mon form: 2ème facon
    const email = ev.target.email.value;
    const password = ev.target.password.value;
    console.log(email, password);
  };

  return (
    <>
      <h1>Inscription</h1>
      <form onSubmit={sendAccount}>
        <input type="email" name="email" placeholder="Votre email ..." />
        <input
          type="password"
          name="password"
          placeholder="Votre mot de passe ..."
        />
        <input
          type="password"
          name="password"
          placeholder="Répéter votre mot de passe ..."
        />
        {loading ? (
          <p>Chargement ...</p>
        ) : (
          <button type="submit">S'inscrire</button>
        )}
      </form>
    </>
  );
}
