# 📚 Guia do Painel Administrativo - M7 Produções

## 🎯 Visão Geral

O painel administrativo foi criado para acompanhar e gerenciar todas as interações de potenciais clientes com o site da M7 Produções. Cada vez que alguém clica em um botão de contato (WhatsApp, Email ou Instagram), o sistema registra automaticamente essa ação como um lead.

---

## 🚀 Como Acessar

### Primeira Vez

1. **Acesse a página de autenticação:**
   ```
   https://seu-site.lovable.app/auth
   ```

2. **Crie sua conta:**
   - Clique na aba "Criar Conta"
   - Preencha:
     - Nome Completo
     - Email
     - Senha (mínimo 6 caracteres)
   - Clique em "Criar Conta"

3. **Importante:** A confirmação por email está **desabilitada** para facilitar testes. Você pode fazer login imediatamente após criar a conta.

### CRÍTICO: Tornar-se Admin

⚠️ **Após criar sua conta, você NÃO será admin automaticamente!**

Para se tornar admin, você precisa executar este comando SQL no banco de dados:

```sql
-- Substitua 'seu@email.com' pelo email que você usou no cadastro
INSERT INTO user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email = 'seu@email.com';
```

**Como executar:**
1. Acesse o backend do Lovable Cloud
2. Vá em "Database" → "SQL Editor"
3. Cole o comando acima (substituindo o email)
4. Execute
5. Faça logout e login novamente

### Login Subsequente

1. Acesse `/auth`
2. Use a aba "Login"
3. Entre com email e senha
4. Será redirecionado para `/admin`

---

## 📊 Entendendo o Dashboard

### Cards de Estatísticas

O topo do painel mostra 4 cards com métricas importantes:

```
┌─────────────────┬─────────────────┬─────────────────┬─────────────────┐
│ Total de Leads  │   WhatsApp      │     Email       │   Instagram     │
│      15         │       10        │        3        │        2        │
└─────────────────┴─────────────────┴─────────────────┴─────────────────┘
```

- **Total de Leads:** Número total de interações registradas
- **WhatsApp:** Quantos cliques em botões do WhatsApp
- **Email:** Quantos cliques em botões de email
- **Instagram:** Quantos cliques para o Instagram

### Tabela de Histórico

Abaixo dos cards, você verá uma tabela com todos os leads capturados:

| Tipo      | Página        | Artista           | Data/Hora           |
|-----------|---------------|-------------------|---------------------|
| WhatsApp  | home          | -                 | 21/01/2025 14:30    |
| WhatsApp  | artist-detail | Julliany Souza    | 21/01/2025 13:15    |
| Email     | contact       | -                 | 20/01/2025 18:45    |
| Instagram | contact       | -                 | 20/01/2025 16:20    |

**Colunas:**
- **Tipo:** Qual canal de contato foi usado
- **Página:** Em qual página do site ocorreu o clique
- **Artista:** Se foi na página de um artista específico, mostra qual
- **Data/Hora:** Quando aconteceu

---

## 🔍 Interpretando os Dados

### Páginas de Origem

- **`home`**: Clique no botão "Falar Agora" da página inicial
- **`header`**: Clique no botão do header (desktop)
- **`header-mobile`**: Clique no botão do header (mobile)
- **`contact`**: Clique em um dos cards na página de contato
- **`contact-cta`**: Clique no grande botão verde da página de contato
- **`artist-detail`**: Clique no botão de contratar na página do artista

### Análises Úteis

**Qual artista gera mais interesse?**
- Conte quantas vezes cada artista aparece na coluna "Artista"
- Isso mostra quais artistas as pessoas mais querem contratar

**Qual página converte melhor?**
- Veja qual "Página" aparece mais vezes
- Isso mostra onde as pessoas mais se interessam em fazer contato

**Qual canal preferem?**
- Compare os números nos cards de estatísticas
- WhatsApp geralmente tem mais conversões

**Em quais horários há mais interesse?**
- Observe os horários na coluna "Data/Hora"
- Ajuda a saber quando responder mais rápido

---

## 📱 Rastreamento Automático

### O que é rastreado?

**Toda vez que alguém clica em:**

✅ Qualquer botão de WhatsApp
✅ Qualquer botão de Email  
✅ Qualquer botão de Instagram
✅ Links de redes sociais dos artistas

**O sistema registra:**
- 📍 Tipo de contato (whatsapp/email/instagram)
- 📄 Página onde estava
- 🎤 Artista (se aplicável)
- 🕐 Data e hora
- 🌐 Navegador usado (user agent)
- 🔗 De onde veio (referrer)

### Mensagem Padrão

