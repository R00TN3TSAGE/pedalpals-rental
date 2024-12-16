import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface VehicleCardProps {
  id: string;
  name: string;
  type: string;
  price: number;
  location: string;
  image: string;
}

export const VehicleCard = ({ id, name, type, price, location, image }: VehicleCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fadeIn">
      <CardContent className="p-0">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{type}</p>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-primary font-semibold">${price}/day</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full"
          onClick={() => navigate(`/vehicle/${id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};