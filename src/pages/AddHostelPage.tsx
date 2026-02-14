import { useState } from "react";
import { Upload, X, Save, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locations, amenitiesList, roomTypes } from "@/data/mockData";

const AddHostelPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    roomType: "",
    description: "",
    amenities: [] as string[],
  });
  const [images, setImages] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleAmenity = (a: string) =>
    setForm((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(a) ? prev.amenities.filter((x) => x !== a) : [...prev.amenities, a],
    }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Hostel name is required";
    if (!form.location) e.location = "Location is required";
    if (!form.price || isNaN(Number(form.price))) e.price = "Valid price is required";
    if (!form.roomType) e.roomType = "Room type is required";
    if (!form.description.trim()) e.description = "Description is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    toast({ title: "Hostel Submitted!", description: "Your listing has been submitted for approval." });
  };

  const handleSaveDraft = () => {
    toast({ title: "Draft Saved", description: "Your listing has been saved as a draft." });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // Mock: just add placeholder images
    setImages((prev) => [...prev, `https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop&t=${Date.now()}`]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1 max-w-3xl">
        <h1 className="text-2xl font-bold text-foreground mb-2">Add Your Hostel</h1>
        <p className="text-muted-foreground mb-8">Fill in the details below to list your hostel for FUTA students.</p>

        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Hostel Name *</Label>
                <Input className="mt-1.5" placeholder="e.g. GreenView Hostel" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label>Location *</Label>
                <Select value={form.location} onValueChange={(v) => setForm({ ...form, location: v })}>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select location" /></SelectTrigger>
                  <SelectContent>
                    {locations.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                  </SelectContent>
                </Select>
                {errors.location && <p className="text-destructive text-xs mt-1">{errors.location}</p>}
              </div>
              <div>
                <Label>Price (₦/year) *</Label>
                <Input className="mt-1.5" type="number" placeholder="e.g. 150000" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
                {errors.price && <p className="text-destructive text-xs mt-1">{errors.price}</p>}
              </div>
              <div>
                <Label>Room Type *</Label>
                <Select value={form.roomType} onValueChange={(v) => setForm({ ...form, roomType: v })}>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    {roomTypes.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                  </SelectContent>
                </Select>
                {errors.roomType && <p className="text-destructive text-xs mt-1">{errors.roomType}</p>}
              </div>
            </div>

            <div>
              <Label>Description *</Label>
              <Textarea className="mt-1.5" rows={4} placeholder="Describe your hostel..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              {errors.description && <p className="text-destructive text-xs mt-1">{errors.description}</p>}
            </div>

            <div>
              <Label>Amenities</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                {amenitiesList.map((a) => (
                  <label key={a} className="flex items-center gap-2 text-sm cursor-pointer">
                    <Checkbox checked={form.amenities.includes(a)} onCheckedChange={() => toggleAmenity(a)} />
                    {a}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label>Images</Label>
              <div
                className="mt-2 border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors hover:border-primary hover:bg-primary/5"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => setImages((prev) => [...prev, `https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop&t=${Date.now()}`])}
              >
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Drag & drop images here, or click to browse</p>
              </div>
              {images.length > 0 && (
                <div className="flex gap-2 mt-3 flex-wrap">
                  {images.map((img, i) => (
                    <div key={i} className="relative w-20 h-20 rounded-lg overflow-hidden group">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                      <button
                        className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => setImages((prev) => prev.filter((_, idx) => idx !== i))}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="gap-2" onClick={handleSaveDraft}>
                <Save className="h-4 w-4" /> Save Draft
              </Button>
              <Button className="gap-2" onClick={handleSubmit}>
                <Send className="h-4 w-4" /> Submit for Approval
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default AddHostelPage;
