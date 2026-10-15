import { useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";


function Signup() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white py-10 px-12 shadow-lg ring-1 ring-slate-200">
        <form onSubmit={handleSubmit} className="space-y-5">
          <h1 className="text-center text-2xl font-bold text-slate-800">Sign Up</h1>

          {/* Ajout de la prop id pour lier le label à l'input */}
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
            <Input
              id="nom"
              placeholder="Entrez votre nom"
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-slate-700 mb-1">Prénom</label>
            <Input
              id="prenom"
              placeholder="Entrez votre prénom"
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <Input
              id="email"
              placeholder="Entrez votre email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Mot de passe</label>
            <Input
              id="password"
              placeholder="Entrez votre mot de passe"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

         <Button text="Sign Up" type="submit" className="w-full" />

         
        </form>
      </div>
    </div>
  );
}

export default Signup;


