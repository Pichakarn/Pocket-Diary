// ==========================================
// POCKET DIARY - SUPABASE CONFIGURATION
// ==========================================

const SUPABASE_URL = 'https://ooozqddxvxeykwubumli.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_xwsBeo4TJfLSwnQUiV2uSw_7GwLZd85';

// สร้างตัวแปร client โดยเช็คความปลอดภัย
let supabase = null;
try {
    if (window.supabase && typeof window.supabase.createClient === 'function') {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } else if (window.createClient) {
        supabase = window.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
} catch (e) {
    console.error('Supabase Init Error:', e);
}

// ฟังก์ชันสากลสำหรับเช็คสถานะการล็อกอิน
document.addEventListener('DOMContentLoaded', async () => {
    document.body.style.overflowX = 'hidden';
    document.body.style.overscrollBehaviorY = 'auto';

    const currentPath = window.location.pathname;
    if (!currentPath.endsWith('index.html') && currentPath !== '/' && !currentPath.endsWith('/')) {
        if (supabase) {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                window.location.href = 'index.html';
            }
        }
    }
});

// ฟังก์ชัน Popup น่ารักๆ
function showPopup(title, message, icon = '✨') {
    let popupOverlay = document.getElementById('cute-popup');
    
    if (!popupOverlay) {
        const popupHTML = `
        <div id="cute-popup" class="fixed inset-0 flex items-center justify-center p-4 hidden z-50 transition-opacity" style="background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(4px);">
            <div class="bg-white rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl transform scale-95 transition-transform" id="popup-box" style="border: 1px solid #e5e7eb;">
                <div id="popup-icon" class="text-4xl mb-3">${icon}</div>
                <h3 id="popup-title" class="text-lg font-bold text-neutral-900 mb-1">${title}</h3>
                <p id="popup-message" class="text-sm text-neutral-600 mb-6">${message}</p>
                <button onclick="closePopup()" class="w-full py-2.5 rounded-xl font-medium text-sm cursor-pointer" style="background: #111111; color: #ffffff;">ตกลง</button>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', popupHTML);
        popupOverlay = document.getElementById('cute-popup');
    } else {
        document.getElementById('popup-title').innerText = title;
        document.getElementById('popup-message').innerText = message;
        document.getElementById('popup-icon').innerText = icon;
    }

    popupOverlay.classList.remove('hidden');
    setTimeout(() => {
        const box = document.getElementById('popup-box');
        if(box) {
            box.classList.remove('scale-95');
            box.classList.add('scale-100');
        }
    }, 10);
}

function closePopup() {
    const modal = document.getElementById('cute-popup');
    const box = document.getElementById('popup-box');
    if (modal && box) {
        box.classList.remove('scale-100');
        box.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 150);
    }
}
