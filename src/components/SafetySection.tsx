import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, CheckCircle, Lock } from "lucide-react";

const SafetySection = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="rust-gradient-text">Segurança</span> em Primeiro Lugar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rust elimina uma classe inteira de bugs que são comuns em outras linguagens,
            garantindo segurança em tempo de compilação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-elegant border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl text-primary">Memory Safety</CardTitle>
                  <CardDescription className="text-lg">
                    Sistema de ownership único no mundo
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Sem use-after-free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Sem double-free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Sem buffer overflows</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Sem memory leaks</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Lock className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl text-primary">Thread Safety</CardTitle>
                  <CardDescription className="text-lg">
                    Concorrência sem data races
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Sem data races</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Send + Sync traits automáticos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Mutex e RwLock seguros</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Arc&lt;T&gt; para compartilhamento</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Alert className="border-primary/20 bg-primary/5">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <AlertDescription className="text-base">
              <strong>Comparação com C++:</strong> Enquanto C++ permite data races e memory corruption 
              que só são descobertos em runtime (ou nunca), Rust detecta esses problemas em tempo de compilação.
            </AlertDescription>
          </Alert>

          <div className="bg-card rounded-lg p-6 shadow-elegant">
            <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span>Exemplo: Compartilhamento Seguro de Dados</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Badge variant="destructive" className="mb-3">❌ Código Perigoso (C++)</Badge>
                <div className="code-block">
                  <pre className="text-sm">
{`// C++ - Race condition possível
int counter = 0;

void increment() {
    for(int i = 0; i < 1000; ++i) {
        counter++; // PERIGOSO!
    }
}

// Múltiplas threads podem causar
// comportamento indefinido`}
                  </pre>
                </div>
              </div>
              
              <div>
                <Badge variant="secondary" className="mb-3">✅ Código Seguro (Rust)</Badge>
                <div className="code-block">
                  <pre className="text-sm">
{`use std::sync::{Arc, Mutex};
use std::thread;

let counter = Arc::new(Mutex::new(0));
let mut handles = vec![];

for _ in 0..10 {
    let counter = Arc::clone(&counter);
    let handle = thread::spawn(move || {
        let mut num = counter.lock().unwrap();
        *num += 1; // SEGURO!
    });
    handles.push(handle);
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;