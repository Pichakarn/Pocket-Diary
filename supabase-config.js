import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://ooozqddxvxeykwubumli.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_xwsBeo4TJfLSwnQUiV2uSw_7GwLZd85';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
