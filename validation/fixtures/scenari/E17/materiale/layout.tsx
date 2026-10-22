import './globals.css'
import { MotoreMovimento } from './motore-movimento'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="motion-pending">
      <body>
        <MotoreMovimento />
        {children}
        <script dangerouslySetInnerHTML={{ __html: "setTimeout(()=>document.documentElement.classList.remove('motion-pending'),3000)" }} />
      </body>
    </html>
  )
}
