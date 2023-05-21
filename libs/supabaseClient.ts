import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

import { Database } from '@/types_db';
import { ProductWithPrice } from '@/types';

export const supabase = createBrowserSupabaseClient<Database>();

export const getActiveProductsWithPrices = async (): Promise<ProductWithPrice[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' });

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
}

export const getSongs = async (): Promise<any> => {
  const { data, error } = await supabase
    .from('songs')
    .select('*')

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};
