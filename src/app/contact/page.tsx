import type { Metadata } from 'next';
import ContactBoard from '@/components/ContactBoard';

export const metadata: Metadata = {
  title: 'Trạm Truyền Tin - MARKIGAI',
};

export default function ContactPage() {
  return <ContactBoard />;
}
