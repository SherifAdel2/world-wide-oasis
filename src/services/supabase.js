import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
export const supabaseUrl = "https://krbgvixnezlaxluylwza.supabase.co";
const supabaseKey = "sb_publishable_yTsT-GxTPpcitW_HqzKioA_BSRS9NAe";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
