import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, MapPin, Banknote, Home, Star, ChevronRight, ArrowRight, Users, Eye, Phone, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HostelCard from "@/components/HostelCard";
import { hostels, locations, roomTypes, testimonials } from "@/data/mockData";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState("");
  const [searchRoomType, setSearchRoomType] = useState("");

  const featuredHostels = hostels.filter((h) => h.featured && h.status === "approved");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchLocation) params.set("location", searchLocation);
    if (searchRoomType) params.set("roomType", searchRoomType);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--futa-teal)/0.3),transparent_60%)]" />
        <div className="container relative py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Find Affordable Off-Campus Accommodation Near{" "}
              <span className="text-futa-gold">FUTA</span>
            </h1>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Browse verified hostels, compare prices, and contact landlords directly — all in one place.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 bg-card rounded-xl p-4 md:p-6 shadow-xl max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Select onValueChange={setSearchLocation}>
                <SelectTrigger>
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((l) => (
                    <SelectItem key={l} value={l}>{l}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={setSearchRoomType}>
                <SelectTrigger>
                  <Home className="h-4 w-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="Room Type" />
                </SelectTrigger>
                <SelectContent>
                  {roomTypes.map((r) => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={handleSearch} className="gap-2" size="lg">
                <Search className="h-4 w-4" />
                Search Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Featured Hostels</h2>
            <p className="text-muted-foreground mt-1">Top-rated accommodations near FUTA</p>
          </div>
          <Link to="/listings">
            <Button variant="outline" className="gap-2">
              View All <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredHostels.slice(0, 6).map((hostel) => (
            <HostelCard key={hostel.id} hostel={hostel} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary/50 py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-center text-foreground mb-2">How It Works</h2>
          <p className="text-center text-muted-foreground mb-10">Find your perfect hostel in 3 easy steps</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Search", desc: "Browse listings by location, price, and amenities" },
              { icon: Eye, title: "View Details", desc: "Check photos, reviews, and amenities before deciding" },
              { icon: Phone, title: "Contact Landlord", desc: "Call or email the landlord to arrange a visit" },
            ].map((step, i) => (
              <Card key={i} className="text-center border-none shadow-none bg-transparent">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold text-center text-foreground mb-10">What Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="relative">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-2" />
                <p className="text-muted-foreground text-sm italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.department}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="container py-12 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-3">Are You a Landlord?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            List your hostel and reach thousands of FUTA students looking for accommodation.
          </p>
          <Link to="/add-hostel">
            <Button size="lg" variant="secondary" className="gap-2">
              List Your Hostel <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
