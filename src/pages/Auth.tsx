import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import type { Session } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Schemas de validação
const loginSchema = z.object({
  email: z.string().email("Email inválido").max(255, "Email muito longo"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

const signupSchema = z.object({
  fullName: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  email: z.string().email("Email inválido").max(255, "Email muito longo"),
  password: z.string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .regex(/[A-Z]/, "Senha deve conter pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "Senha deve conter pelo menos uma letra minúscula")
    .regex(/[0-9]/, "Senha deve conter pelo menos um número"),
});

const resetPasswordSchema = z.object({
  email: z.string().email("Email inválido").max(255, "Email muito longo"),
});

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Verificar se usuário já está autenticado
  useEffect(() => {
    // Verificar sessão atual
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setSession(session);
        navigate('/admin');
      }
    });

    // Monitorar mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        navigate('/admin');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      // Validar dados
      const validatedData = loginSchema.parse({ email, password });

      const { error } = await supabase.auth.signInWithPassword({
        email: validatedData.email,
        password: validatedData.password,
      });

      if (error) {
        // Traduzir erros comuns para português
        const errorMessages: Record<string, string> = {
          "Invalid login credentials": "Email ou senha incorretos",
          "Email not confirmed": "Por favor, confirme seu email antes de fazer login",
          "User not found": "Usuário não encontrado",
        };

        toast({
          title: "Erro ao fazer login",
          description: errorMessages[error.message] || "Verifique suas credenciais e tente novamente",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Login realizado com sucesso!",
        });
        navigate('/admin');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Dados inválidos",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro",
          description: "Ocorreu um erro inesperado. Tente novamente.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;
      const fullName = formData.get('fullName') as string;

      // Validar dados
      const validatedData = signupSchema.parse({ fullName, email, password });

      const { error } = await supabase.auth.signUp({
        email: validatedData.email,
        password: validatedData.password,
        options: {
          data: {
            full_name: validatedData.fullName,
          },
          emailRedirectTo: `${window.location.origin}/admin`,
        },
      });

      if (error) {
        // Traduzir erros comuns
        const errorMessages: Record<string, string> = {
          "User already registered": "Este email já está cadastrado. Faça login ou recupere sua senha.",
          "Password should be at least 6 characters": "A senha deve ter pelo menos 6 caracteres",
        };

        toast({
          title: "Erro ao criar conta",
          description: errorMessages[error.message] || error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Conta criada com sucesso!",
          description: "Você já pode fazer login no sistema.",
          duration: 5000,
        });
        // Aguardar um momento e mudar para a aba de login
        setTimeout(() => {
          const loginTab = document.querySelector('[value="login"]') as HTMLElement;
          loginTab?.click();
        }, 2000);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Dados inválidos",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro",
          description: "Ocorreu um erro inesperado. Tente novamente.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email') as string;

      // Validar email
      const validatedData = resetPasswordSchema.parse({ email });

      const { error } = await supabase.auth.resetPasswordForEmail(validatedData.email, {
        redirectTo: `${window.location.origin}/auth?reset=true`,
      });

      if (error) {
        toast({
          title: "Erro ao enviar email",
          description: "Não foi possível enviar o email de recuperação. Tente novamente.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Email enviado!",
          description: "Verifique sua caixa de entrada para redefinir sua senha.",
          duration: 6000,
        });
        // Limpar o formulário
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Email inválido",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro",
          description: "Ocorreu um erro inesperado. Tente novamente.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-md">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Criar Conta</TabsTrigger>
              <TabsTrigger value="reset">Esqueci Senha</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Acessar Painel Admin</CardTitle>
                  <CardDescription>
                    Entre com suas credenciais para acessar o painel administrativo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Senha</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Entrando..." : "Entrar"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Criar Conta</CardTitle>
                  <CardDescription>
                    Crie uma conta para acessar o painel administrativo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nome Completo</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Seu Nome"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Senha</Label>
                      <Input
                        id="signup-password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        minLength={8}
                      />
                      <p className="text-xs text-muted-foreground">
                        Mínimo 8 caracteres, com letra maiúscula, minúscula e número
                      </p>
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Criando..." : "Criar Conta"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reset">
              <Card>
                <CardHeader>
                  <CardTitle>Recuperar Senha</CardTitle>
                  <CardDescription>
                    Digite seu email para receber um link de recuperação de senha.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleResetPassword} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reset-email">Email</Label>
                      <Input
                        id="reset-email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Enviando..." : "Enviar Link de Recuperação"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Auth;
