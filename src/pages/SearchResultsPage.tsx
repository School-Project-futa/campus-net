import { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, X, SortAsc } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HostelCard from "@/components/HostelCard";
import { hostels } from "@/data/mockData";

const SearchResultsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = searchParams.get("location") || "";
  const roomType = searchParams.get("roomType") || "";
  const [sort, setSort] = useState("rating");

  const results = useMemo(() => {
    let filtered = hostels.filter((h) => h.status === "approved");
    if (location) filtered = filtered.filter((h) => h.location === location);
    if (roomType) filtered = filtered.filter((h) => h.roomType === roomType);

    switch (sort) {
      case "price-low": return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high": return [...filtered].sort((a, b) => b.price - a.price);
      case "newest": return [...filtered].sort((a, b) => b.dateSubmitted.localeCompare(a.dateSubmitted));
      default: return [...filtered].sort((a, b) => b.rating - a.rating);
    }
  }, [location, roomType, sort]);

  const removeFilter = (key: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    setSearchParams(params);
  };

  const activeFilters = [
    ...(location ? [{ key: "location", label: location }] : []),
    ...(roomType ? [{ key: "roomType", label: roomType }] : []),
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Search Results</h1>
            <p className="text-muted-foreground text-sm mt-1">{results.length} hostel{results.length !== 1 ? "s" : ""} found</p>
          </div>
          <div className="flex items-center gap-2">
            <SortAsc className="h-4 w-4 text-muted-foreground" />
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Top Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {activeFilters.length > 0 && (
          <div className="flex gap-2 mb-6 flex-wrap">
            {activeFilters.map((f) => (
              <Badge key={f.key} variant="secondary" className="gap-1 pr-1">
                {f.label}
                <button onClick={() => removeFilter(f.key)} className="ml-1 rounded-full hover:bg-muted p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((h) => <HostelCard key={h.id} hostel={h} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
            <h3 className="text-xl font-semibold text-foreground">No results found</h3>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              We couldn't find any hostels matching your criteria. Try adjusting your filters or browse all listings.
            </p>
            <Link to="/listings"><Button className="mt-6">Browse All Listings</Button></Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;
