'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
          <h1 className="text-3xl font-black mb-4">Seu carrinho está vazio</h1>
          <p className="text-muted-foreground mb-8">
            Adicione produtos incríveis para começar suas compras!
          </p>
          <Link href="/produtos">
            <Button size="lg" className="font-semibold">
              Ver Produtos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-8">Carrinho de Compras</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`}
              className="flex gap-4 bg-card p-4 rounded-lg border"
            >
              <div className="relative w-24 h-24 shrink-0 rounded overflow-hidden">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <Link
                  href={`/produto/${item.product.id}`}
                  className="font-semibold hover:text-accent transition-colors line-clamp-2"
                >
                  {item.product.name}
                </Link>
                <div className="text-sm text-muted-foreground mt-1">
                  Tamanho: {item.size}
                </div>
                <div className="font-bold mt-2">
                  {formatPrice(item.product.price)}
                </div>
              </div>

              <div className="flex flex-col items-end justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.product.id, item.size)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      updateQuantity(
                        item.product.id,
                        item.size,
                        item.quantity - 1
                      )
                    }
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-semibold">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() =>
                      updateQuantity(
                        item.product.id,
                        item.size,
                        item.quantity + 1
                      )
                    }
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-card p-6 rounded-lg border sticky top-20">
            <h2 className="text-xl font-bold mb-6">Resumo do Pedido</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Frete</span>
                <span className="text-success font-semibold">Grátis</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
            </div>

            <Link href="/checkout">
              <Button size="lg" className="w-full font-bold mb-4">
                Finalizar Compra
              </Button>
            </Link>

            <Link href="/produtos">
              <Button variant="outline" size="lg" className="w-full font-semibold">
                Continuar Comprando
              </Button>
            </Link>

            <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
              <p>✓ Entrega rápida em todo o Brasil</p>
              <p className="mt-2">✓ Parcelamento em até 10x sem juros</p>
              <p className="mt-2">✓ Troca grátis em até 7 dias</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
