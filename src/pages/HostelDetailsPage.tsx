import { useParams, Link } from "react-router-dom";
import { MapPin, Star, Phone, Mail, ChevronLeft, Wifi, Droplets, Shield, Zap, Car, ShirtIcon, UtensilsCrossed, Sofa, Grid3X3, DoorOpen, Cctv, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HostelCard from "@/components/HostelCard";
import { hostels, reviews, formatPrice } from "@/data/mockData";

const amenityIconMap: Record<string, React.ReactNode> = {
  WiFi: <Wifi className="h-5 w-5" />,
  Water: <Droplets className="h-5 w-5" />,
  Security: <Shield className="h-5 w-5" />,
  "Power (24/7)": <Zap className="h-5 w-5" />,
  Parking: <Car className="h-5 w-5" />,
  Laundry: <ShirtIcon className="h-5 w-5" />,
  Kitchen: <UtensilsCrossed className="h-5 w-5" />,
  Furnished: <Sofa className="h-5 w-5" />,
  "Tiled Floor": <Grid3X3 className="h-5 w-5" />,
  Gate: <DoorOpen className="h-5 w-5" />,
  CCTV: <Cctv className="h-5 w-5" />,
  "Prepaid Meter": <Gauge className="h-5 w-5" />,
};

const HostelDetailsPage = () => {
  const { id } = useParams();
  const hostel = hostels.find((h) => h.id === id);

  if (!hostel) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-bold text-foreground">Hostel not found</h2>
            <Link to="/listings"><Button className="mt-4">Back to Listings</Button></Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const hostelReviews = reviews.filter((r) => r.hostelId === hostel.id);
  const similar = hostels.filter((h) => h.id !== hostel.id && h.status === "approved" && h.location === hostel.location).slice(0, 3);
  if (similar.length < 3) {
    const more = hostels.filter((h) => h.id !== hostel.id && h.status === "approved" && !similar.find((s) => s.id === h.id)).slice(0, 3 - similar.length);
    similar.push(...more);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <Link to="/listings" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
          <ChevronLeft className="h-4 w-4" /> Back to Listings
        </Link>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 rounded-xl overflow-hidden">
          <div className="md:col-span-2 aspect-[16/10]">
            <img src={hostel.images[0]} alt={hostel.name} className="h-full w-full object-cover" />
          </div>
          <div className="hidden md:grid grid-rows-2 gap-3">
            {hostel.images.slice(1, 3).map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img src={img} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">{hostel.name}</h1>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" /> {hostel.location}
                    <span className="text-border">|</span>
                    <Badge variant="secondary">{hostel.roomType}</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-primary">{formatPrice(hostel.price)}</span>
                  <span className="text-muted-foreground text-sm">/year</span>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-4 w-4 fill-cn-gold text-cn-gold" />
                    <span className="font-semibold text-foreground">{hostel.rating}</span>
                    <span className="text-muted-foreground text-sm">({hostel.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{hostel.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {hostel.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                    <span className="text-primary">{amenityIconMap[a]}</span>
                    <span className="text-sm font-medium text-secondary-foreground">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Reviews</h2>
              {hostelReviews.length > 0 ? (
                <div className="space-y-4">
                  {hostelReviews.map((r) => (
                    <Card key={r.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-foreground">{r.author}</span>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className={`h-3.5 w-3.5 ${i < r.rating ? "fill-cn-gold text-cn-gold" : "text-muted"}`} />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{r.comment}</p>
                        <p className="text-xs text-muted-foreground/60 mt-2">{r.date}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">No reviews yet for this hostel.</p>
              )}
            </div>
          </div>

          {/* Landlord Card */}
          <div>
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-1">Contact Landlord</h3>
                <p className="text-muted-foreground text-sm mb-4">{hostel.landlord.name}</p>
                <div className="space-y-3">
                  <Button className="w-full gap-2" asChild>
                    <a href={`tel:${hostel.landlord.phone}`}><Phone className="h-4 w-4" /> Call Now</a>
                  </Button>
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <a href={`mailto:${hostel.landlord.email}`}><Mail className="h-4 w-4" /> Send Email</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar */}
        {similar.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold text-foreground mb-6">Similar Listings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map((h) => <HostelCard key={h.id} hostel={h} />)}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HostelDetailsPage;
