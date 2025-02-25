import React, { useState } from 'react';
import "./Contact.css";


  const Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const validate = () => {
      let newErrors = {};
      if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
      if (!formData.email.trim()) {
        newErrors.email = "L'email est requis.";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Format d'email invalide.";
      }
      if (!formData.message.trim()) newErrors.message = "Le message est requis.";
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        console.log("Formulaire soumis avec succès :", formData);
        setSuccessMessage("Votre message a été envoyé !");
        setFormData({ name: "", email: "", message: "" }); // Réinitialisation du formulaire
        setErrors({});
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    };
  
    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Contactez-nous</h2>
  
        {successMessage && (
          <p className="text-green-600 text-center">{successMessage}</p>
        )}
  
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Nom :</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Votre nom"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
  
          <div>
            <label className="block font-medium">Email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Votre email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
  
          <div>
            <label className="block font-medium">Message :</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Votre message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    );
  };
    

export default Contact;
