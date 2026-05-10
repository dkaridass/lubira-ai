import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    telephone: '',
    email: '',
    secteur: 'Mines et Ressources',
    besoin: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const secteurs = [
    "Mines et Ressources",
    "Construction et BTP",
    "Banque et Finance",
    "Assurance et Courtage",
    "Agriculture et Agro-industrie",
    "ONG et Organisations",
    "Commerce et Distribution",
    "Cabinet Professionnel",
    "Autre"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // 1. Insert into Supabase
      if (supabase) {
        const { error } = await supabase
          .from('leads')
          .insert([
            { 
              nom: formData.nom,
              entreprise: formData.entreprise,
              telephone: formData.telephone,
              email: formData.email,
              secteur: formData.secteur,
              besoin: formData.besoin,
              status: 'nouveau',
              source: 'website'
            }
          ]);
          
        if (error) throw error;
      } else {
        // Fallback for demo without Supabase configured yet
        console.log("Mock submission (Supabase not configured):", formData);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      // 2. Here you would trigger Resend via Edge Function or API
      // Since we don't have the secret key in the client, we rely on Supabase
      // database webhooks or Edge Functions to handle the email sending.

      setStatus('success');
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus('error');
      setErrorMessage("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter via WhatsApp.");
    }
  };

  return (
    <section id="contact" className="bg-white py-24 md:py-32 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="mb-16">
          <p className="eyebrow mb-6">CONTACT</p>
          <h2 className="h2-fluid max-w-2xl">
            Parlons de votre projet.<br/>Premier audit gratuit.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column - Founder Info */}
          <div className="lg:col-span-5">
            <p className="font-inter text-[16px] text-gray-body leading-relaxed mb-12">
              Décrivez-nous votre défi opérationnel en quelques lignes. Darius vous répond personnellement sous 24 heures sur WhatsApp.
            </p>

            <div className="flex flex-col items-center sm:items-start mb-12">
              <div className="w-[200px] h-[200px] rounded-full border-[3px] border-red-accent bg-[#F5F5F5] mb-6 overflow-hidden flex items-center justify-center">
                {/* Fallback to text if image not found, but trying to load founder.jpg */}
                <img 
                  src="/founder.jpg" 
                  alt="Darius Tshibangu, Fondateur LUBIRA AI" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="font-inter font-bold text-gray-body hidden">Photo</span>
              </div>
              
              <div className="text-center sm:text-left">
                <h3 className="font-inter font-bold text-[18px] text-black-strong">Darius Tshibangu</h3>
                <p className="font-inter text-[14px] text-red-accent font-medium mb-4">Fondateur & CEO, LUBIRA AI</p>
                <p className="font-inter text-[14px] text-gray-body leading-relaxed max-w-sm mb-6">
                  Congolais. Bâtisseur de solutions IA pour les entreprises de Lubumbashi et de toute la RDC.
                </p>
                
                <div className="space-y-3">
                  <a 
                    href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || "243995974770"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-inter text-[14px] text-black-strong hover:text-red-accent transition-colors justify-center sm:justify-start"
                  >
                    <Phone className="w-4 h-4" /> WhatsApp
                  </a>
                  <a 
                    href="mailto:contact@lubira.ai" 
                    className="block font-inter text-[14px] text-black-strong hover:text-red-accent transition-colors text-center sm:text-left"
                  >
                    contact@lubira.ai
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Vous soumettez le formulaire",
                "Audit gratuit planifié sous 24h",
                "Solution livrée en 48h"
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="font-inter font-bold text-[14px] text-red-accent">0{idx + 1}</span>
                  <span className="font-inter text-[14px] text-black-strong">—</span>
                  <span className="font-inter text-[14px] text-black-strong">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-border border-t-[3px] border-t-red-accent p-8 md:p-12 shadow-sm">
              
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-success mb-6" />
                  <h3 className="font-playfair font-bold text-[24px] text-black-strong mb-2">
                    Merci {formData.nom.split(' ')[0]}.
                  </h3>
                  <p className="font-inter text-[15px] text-gray-body mb-2">
                    Votre demande a été enregistrée.
                  </p>
                  <p className="font-inter text-[15px] text-gray-body">
                    Darius vous répond sous 24h sur WhatsApp.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nom" className="block font-inter font-bold text-[13px] text-black-strong">Nom complet *</label>
                      <input 
                        required
                        type="text" 
                        id="nom" name="nom"
                        value={formData.nom} onChange={handleChange}
                        className="w-full p-3 border border-gray-border focus:border-red-accent outline-none font-inter text-[14px] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="entreprise" className="block font-inter font-bold text-[13px] text-black-strong">Entreprise *</label>
                      <input 
                        required
                        type="text" 
                        id="entreprise" name="entreprise"
                        value={formData.entreprise} onChange={handleChange}
                        className="w-full p-3 border border-gray-border focus:border-red-accent outline-none font-inter text-[14px] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="telephone" className="block font-inter font-bold text-[13px] text-black-strong">Téléphone WhatsApp *</label>
                      <input 
                        required
                        type="tel" 
                        id="telephone" name="telephone"
                        placeholder="+243 XXX XXX XXX"
                        value={formData.telephone} onChange={handleChange}
                        className="w-full p-3 border border-gray-border focus:border-red-accent outline-none font-inter text-[14px] transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-inter font-bold text-[13px] text-black-strong">Email professionnel *</label>
                      <input 
                        required
                        type="email" 
                        id="email" name="email"
                        value={formData.email} onChange={handleChange}
                        className="w-full p-3 border border-gray-border focus:border-red-accent outline-none font-inter text-[14px] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="secteur" className="block font-inter font-bold text-[13px] text-black-strong">Secteur d'activité *</label>
                    <select 
                      required
                      id="secteur" name="secteur"
                      value={formData.secteur} onChange={handleChange}
                      className="w-full p-3 border border-gray-border focus:border-red-accent outline-none font-inter text-[14px] bg-white transition-colors"
                    >
                      {secteurs.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="besoin" className="block font-inter font-bold text-[13px] text-black-strong">Décrivez votre besoin principal</label>
                    <textarea 
                      id="besoin" name="besoin"
                      rows={4}
                      placeholder="Exemple: Notre équipe passe 5 heures par semaine à rédiger des rapports manuellement..."
                      value={formData.besoin} onChange={handleChange}
                      className="w-full p-3 border border-gray-border focus:border-red-accent outline-none font-inter text-[14px] resize-none transition-colors"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-accent font-inter text-[13px]">{errorMessage}</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-red-accent text-white font-semibold text-[16px] hover:bg-black-strong transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...</>
                    ) : (
                      "Envoyer ma demande d'audit gratuit →"
                    )}
                  </button>
                </form>
              )}
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
