import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw, Search, Filter, Thermometer } from "lucide-react";

interface Lead {
  id: string;
  contact_type: string;
  source_page: string;
  artist_id: string | null;
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
  lead_score?: number;
  lead_temperature?: string;
}

interface LeadsTableProps {
  leads: Lead[];
  onSelectLead: (lead: Lead) => void;
  onRefresh: () => void;
}

const statusMap: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  new: { label: "Novo", variant: "default" },
  contacted: { label: "Contatado", variant: "secondary" },
  proposal_sent: { label: "Proposta Enviada", variant: "outline" },
  negotiation: { label: "Negociação", variant: "outline" },
  closed_won: { label: "Fechado", variant: "default" },
  closed_lost: { label: "Perdido", variant: "destructive" },
};

export function LeadsTable({ leads, onSelectLead, onRefresh }: LeadsTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [eventTypeFilter, setEventTypeFilter] = useState<string>("all");
  const [temperatureFilter, setTemperatureFilter] = useState<string>("all");
  const [minScore, setMinScore] = useState<number>(0);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = 
      lead.customer_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.customer_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.customer_phone?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesEventType = eventTypeFilter === "all" || lead.event_type === eventTypeFilter;
    const matchesTemperature = temperatureFilter === "all" || lead.lead_temperature === temperatureFilter;
    const matchesScore = (lead.lead_score || 0) >= minScore;
    
    return matchesSearch && matchesStatus && matchesEventType && matchesTemperature && matchesScore;
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Leads ({filteredLeads.length} de {leads.length})</CardTitle>
        <Button onClick={onRefresh} variant="ghost" size="sm">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="space-y-4 mb-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome, email ou telefone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos Status</SelectItem>
                <SelectItem value="new">Novo</SelectItem>
                <SelectItem value="contacted">Contatado</SelectItem>
                <SelectItem value="proposal_sent">Proposta Enviada</SelectItem>
                <SelectItem value="negotiation">Negociação</SelectItem>
                <SelectItem value="closed_won">Fechado</SelectItem>
                <SelectItem value="closed_lost">Perdido</SelectItem>
              </SelectContent>
            </Select>

            <Select value={eventTypeFilter} onValueChange={setEventTypeFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos Tipos</SelectItem>
                <SelectItem value="eventos-igreja">Eventos Igreja</SelectItem>
                <SelectItem value="evento-corporativo">Evento Corporativo</SelectItem>
                <SelectItem value="show-arena">Show Arena</SelectItem>
                <SelectItem value="evento-prefeitura">Evento Prefeitura</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Select value={temperatureFilter} onValueChange={setTemperatureFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <Thermometer className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Temperatura" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas Temperaturas</SelectItem>
                <SelectItem value="hot">🔥 Quente</SelectItem>
                <SelectItem value="warm">🟡 Morno</SelectItem>
                <SelectItem value="cold">❄️ Frio</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex-1 flex items-center gap-3">
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                Score mín: {minScore}
              </span>
              <Slider
                value={[minScore]}
                onValueChange={(value) => setMinScore(value[0])}
                max={100}
                step={5}
                className="flex-1"
              />
            </div>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Temp</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                  Nenhum lead encontrado com os filtros selecionados.
                </TableCell>
              </TableRow>
            ) : (
              filteredLeads
                .sort((a, b) => (b.lead_score || 0) - (a.lead_score || 0))
                .map((lead) => {
                  const isNew = (Date.now() - new Date(lead.created_at).getTime()) < 3600000; // < 1 hora
                  return (
                    <TableRow key={lead.id}>
                      <TableCell className="text-sm">
                        <div className="flex flex-col">
                          <span>{new Date(lead.created_at).toLocaleDateString("pt-BR")}</span>
                          {isNew && (
                            <Badge variant="destructive" className="w-fit mt-1 text-xs">
                              NOVO
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium">{lead.customer_name || "-"}</span>
                          {lead.event_type && (
                            <span className="text-xs text-muted-foreground capitalize">
                              {lead.event_type}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            (lead.lead_score || 0) >= 60 ? 'destructive' : 
                            (lead.lead_score || 0) >= 30 ? 'default' : 
                            'secondary'
                          }
                        >
                          {lead.lead_score || 0}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-2xl" title={lead.lead_temperature || 'cold'}>
                          {lead.lead_temperature === 'hot' ? '🔥' : 
                           lead.lead_temperature === 'warm' ? '🟡' : 
                           '❄️'}
                        </span>
                      </TableCell>
                      <TableCell className="capitalize text-sm">
                        {lead.contact_type.replace("_", " ")}
                      </TableCell>
                      <TableCell>
                        <Badge variant={statusMap[lead.status]?.variant || "default"}>
                          {statusMap[lead.status]?.label || lead.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => onSelectLead(lead)}
                          variant="ghost"
                          size="sm"
                        >
                          Ver Detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
