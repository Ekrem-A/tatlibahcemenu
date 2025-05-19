'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

interface Subcategory {
  id: number;
  name: string;
  slug: string;
  image_url: string;
}

export default function SubcategoriesPage() {
  const { category } = useParams();
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubcategories = async () => {
      // 1. Ana kategoriyi slug'a göre bul
      const { data: mainCat, error: catError } = await supabase
        .from('main_categories')
        .select('id')
        .eq('slug', category)
        .single();

      if (catError || !mainCat) {
        console.error('Ana kategori bulunamadı:', catError);
        setSubcategories([]);
        setLoading(false);
        return;
      }

      // 2. O id'ye sahip alt kategorileri çek
      const { data, error } = await supabase
        .from('subcategories')
        .select('*')
        .eq('main_category_id', mainCat.id);

      if (error) {
        console.error('Alt kategori hatası:', error);
        setSubcategories([]);
      } else {
        setSubcategories(data || []);
      }

      setLoading(false);
    };

    fetchSubcategories();
  }, [category]);

  if (loading) return <p className="p-4">Yükleniyor...</p>;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 capitalize">{category}</h1>

      {subcategories.length === 0 ? (
        <p>Alt kategori bulunamadı.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {subcategories.map((subcat) => (
            <div
              key={subcat.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-md transition duration-200"
            >
              <img
                src={subcat.image_url}
                alt={subcat.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{subcat.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
