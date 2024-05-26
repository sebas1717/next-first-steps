import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Title Contat',
    description: 'SEO descripcion Contact',
    keywords: ['Contact page','Contacto','Quienes somos','....']
}


export default function Contact() {
  return (
    <span className="text-7xl">Contact Page</span>
  )
}
