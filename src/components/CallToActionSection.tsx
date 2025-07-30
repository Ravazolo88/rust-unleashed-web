import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Code, Users, ExternalLink } from "lucide-react";
const resources = [{
  icon: BookOpen,
  title: "Rust Book",
  description: "Guia oficial completo",
  url: "https://doc.rust-lang.org/book/",
  badge: "Gratuito"
}, {
  icon: Code,
  title: "Rust by Example",
  description: "Aprenda com exemplos práticos",
  url: "https://doc.rust-lang.org/rust-by-example/",
  badge: "Interativo"
}, {
  icon: Users,
  title: "Community",
  description: "Fórum oficial da comunidade",
  url: "https://users.rust-lang.org/",
  badge: "Ativo"
}];
const CallToActionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Comece Sua Jornada com Rust
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se à revolução da programação segura e eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <resource.icon className="h-8 w-8 text-primary mr-3" />
                  <Badge variant="secondary">{resource.badge}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    Acessar
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full">
            Comece Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CallToActionSection;