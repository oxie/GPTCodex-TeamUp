import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PenSquare, Trash, Plus } from "lucide-react";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ServiceForm from "@/components/admin/ServiceForm";
import PortfolioForm from "@/components/admin/PortfolioForm";
import TechForm from "@/components/admin/TechForm";
import { Service, PortfolioItem, Technology, Message } from "@shared/schema";

const Admin = () => {
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState("services");
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [deleteItemId, setDeleteItemId] = useState<number | null>(null);
  const [deleteType, setDeleteType] = useState<string>("");
  
  // Auth check
  const { data: auth, isLoading: authLoading } = useQuery({
    queryKey: ["/api/auth/status"],
    onError: () => {
      // Redirect to login if not authenticated
      setLocation("/login");
    }
  });

  useEffect(() => {
    if (!authLoading && !auth) {
      setLocation("/login");
    }
  }, [auth, authLoading, setLocation]);

  // Queries
  const { data: services = [] } = useQuery<Service[]>({
    queryKey: ["/api/services"],
    enabled: !!auth,
  });

  const { data: portfolioItems = [] } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
    enabled: !!auth,
  });

  const { data: technologies = [] } = useQuery<Technology[]>({
    queryKey: ["/api/technologies"],
    enabled: !!auth,
  });

  const { data: messages = [] } = useQuery<Message[]>({
    queryKey: ["/api/messages"],
    enabled: !!auth,
  });

  // Delete mutations
  const deleteService = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest("DELETE", `/api/services/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "Service deleted successfully",
        variant: "default",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/services"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete service: ${error.message}`,
        variant: "destructive",
      });
    }
  });

  const deletePortfolioItem = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest("DELETE", `/api/portfolio/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "Portfolio item deleted successfully",
        variant: "default",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/portfolio"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete portfolio item: ${error.message}`,
        variant: "destructive",
      });
    }
  });

  const deleteTechnology = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest("DELETE", `/api/technologies/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "Technology deleted successfully",
        variant: "default",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/technologies"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete technology: ${error.message}`,
        variant: "destructive",
      });
    }
  });

  const markMessageAsRead = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest("PATCH", `/api/messages/${id}`, { read: true });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/messages"] });
    }
  });

  const handleDeleteConfirm = () => {
    if (!deleteItemId) return;

    if (deleteType === "service") {
      deleteService.mutate(deleteItemId);
    } else if (deleteType === "portfolio") {
      deletePortfolioItem.mutate(deleteItemId);
    } else if (deleteType === "technology") {
      deleteTechnology.mutate(deleteItemId);
    }
    
    setDeleteItemId(null);
    setDeleteType("");
  };

  const handleEdit = (item: any, type: string) => {
    setSelectedItem(item);
    setActiveTab(type);
    setShowForm(true);
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setSelectedItem(null);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setShowForm(false);
    setSelectedItem(null);
  };

  if (authLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!auth) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button onClick={() => setLocation("/")}>View Site</Button>
        </div>
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            <TabsTrigger value="messages">
              Messages
              {messages.filter(m => !m.read).length > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {messages.filter(m => !m.read).length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="services">
            {showForm ? (
              <div className="mb-6">
                <ServiceForm 
                  initialData={selectedItem} 
                  onSuccess={handleFormClose}
                />
                <div className="mt-4 text-center">
                  <Button variant="outline" onClick={handleFormClose}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <Button onClick={handleAdd} className="mb-4">
                  <Plus className="mr-2 h-4 w-4" /> Add New Service
                </Button>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <Card key={service.id}>
                      <CardHeader>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-500">Icon: {service.icon}</p>
                            <p className="text-sm text-gray-500">Color: {service.color}</p>
                            <p className="text-sm text-gray-500">Features: {service.features.length}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              size="icon" 
                              variant="outline" 
                              onClick={() => handleEdit(service, "services")}
                            >
                              <PenSquare className="h-4 w-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button 
                                  size="icon" 
                                  variant="destructive"
                                  onClick={() => {
                                    setDeleteItemId(service.id);
                                    setDeleteType("service");
                                  }}
                                >
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This will permanently delete the service "{service.title}".
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={handleDeleteConfirm}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="portfolio">
            {showForm ? (
              <div className="mb-6">
                <PortfolioForm 
                  initialData={selectedItem} 
                  onSuccess={handleFormClose}
                />
                <div className="mt-4 text-center">
                  <Button variant="outline" onClick={handleFormClose}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <Button onClick={handleAdd} className="mb-4">
                  <Plus className="mr-2 h-4 w-4" /> Add New Portfolio Item
                </Button>
                <div className="grid gap-4 md:grid-cols-2">
                  {portfolioItems.map((item) => (
                    <Card key={item.id}>
                      <CardHeader>
                        <div className="aspect-w-16 aspect-h-9 bg-slate-100 relative overflow-hidden">
                          <img src={item.imageUrl} alt={item.title} className="object-cover h-40 w-full" />
                        </div>
                        <CardTitle className="mt-4">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {item.tags.map((tag, index) => (
                            <Badge key={index} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-gray-500">Category: {item.category}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              size="icon" 
                              variant="outline" 
                              onClick={() => handleEdit(item, "portfolio")}
                            >
                              <PenSquare className="h-4 w-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button 
                                  size="icon" 
                                  variant="destructive"
                                  onClick={() => {
                                    setDeleteItemId(item.id);
                                    setDeleteType("portfolio");
                                  }}
                                >
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This will permanently delete the portfolio item "{item.title}".
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={handleDeleteConfirm}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="technologies">
            {showForm ? (
              <div className="mb-6">
                <TechForm 
                  initialData={selectedItem} 
                  onSuccess={handleFormClose}
                />
                <div className="mt-4 text-center">
                  <Button variant="outline" onClick={handleFormClose}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <Button onClick={handleAdd} className="mb-4">
                  <Plus className="mr-2 h-4 w-4" /> Add New Technology
                </Button>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {technologies.map((tech) => (
                    <Card key={tech.id}>
                      <CardHeader className="p-4 pb-0 flex justify-center">
                        <img 
                          src={tech.imageUrl} 
                          alt={tech.name} 
                          className="h-16 w-auto object-contain"
                          style={{
                            background: tech.name === "External Secrets" ? "#1e293b" : "transparent",
                            padding: tech.name === "External Secrets" ? "0.5rem" : "0",
                            borderRadius: tech.name === "External Secrets" ? "0.25rem" : "0"
                          }}
                        />
                      </CardHeader>
                      <CardContent className="p-4 text-center">
                        <p className="font-medium">{tech.name}</p>
                        <p className="text-sm text-gray-500 mb-4">Category: {tech.category}</p>
                        <div className="flex justify-center space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => handleEdit(tech, "technologies")}
                          >
                            <PenSquare className="h-4 w-4 mr-1" /> Edit
                          </Button>
                          <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button 
                                  size="sm" 
                                  variant="destructive"
                                  onClick={() => {
                                    setDeleteItemId(tech.id);
                                    setDeleteType("technology");
                                  }}
                                >
                                  <Trash className="h-4 w-4 mr-1" /> Delete
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This will permanently delete the technology "{tech.name}".
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={handleDeleteConfirm}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="messages">
            <div className="space-y-4">
              {messages.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-500">No messages yet</p>
                  </CardContent>
                </Card>
              ) : (
                messages.map((message) => (
                  <Card key={message.id} className={`${!message.read ? 'border-primary' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>{message.name}</CardTitle>
                          <CardDescription>{message.email}</CardDescription>
                        </div>
                        <div className="flex items-center">
                          {!message.read && (
                            <Badge>New</Badge>
                          )}
                          <span className="text-sm text-gray-500 ml-2">
                            {new Date(message.createdAt).toLocaleDateString()} 
                            {' '}
                            {new Date(message.createdAt).toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{message.message}</p>
                      <div className="mt-4 flex justify-end">
                        <a href={`mailto:${message.email}`}>
                          <Button variant="outline" className="mr-2">
                            Reply via Email
                          </Button>
                        </a>
                        {!message.read && (
                          <Button onClick={() => markMessageAsRead.mutate(message.id)}>
                            Mark as Read
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
