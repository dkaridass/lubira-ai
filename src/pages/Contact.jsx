import { useState } from 'react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    secteur: '',
    service: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email invalide";
    if (!formData.entreprise.trim()) newErrors.entreprise = "L'entreprise est requise";
    if (!formData.secteur) newErrors.secteur = "Veuillez sélectionner un secteur";
    if (!formData.service) newErrors.service = "Veuillez sélectionner un service";
    if (!formData.description.trim()) newErrors.description = "Veuillez décrire votre problème";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError(false);
      
      try {
        const response = await fetch('https://formsubmit.co/ajax/dariustshibang53@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.nom,
            email: formData.email,
            company: formData.entreprise,
            sector: formData.secteur,
            service: formData.service,
            message: formData.description,
            _subject: `[LUBIRA AI] Nouvelle demande de ${formData.nom} — ${formData.entreprise}`,
            _template: 'table'
          })
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({ nom: '', email: '', entreprise: '', secteur: '', service: '', description: '' });
        } else {
          setSubmitError(true);
        }
      } catch (err) {
        setSubmitError(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  return (
    <div className="w-full bg-white pb-24">
      
      {/* PAGE HEADER */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection borderLeft className="max-w-3xl">
            <p className="eyebrow text-red-accent mb-6">CONTACT</p>
            <h1 className="text-[40px] md:text-[56px] leading-[1.1] tracking-[-0.02em] font-bold mb-6">
              Parlons de<br/>votre projet.
            </h1>
            <p className="text-[18px] text-gray-body leading-relaxed">
              Premier audit gratuit et sans engagement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TWO COLUMN LAYOUT */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-10">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-accent"></span>
                  </span>
                  <span className="font-inter font-semibold text-[13px] text-[#059669] uppercase tracking-wider">
                    Disponible maintenant
                  </span>
                </div>

                <div className="space-y-6 mb-16">
                  <div className="pl-6 border-l-[3px] border-red-accent">
                    <p className="font-playfair font-bold text-[18px] text-black-strong mb-1">Lubumbashi, DRC</p>
                    <p className="text-gray-body text-[14px]">Siège social</p>
                  </div>
                  
                  <div className="pl-6 border-l-[3px] border-red-accent">
                    <a href="mailto:contact@lubira.ai" className="font-playfair font-bold text-[18px] text-black-strong mb-1 hover:text-red-accent transition-colors block">
                      contact@lubira.ai
                    </a>
                    <p className="text-gray-body text-[14px]">Réponse en moins de 2 heures</p>
                  </div>

                  <div className="pl-6 border-l-[3px] border-red-accent pt-2">
                    <a href="https://wa.me/243995974770" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white font-bold text-[14px] rounded-btn hover:bg-[#1DA851] transition-colors w-full sm:w-auto">
                      Discuter sur WhatsApp
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-inter font-bold text-[13px] uppercase tracking-[0.12em] text-black-strong mb-6">Notre Processus</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <span className="font-playfair text-red-accent font-bold text-[24px] leading-none">01</span>
                      <div>
                        <h4 className="font-inter font-bold text-black-strong text-[15px] mb-1">Vous nous contactez</h4>
                        <p className="text-gray-body text-[13px]">Remplissez le formulaire ou envoyez un message.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-playfair text-red-accent font-bold text-[24px] leading-none">02</span>
                      <div>
                        <h4 className="font-inter font-bold text-black-strong text-[15px] mb-1">Audit gratuit sous 24h</h4>
                        <p className="text-gray-body text-[13px]">Un expert analyse votre problème spécifique.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-playfair text-red-accent font-bold text-[24px] leading-none">03</span>
                      <div>
                        <h4 className="font-inter font-bold text-black-strong text-[15px] mb-1">Solution livrée en 48h</h4>
                        <p className="text-gray-body text-[13px]">Déploiement et intégration dans vos opérations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <div className="lg:col-span-7">
              <AnimatedCard hoverEffect={false} className="bg-white border-thin border-gray-border border-t-[3px] border-t-red-accent p-8 md:p-10">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-off-white border border-gray-border rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-red-accent font-bold text-[24px]">✓</span>
                    </div>
                    <h3 className="font-playfair font-bold text-[24px] text-black-strong mb-4">Demande Envoyée</h3>
                    <p className="text-gray-body text-[15px] mb-8">
                      Nous avons bien reçu votre demande. Un expert LUBIRA AI vous contactera sous 2 heures.
                    </p>
                    <button 
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-3 border border-gray-border text-black-strong font-medium text-[14px] hover:border-black-strong transition-colors"
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-inter text-[13px] font-bold text-black-strong mb-2">Nom complet</label>
                        <input 
                          type="text" 
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          className={`w-full bg-off-white border ${errors.nom ? 'border-red-accent' : 'border-gray-border'} px-4 py-3 text-[14px] focus:outline-none focus:border-black-strong transition-colors`}
                          placeholder="Jean Dupont"
                        />
                        {errors.nom && <p className="text-red-accent text-[12px] mt-1">{errors.nom}</p>}
                      </div>
                      <div>
                        <label className="block font-inter text-[13px] font-bold text-black-strong mb-2">Email professionnel</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-off-white border ${errors.email ? 'border-red-accent' : 'border-gray-border'} px-4 py-3 text-[14px] focus:outline-none focus:border-black-strong transition-colors`}
                          placeholder="jean@entreprise.cd"
                        />
                        {errors.email && <p className="text-red-accent text-[12px] mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block font-inter text-[13px] font-bold text-black-strong mb-2">Nom de l'entreprise</label>
                      <input 
                        type="text" 
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        className={`w-full bg-off-white border ${errors.entreprise ? 'border-red-accent' : 'border-gray-border'} px-4 py-3 text-[14px] focus:outline-none focus:border-black-strong transition-colors`}
                        placeholder="Votre Entreprise SARL"
                      />
                      {errors.entreprise && <p className="text-red-accent text-[12px] mt-1">{errors.entreprise}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-inter text-[13px] font-bold text-black-strong mb-2">Secteur d'activité</label>
                        <select 
                          name="secteur"
                          value={formData.secteur}
                          onChange={handleChange}
                          className={`w-full bg-off-white border ${errors.secteur ? 'border-red-accent' : 'border-gray-border'} px-4 py-3 text-[14px] focus:outline-none focus:border-black-strong transition-colors appearance-none`}
                        >
                          <option value="">Sélectionner...</option>
                          <option value="Mines">Secteur Minier</option>
                          <option value="Logistique">Logistique & Transport</option>
                          <option value="Banque">Banque & Finance</option>
                          <option value="ONG">ONG & Institutions</option>
                          <option value="Autre">Autre</option>
                        </select>
                        {errors.secteur && <p className="text-red-accent text-[12px] mt-1">{errors.secteur}</p>}
                      </div>
                      <div>
                        <label className="block font-inter text-[13px] font-bold text-black-strong mb-2">Service souhaité</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full bg-off-white border ${errors.service ? 'border-red-accent' : 'border-gray-border'} px-4 py-3 text-[14px] focus:outline-none focus:border-black-strong transition-colors appearance-none`}
                        >
                          <option value="">Sélectionner...</option>
                          <option value="Automatisation">Automatisation des Processus</option>
                          <option value="Agents IA">Agents IA sur Mesure</option>
                          <option value="Doc Intelligence">Intelligence Documentaire</option>
                          <option value="WhatsApp">Bots WhatsApp Business</option>
                          <option value="Dashboard">Tableaux de Bord</option>
                          <option value="Conformite">Conformité et Traçabilité</option>
                          <option value="Audit">Audit Stratégique</option>
                          <option value="Autre">Je ne suis pas sûr</option>
                        </select>
                        {errors.service && <p className="text-red-accent text-[12px] mt-1">{errors.service}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block font-inter text-[13px] font-bold text-black-strong mb-2">Décrivez votre problème</label>
                      <textarea 
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full bg-off-white border ${errors.description ? 'border-red-accent' : 'border-gray-border'} px-4 py-3 text-[14px] focus:outline-none focus:border-black-strong transition-colors resize-none`}
                        placeholder="Expliquez-nous brièvement le processus qui vous fait perdre du temps ou de l'argent..."
                      ></textarea>
                      {errors.description && <p className="text-red-accent text-[12px] mt-1">{errors.description}</p>}
                    </div>

                    <div className="pt-4">
                      {submitError && (
                        <div className="mb-4 p-4 bg-off-white border border-red-accent text-red-accent text-[14px] text-center">
                          Une erreur est survenue. Veuillez réessayer ou nous contacter sur WhatsApp.
                        </div>
                      )}
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center px-8 py-4 bg-red-accent text-white font-bold text-[15px] rounded-btn hover:bg-[#a62b15] transition-colors disabled:opacity-70"
                      >
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma Demande'}
                      </button>
                      <p className="text-center text-gray-body text-[13px] mt-4">
                        Audit gratuit garanti. Réponse sous 2 heures.
                      </p>
                    </div>
                  </form>
                )}
              </AnimatedCard>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
