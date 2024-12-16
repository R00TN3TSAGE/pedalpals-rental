import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            WheelShare
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost"
            onClick={() => navigate("/search")}
          >
            Find a Vehicle
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate("/list")}
          >
            List Your Vehicle
          </Button>
          <Button>
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};