import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, AlertTriangle } from "lucide-react";

const languages = [
  {
    name: "Rust",
    color: "rust-orange",
    scores: {
      safety: 10,
      performance: 10,
      concurrency: 10,
      learning: 6
    },
    pros: ["Memory safety garantida", "Zero-cost abstractions", "Ownership system", "Compilador rigoroso"],
    cons: ["Curva de aprendizado íngreme", "Tempo de compilação"]
  },
  {
    name: "C++",
    color: "blue-500",
    scores: {
      safety: 3,
      performance: 9,
      concurrency: 5,
      learning: 4
    },
    pros: ["Performance extrema", "Controle total", "Ecossistema maduro"],
    cons: ["Memory unsafety", "Data races", "Complexidade de threads"]
  },
  {
    name: "Go",
    color: "cyan-500",
    scores: {
      safety: 7,
      performance: 7,
      concurrency: 9,
      learning: 9
    },
    pros: ["Sintaxe simples", "Goroutines", "Garbage collector"],
    cons: ["Overhead do GC", "Menor controle de memória"]
  },
  {
    name: "Elixir",
    color: "purple-500",
    scores: {
      safety: 7,
      performance: 6,
      concurrency: 10,
      learning: 8
    },
    pros: ["Tolerância a falhas (supervisão)", "Concorrência escalável (Actors/OTP)", "Imutabilidade de dados"],
    cons: ["Curva de aprendizado (paradigma funcional/OTP)", "Depuração distribuída complexa", "Performance em single-thread"]
  }
];

const ScoreBar = ({ score, color }: { score: number; color: string }) => (
  <div className="flex items-center space-x-2">
    <div className="w-24 bg-muted rounded-full h-2">
      <div 
        className={`h-2 rounded-full bg-${color}`} 
        style={{ width: `${score * 10}%` }}
      ></div>
    </div>
    <span className="text-sm font-medium">{score}/10</span>
  </div>
);

const ComparisonSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="rust-gradient-text">Rust</span> vs Outras Linguagens
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como Rust se compara com outras linguagens populares em critérios 
            essenciais para desenvolvimento multithread
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {languages.map((lang, index) => (
            <Card 
              key={index} 
              className={`shadow-elegant transition-all duration-300 hover:-translate-y-2 ${
                lang.name === 'Rust' ? 'border-primary shadow-rust' : ''
              }`}
            >
              <CardHeader>
                <CardTitle className="text-xl flex items-center justify-between">
                  {lang.name}
                  {lang.name === 'Rust' && <Badge className="bg-primary">Recomendado</Badge>}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Memory Safety</span>
                    </div>
                    <ScoreBar score={lang.scores.safety} color={lang.color} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Performance</span>
                    </div>
                    <ScoreBar score={lang.scores.performance} color={lang.color} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Concorrência</span>
                    </div>
                    <ScoreBar score={lang.scores.concurrency} color={lang.color} />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Facilidade</span>
                    </div>
                    <ScoreBar score={lang.scores.learning} color={lang.color} />
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-600 text-sm mb-2">Vantagens</h4>
                    <ul className="space-y-1">
                      {lang.pros.map((pro, i) => (
                        <li key={i} className="flex items-start space-x-2 text-xs">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-600 text-sm mb-2">Desvantagens</h4>
                    <ul className="space-y-1">
                      {lang.cons.map((con, i) => (
                        <li key={i} className="flex items-start space-x-2 text-xs">
                          <X className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-3">
                <AlertTriangle className="h-8 w-8 text-primary" />
                <span>Por que Rust vence?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Unique Selling Points</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span><strong>Zero-cost abstractions:</strong> Performance de C com segurança de linguagens high-level</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span><strong>Ownership system:</strong> Previne bugs em tempo de compilação</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span><strong>Sem runtime overhead:</strong> Nenhum garbage collector ou runtime pesado</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Casos de Uso Ideais</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary">🚀</Badge>
                      <span>Sistemas de baixo nível</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary">⚡</Badge>
                      <span>Aplicações de alta performance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary">🔧</Badge>
                      <span>Ferramentas de desenvolvimento</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary">🌐</Badge>
                      <span>Serviços web de alta concorrência</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;