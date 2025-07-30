import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, MessageSquare, Layers, Cpu } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recursos de <span className="rust-gradient-text">Multithreading</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore os três pilares da concorrência em Rust: threads nativas, 
            programação assíncrona e canais de comunicação
          </p>
        </div>

        <Tabs defaultValue="threads" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-8">
            <TabsTrigger value="threads" className="flex items-center space-x-2 p-4">
              <GitBranch className="h-5 w-5" />
              <span>Threads Nativas</span>
            </TabsTrigger>
            <TabsTrigger value="async" className="flex items-center space-x-2 p-4">
              <Layers className="h-5 w-5" />
              <span>Async/Await</span>
            </TabsTrigger>
            <TabsTrigger value="channels" className="flex items-center space-x-2 p-4">
              <MessageSquare className="h-5 w-5" />
              <span>Channels</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="threads" className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <GitBranch className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl">Threads Nativas</CardTitle>
                    <CardDescription className="text-lg">
                      Controle direto sobre threads do sistema operacional
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Características</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Badge variant="secondary">✓</Badge>
                        <span>Ownership garantido em tempo de compilação</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Badge variant="secondary">✓</Badge>
                        <span>join() para sincronização segura</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Badge variant="secondary">✓</Badge>
                        <span>move closures para transferência de dados</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Badge variant="secondary">✓</Badge>
                        <span>thread::spawn() com tipo safety</span>
                      </li>
                    </ul>
                  </div>
                  <div className="code-block">
                    <pre className="text-sm">
{`use std::thread;

fn main() {
    let x = 5;
    let handle = thread::spawn(move || {
        println!("Valor: {}", x);
        x * 2
    });
    
    let result = handle.join().unwrap();
    println!("Resultado: {}", result);
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="async" className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Layers className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl">Programação Assíncrona</CardTitle>
                    <CardDescription className="text-lg">
                      Concorrência cooperativa com async/await
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Vantagens</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Badge variant="secondary">⚡</Badge>
                        <span>Milhares de tasks simultâneas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Badge variant="secondary">⚡</Badge>
                        <span>Baixo overhead de memória</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Badge variant="secondary">⚡</Badge>
                        <span>Sintaxe familiar e limpa</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Badge variant="secondary">⚡</Badge>
                        <span>Zero-cost abstractions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="code-block">
                    <pre className="text-sm">
{`use tokio;

#[tokio::main]
async fn main() {
    let task1 = tokio::spawn(async {
        println!("Task 1 executando");
        42
    });
    
    let task2 = tokio::spawn(async {
        println!("Task 2 executando");
        24
    });
    
    let (r1, r2) = tokio::join!(task1, task2);
    println!("Resultados: {:?}, {:?}", r1, r2);
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="channels" className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl">Canais de Comunicação</CardTitle>
                    <CardDescription className="text-lg">
                      Comunicação thread-safe com channels
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Tipos de Channels</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Badge variant="secondary">📨</Badge>
                        <span>MPSC (Multiple Producer, Single Consumer)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Badge variant="secondary">🔄</Badge>
                        <span>Bounded e Unbounded channels</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Badge variant="secondary">🛡️</Badge>
                        <span>Thread-safe por design</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Badge variant="secondary">⚡</Badge>
                        <span>Zero-copy quando possível</span>
                      </li>
                    </ul>
                  </div>
                  <div className="code-block">
                    <pre className="text-sm">
{`use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    
    thread::spawn(move || {
        let msg = "Olá do thread!";
        tx.send(msg).unwrap();
    });
    
    let received = rx.recv().unwrap();
    println!("Recebido: {}", received);
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturesSection;