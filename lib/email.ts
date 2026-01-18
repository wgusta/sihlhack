import { Resend } from 'resend'
import { formatCHF } from './utils'

let resendInstance: Resend | null = null

function getResend(): Resend {
  if (!resendInstance) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set')
    }
    resendInstance = new Resend(process.env.RESEND_API_KEY)
  }
  return resendInstance
}

const FROM_EMAIL = 'sihlhack <noreply@sihlhack.ch>'

/**
 * Send magic link email for authentication
 */
export async function sendMagicLinkEmail(email: string, magicLink: string): Promise<void> {
  const resend = getResend()
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: 'Dein sihlhack Login-Link',
    html: `
      <div style="font-family: 'IBM Plex Mono', monospace; max-width: 600px; margin: 0 auto;">
        <h1 style="font-family: 'Playfair Display', serif; color: #1A1A1A;">
          sihl<span style="color: #E62F2D;">hack</span>
        </h1>
        <p>Klicke auf den folgenden Link, um dich anzumelden:</p>
        <p style="margin: 24px 0;">
          <a href="${magicLink}" style="background: #E62F2D; color: white; padding: 12px 24px; text-decoration: none; display: inline-block;">
            Platz sichern
          </a>
        </p>
        <p style="color: #8B7355; font-size: 14px;">
          Der Link ist 15 Minuten gültig und kann nur einmal verwendet werden.
        </p>
        <p style="color: #8B7355; font-size: 14px;">
          Falls du diese E-Mail nicht angefordert hast, kannst du sie ignorieren.
        </p>
      </div>
    `,
  })
}

/**
 * Send registration confirmation email
 */
export async function sendRegistrationConfirmationEmail(
  email: string,
  name: string | null,
  amountChf: number
): Promise<void> {
  const resend = getResend()
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: 'Deine sihlhack Anmeldung ist bestätigt',
    html: `
      <div style="font-family: 'IBM Plex Mono', monospace; max-width: 600px; margin: 0 auto;">
        <h1 style="font-family: 'Playfair Display', serif; color: #1A1A1A;">
          sihl<span style="color: #E62F2D;">hack</span>
        </h1>
        <p>Hallo${name ? ` ${name}` : ''},</p>
        <p>Deine Anmeldung für sihlhack wurde erfolgreich abgeschlossen.</p>
        <div style="background: #F5F0E1; padding: 16px; margin: 24px 0; border-left: 4px solid #B5A642;">
          <p style="margin: 0;"><strong>Betrag:</strong> ${formatCHF(amountChf)}</p>
          <p style="margin: 8px 0 0 0;"><strong>Status:</strong> Bezahlt</p>
        </div>
        <p>
          Du kannst den aktuellen Stand des Fonds und die Anzahl Teilnehmende jederzeit unter
          <a href="https://sihlhack.ch/funds" style="color: #B5A642;">sihlhack.ch/funds</a> einsehen.
        </p>
        <p style="color: #8B7355; font-size: 14px;">
          Falls die Mindestteilnehmerzahl bis zur Deadline nicht erreicht wird,
          erhältst du automatisch eine vollständige Rückerstattung.
        </p>
      </div>
    `,
  })
}

/**
 * Send refund notification email
 */
export async function sendRefundEmail(
  email: string,
  name: string | null,
  amountChf: number
): Promise<void> {
  const resend = getResend()
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: 'sihlhack Rückerstattung',
    html: `
      <div style="font-family: 'IBM Plex Mono', monospace; max-width: 600px; margin: 0 auto;">
        <h1 style="font-family: 'Playfair Display', serif; color: #1A1A1A;">
          sihl<span style="color: #E62F2D;">hack</span>
        </h1>
        <p>Hallo${name ? ` ${name}` : ''},</p>
        <p>
          Leider wurde die Mindestteilnehmerzahl für sihlhack nicht erreicht.
          Wir haben deine Teilnahmegebühr vollständig zurückerstattet.
        </p>
        <div style="background: #F5F0E1; padding: 16px; margin: 24px 0; border-left: 4px solid #F59E0B;">
          <p style="margin: 0;"><strong>Rückerstattung:</strong> ${formatCHF(amountChf)}</p>
          <p style="margin: 8px 0 0 0;"><strong>Status:</strong> In Bearbeitung (3-5 Werktage)</p>
        </div>
        <p>
          Wir hoffen, dich bei einer zukünftigen Veranstaltung begrüssen zu dürfen.
        </p>
        <p>
          Alle Details zur Transparenz findest du unter
          <a href="https://sihlhack.ch/funds" style="color: #B5A642;">sihlhack.ch/funds</a>.
        </p>
      </div>
    `,
  })
}

/**
 * Send event confirmed email
 */
