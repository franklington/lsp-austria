import Link from 'next/link'
import { companyProfile } from '@/data/site-content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2026 {companyProfile.legalName}</p>
          <div className="footer-links">
            <Link href="/datenschutz">Datenschutz</Link>
            <span>•</span>
            <Link href="/impressum">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
