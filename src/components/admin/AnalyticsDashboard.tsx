import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

  return (
    <div className="space-y-6">
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
