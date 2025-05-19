'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  description: string;
}

export default function ProductPage() {
  const { subcategoryId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log('subcategoryId from URL:', subcategoryId);

      // 1. subcategory slug -> id
      const { data: subcat, error: subcatError } = await supabase
        .from('subcategories')
        .select('id')
        .eq('slug', subcategoryId)
        .single();

      if (subcatError || !subcat) {
        console.error('Alt kategori bulunamadı:', subcatError);
        setProducts([]);
        setLoading(false);
        return;
      }

      console.log('Alt kategori ID:', subcat.id);

      // 2. product'ları çek
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('subcategory_id', subcat.id);

      if (error) {
        console.error('Ürün çekme hatası:', error);
        setProducts([]);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    };

    fetchProducts();
  }, [subcategoryId]);

  if (loading) return <p className="p-4">Yükleniyor...</p>;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 capitalize">Ürünler</h1>

      {products.length === 0 ? (
        <p>Bu alt kategoriye ait ürün bulunamadı.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-md transition duration-200"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-blue-600 font-bold">{product.price} ₺</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
