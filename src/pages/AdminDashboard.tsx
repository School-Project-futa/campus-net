import { useState } from "react";
import { LayoutDashboard, Clock, CheckCircle, Users, MessageSquare, Check, X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { hostels, adminStats, formatPrice } from "@/data/mockData";
import { Link } from "react-router-dom";

const tabs = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "pending", label: "Pending", icon: Clock },
  { id: "approved", label: "Approved", icon: CheckCircle },
  { id: "users", label: "Users", icon: Users },
  { id: "reviews", label: "Reviews", icon: MessageSquare },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();
  const [hostelData, setHostelData] = useState(hostels);

  const pendingHostels = hostelData.filter((h) => h.status === "pending");
  const approvedHostels = hostelData.filter((h) => h.status === "approved");

  const handleApprove = (id: string) => {
    setHostelData((prev) => prev.map((h) => (h.id === id ? { ...h, status: "approved" as const } : h)));
    toast({ title: "Hostel Approved", description: "The listing is now visible to students." });
  };

  const handleReject = (id: string) => {
    setHostelData((prev) => prev.map((h) => (h.id === id ? { ...h, status: "rejected" as const } : h)));
    toast({ title: "Hostel Rejected", description: "The listing has been rejected." });
  };

  const stats = [
    { label: "Total Listings", value: adminStats.totalListings, icon: LayoutDashboard, color: "text-primary" },
    { label: "Pending Approvals", value: pendingHostels.length, icon: Clock, color: "text-cn-warning" },
    { label: "Total Users", value: adminStats.totalUsers, icon: Users, color: "text-accent" },
    { label: "New Today", value: adminStats.newToday, icon: CheckCircle, color: "text-cn-success" },
  ];

  const HostelTable = ({ data, showActions }: { data: typeof hostels; showActions?: boolean }) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Hostel Name</TableHead>
          <TableHead className="hidden md:table-cell">Landlord</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((h) => (
          <TableRow key={h.id}>
            <TableCell className="font-medium">{h.name}</TableCell>
            <TableCell className="hidden md:table-cell text-muted-foreground">{h.landlord.name}</TableCell>
            <TableCell className="hidden md:table-cell text-muted-foreground">{h.dateSubmitted}</TableCell>
            <TableCell>
              <Badge variant={h.status === "approved" ? "default" : h.status === "pending" ? "secondary" : "destructive"}>
                {h.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex gap-1">
                <Link to={`/hostel/${h.id}`}>
                  <Button size="sm" variant="ghost"><Eye className="h-4 w-4" /></Button>
                </Link>
                {showActions && h.status === "pending" && (
                  <>
                    <Button size="sm" variant="ghost" className="text-cn-success" onClick={() => handleApprove(h.id)}><Check className="h-4 w-4" /></Button>
                    <Button size="sm" variant="ghost" className="text-destructive" onClick={() => handleReject(h.id)}><X className="h-4 w-4" /></Button>
                  </>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
        {data.length === 0 && (
          <TableRow>
            <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">No listings found</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <h1 className="text-2xl font-bold text-foreground mb-6">Admin Dashboard</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="md:w-56 shrink-0">
            <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "secondary" : "ghost"}
                  className="justify-start gap-2 shrink-0"
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </Button>
              ))}
            </nav>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((s) => (
                    <Card key={s.label}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{s.label}</span>
                          <s.icon className={`h-5 w-5 ${s.color}`} />
                        </div>
                        <p className="text-2xl font-bold text-foreground mt-1">{s.value}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Card>
                  <CardHeader><CardTitle className="text-lg">Recent Pending Listings</CardTitle></CardHeader>
                  <CardContent>
                    <HostelTable data={pendingHostels} showActions />
                  </CardContent>
                </Card>
              </div>
            )}
            {activeTab === "pending" && (
              <Card>
                <CardHeader><CardTitle className="text-lg">Pending Listings</CardTitle></CardHeader>
                <CardContent><HostelTable data={pendingHostels} showActions /></CardContent>
              </Card>
            )}
            {activeTab === "approved" && (
              <Card>
                <CardHeader><CardTitle className="text-lg">Approved Listings</CardTitle></CardHeader>
                <CardContent><HostelTable data={approvedHostels} /></CardContent>
              </Card>
            )}
            {activeTab === "users" && (
              <Card>
                <CardContent className="p-8 text-center text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-3 text-muted-foreground/40" />
                  <p>User management coming soon</p>
                </CardContent>
              </Card>
            )}
            {activeTab === "reviews" && (
              <Card>
                <CardContent className="p-8 text-center text-muted-foreground">
                  <MessageSquare className="h-12 w-12 mx-auto mb-3 text-muted-foreground/40" />
                  <p>Review management coming soon</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
