import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-6">
        <Separator className="mb-8" />
        <div className="text-center text-muted-foreground">
          <p className="text-lg mb-2">
            Site desenvolvido para demonstrar as vantagens da programação multithreading em 
            <span className="rust-gradient-text font-semibold"> Rust</span> para a disciplina de Conceitos de Linguagem de Programação da UFPEL
          </p>
          <p className="text-sm">
            Projeto acadêmico • 2025 • Construído com React, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;