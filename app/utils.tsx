export interface Dialog {
  id: string;
  description: string;
  offsetX: string;
  offsetY: string;
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

