import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-black tracking-tight">
              Step<span className="text-accent">Max</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Seu passo começa aqui. Os melhores tênis no melhor preço.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/stepmax.sneakers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/stepmax.sneakers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/stepmax_sneakers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/produtos" className="text-muted-foreground hover:text-accent transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-accent transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4">Políticas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/politica-trocas" className="text-muted-foreground hover:text-accent transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-uso" className="text-muted-foreground hover:text-accent transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@stepmax.com.br</li>
              <li>(21) 99999-9999</li>
              <li>@stepmax.sneakers</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} StepMax Sneakers. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
