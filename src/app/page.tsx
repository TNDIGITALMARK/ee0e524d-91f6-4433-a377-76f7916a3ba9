import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Truck, BadgeCheck, CreditCard, RefreshCw, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { products, testimonials, trustSignals } from '@/lib/data';

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&q=80"
            alt="Hero Banner"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Seu passo começa aqui
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-medium">
            Os melhores tênis, no melhor preço
          </p>
          <Link href="/produtos">
            <Button size="lg" className="text-lg px-8 py-6 h-auto font-bold">
              Ver Coleção
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => {
              const IconComponent = {
                Truck,
                BadgeCheck,
                CreditCard,
                RefreshCw,
              }[signal.icon] || Truck;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 p-4"
                >
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg">{signal.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {signal.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Produtos em Destaque</h2>
            <p className="text-muted-foreground text-lg">
              Os tênis mais procurados e amados pelos nossos clientes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/produtos">
              <Button size="lg" variant="outline" className="font-semibold">
                Ver Todos os Produtos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">O Que Dizem Nossos Clientes</h2>
            <p className="text-muted-foreground text-lg">
              Experiências reais de quem já comprou com a StepMax
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card p-6 rounded-lg shadow-md space-y-4"
              >
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore nossa coleção completa e encontre o tênis perfeito para você
          </p>
          <Link href="/produtos">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 h-auto font-bold"
            >
              Comprar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}