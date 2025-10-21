import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";

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
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Leads ({leads.length})</CardTitle>
        <Button onClick={onRefresh} variant="ghost" size="sm">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="text-sm">
                  {new Date(lead.created_at).toLocaleDateString("pt-BR")}
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
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
