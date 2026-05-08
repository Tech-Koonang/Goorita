export const LOCATIONS = {
  origins: [
    { country: 'Indonesia', code: 'ID' }
  ],
  originProvinces: [
    { name: 'DKI Jakarta', code: 'JKT', isPickupAvailable: true },
    { name: 'Bali', code: 'BALI', isPickupAvailable: true },
    { name: 'Jawa Barat', code: 'JBR', isPickupAvailable: false },
    { name: 'Jawa Timur', code: 'JTM', isPickupAvailable: false },
  ],
  destinations: [
    { country: 'Singapore', code: 'SG', zone: 'A' },
    { country: 'Malaysia', code: 'MY', zone: 'A' },
    { country: 'Japan', code: 'JP', zone: 'B' },
    { country: 'South Korea', code: 'KR', zone: 'B' },
    { country: 'Australia', code: 'AU', zone: 'C' },
    { country: 'United States', code: 'US', zone: 'D' },
    { country: 'United Kingdom', code: 'UK', zone: 'E' },
  ],
};

export const POSTAL_CODES: Record<string, any[]> = {
  'SG': [
    { code: '048616', city: 'Singapore', state: 'Singapore' },
    { code: '098311', city: 'Singapore', state: 'Singapore' },
  ],
  'US': [
    { code: '10001', city: 'New York', state: 'NY' },
    { code: '90001', city: 'Los Angeles', state: 'CA' },
    { code: '99501', city: 'Anchorage', state: 'AK', isRemote: true }, // Remote area
  ],
  'ID': [
    { code: '12190', city: 'Jakarta Selatan', state: 'DKI Jakarta' },
    { code: '11110', city: 'Jakarta Barat', state: 'DKI Jakarta' },
    { code: '80361', city: 'Badung', state: 'Bali' },
    { code: '40111', city: 'Bandung', state: 'Jawa Barat' },
  ]
};

// Rates in IDR per kg based on Zone
export const RATES = {
  'A': { saver: 45000, express: 85000, transitSaver: '3-5 days', transitExpress: '1-2 days' },
  'B': { saver: 75000, express: 145000, transitSaver: '4-6 days', transitExpress: '2-3 days' },
  'C': { saver: 110000, express: 190000, transitSaver: '5-7 days', transitExpress: '3-4 days' },
  'D': { saver: 180000, express: 320000, transitSaver: '7-10 days', transitExpress: '4-5 days' },
  'E': { saver: 160000, express: 280000, transitSaver: '6-9 days', transitExpress: '3-5 days' },
};

export const REMOTE_AREA_SURCHARGE = 250000;
export const INSURANCE_RATE = 0.005; // 0.5% of declared value
