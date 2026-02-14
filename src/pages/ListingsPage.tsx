import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HostelCard from "@/components/HostelCard";
import { hostels, locations, amenitiesList, roomTypes, formatPrice } from "@/data/mockData";

const ListingsPage = () => {
  const [location, setLocation] = useState("all");
  const [roomType, setRoomType] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 300000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAmenity = (a: string) =>
    setSelectedAmenities((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));

  const filtered = useMemo(() => {
    return hostels
      .filter((h) => h.status === "approved")
      .filter((h) => location === "all" || h.location === location)
      .filter((h) => roomType === "all" || h.roomType === roomType)
      .filter((h) => h.price >= priceRange[0] && h.price <= priceRange[1])
      .filter((h) => selectedAmenities.every((a) => h.amenities.includes(a)))
      .filter((h) => searchQuery === "" || h.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [location, roomType, priceRange, selectedAmenities, searchQuery]);

  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <Label className="text-sm font-semibold">Location</Label>
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="mt-2"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {locations.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-sm font-semibold">Room Type</Label>
        <Select value={roomType} onValueChange={setRoomType}>
          <SelectTrigger className="mt-2"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {roomTypes.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-sm font-semibold">Price Range</Label>
        <Slider min={0} max={300000} step={10000} value={priceRange} onValueChange={setPriceRange} className="mt-4" />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>{formatPrice(priceRange[0])}</span>
          <span>{formatPrice(priceRange[1])}</span>
        </div>
      </div>
      <div>
        <Label className="text-sm font-semibold">Amenities</Label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {amenitiesList.map((a) => (
            <label key={a} className="flex items-center gap-2 text-sm cursor-pointer">
              <Checkbox checked={selectedAmenities.includes(a)} onCheckedChange={() => toggleAmenity(a)} />
              {a}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">All Listings</h1>
          <div className="flex items-center gap-2">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search hostels..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-9 w-64" />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden gap-2"><SlidersHorizontal className="h-4 w-4" /> Filters</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader><SheetTitle>Filters</SheetTitle></SheetHeader>
                <div className="mt-6"><FilterPanel /></div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-20 bg-card rounded-xl border p-5">
              <h3 className="font-semibold text-foreground mb-4">Filters</h3>
              <FilterPanel />
            </div>
          </aside>
          <div className="flex-1">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((h) => <HostelCard key={h.id} hostel={h} />)}
              </div>
            ) : (
              <div className="text-center py-20">
                <Search className="h-12 w-12 mx-auto text-muted-foreground/40 mb-4" />
                <h3 className="text-lg font-semibold text-foreground">No hostels found</h3>
                <p className="text-muted-foreground mt-1">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListingsPage;
