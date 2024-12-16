import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Shield, Search, CalendarCheck, Bike } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black/80" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6 text-white">
                Louez des Véhicules à Deux Roues en Toute Simplicité
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Trouvez le vélo, scooter ou la moto parfait pour votre voyage. Sûr, pratique et abordable.
              </p>
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-xl">
                <Input 
                  type="text" 
                  placeholder="Où souhaitez-vous louer ?" 
                  className="h-14 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder:text-white/70 focus:border-white/40"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="h-14 px-8 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 text-lg whitespace-nowrap"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Rechercher
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Comment ça marche</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Recherchez</h3>
                <p className="text-gray-700">Parcourez notre large sélection de véhicules et trouvez celui qui correspond à vos besoins</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CalendarCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Réservez</h3>
                <p className="text-gray-700">Réservez votre véhicule avec un paiement sécurisé et des options de planification flexibles</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Assurance</h3>
                <p className="text-gray-700">Chaque trajet est protégé par une couverture d'assurance complète pour votre tranquillité d'esprit</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Bike className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Roulez</h3>
                <p className="text-gray-700">Profitez de votre trajet avec nos véhicules bien entretenus et fiables</p>
              </div>
            </div>

            {/* Insurance Information */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Couverture d'Assurance Complète</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Protection du Véhicule</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Couverture collision jusqu'à 10 000€</li>
                    <li>• Protection contre le vol</li>
                    <li>• Couverture des dommages</li>
                    <li>• Assistance routière 24/7</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Couverture Personnelle</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Assurance accidents personnels</li>
                    <li>• Couverture des frais médicaux</li>
                    <li>• Protection responsabilité civile</li>
                    <li>• Support médical d'urgence</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Avantages Supplémentaires</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Pas de franchise pour l'usure normale</li>
                    <li>• Couverture internationale</li>
                    <li>• Processus de réclamation digital</li>
                    <li>• Documents de police instantanés</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">À Propos</h3>
                <p className="text-gray-300">Votre plateforme de confiance pour la location de véhicules à deux roues. Découvrez la liberté de la route.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Liens Rapides</h3>
                <ul className="space-y-2">
                  <li><a href="/search" className="text-gray-300 hover:text-white transition-colors">Trouver un Véhicule</a></li>
                  <li><a href="/list" className="text-gray-300 hover:text-white transition-colors">Lister Votre Véhicule</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">À Propos de Nous</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
                <ul className="space-y-2">
                  <li><a href="/help" className="text-gray-300 hover:text-white transition-colors">Centre d'Aide</a></li>
                  <li><a href="/safety" className="text-gray-300 hover:text-white transition-colors">Sécurité</a></li>
                  <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Conditions d'Utilisation</a></li>
                  <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Politique de Confidentialité</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Nous Suivre</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400">&copy; 2024 PedalPals. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;