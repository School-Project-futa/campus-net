import { Link } from "react-router-dom";
import { MapPin, Star, Wifi, Droplets, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Hostel, formatPrice } from "@/data/mockData";

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi className="h-3.5 w-3.5" />,
  Water: <Droplets className="h-3.5 w-3.5" />,
  Security: <Shield className="h-3.5 w-3.5" />,
  "Power (24/7)": <Zap className="h-3.5 w-3.5" />,
};

const HostelCard = ({ hostel }: { hostel: Hostel }) => (
  <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        src={hostel.images[0]}
        alt={hostel.name}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      {hostel.featured && (
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>
      )}
      <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-card/90 backdrop-blur px-2 py-1 text-xs font-medium">
        <Star className="h-3.5 w-3.5 fill-futa-gold text-futa-gold" />
        {hostel.rating}
      </div>
    </div>
    <CardContent className="p-4">
      <h3 className="font-semibold text-foreground line-clamp-1">{hostel.name}</h3>
      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
        <MapPin className="h-3.5 w-3.5" />
        {hostel.location}
      </div>
      <div className="flex gap-1.5 mt-3 flex-wrap">
        {hostel.amenities.slice(0, 4).map((a) => (
          <span key={a} className="flex items-center gap-1 text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-0.5">
            {amenityIcons[a] || null}
            {a}
          </span>
        ))}
        {hostel.amenities.length > 4 && (
          <span className="text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-0.5">
            +{hostel.amenities.length - 4}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <span className="text-lg font-bold text-primary">{formatPrice(hostel.price)}</span>
          <span className="text-xs text-muted-foreground">/year</span>
        </div>
        <Link to={`/hostel/${hostel.id}`}>
          <Button size="sm">View Details</Button>
        </Link>
      </div>
    </CardContent>
  </Card>
);

export default HostelCard;
