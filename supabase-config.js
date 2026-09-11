// ==========================================
// POCKET DIARY - SUPABASE CONFIGURATION
// ==========================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// ข้อมูลการเชื่อมต่อโปรเจกต์ Supabase ของคุณ
const SUPABASE_URL = 'https://ooozqddxvxeykwubumli.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_xwsBeo4TJfLSwnQUiV2uSw_7GwLZd85';

// สร้าง Supabase Client สำหรับนำไปใช้ในไฟล์อื่น ๆ ของโปรเจกต์
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

console.log('Pocket Diary: Supabase Connected Successfully! 📱✨');
