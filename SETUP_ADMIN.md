# 🔐 Configuração de Administradores

Este guia explica como configurar usuários administradores no sistema.

## ✅ Administrador Principal Já Configurado

O usuário **thimancaster@hotmail.com** já está configurado como administrador principal do sistema.

Para fazer login:
1. Acesse `/auth`
2. Entre com o email: `thimancaster@hotmail.com`
3. Use sua senha cadastrada

## 📝 Adicionar Novos Administradores

### 1️⃣ Criar uma Conta de Usuário

1. Acesse a página de autenticação: `/auth`
2. Clique na aba **"Criar Conta"**
3. Preencha os dados:
   - Nome completo
   - Email
   - Senha (mínimo 8 caracteres, com letra maiúscula, minúscula e número)
4. Clique em **"Criar Conta"**
5. Aguarde a mensagem de sucesso

### 2️⃣ Adicionar Role de Admin no Banco de Dados

Agora você precisa adicionar a role de admin para este usuário no banco de dados.

**Opção A: Via Lovable Cloud Backend**

1. Clique no botão abaixo para abrir o backend:

   <lov-actions>
     <lov-open-backend>Abrir Backend</lov-open-backend>
   </lov-actions>

2. No Lovable Cloud, vá até **Table Editor**
3. Selecione a tabela **`profiles`** para ver o `user_id` do usuário criado
4. Copie o `user_id` (UUID do usuário)
5. Vá para a tabela **`user_roles`**
6. Clique em **"Insert Row"** (ou similar)
7. Preencha os campos:
   - `user_id`: Cole o UUID copiado
   - `role`: Selecione **`admin`**
8. Salve a linha

**Opção B: Via SQL (Recomendado para desenvolvedores)**

Execute este SQL substituindo `SEU_EMAIL@EXEMPLO.COM` pelo email que você cadastrou:

```sql
-- Primeiro, encontre o user_id do usuário pelo email
-- (execute esta query para ver o UUID)
SELECT user_id, email, full_name 
FROM profiles 
WHERE email = 'SEU_EMAIL@EXEMPLO.COM';

-- Depois, insira a role de admin
-- (substitua o UUID pelo resultado da query anterior)
INSERT INTO user_roles (user_id, role)
VALUES ('UUID-DO-USUARIO-AQUI', 'admin');
```

### 3️⃣ Fazer Login

1. Volte para `/auth`
2. Na aba **"Login"**, entre com suas credenciais
3. Você será automaticamente redirecionado para `/admin`

## ✅ Verificação

Se tudo funcionou corretamente, você deve:

- ✅ Conseguir fazer login sem erros
- ✅ Ser redirecionado automaticamente para `/admin`
- ✅ Ver o painel administrativo com as estatísticas de leads
- ✅ Ter acesso completo a todas as funcionalidades

## 🚨 Problemas Comuns

### "Acesso negado - Você não tem permissão de administrador"

**Causa:** A role de admin não foi adicionada corretamente na tabela `user_roles`.

**Solução:** 
1. Verifique se o UUID do usuário está correto
2. Confirme que a role foi inserida como `'admin'` (em minúsculas)
3. Tente fazer logout e login novamente

### "Redirecionando constantemente entre /auth e /admin"

**Causa:** Problema na verificação de sessão ou role.

**Solução:**
1. Limpe o localStorage do navegador
2. Faça logout completo
3. Verifique novamente se a role está no banco de dados
4. Tente fazer login novamente

### "Email ou senha incorretos"

**Causa:** Credenciais inválidas ou usuário não criado.

**Solução:**
1. Confirme que você criou a conta primeiro
2. Verifique se está usando o email correto
3. Use a opção "Esqueci Senha" se necessário

## 🔧 Adicionar Mais Administradores

Para adicionar outros administradores no futuro:

1. Peça para o novo admin criar uma conta em `/auth`
2. Vá no backend e adicione a role de admin para o `user_id` dele
3. O novo admin poderá fazer login em `/admin`

## 📚 Estrutura de Roles

O sistema atualmente suporta as seguintes roles:

- `admin`: Acesso completo ao painel administrativo
- `user`: Usuário comum (sem acesso ao admin)

Para adicionar novas roles, você precisará:
1. Adicionar o novo valor no enum `app_role` no banco de dados
2. Criar políticas RLS apropriadas
3. Atualizar o código para verificar as novas roles

## 🔒 Segurança

**Importante:**
- ✅ As senhas são criptografadas automaticamente pelo Supabase
- ✅ O sistema usa Row Level Security (RLS) para proteger os dados
- ✅ A verificação de admin é feita no servidor (policies do Supabase)
- ✅ Não é possível se tornar admin apenas modificando o localStorage

**Nunca:**
- ❌ Compartilhe credenciais de admin
- ❌ Use senhas fracas (ex: "admin123")
- ❌ Adicione role de admin para usuários não confiáveis

## 📞 Suporte

Se você encontrar problemas que não consegue resolver:

1. Verifique os logs do navegador (F12 → Console)
2. Verifique os logs do Supabase no backend
3. Revise este documento novamente
4. Entre em contato com o desenvolvedor do sistema
