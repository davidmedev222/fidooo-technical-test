import '@/styles/globals.css'
import { baseMetadata } from '@/utils'

export const metadata = {
  ...baseMetadata
}

interface RootLayoutProps {
  /** Los componentes hijo que se renderizarán dentro del diseño. */
  children: React.ReactNode
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
