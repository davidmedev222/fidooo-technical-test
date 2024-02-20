import { Metadata } from 'next'

export const baseMetadata: Metadata = {
  title: 'David Mamani - Fidooo Technical Test',
  description:
    'Sitio web creado por David Mamani a partir de una prueba técnica dictada por la empresa Fidooo Engineering para el puesto de Desarrollador Frontend.',
  generator: 'Next.js',
  applicationName: 'Fidooo - Technical Test',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Technical',
    'Test',
    'Fidooo',
    'Fidooo Engineering',
    'David Mamani',
    'davidmedev',
    'Frontend Developer',
    'Website'
  ],
  authors: [{ name: 'David Mamani', url: 'https://www.linkedin.com/in/davidmedev/' }],
  creator: 'David Mamani',
  publisher: 'David Mamani',
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: 'David Mamani - Fidooo Technical Test',
    description:
      'Sitio web creado por David Mamani a partir de una prueba técnica dictada por la empresa Fidooo Engineering para el puesto de Desarrollador Frontend.',
    url: 'https://fidooo-technical-test.vercel.app/',
    siteName: 'Fidooo - Technical Test',
    locale: 'es',
    type: 'website'
  }
}
