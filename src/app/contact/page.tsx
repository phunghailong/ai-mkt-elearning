import type { Metadata } from 'next';
import ContactBoard from '@/components/ContactBoard';

export const metadata: Metadata = {
  title: 'Trạm Truyền Tin - AI MKT Đại Hải Trình',
};

export default function ContactPage() {
  return <ContactBoard />;
}
