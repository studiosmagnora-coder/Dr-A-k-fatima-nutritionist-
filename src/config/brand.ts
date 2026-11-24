export const BRAND_CONFIG = {
  professionalName: 'Dr. Amtaul Kareem Fatima',
  subtitle: "Women's Nutrition & Wellness",
  qualification: 'B.Sc. and M.Sc. in Dietetics',
  qualificationBadge: 'B.Sc. | M.Sc. in Dietetics',
  positioning: "Women's Weight Management & Clinical Nutrition Specialist",
  consultationType: '100% Online Consultations',
  // Central configurable WhatsApp number (update with actual country code + digits)
  WHATSAPP_NUMBER: '91XXXXXXXXXX',
  WHATSAPP_DEFAULT_MESSAGE:
    'Hello, I would like to enquire about an online nutrition consultation with Dr. Amtaul Kareem Fatima. Please share the consultation details.',
  // Optional Google Business Profile URL for verified Google Reviews integration
  GOOGLE_REVIEWS_URL: '',
  // Optional CRM / Google Sheets / Email endpoint via Vite environment variable (no secrets in frontend)
  CONSULTATION_WEBHOOK_URL: import.meta.env.VITE_CONSULTATION_WEBHOOK_URL || '',
} as const;

export const GENERATED_IMAGES = {
  heroWoman: '/src/assets/images/hero_wellness_woman_1795526856057.jpg',
  dietitianPortrait: '/src/assets/images/dietitian_portrait_1795526856623.jpg',
  onlineSession: '/src/assets/images/online_session_lifestyle_1795526856776.jpg',
  ctaBackdrop: '/src/assets/images/nutrition_cta_backdrop_1795526856805.jpg',
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const cleanNumber = BRAND_CONFIG.WHATSAPP_NUMBER.replace(/[^\d]/g, '');
  const message = encodeURIComponent(customMessage || BRAND_CONFIG.WHATSAPP_DEFAULT_MESSAGE);
  if (!cleanNumber || BRAND_CONFIG.WHATSAPP_NUMBER.includes('X')) {
    // Falls back gracefully to WhatsApp share intent if placeholder X digits haven't been replaced yet
    return `https://wa.me/?text=${message}`;
  }
  return `https://wa.me/${cleanNumber}?text=${message}`;
}
