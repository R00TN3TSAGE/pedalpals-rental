import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const VehicleDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock data - in a real app, this would come from an API
  const vehicle = {
    id: "1",
    name: "Mountain Bike Pro",
    type: "Bike",
    price: 25,
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    description: "Professional mountain bike perfect for trail riding. Well-maintained and regularly serviced.",
    features: ["21-speed", "Front Suspension", "Disc Brakes", "LED Lights"],
    owner: {
      name: "John Doe",
      rating: 4.8,
      responseTime: "within 1 hour",
    },
  };

  const handleBooking = () => {
    toast({
      title: "Booking Requested",
      description: "The owner will be notified of your request.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Vehicle Images and Details */}
          <div>
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="mt-6">
              <h1 className="text-3xl font-bold">{vehicle.name}</h1>
              <p className="text-gray-600 mt-2">{vehicle.location}</p>
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-600">{vehicle.description}</p>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Features</h2>
                <ul className="grid grid-cols-2 gap-2">
                  {vehicle.features.map((feature) => (
                    <li key={feature} className="text-gray-600">• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Booking and Owner Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${vehicle.price}</span>
                <span className="text-gray-600">per day</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Select Date</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>

            <Button 
              className="w-full mb-6" 
              size="lg"
              onClick={handleBooking}
            >
              Request to Book
            </Button>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">About the Owner</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{vehicle.owner.name}</p>
                  <p className="text-sm text-gray-600">
                    Typically responds {vehicle.owner.responseTime}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{vehicle.owner.rating} ★</p>
                  <p className="text-sm text-gray-600">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VehicleDetails;