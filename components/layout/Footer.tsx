import Link from 'next/link'
import { companyProfile } from '@/data/site-content'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2026 {companyProfile.legalName}</p>
          <div className="footer-links flex items-center">
            <Link href="/datenschutz">Datenschutz</Link>
            <Separator orientation="vertical" className="mx-3 h-3.5 bg-white/25" />
            <Link href="/impressum">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