export async function sendEventConfirmedEmail(email: string, name: string | null): Promise<void> {
  const resend = getResend()
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: 'sihlhack findet statt!',
    html: `
      <div style="font-family: 'IBM Plex Mono', monospace; max-width: 600px; margin: 0 auto;">
        <h1 style="font-family: 'Playfair Display', serif; color: #1A1A1A;">
          sihl<span style="color: #E62F2D;">hack</span>
        </h1>
        <p>Hallo${name ? ` ${name}` : ''},</p>
        <p style="font-size: 18px; color: #22C55E;">
          <strong>Grossartige Neuigkeiten: sihlhack findet statt!</strong>
        </p>
        <p>
          Die Mindestteilnehmerzahl wurde erreicht. Deine Anmeldung ist damit definitiv bestätigt.
        </p>
        <div style="background: #F5F0E1; padding: 16px; margin: 24px 0; border-left: 4px solid #22C55E;">
          <p style="margin: 0;">
            Weitere Details zum Ablauf und Veranstaltungsort folgen in Kürze.
          </p>
        </div>
        <p>
          Schau dir die aktuellen Projektvorschläge an und stimme für deine Favoriten:
          <a href="https://sihlhack.ch/proposals" style="color: #B5A642;">sihlhack.ch/proposals</a>
        </p>
      </div>
    `,
  })
}

/**
 * Send event cancelled email
 */
export async function sendEventCancelledEmail(email: string, name: string | null): Promise<void> {
  const resend = getResend()
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: 'sihlhack abgesagt - Rückerstattung eingeleitet',
    html: `
      <div style="font-family: 'IBM Plex Mono', monospace; max-width: 600px; margin: 0 auto;">
        <h1 style="font-family: 'Playfair Display', serif; color: #1A1A1A;">
          sihl<span style="color: #E62F2D;">hack</span>
        </h1>
        <p>Hallo${name ? ` ${name}` : ''},</p>
        <p>
          Leider wurde die Mindestteilnehmerzahl für sihlhack nicht erreicht.
          Das Event wurde abgesagt.
        </p>
        <p>
          Deine Teilnahmegebühr wird automatisch zurückerstattet.
          Du erhältst eine separate Bestätigung, sobald die Rückerstattung verarbeitet wurde.
        </p>
        <p>
          Wir danken dir für dein Interesse und hoffen, dich bei einer zukünftigen Veranstaltung zu sehen.
        </p>
      </div>
    `,
  })
}

/**
 * Send proposal submitted confirmation email
 */
export async function sendProposalSubmittedEmail(
  email: string,
  name: string | null,
  proposalTitle: string
): Promise<void> {
  const resend = getResend()
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: 'Dein sihlhack Projekt wurde eingereicht',
    html: `
      <div style="font-family: 'IBM Plex Mono', monospace; max-width: 600px; margin: 0 auto;">
        <h1 style="font-family: 'Playfair Display', serif; color: #1A1A1A;">
          sihl<span style="color: #E62F2D;">hack</span>
        </h1>
        <p>Hallo${name ? ` ${name}` : ''},</p>
        <p>Dein Projektvorschlag wurde erfolgreich eingereicht!</p>
        <div style="background: #F5F0E1; padding: 16px; margin: 24px 0; border-left: 4px solid #B5A642;">
          <p style="margin: 0; font-weight: bold;">${proposalTitle}</p>
        </div>
        <p>
          Andere Teilnehmende können jetzt für dein Projekt stimmen.
          Du erhältst eine Benachrichtigung, wenn dein Projekt Stimmen erhält.
        </p>
        <p>
          Schau dir auch andere Projektvorschläge an:
          <a href="https://sihlhack.ch/proposals" style="color: #B5A642;">sihlhack.ch/proposals</a>
        </p>
      </div>
    `,
  })
}

/**
 * Send vote received notification email
 */
export async function sendVoteReceivedEmail(
  email: string,
  name: string | null,
  proposalTitle: string,
  voteCount: number
): Promise<void> {
  const resend = getResend()
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: `Neue Stimme für "${proposalTitle}"`,
    html: `
      <div style="font-family: 'IBM Plex Mono', monospace; max-width: 600px; margin: 0 auto;">
        <h1 style="font-family: 'Playfair Display', serif; color: #1A1A1A;">
          sihl<span style="color: #E62F2D;">hack</span>
        </h1>
        <p>Hallo${name ? ` ${name}` : ''},</p>
        <p>Dein Projekt hat eine neue Stimme erhalten!</p>
        <div style="background: #F5F0E1; padding: 16px; margin: 24px 0; border-left: 4px solid #22C55E;">
          <p style="margin: 0;"><strong>${proposalTitle}</strong></p>
          <p style="margin: 8px 0 0 0; font-size: 24px; color: #E62F2D; font-weight: bold;">${voteCount} Stimmen</p>
        </div>
        <p>
          Sieh dir die aktuelle Rangliste an:
          <a href="https://sihlhack.ch/proposals" style="color: #B5A642;">sihlhack.ch/proposals</a>
        </p>
      </div>
    `,
  })
}

