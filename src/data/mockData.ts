export interface Hostel {
  id: string;
  name: string;
  location: string;
  price: number;
  roomType: string;
  amenities: string[];
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  landlord: {
    name: string;
    phone: string;
    email: string;
  };
  status: "approved" | "pending" | "rejected";
  dateSubmitted: string;
  featured: boolean;
}

export interface Review {
  id: string;
  hostelId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Testimonial {
  name: string;
  department: string;
  quote: string;
  avatar: string;
}

export const locations = [
  "FUTA South Gate",
  "FUTA North Gate",
  "Aule",
  "Ipinsa",
  "Oba-Ile",
  "FUTA Road",
  "Akure Town",
  "Camp",
];

export const amenitiesList = [
  "WiFi",
  "Water",
  "Security",
  "Power (24/7)",
  "Parking",
  "Laundry",
  "Kitchen",
  "Furnished",
  "Tiled Floor",
  "Gate",
  "CCTV",
  "Prepaid Meter",
];

export const roomTypes = ["Self-Contain", "Single Room", "Shared Room", "Flat", "Mini-Flat", "Boys' Quarter"];

const hostelImages = [
  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop",
];

export const hostels: Hostel[] = [
  {
    id: "1",
    name: "GreenView Hostel",
    location: "FUTA South Gate",
    price: 150000,
    roomType: "Self-Contain",
    amenities: ["WiFi", "Water", "Security", "Power (24/7)", "Tiled Floor"],
    rating: 4.5,
    reviewCount: 23,
    images: [hostelImages[0], hostelImages[1], hostelImages[2]],
    description: "A modern, well-maintained self-contain hostel just 2 minutes walk from FUTA South Gate. Features 24/7 power supply, clean water, and reliable WiFi. Perfect for focused students who want comfort and convenience.",
    landlord: { name: "Mr. Adebayo Johnson", phone: "+2348012345678", email: "adebayo@email.com" },
    status: "approved",
    dateSubmitted: "2025-12-01",
    featured: true,
  },
  {
    id: "2",
    name: "Scholar's Haven",
    location: "Aule",
    price: 120000,
    roomType: "Single Room",
    amenities: ["Water", "Security", "Gate", "Prepaid Meter"],
    rating: 4.2,
    reviewCount: 15,
    images: [hostelImages[1], hostelImages[3], hostelImages[4]],
    description: "Affordable single rooms in a secure compound at Aule. Gated community with 24-hour security. Each room has its own prepaid meter for electricity. Close to bus stops heading to FUTA.",
    landlord: { name: "Mrs. Funke Oladipo", phone: "+2348098765432", email: "funke@email.com" },
    status: "approved",
    dateSubmitted: "2025-11-20",
    featured: true,
  },
  {
    id: "3",
    name: "Campus Edge Lodge",
    location: "FUTA North Gate",
    price: 200000,
    roomType: "Mini-Flat",
    amenities: ["WiFi", "Water", "Security", "Power (24/7)", "Furnished", "Kitchen", "CCTV"],
    rating: 4.8,
    reviewCount: 31,
    images: [hostelImages[2], hostelImages[0], hostelImages[5]],
    description: "Premium mini-flats right at FUTA North Gate. Fully furnished with modern kitchen, strong WiFi, and CCTV surveillance. The best choice for students who want a premium living experience.",
    landlord: { name: "Dr. Tunde Akinyemi", phone: "+2348076543210", email: "tunde@email.com" },
    status: "approved",
    dateSubmitted: "2025-11-15",
    featured: true,
  },
  {
    id: "4",
    name: "Peace Lodge",
    location: "Ipinsa",
    price: 80000,
    roomType: "Shared Room",
    amenities: ["Water", "Security", "Gate"],
    rating: 3.8,
    reviewCount: 8,
    images: [hostelImages[3], hostelImages[2], hostelImages[1]],
    description: "Budget-friendly shared rooms in a peaceful environment at Ipinsa. Well-maintained compound with reliable water supply. Great for students looking for affordable accommodation.",
    landlord: { name: "Alhaji Musa Ibrahim", phone: "+2348065432109", email: "musa@email.com" },
    status: "approved",
    dateSubmitted: "2025-12-05",
    featured: false,
  },
  {
    id: "5",
    name: "TechVille Apartments",
    location: "FUTA Road",
    price: 180000,
    roomType: "Self-Contain",
    amenities: ["WiFi", "Water", "Security", "Power (24/7)", "Parking", "Laundry"],
    rating: 4.6,
    reviewCount: 19,
    images: [hostelImages[4], hostelImages[5], hostelImages[0]],
    description: "Spacious self-contain apartments along FUTA Road with excellent amenities including parking space, laundry facilities, and 24/7 power. Perfect for postgraduate students.",
    landlord: { name: "Engr. Samuel Ojo", phone: "+2348054321098", email: "samuel@email.com" },
    status: "approved",
    dateSubmitted: "2025-11-28",
    featured: true,
  },
  {
    id: "6",
    name: "Sunrise Hostel",
    location: "Oba-Ile",
    price: 100000,
    roomType: "Single Room",
    amenities: ["Water", "Security", "Tiled Floor", "Prepaid Meter"],
    rating: 4.0,
    reviewCount: 12,
    images: [hostelImages[5], hostelImages[4], hostelImages[3]],
    description: "Clean and affordable single rooms at Oba-Ile. Well-tiled rooms with constant water supply. Shuttle services available to FUTA campus daily.",
    landlord: { name: "Chief Mrs. Blessing Okon", phone: "+2348043210987", email: "blessing@email.com" },
    status: "approved",
    dateSubmitted: "2025-12-10",
    featured: true,
  },
  {
    id: "7",
    name: "Royal Palm Residence",
    location: "FUTA South Gate",
    price: 250000,
    roomType: "Flat",
    amenities: ["WiFi", "Water", "Security", "Power (24/7)", "Furnished", "Kitchen", "Parking", "CCTV"],
    rating: 4.9,
    reviewCount: 27,
    images: [hostelImages[0], hostelImages[2], hostelImages[4]],
    description: "Luxury flats for discerning students. Fully furnished with premium finishes, dedicated parking, and round-the-clock security with CCTV monitoring.",
    landlord: { name: "Arc. Folake Adeyemi", phone: "+2348032109876", email: "folake@email.com" },
    status: "approved",
    dateSubmitted: "2025-11-10",
    featured: true,
  },
  {
    id: "8",
    name: "Unity Hostel",
    location: "Camp",
    price: 70000,
    roomType: "Shared Room",
    amenities: ["Water", "Gate"],
    rating: 3.5,
    reviewCount: 6,
    images: [hostelImages[1], hostelImages[5], hostelImages[3]],
    description: "The most affordable option near FUTA. Shared rooms in a friendly community at Camp area. Basic amenities provided.",
    landlord: { name: "Mr. Chidi Nwankwo", phone: "+2348021098765", email: "chidi@email.com" },
    status: "approved",
    dateSubmitted: "2025-12-12",
    featured: false,
  },
  {
    id: "9",
    name: "New Horizon Lodge",
    location: "Aule",
    price: 130000,
    roomType: "Self-Contain",
    amenities: ["WiFi", "Water", "Security", "Prepaid Meter"],
    rating: 4.1,
    reviewCount: 10,
    images: [hostelImages[3], hostelImages[0], hostelImages[2]],
    description: "Newly built self-contain rooms at Aule with WiFi and good security. Walking distance to major bus stops.",
    landlord: { name: "Mr. Peter Eze", phone: "+2348087654321", email: "peter@email.com" },
    status: "pending",
    dateSubmitted: "2026-01-15",
    featured: false,
  },
  {
    id: "10",
    name: "Graceland Hostel",
    location: "FUTA North Gate",
    price: 160000,
    roomType: "Mini-Flat",
    amenities: ["Water", "Security", "Kitchen", "Tiled Floor"],
    rating: 4.3,
    reviewCount: 14,
    images: [hostelImages[5], hostelImages[1], hostelImages[0]],
    description: "Affordable mini-flats at North Gate with kitchen and tiled flooring. Great for students who love to cook.",
    landlord: { name: "Mrs. Grace Adekunle", phone: "+2348076549321", email: "grace@email.com" },
    status: "pending",
    dateSubmitted: "2026-01-20",
    featured: false,
  },
];

export const reviews: Review[] = [
  { id: "r1", hostelId: "1", author: "Tolu A.", rating: 5, comment: "Best hostel near FUTA! WiFi is always strong and the environment is very clean.", date: "2026-01-10" },
  { id: "r2", hostelId: "1", author: "Chioma E.", rating: 4, comment: "Good place, water supply is reliable. Only issue is noise from the road sometimes.", date: "2025-12-28" },
  { id: "r3", hostelId: "1", author: "Ahmed M.", rating: 4, comment: "Decent hostel. Landlord is responsive. Power supply is stable.", date: "2025-12-15" },
  { id: "r4", hostelId: "3", author: "Blessing O.", rating: 5, comment: "Premium living! Everything works perfectly. Worth every naira.", date: "2026-01-05" },
  { id: "r5", hostelId: "3", author: "David K.", rating: 5, comment: "CCTV and security make me feel very safe. Highly recommended!", date: "2025-12-20" },
  { id: "r6", hostelId: "5", author: "Seun B.", rating: 5, comment: "Spacious rooms and the parking space is a plus. Great for final year students.", date: "2025-12-22" },
  { id: "r7", hostelId: "7", author: "Kemi W.", rating: 5, comment: "Luxury at its finest! Fully furnished, I didn't need to buy anything.", date: "2026-01-08" },
];

export const testimonials: Testimonial[] = [
  { name: "Adewale Ogunlesi", department: "Computer Science, 400L", quote: "I found my hostel in less than 10 minutes! This portal saved me so much stress during my house hunting.", avatar: "AO" },
  { name: "Fatima Bello", department: "Civil Engineering, 300L", quote: "The verified listings gave me confidence. I knew exactly what I was getting before moving in.", avatar: "FB" },
  { name: "Emeka Nwosu", department: "Biochemistry, 200L", quote: "As a new student in Akure, this platform helped me find affordable accommodation close to campus.", avatar: "EN" },
];

export const adminStats = {
  totalListings: 10,
  pendingApprovals: 2,
  totalUsers: 156,
  newToday: 3,
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", minimumFractionDigits: 0 }).format(price);
};
