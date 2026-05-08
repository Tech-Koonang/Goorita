export interface PackageItem {
  id: string;
  size: 'Small' | 'Medium' | 'Large' | 'Custom';
  length?: number;
  width?: number;
  height?: number;
  weight: number;
  valueUsd: number;
}

export interface Address {
  name: string;
  company?: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
}

export type PaymentStatus = 'Unpaid' | 'Pending Payment' | 'Paid' | 'Failed' | 'Expired' | 'Refunded';
export type PaymentMethod = 'Wallet' | 'Virtual Account' | 'QRIS' | 'Credit Card' | 'Credit Terms';
export type CustomerType = 'B2C' | 'B2B';
export type B2BStatus = 'Pending' | 'Approved' | 'Rejected' | 'None';

export interface ShipmentHistoryItem {
  id: string;
  date: string;
  sender: Address;
  receiver: Address;
  service: 'Saver' | 'Express';
  items: number;
  actualWeight: number;
  chargeableWeight: number;
  price: string;
  insurance: string;
  total: string;
  status: string;
  statusColor: string;
  paymentStatus: PaymentStatus;
  paymentMethod?: PaymentMethod;
  customerType?: CustomerType;
  b2bStatus?: B2BStatus;
}
