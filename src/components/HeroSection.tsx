import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react";
const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white/20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white/10 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/15 animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
            RUST
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            O futuro da programação multithreading está aqui
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Descubra como Rust revoluciona a concorrência com segurança de memória, 
            performance extrema e elegância de código
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-rust transition-bounce hover:scale-105">
              Descubra as Vantagens
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center justify-center space-x-3">
              <Zap className="h-8 w-8 text-white/90" />
              <span className="text-lg font-medium">Performance Extrema</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-white/90" />
              <span className="text-lg font-medium">Segurança Em Tempo de COm</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Cpu className="h-8 w-8 text-white/90" />
              <span className="text-lg font-medium">Abstrações de Sincronização</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;