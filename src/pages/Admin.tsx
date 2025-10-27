import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import type { Session } from "@supabase/supabase-js";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Users, TrendingUp, Phone } from "lucide-react";

import { LeadsTable } from "@/components/admin/LeadsTable";
import { LeadDetail } from "@/components/admin/LeadDetail";
import { AnalyticsDashboard } from "@/components/admin/AnalyticsDashboard";

interface Lead {
  id: string;
  contact_type: string;
  source_page: string;
  artist_name: string | null;
  customer_name: string | null;
  customer_email: string | null;
  customer_phone: string | null;
  event_type: string | null;
  event_date: string | null;
  event_location: string | null;
  budget_range: string | null;
  status: string;
  notes: string | null;
  created_at: string;
}

export default function Admin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [session, setSession] = useState<Session | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    conversion: 0,
  });

  useEffect(() => {
    // Verificar sessão inicial com tratamento de erros
    const initSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          // Se houver erro ao obter a sessão, limpar e redirecionar
          if (import.meta.env.DEV) {
            console.error("Error getting session:", error);
          }
          await supabase.auth.signOut();
          localStorage.clear();
          navigate("/auth");
          return;
        }
        
        setSession(session);
        if (!session) {
          navigate("/auth");
        } else {
          checkAdminRole(session.user.id);
        }
      } catch (err) {
        if (import.meta.env.DEV) {
          console.error("Session initialization error:", err);
        }
        await supabase.auth.signOut();
        localStorage.clear();
        navigate("/auth");
      }
    };

    initSession();

    // Monitorar mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'TOKEN_REFRESHED') {
        setSession(session);
        if (session) {
          checkAdminRole(session.user.id);
        }
      } else if (event === 'SIGNED_IN') {
        setSession(session);
        if (session) {
          checkAdminRole(session.user.id);
        }
      } else if (event === 'SIGNED_OUT') {
        setSession(null);
        localStorage.clear();
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchLeads();
    }
  }, [isAdmin]);

  const checkAdminRole = async (userId: string) => {
    try {
      const { data: roles, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .eq("role", "admin")
        .maybeSingle();

      if (error) throw error;

      if (!roles) {
        toast({
          title: "Acesso negado",
          description: "Você não tem permissão de administrador. Entre em contato com o suporte.",
          variant: "destructive",
          duration: 6000,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
        return;
      }

      setIsAdmin(true);
      setLoading(false);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Error checking admin role:", error);
      }
      toast({
        title: "Erro",
        description: "Não foi possível verificar suas permissões.",
        variant: "destructive",
      });
      navigate("/");
    }
  };

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      
      const leadsData = data || [];
      setLeads(leadsData);
      
      // Calculate stats
      const total = leadsData.length;
      const newLeads = leadsData.filter(l => l.status === 'new').length;
      const contacted = leadsData.filter(l => ['contacted', 'proposal_sent', 'negotiation'].includes(l.status)).length;
      const closed = leadsData.filter(l => l.status === 'closed_won').length;
      
      setStats({
        total,
        new: newLeads,
        contacted,
        conversion: total > 0 ? Math.round((closed / total) * 100) : 0,
      });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Error fetching leads:", error);
      }
      toast({
        title: "Erro",
        description: "Não foi possível carregar os leads.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Carregando painel administrativo...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Painel Administrativo</h1>
            <p className="text-muted-foreground mt-1">Gestão de Leads e Analytics</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Sair
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Leads</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Novos Leads</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.new}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Em Atendimento</CardTitle>
              <Phone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.contacted}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.conversion}%</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="leads" className="space-y-4">
          <TabsList>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="leads" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <LeadsTable 
                  leads={leads} 
                  onSelectLead={setSelectedLead}
                  onRefresh={fetchLeads}
                />
              </div>
              <div>
                {selectedLead ? (
                  <LeadDetail 
                    lead={selectedLead} 
                    onUpdate={fetchLeads}
                    onClose={() => setSelectedLead(null)}
                  />
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle>Detalhes do Lead</CardTitle>
                      <CardDescription>
                        Selecione um lead para ver mais informações
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard leads={leads} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
