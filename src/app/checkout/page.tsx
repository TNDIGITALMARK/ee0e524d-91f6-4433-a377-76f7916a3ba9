'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Lock, CreditCard, Smartphone, Barcode } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Pedido realizado com sucesso!');
    clearCart();
    router.push('/');
  };

  if (items.length === 0) {
    router.push('/carrinho');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-8">Finalizar Compra</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Info */}
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-6">Dados Pessoais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Nome completo" required />
                <Input placeholder="CPF" required />
                <Input type="email" placeholder="E-mail" required />
                <Input type="tel" placeholder="Telefone" required />
              </div>
            </div>

            {/* Address */}
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-6">Endereço de Entrega</h2>
              <div className="space-y-4">
                <Input placeholder="CEP" required />
                <div className="grid grid-cols-3 gap-4">
                  <Input placeholder="Rua" className="col-span-2" required />
                  <Input placeholder="Número" required />
                </div>
                <Input placeholder="Complemento" />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Bairro" required />
                  <Input placeholder="Cidade" required />
                </div>
                <Input placeholder="Estado" required />
              </div>
            </div>

            {/* Payment */}
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-6">Forma de Pagamento</h2>

              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50 transition-colors">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label
                      htmlFor="credit-card"
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <CreditCard className="h-5 w-5" />
                      <span className="font-semibold">
                        Cartão de Crédito - até 10x sem juros
                      </span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50 transition-colors">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label
                      htmlFor="pix"
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <Smartphone className="h-5 w-5" />
                      <span className="font-semibold">Pix - Aprovação imediata</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-secondary/50 transition-colors">
                    <RadioGroupItem value="boleto" id="boleto" />
                    <Label
                      htmlFor="boleto"
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <Barcode className="h-5 w-5" />
                      <span className="font-semibold">Boleto - Vencimento em 3 dias</span>
                    </Label>
                  </div>
                </div>
              </RadioGroup>

              {paymentMethod === 'credit-card' && (
                <div className="mt-6 space-y-4">
                  <Input placeholder="Número do cartão" required />
                  <Input placeholder="Nome no cartão" required />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Validade (MM/AA)" required />
                    <Input placeholder="CVV" required />
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              <span>Pagamento 100% seguro com criptografia SSL</span>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-card p-6 rounded-lg border sticky top-20">
              <h2 className="text-xl font-bold mb-6">Resumo do Pedido</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-3"
                  >
                    <div className="relative w-16 h-16 shrink-0 rounded overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold line-clamp-2">
                        {item.product.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Tam: {item.size} | Qtd: {item.quantity}
                      </div>
                      <div className="text-sm font-bold mt-1">
                        {formatPrice(item.product.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pt-6 border-t">
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

              <Button type="submit" size="lg" className="w-full font-bold">
                Confirmar Pedido
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
