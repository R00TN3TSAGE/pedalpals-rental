import { SearchFilters } from "@/components/SearchFilters";
import { VehicleCard } from "@/components/VehicleCard";
import { Navbar } from "@/components/Navbar";

// Mock data for development
const mockVehicles = [
  {
    id: "1",
    name: "Mountain Bike Pro",
    type: "Bike",
    price: 25,
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: "2",
    name: "Electric Scooter X",
    type: "Scooter",
    price: 35,
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: "3",
    name: "Cruiser Bike",
    type: "Bike",
    price: 20,
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];

const Search = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Find Your Perfect Ride</h1>
        
        <SearchFilters />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              {...vehicle}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Search;