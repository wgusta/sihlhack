import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'sihlhack | Rollenbasierter Hackathon Schweiz',
    template: '%s | sihlhack',
  },
  description: 'Der erste teilnehmerinnen-fokussierte, rollenbasierte Hackathon der Schweiz. Historische Industriedaten aus dem Sihltal digitalisieren mit KI. Entwickler, Designer, Historiker: Jede Rolle zählt.',
  keywords: ['hackathon', 'Sihltal', 'Zürich', 'historische Daten', 'Digitalisierung', 'KI', 'Machine Learning', 'OCR', 'Schweiz', 'rollenbasiert'],
  authors: [{ name: 'sihlhack team' }],
  metadataBase: new URL('https://sihlhack.ch'),
  openGraph: {
    title: 'sihlhack | Historische Daten treffen auf moderne KI',
    description: 'Der erste teilnehmerinnen-fokussierte Hackathon der Schweiz. 100% Überschuss wird Preisgeld. Jede Rolle zählt: Entwickler, Designer, Historiker.',
    url: 'https://sihlhack.ch',
    siteName: 'sihlhack',
    locale: 'de_CH',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'sihlhack - Historische Daten treffen auf moderne KI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sihlhack | Rollenbasierter Hackathon Schweiz',
    description: 'Historische Industriedaten aus dem Sihltal digitalisieren. Jede Rolle zählt. 100% Überschuss wird Preisgeld.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://sihlhack.ch',
  },
}

// JSON-LD structured data for the event
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'sihlhack 2025',
  description: 'Der erste teilnehmerinnen-fokussierte, rollenbasierte Hackathon der Schweiz. Historische Industriedaten aus dem Sihltal digitalisieren mit KI.',
  startDate: '2025-10-18T09:00:00+02:00',
  endDate: '2025-10-19T18:00:00+02:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Sihltal, Zürich',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zürich',
      addressRegion: 'ZH',
      addressCountry: 'CH',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'sihlhack',
    url: 'https://sihlhack.ch',
  },
  offers: {
    '@type': 'Offer',
    price: '480',
    priceCurrency: 'CHF',
    availability: 'https://schema.org/InStock',
    url: 'https://sihlhack.ch/register',
    validFrom: '2024-12-01',
  },
  image: 'https://sihlhack.ch/og-image.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-off-white">
        {children}

        {/* Matomo Analytics */}
        <Script id="matomo" strategy="afterInteractive">
          {`
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//analytics.sihlhack.ch/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
        <noscript>
          <img
            referrerPolicy="no-referrer-when-downgrade"
            src="//analytics.sihlhack.ch/matomo.php?idsite=1&amp;rec=1"
            style={{ border: 0 }}
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
