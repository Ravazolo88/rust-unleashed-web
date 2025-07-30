import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Code, Users, ExternalLink } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Rust Book",
    description: "Guia oficial completo",
    url: "https://doc.rust-lang.org/book/",
    badge: "Gratuito"
  },
  {
    icon: Code,
    title: "Rust by Example",
    description: "Aprenda com exemplos práticos",
    url: "https://doc.rust-lang.org/rust-by-example/",
    badge: "Interativo"
  },
  {
    icon: Users,
    title: "Community",
    description: "Fórum oficial da comunidade",
    url: "https://users.rust-lang.org/",
    badge: "Ativo"
  }
];

const CallToActionSection = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/20 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-white/15 animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Junte-se a milhões de desenvolvedores que já escolheram Rust para 
            construir o futuro da programação segura e performática
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4 shadow-rust transition-bounce hover:scale-105"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Comece a Aprender
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 transition-smooth"
            >
              <Code className="mr-2 h-5 w-5" />
              Ver Exemplos
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-white/20">
                    <resource.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <Badge variant="secondary" className="mb-3">
                  {resource.badge}
                </Badge>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-white/80 mb-4">
                  {resource.description}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-white hover:bg-white/10"
                >
                  Acessar
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">🏢</Badge>
              <span>Usado por Mozilla, Dropbox, Facebook</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">⭐</Badge>
              <span>68k+ stars no GitHub</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">👥</Badge>
              <span>Comunidade de 2M+ desenvolvedores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;