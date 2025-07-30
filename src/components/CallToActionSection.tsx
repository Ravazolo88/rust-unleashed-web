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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Comece sua Jornada com <span className="rust-gradient-text">Rust</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore os recursos oficiais e junte-se à comunidade para dominar a programação multithreading
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="mb-2 flex justify-center">
                    <Badge variant="secondary" className="mb-3">
                      {resource.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-primary/50 transition-colors"
                    onClick={() => window.open(resource.url, '_blank')}
                  >
                    Acessar <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="gradient-primary text-white">
            Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CallToActionSection;