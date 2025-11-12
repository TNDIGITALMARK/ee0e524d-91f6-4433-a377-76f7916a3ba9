import Image from 'next/image';
import { Heart, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-6">Sobre a StepMax</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A StepMax Sneakers nasceu da paixão por tênis e estilo urbano.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-lg overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200&q=80"
            alt="StepMax Store"
            fill
            className="object-cover"
          />
        </div>

        {/* Mission Statement */}
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Nosso objetivo é oferecer produtos originais e acessíveis, conectando
            nossos clientes com o que há de melhor no mundo sneaker. Cada passo é
            um passo de atitude.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-6">
            Acreditamos que tênis vão além de simples calçados - são expressões de
            personalidade, ferramentas de performance e símbolos de cultura. Por
            isso, selecionamos cuidadosamente cada produto em nosso catálogo,
            garantindo autenticidade, qualidade e as últimas tendências do mercado.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4">
            <div className="h-16 w-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Paixão</h3>
            <p className="text-muted-foreground">
              Vivemos e respiramos cultura sneaker. Nossa paixão se reflete em
              cada produto que oferecemos.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="h-16 w-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
              <Target className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Compromisso</h3>
            <p className="text-muted-foreground">
              Comprometidos com a autenticidade e qualidade. Todos os nossos
              produtos são 100% originais.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="h-16 w-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Excelência</h3>
            <p className="text-muted-foreground">
              Buscamos excelência em tudo: produtos, atendimento e experiência de
              compra.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="bg-secondary/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-black mb-6">Nossa História</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Fundada em 2020, a StepMax surgiu do desejo de tornar tênis
              autênticos mais acessíveis ao público brasileiro. Começamos com uma
              pequena seleção de modelos clássicos e, graças à confiança de nossos
              clientes, crescemos para nos tornar uma das lojas online de referência
              no segmento.
            </p>
            <p>
              Hoje, contamos com milhares de clientes satisfeitos em todo o Brasil,
              oferecendo as melhores marcas do mercado com preços competitivos e
              condições de pagamento facilitadas.
            </p>
            <p>
              Nossa equipe é formada por entusiastas de sneakers que entendem a
              importância de cada detalhe - desde a escolha do modelo perfeito até
              o recebimento seguro em sua casa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
