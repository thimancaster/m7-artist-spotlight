import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, Flame, Thermometer, Snowflake } from "lucide-react";

interface Lead {
  id: string;
  contact_type: string;
  source_page: string;
  lead_score?: number;
  lead_temperature?: string;
  status: string;
  created_at: string;
}

interface ConversionFunnelProps {
  leads: Lead[];
}

const COLORS = {
  hot: '#ef4444',
  warm: '#f59e0b',
  cold: '#3b82f6',
};

export function ConversionFunnel({ leads }: ConversionFunnelProps) {
  // Calcular métricas
  const total = leads.length;
  const hot = leads.filter(l => l.lead_temperature === 'hot').length;
  const warm = leads.filter(l => l.lead_temperature === 'warm').length;
  const cold = leads.filter(l => l.lead_temperature === 'cold').length;
  
  const contacted = leads.filter(l => ['contacted', 'proposal_sent', 'negotiation'].includes(l.status)).length;
  const converted = leads.filter(l => l.status === 'closed_won').length;
  
  const conversionRate = total > 0 ? ((converted / total) * 100).toFixed(1) : '0';
  const contactRate = total > 0 ? ((contacted / total) * 100).toFixed(1) : '0';

  // Dados por origem
  const bySource = leads.reduce((acc, lead) => {
    const source = lead.contact_type;
    acc[source] = (acc[source] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const sourceData = Object.entries(bySource).map(([source, count]) => ({
    name: source.replace('_', ' ').toUpperCase(),
    total: count,
  }));

  // Dados de temperatura
  const temperatureData = [
    { name: 'Quentes', value: hot, color: COLORS.hot },
    { name: 'Mornos', value: warm, color: COLORS.warm },
    { name: 'Frios', value: cold, color: COLORS.cold },
  ].filter(item => item.value > 0);

  // Top 5 leads quentes
  const topHotLeads = leads
    .filter(l => l.lead_temperature === 'hot')
    .sort((a, b) => (b.lead_score || 0) - (a.lead_score || 0))
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leads Quentes</CardTitle>
            <Flame className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">{hot}</div>
            <p className="text-xs text-muted-foreground">
              {total > 0 ? ((hot / total) * 100).toFixed(0) : 0}% do total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leads Mornos</CardTitle>
            <Thermometer className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">{warm}</div>
            <p className="text-xs text-muted-foreground">
              {total > 0 ? ((warm / total) * 100).toFixed(0) : 0}% do total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leads Frios</CardTitle>
            <Snowflake className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">{cold}</div>
            <p className="text-xs text-muted-foreground">
              {total > 0 ? ((cold / total) * 100).toFixed(0) : 0}% do total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">{conversionRate}%</div>
            <p className="text-xs text-muted-foreground">
              {converted} de {total} leads
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico por Origem */}
        <Card>
          <CardHeader>
            <CardTitle>Leads por Origem</CardTitle>
            <CardDescription>Distribuição de leads por canal de aquisição</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sourceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de Temperatura */}
        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Temperatura</CardTitle>
            <CardDescription>Qualificação dos leads por temperatura</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={temperatureData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {temperatureData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top 5 Leads Quentes */}
      {topHotLeads.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-red-500" />
              Top 5 Leads Quentes - Ação Prioritária
            </CardTitle>
            <CardDescription>Leads com maior potencial de conversão</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topHotLeads.map((lead, index) => (
                <div
                  key={lead.id}
                  className="flex items-center justify-between p-3 border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Badge variant="destructive" className="text-lg px-2 py-1">
                      #{index + 1}
                    </Badge>
                    <div>
                      <p className="font-medium">
                        {(lead as any).customer_name || 'Lead Anônimo'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {(lead as any).event_type || 'Tipo não informado'} • 
                        {new Date(lead.created_at).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500">
                      Score: {lead.lead_score || 0}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Funil de Conversão */}
      <Card>
        <CardHeader>
          <CardTitle>🎯 Funil de Conversão</CardTitle>
          <CardDescription>Acompanhe a jornada dos leads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-full bg-muted rounded-full h-8 relative overflow-hidden">
                <div 
                  className="bg-primary h-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ width: '100%' }}
                >
                  {total} Leads Capturados
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-8">
              <div className="w-full bg-muted rounded-full h-8 relative overflow-hidden">
                <div 
                  className="bg-orange-500 h-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ width: `${contactRate}%` }}
                >
                  {contacted} Contatados ({contactRate}%)
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-16">
              <div className="w-full bg-muted rounded-full h-8 relative overflow-hidden">
                <div 
                  className="bg-green-500 h-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ width: `${conversionRate}%` }}
                >
                  {converted} Convertidos ({conversionRate}%)
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}