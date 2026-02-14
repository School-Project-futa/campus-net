

# 🏠 FUTA Student Off-Campus Accommodation Portal

A modern, student-friendly marketplace for finding verified off-campus hostels near the Federal University of Technology, Akure (FUTA). Built with mock data, all 6 pages, fully responsive.

---

## Branding & Design System

- **Primary Color:** FUTA Green (deep institutional green)
- **Secondary:** Light green / teal accent
- **Background:** Light grey / white
- **Typography:** Clean modern sans-serif (Inter)
- **Style:** Rounded cards, soft shadows, icon-based amenities, marketplace feel inspired by Airbnb
- **University branding:** "FUTA" name and green identity woven throughout

---

## Page 1 — Home Page

- Hero section with headline: *"Find Affordable Off-Campus Accommodation Near FUTA"*
- Search bar with Location (e.g., FUTA South Gate, Aule, Ipinsa), Price Range, Room Type
- Featured Listings carousel (mock data — 6-8 hostels)
- "How It Works" — 3 steps: Search → View Details → Contact Landlord
- Student testimonials section
- CTA banner encouraging landlords to list

## Page 2 — Listings Page

- Filter panel (sidebar on desktop, drawer on mobile): price slider, location dropdown, amenities checkboxes, room type
- Listings grid with cards showing: image, hostel name, price, location, amenity icons, rating, "View Details" button
- Loading skeleton, empty state, and error state designs

## Page 3 — Hostel Details Page

- Image gallery at top
- Hostel info: name, price, location, full description
- Amenities grid with icons (WiFi, Water, Security, Power, etc.)
- Landlord contact card with phone & email buttons
- Reviews section with star ratings and comments (mock data)
- "Similar Listings" section at bottom

## Page 4 — Add Hostel Page (Landlord Form)

- Multi-field form: hostel name, location, price, room type, amenities multi-select, description
- Image upload area with drag-and-drop UI
- "Save Draft" and "Submit for Approval" buttons
- Validation error states and success toast on submission

## Page 5 — Search Results Page

- Search summary header with active filter tags
- Sort dropdown (Price low-high, Rating, Newest)
- Results grid using same card component as Listings
- "No results found" empty state with friendly illustration

## Page 6 — Admin Dashboard

- Sidebar navigation: Overview, Pending, Approved, Users, Reviews
- Dashboard widgets: Total Listings, Pending Approvals, Total Users, New Today
- Pending listings data table with columns: Hostel Name, Landlord, Date, Status, Actions (Approve/Reject/View)
- All powered by mock data

---

## Shared Components & Polish

- Sticky top navigation with FUTA branding, links: Home, Listings, Add Hostel, Admin, Login
- Mobile hamburger menu
- Footer with About, Contact, Terms, Student Help
- Micro-interactions: card hover effects, button animations, smooth transitions
- Loading skeletons on all data-heavy pages
- Toast notifications for actions (approve, reject, submit)
- Fully responsive: desktop-first with tablet and mobile adaptations

