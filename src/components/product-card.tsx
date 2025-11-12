import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/produto/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-secondary/20">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {product.featured && (
            <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold">
              Destaque
            </div>
          )}
        </div>
      </Link>

      <CardContent className="p-4 space-y-2">
        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
          {product.brand}
        </div>
        <Link href={`/produto/${product.id}`}>
          <h3 className="font-semibold text-lg leading-tight group-hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="space-y-1">
          <div className="text-2xl font-bold">{formatPrice(product.price)}</div>
          <div className="text-xs text-muted-foreground">
            ou 10x de {formatPrice(product.price / 10)}
          </div>
        </div>
        <Link href={`/produto/${product.id}`}>
          <Button size="sm" className="font-semibold">
            Ver Detalhes
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
