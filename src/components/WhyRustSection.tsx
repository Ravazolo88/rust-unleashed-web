import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Zap, Users, Code } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Memory Safety Garantida",
    description: "Elimina race conditions, vazamentos de memória e acessos inválidos em tempo de compilação",
    highlight: "Zero runtime errors"
  },
  {
    icon: Zap,
    title: "Performance Nativa",
    description: "Velocidade comparável a C/C++ com abstrações zero-cost e otimizações avançadas",
    highlight: "Sem overhead"
  },
  {
    icon: Users,
    title: "Concorrência Elegante",
    description: "Threads nativas, async/await e channels integrados nativamente na linguagem",
    highlight: "Sintaxe intuitiva"
  },
  {
    icon: Code,
    title: "Ownership System",
    description: "Sistema único de propriedade que garante segurança sem garbage collector",
    highlight: "Controle total"
  },
  {
    icon: CheckCircle,
    title: "Type Safety",
    description: "Sistema de tipos expressivo que previne bugs comuns em multithreading",
    highlight: "Bugs impossíveis"
  },
  {
    icon: Clock,
    title: "Produtividade",
    description: "Ferramentas modernas (Cargo, rustfmt, clippy) que aceleram o desenvolvimento",
    highlight: "Desenvolvimento ágil"
  }
];

const WhyRustSection = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que <span className="rust-gradient-text">Rust</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rust não é apenas mais uma linguagem - é uma revolução na forma como pensamos 
            sobre segurança, performance e concorrência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-rust transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary"
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <advantage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                    {advantage.highlight}
                  </span>
                </div>
                <CardTitle className="text-xl">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {advantage.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="font-medium">
              Usado por Mozilla, Dropbox, Facebook, Microsoft e centenas de outras empresas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRustSection;