import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'sihlhack | Participant-Oriented Hackathon',
    template: '%s | sihlhack',
  },
  description: 'Switzerland\'s first participant-oriented hackathon. Digitalize historical industrial records from the Sihl Valley and surface new insights from the past.',
  keywords: ['hackathon', 'Sihl Valley', 'Zurich', 'historical data', 'digitalization', 'AI', 'image recognition'],
  authors: [{ name: 'sihlhack team' }],
  openGraph: {
    title: 'sihlhack | Participant-Oriented Hackathon',
    description: 'Switzerland\'s first participant-oriented hackathon. Transform historical industrial records into future insights.',
    url: 'https://sihlhack.ch',
    siteName: 'sihlhack',
    locale: 'de_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sihlhack | Participant-Oriented Hackathon',
    description: 'Switzerland\'s first participant-oriented hackathon. Transform historical industrial records into future insights.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="min-h-screen bg-off-white">
        {children}
      </body>
    </html>
  )
}
