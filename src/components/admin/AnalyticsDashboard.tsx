import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

interface AnalyticsDashboardProps {
  leads: Lead[];
}

export function AnalyticsDashboard({ leads }: AnalyticsDashboardProps) {
  const { toast } = useToast();

  // Analytics by event type
  const eventTypes = leads.reduce((acc, lead) => {
    if (lead.event_type) {
      acc[lead.event_type] = (acc[lead.event_type] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  // Analytics by contact type
  const contactTypes = leads.reduce((acc, lead) => {
    acc[lead.contact_type] = (acc[lead.contact_type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Analytics by artist
  const artistStats = leads.reduce((acc, lead) => {
    if (lead.artist_name) {
      acc[lead.artist_name] = (acc[lead.artist_name] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  // Analytics by source page
  const sourcePages = leads.reduce((acc, lead) => {
    acc[lead.source_page] = (acc[lead.source_page] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Status distribution
  const statusDistribution = leads.reduce((acc, lead) => {
    acc[lead.status] = (acc[lead.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Weekly trend (last 4 weeks)
  const now = new Date();
  const fourWeeksAgo = new Date(now.getTime() - 28 * 24 * 60 * 60 * 1000);
  const recentLeads = leads.filter(lead => new Date(lead.created_at) >= fourWeeksAgo);
  
  const weeklyTrend = recentLeads.reduce((acc, lead) => {
    const weekStart = new Date(lead.created_at);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay());
    const weekKey = weekStart.toLocaleDateString("pt-BR");
    acc[weekKey] = (acc[weekKey] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const conversionRate = leads.length > 0 
    ? Math.round((statusDistribution.closed_won || 0) / leads.length * 100) 
    : 0;

  const exportToCSV = () => {
    const headers = [
      "Data",
      "Nome",
      "Email",
      "Telefone",
      "Tipo Evento",
      "Data Evento",
      "Local",
      "Artista",
      "Orçamento",
      "Status"
    ];

    const rows = leads.map(lead => [
      new Date(lead.created_at).toLocaleDateString("pt-BR"),
      lead.customer_name || "-",
      lead.customer_email || "-",
      lead.customer_phone || "-",
      lead.event_type || "-",
      lead.event_date ? new Date(lead.event_date).toLocaleDateString("pt-BR") : "-",
      lead.event_location || "-",
      lead.artist_name || "-",
      lead.budget_range || "-",
      lead.status
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Exportação concluída",
      description: "Os dados foram exportados com sucesso.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Export Button */}
      <div className="flex justify-end">
        <Button onClick={exportToCSV} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Exportar CSV
        </Button>
      </div>
      {/* Conversion Funnel */}
      <Card>
        <CardHeader>
          <CardTitle>Funil de Conversão</CardTitle>
          <CardDescription>Distribuição por status do lead</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Object.entries(statusDistribution).map(([status, count]) => {
              const percentage = Math.round((count / leads.length) * 100);
              return (
                <div key={status} className="flex items-center gap-4">
                  <Badge className="w-32 justify-center capitalize">
                    {status.replace("_", " ")}
                  </Badge>
                  <div className="flex-1 bg-secondary rounded-full h-6 overflow-hidden">
                    <div
                      className="bg-primary h-full flex items-center px-2 text-xs text-primary-foreground"
                      style={{ width: `${percentage}%` }}
                    >
                      {percentage}%
                    </div>
                  </div>
                  <span className="text-sm font-medium w-12 text-right">{count}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Taxa de Conversão Total</span>
              <span className="text-2xl font-bold">{conversionRate}%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Event Types */}
      <Card>
        <CardHeader>
          <CardTitle>Tipos de Eventos</CardTitle>
          <CardDescription>Distribuição por tipo de evento</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Object.entries(eventTypes)
              .sort(([, a], [, b]) => b - a)
              .map(([type, count]) => {
                const percentage = Math.round((count / leads.length) * 100);
                return (
                  <div key={type} className="flex items-center gap-4">
                    <Badge className="w-40 justify-center capitalize">
                      {type.replace("-", " ")}
                    </Badge>
                    <div className="flex-1 bg-secondary rounded-full h-6 overflow-hidden">
                      <div
                        className="bg-primary h-full flex items-center px-2 text-xs text-primary-foreground"
                        style={{ width: `${percentage}%`, minWidth: percentage > 0 ? '40px' : '0' }}
                      >
                        {percentage}%
                      </div>
                    </div>
                    <span className="text-sm font-medium w-12 text-right">{count}</span>
                  </div>
                );
              })}
          </div>
        </CardContent>
      </Card>

      {/* Contact Types */}
      <Card>
        <CardHeader>
          <CardTitle>Tipos de Contato</CardTitle>
          <CardDescription>Como os leads chegaram até você</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(contactTypes).map(([type, count]) => (
              <div key={type} className="p-4 border rounded-lg">
                <div className="text-2xl font-bold mb-1">{count}</div>
                <div className="text-sm text-muted-foreground capitalize">
                  {type.replace("_", " ")}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Artists */}
      <Card>
        <CardHeader>
          <CardTitle>Artistas Mais Populares</CardTitle>
          <CardDescription>Interesse por artista</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Object.entries(artistStats)
              .sort(([, a], [, b]) => b - a)
              .slice(0, 5)
              .map(([artist, count]) => (
                <div key={artist} className="flex justify-between items-center p-2 border rounded">
                  <span className="font-medium">{artist}</span>
                  <Badge>{count} leads</Badge>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Source Pages */}
      <Card>
        <CardHeader>
          <CardTitle>Páginas de Origem</CardTitle>
          <CardDescription>De onde vêm os leads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Object.entries(sourcePages).map(([page, count]) => (
              <div key={page} className="flex justify-between items-center p-2 border rounded">
                <span className="font-medium capitalize">{page}</span>
                <Badge variant="secondary">{count}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Tendência Semanal</CardTitle>
          <CardDescription>Últimas 4 semanas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Object.entries(weeklyTrend)
              .sort()
              .map(([week, count]) => (
                <div key={week} className="flex justify-between items-center p-2 border rounded">
                  <span className="text-sm">{week}</span>
                  <Badge>{count} leads</Badge>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
