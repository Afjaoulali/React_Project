/**
 * Créer un composant Hello qui affiche
 * une h1 avec "Hello {name} !"
 *
 * Ce composant doit être dans son propre fichier
 * et exporté par défaut
 *
 * Importé le composant dans index.js et l'afficher
 * dans le render
 */
import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
render(<App />, document.querySelector("#root"));
