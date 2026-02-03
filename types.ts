
export interface Book {
  id: string;
  title: string;
  author: string;
  edition: string;
  summary: string;
  image: string;
  badge?: string;
  audioUrl?: string;
  pdfUrl?: string;
}

export interface BookCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  books: Book[];
  subtopics?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum ViewState {
  LANDING = 'LANDING',
  HOME = 'HOME',
  CATALOGUE = 'CATALOGUE',
  NEW_ARRIVAL = 'NEW_ARRIVAL',
  AUDIO_BOOKS = 'AUDIO_BOOKS',
  MAGAZINES = 'MAGAZINES',
  CONTACT_US = 'CONTACT_US',
  ABOUT_US = 'ABOUT_US'
}
