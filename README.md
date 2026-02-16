# 🏠 CampusNest — Student Accommodation Near FUTA

A modern, student-friendly marketplace for finding verified off-campus hostels near the Federal University of Technology, Akure (FUTA).

![CampusNest](https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=400&fit=crop)

## ✨ Features

- **🔍 Smart Search** — Filter hostels by location, room type, price range, and amenities
- **🏡 Detailed Listings** — Image galleries, amenity grids, reviews, and landlord contact info
- **📝 Landlord Portal** — Submit new hostel listings with drag-and-drop image uploads
- **📊 Admin Dashboard** — Manage listings, approve/reject submissions, and view analytics
- **📱 Fully Responsive** — Optimized for desktop, tablet, and mobile devices

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, featured listings, how-it-works, testimonials |
| **Listings** | Filterable grid with sidebar filters and sorting |
| **Hostel Details** | Full hostel info, image gallery, reviews, similar listings |
| **Add Hostel** | Multi-field form for landlords to list properties |
| **Search Results** | Filtered results with active filter tags and sorting |
| **Admin Dashboard** | Stats widgets, pending approvals table, management tools |

## 🛠 Tech Stack

- **React 18** + **TypeScript**
- **Vite** — Fast build tooling
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **shadcn/ui** — Accessible component library
- **React Router** — Client-side routing
- **Lucide Icons** — Clean icon set

## 🎨 Design System

- **Primary:** Deep Blue (`hsl(222, 60%, 28%)`)
- **Accent:** Gold (`hsl(42, 90%, 52%)`)
- **Style:** Rounded cards, soft shadows, marketplace-inspired layout

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/School-Project-futa/dorm-den-dream.git

# Navigate to the project
cd campusnest

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:8080`.

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, Footer, HostelCard)
│   └── ui/           # shadcn/ui primitives
├── data/             # Mock data and type definitions
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── pages/            # Route-level page components
```

## 📝 License

MIT
