import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, Search, CalendarCheck, Bike } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

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
                Rent Two-Wheel Vehicles with Ease
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Find the perfect bike, scooter, or motorcycle for your journey. Safe, convenient, and affordable.
              </p>
              <div className="flex space-x-4">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-6 rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 text-lg"
                  onClick={() => navigate("/search")}
                >
                  Find a Vehicle
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 font-semibold px-8 py-6 rounded-lg shadow-lg transition-all duration-200 ease-in-out text-lg"
                  onClick={() => navigate("/list")}
                >
                  List Your Vehicle
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Search</h3>
                <p className="text-gray-700">Browse our wide selection of vehicles and find the perfect match for your needs</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CalendarCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Book</h3>
                <p className="text-gray-700">Reserve your vehicle with secure payment and flexible scheduling options</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Insurance</h3>
                <p className="text-gray-700">Every ride is protected with comprehensive insurance coverage for peace of mind</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Bike className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Ride</h3>
                <p className="text-gray-700">Enjoy your journey with our well-maintained and reliable vehicles</p>
              </div>
            </div>

            {/* Insurance Information */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Comprehensive Insurance Coverage</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Vehicle Protection</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Collision coverage up to $10,000</li>
                    <li>• Theft protection</li>
                    <li>• Damage coverage</li>
                    <li>• 24/7 roadside assistance</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Personal Coverage</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Personal accident insurance</li>
                    <li>• Medical expenses coverage</li>
                    <li>• Personal liability protection</li>
                    <li>• Emergency medical support</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Additional Benefits</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li>• No deductible for normal wear</li>
                    <li>• International coverage</li>
                    <li>• Digital claims process</li>
                    <li>• Instant policy documents</li>
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
                <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
                <p className="text-gray-300">Your trusted platform for two-wheel vehicle rentals. Experience the freedom of the open road.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/search" className="text-gray-300 hover:text-white transition-colors">Find Vehicles</a></li>
                  <li><a href="/list" className="text-gray-300 hover:text-white transition-colors">List Your Vehicle</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
                <ul className="space-y-2">
                  <li><a href="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="/safety" className="text-gray-300 hover:text-white transition-colors">Safety</a></li>
                  <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400">&copy; 2024 PedalPals. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;