/**
 * Send resource submission email to hello@sihlhack.ch
 */
export async function sendResourceSubmissionEmail(data: {
  packageId: string
  packageName: string
  repoName: string
  repoUrl: string
  license?: string
  description?: string
  submitterName?: string
  submitterEmail?: string
}): Promise<void> {
  const resend = getResend()
  await resend.emails.send({
    from: FROM_EMAIL,
    to: 'hello@sihlhack.ch',
    subject: `[sihlhack] Neuer Repo-Vorschlag: ${data.repoName}`,
    html: `
      <div style="font-family: 'IBM Plex Mono', monospace; max-width: 600px; margin: 0 auto;">
        <h1 style="font-family: 'Playfair Display', serif; color: #1A1A1A;">
          sihl<span style="color: #E62F2D;">hack</span>
        </h1>
        <h2 style="color: #1A1A1A; margin-top: 24px;">Neuer Open-Source-Repo-Vorschlag</h2>
        
        <div style="background: #F5F0E1; padding: 16px; margin: 24px 0; border-left: 4px solid #FF6B35;">
          <p style="margin: 0 0 8px 0;"><strong>Challenge:</strong> ${data.packageName} (${data.packageId})</p>
          <p style="margin: 0 0 8px 0;"><strong>Repo-Name:</strong> ${data.repoName}</p>
          <p style="margin: 0 0 8px 0;"><strong>URL:</strong> <a href="${data.repoUrl}" style="color: #B5A642;">${data.repoUrl}</a></p>
          ${data.license ? `<p style="margin: 0 0 8px 0;"><strong>Lizenz:</strong> ${data.license}</p>` : ''}
          ${data.description ? `<p style="margin: 8px 0 0 0;"><strong>Beschreibung:</strong><br>${data.description}</p>` : ''}
        </div>

        <div style="background: #F5F0E1; padding: 16px; margin: 24px 0; border-left: 4px solid #8B7355;">
          <p style="margin: 0 0 8px 0;"><strong>Eingereicht von:</strong></p>
          ${data.submitterName ? `<p style="margin: 0 0 8px 0;">Name: ${data.submitterName}</p>` : ''}
          ${data.submitterEmail ? `<p style="margin: 0;">E-Mail: <a href="mailto:${data.submitterEmail}" style="color: #B5A642;">${data.submitterEmail}</a></p>` : ''}
        </div>

        <p style="color: #8B7355; font-size: 12px; margin-top: 24px;">
          Diese E-Mail wurde automatisch vom sihlhack-Website-Formular generiert.
        </p>
      </div>
    `,
  })
}

/**
 * Send role suggestion email to hello@sihlhack.ch
 */
export async function sendRoleSuggestionEmail(data: {
  roleName: string
  description: string
  submitterName?: string
  submitterEmail?: string
}): Promise<void> {
  const resend = getResend()
  await resend.emails.send({
    from: FROM_EMAIL,
    to: 'hello@sihlhack.ch',
    subject: `[sihlhack] Neuer Rollen-Vorschlag: ${data.roleName}`,
    html: `
      <div style="font-family: 'IBM Plex Mono', monospace; max-width: 600px; margin: 0 auto;">
        <h1 style="font-family: 'Playfair Display', serif; color: #1A1A1A;">
          sihl<span style="color: #E62F2D;">hack</span>
        </h1>
        <h2 style="color: #1A1A1A; margin-top: 24px;">Neuer Rollen-Vorschlag</h2>
        
        <div style="background: #F5F0E1; padding: 16px; margin: 24px 0; border-left: 4px solid #E62F2D;">
          <p style="margin: 0 0 8px 0;"><strong>Rolle:</strong> ${data.roleName}</p>
          <p style="margin: 8px 0 0 0;"><strong>Beschreibung:</strong><br>${data.description.replace(/\n/g, '<br/>')}</p>
        </div>

        <div style="background: #F5F0E1; padding: 16px; margin: 24px 0; border-left: 4px solid #8B7355;">
          <p style="margin: 0 0 8px 0;"><strong>Eingereicht von:</strong></p>
          ${data.submitterName ? `<p style="margin: 0 0 8px 0;">Name: ${data.submitterName}</p>` : '<p style="margin: 0 0 8px 0;">Anonym</p>'}
          ${data.submitterEmail ? `<p style="margin: 0;">E-Mail: <a href="mailto:${data.submitterEmail}" style="color: #B5A642;">${data.submitterEmail}</a></p>` : ''}
        </div>

        <p style="color: #8B7355; font-size: 12px; margin-top: 24px;">
          Diese E-Mail wurde automatisch vom sihlhack-Website-Formular generiert am ${new Date().toLocaleString('de-CH')}.
        </p>
      </div>
    `,
  })
}
