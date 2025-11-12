'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/data';
import { ProductCategory } from '@/lib/types';
import { Button } from '@/components/ui/button';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');

  const categories = [
    { value: 'all' as const, label: 'Todos' },
    { value: 'esportivos' as const, label: 'Tênis Esportivos' },
    { value: 'casuais' as const, label: 'Tênis Casuais' },
    { value: 'corrida' as const, label: 'Tênis de Corrida' },
    { value: 'infantis' as const, label: 'Tênis Infantis' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-black mb-4">Coleção StepMax</h1>
        <p className="text-muted-foreground text-lg">
          Explore nossa coleção completa de tênis originais
        </p>
      </div>

      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={selectedCategory === category.value ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category.value)}
            className="font-semibold"
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Nenhum produto encontrado nesta categoria.
          </p>
        </div>
      )}
    </div>
  );
}
