'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

type Category = {
  id: number;
  name: string;
  slug: string;
  image_url?: string;
};

export default function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase.from('main_categories').select('*');
      if (error) {
        console.error('Kategori verisi alınamadı:', error);
        setCategories([]);
      } else {
        setCategories(data || []);
      }
      setLoading(false);
    }

    fetchCategories();
  }, []);

  if (loading) {
    return <p className="p-4">Yükleniyor...</p>;
  }

  return (    
    <main className="p-4">    
      
      <h1 className="text-2xl font-bold mb-4">Kategoriler</h1>

      {categories.length === 0 ? (
        <p>Hiç kategori bulunamadı.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => router.push(`/${cat.slug}`)}
              className="cursor-pointer border rounded-xl overflow-hidden shadow hover:shadow-md transition duration-200"
            >
              <img
                src={cat.image_url || '/img/default.jpg'}
                alt={cat.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{cat.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
