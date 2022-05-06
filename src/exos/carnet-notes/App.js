/**
 * Exercice : Carnet de note
 *
 * - Afficher un h1 avec comme titre "Carnet de note"
 * - Afficher un input type number pour rentrer une nouvelle note
 * - Afficher un bouton "Ajouter la note"
 * - Afficher dans une balise <ul> / <li> toutes les notes rentrées
 *
 * Bonus : Ajouter un bouton "supprimer" sur une note dans la balise <li>
 * Bonus : Ajouter la possibilité de modier une note en éditant un input
 *         dans la balise <li>
 *
 * Lorsque je rentre un chiffre dans l'input, que je clique sur ajouter
 * alors la note doit apparaitre dans la balise <ul> / <li>
 *
 * (Il vvous faudra utiliser la méthode "map" :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * )
 *
 * Bonus : Faire en sorte de pouvoir supprimer une note en cliquant
 *         sur le bouton supprimer
 * Bonus : Pouvoir éditer un notes
 *
 */
import React, { useState } from "react";

export default function App() {
  const [note, setNote] = useState(0);
  const [carnet, setCarnet] = useState({});
  const changeNote = (ev) => {
    setNote(parseInt(ev.target.value));
  };
  const ajouterNote = () => {
    setCarnet([note, ...carnet]);
    setNewTodo("");
  };
  return (
    <>
      <h1>Carnet de note:</h1>
      <input type="number" value="" />
      <button>Ajouter une note</button>
      <ul>
        <li></li>
      </ul>
    </>
  );
}
