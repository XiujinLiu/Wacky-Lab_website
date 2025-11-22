export interface Dialog {
  id: string;
  description: string;
  offsetX: number;
  offsetY: number;
};

export interface Hotspot {
  id: string;
  top: string;
  left: string;
  h: string;
  w: string;
  dialogs: Dialog[];
};

export interface NewsItem {
  id: string | number;
  date: string;
  title: string;
  summary: string;
};

export interface ContactLabel {
  id: string;
  top: string;
  left: string;
  discription: string;
  color: string;
};

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

