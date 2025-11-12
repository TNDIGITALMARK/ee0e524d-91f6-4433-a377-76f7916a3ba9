'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Check, ShoppingCart } from 'lucide-react';
import { products } from '@/lib/data';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { toast } from 'sonner';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addItem } = useCart();

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Por favor, selecione um tamanho');
      return;
    }

    addItem(product, selectedSize, 1);
    toast.success('Produto adicionado ao carrinho!');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-accent">
          Início
        </Link>
        {' / '}
        <Link href="/produtos" className="hover:text-accent">
          Produtos
        </Link>
        {' / '}
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/20">
            <Image
              src={product.images[selectedImageIndex]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImageIndex === index
                    ? 'border-primary'
                    : 'border-transparent'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-2">
              {product.brand}
            </div>
            <h1 className="text-4xl font-black mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-accent text-accent'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} avaliações)
              </span>
            </div>
          </div>

          <div>
            <div className="text-4xl font-black mb-2">
              {formatPrice(product.price)}
            </div>
            <div className="text-muted-foreground">
              ou 10x de {formatPrice(product.price / 10)} sem juros
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Size Selection */}
          <div>
            <div className="font-semibold mb-3">
              Selecione o tamanho:
              {selectedSize && (
                <span className="text-accent ml-2">{selectedSize}</span>
              )}
            </div>
            <div className="grid grid-cols-5 gap-3">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'default' : 'outline'}
                  onClick={() => setSelectedSize(size)}
                  className="font-semibold"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <div className="font-semibold mb-3">Cores disponíveis:</div>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="px-3 py-1 bg-secondary rounded-full text-sm"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <Button
            size="lg"
            className="w-full text-lg py-6 font-bold"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Adicionar ao Carrinho
          </Button>

          {/* Details */}
          <div className="border-t pt-6 space-y-3">
            <h3 className="font-bold text-lg mb-4">Informações Técnicas</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Material:</span>{' '}
                  {product.details.material}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Solado:</span>{' '}
                  {product.details.sole}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Garantia:</span>{' '}
                  {product.details.warranty}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-3xl font-black mb-8">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
