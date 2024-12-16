import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                Rent Two-Wheel Vehicles with Ease
              </h1>
              <p className="text-xl mb-8">
                Find the perfect bike, scooter, or motorcycle for your journey. Safe, convenient, and affordable.
              </p>
              <div className="flex space-x-4">
                <Button 
                  size="lg"
                  onClick={() => navigate("/search")}
                >
                  Find a Vehicle
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/list")}
                >
                  List Your Vehicle
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Vehicles */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add VehicleCard components here when connected to backend */}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Search</h3>
                <p className="text-gray-600">Find the perfect vehicle for your needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Book</h3>
                <p className="text-gray-600">Reserve your vehicle with secure payment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ride</h3>
                <p className="text-gray-600">Enjoy your journey with peace of mind</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;