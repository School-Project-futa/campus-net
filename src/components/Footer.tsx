import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-card mt-16">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xs">
              F
            </div>
            <span className="font-bold text-foreground">FUTA<span className="text-primary">Hostels</span></span>
          </div>
          <p className="text-sm text-muted-foreground">
            Helping FUTA students find safe, affordable off-campus accommodation since 2025.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/listings" className="hover:text-primary transition-colors">Browse Listings</Link></li>
            <li><Link to="/add-hostel" className="hover:text-primary transition-colors">List Your Hostel</Link></li>
            <li><Link to="/search" className="hover:text-primary transition-colors">Search</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="hover:text-primary cursor-pointer transition-colors">Student Help</span></li>
            <li><span className="hover:text-primary cursor-pointer transition-colors">Contact Us</span></li>
            <li><span className="hover:text-primary cursor-pointer transition-colors">FAQs</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span></li>
            <li><span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span></li>
            <li><span className="hover:text-primary cursor-pointer transition-colors">About</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
        © 2025 FUTAHostels. Built for FUTA students. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
