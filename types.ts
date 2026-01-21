
export interface Plan {
  id: string;
  name: string;
  ram: string;
  cpu: string;
  storage: string;
  price: string;
  recommended?: boolean;
}

export interface Rank {
  id: string;
  name: string;
  price: string;
  color: string;
  perks: string[];
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