Todos os links de WhatsApp agora usam a mensagem padrão:
```
"Olá, vim através da negociação com Thiago Ferreira, e gostaria de informações sobre shows da M7 Produções"
```

Quando é sobre um artista específico, adiciona:
```
"Olá, vim através da negociação com Thiago Ferreira, e gostaria de informações sobre o show de [NOME DO ARTISTA] para o meu evento."
```

---

## 🎓 Casos de Uso

### Caso 1: Identificar Artista Mais Popular

**Objetivo:** Saber qual artista gera mais interesse

**Como fazer:**
1. Acesse o painel admin
2. Olhe a coluna "Artista" na tabela
3. Conte manualmente ou use Ctrl+F para buscar cada nome
4. O artista com mais aparições é o mais popular

**Ação:** Considere dar mais destaque a este artista no site

---

### Caso 2: Horário de Pico

**Objetivo:** Saber quando as pessoas mais acessam

**Como fazer:**
1. Observe a coluna "Data/Hora"
2. Identifique padrões (manhã, tarde, noite)
3. Veja também dias da semana

**Ação:** Priorize atendimento nesses horários

---

### Caso 3: Efetividade da Página de Contato

**Objetivo:** Avaliar se a página de contato converte bem

**Como fazer:**
1. Filtre mentalmente apenas os leads com página "contact"
2. Compare com outros originadores (home, artist-detail)

**Ação:** Se for baixo, considere melhorar o design da página

---

### Caso 4: Canal Preferido

**Objetivo:** Descobrir se as pessoas preferem WhatsApp, Email ou Instagram

**Como fazer:**
1. Olhe os cards no topo do dashboard
2. Compare os números

**Ação:** Dê mais destaque ao canal mais usado

---

## 🛠️ Problemas Comuns

### "Acesso Negado" ao entrar no /admin

**Causa:** Você não é admin ainda

**Solução:**
1. Execute o SQL para se tornar admin (veja seção "CRÍTICO: Tornar-se Admin")
2. Faça logout
3. Faça login novamente

---

### Não vejo nenhum lead na tabela

**Causa:** Ainda não houve cliques nos botões de contato

**Solução:**
1. Teste você mesmo! Abra o site em outra aba
2. Clique em algum botão de WhatsApp
3. Atualize o painel admin
4. Você verá o lead aparecer

---

### Leads aparecem duplicados

**Causa:** Sistema funcionando corretamente! Se alguém clica 2x, registra 2x

**Solução:** Isso é esperado. Na análise, você pode:
- Contar leads únicos por dia
- Considerar múltiplos cliques como reforço de interesse

---

### Como diferenciar visitantes reais de testes?

**Causa:** Não há diferenciação automática ainda

**Solução:** 
- Use navegação anônima para testes
- Ou anote os horários em que você testou
- Futura implementação: filtro de IPs internos

---

## 📈 Exportando Dados

### Atualmente (MVP)

Não há função de export ainda, mas você pode:

1. **Copiar dados manualmente:**
   - Selecione as linhas da tabela
   - Ctrl+C → Cole no Excel

2. **Screenshot:**
   - Use Print Screen para capturar o dashboard

### Futuro (Roadmap Fase 2)

- Export para Excel/CSV
- Relatórios em PDF
- Envio automático por email

---

## 🔐 Segurança

### Boas Práticas

✅ **Use senha forte:** Mínimo 12 caracteres, com letras, números e símbolos
✅ **Não compartilhe credenciais:** Cada pessoa deve ter seu próprio login
✅ **Faça logout:** Especialmente em computadores compartilhados
✅ **Acesso HTTPS:** Sempre acesse via https://

### Políticas Implementadas

- ✅ Autenticação obrigatória para acessar /admin
- ✅ Verificação de role de admin
- ✅ RLS (Row Level Security) no banco de dados
- ✅ Tokens JWT com refresh automático
- ✅ Senha mínima de 6 caracteres (recomendado: 12+)

---

## 📞 Suporte

### Precisa de Ajuda?

**Para questões técnicas:**
- Consulte o arquivo `ROADMAP.md` para features futuras
- Verifique os logs do console do navegador (F12)

**Para desenvolvimento:**
- Email: contato@m7producoes.com.br
- WhatsApp: (62) 98154-8834

---

## 🎯 Próximos Passos

Agora que você entendeu o básico:

1. ✅ Crie seu usuário admin
2. ✅ Explore o dashboard
3. ✅ Teste fazendo cliques no site
4. ✅ Analise os dados capturados
5. 📋 Leia o `ROADMAP.md` para ver o que vem por aí
6. 💡 Pense em quais features da Fase 2 são prioritárias para você

---

**Última atualização:** Janeiro 2025  
**Versão do Sistema:** 1.0.0 (MVP)
