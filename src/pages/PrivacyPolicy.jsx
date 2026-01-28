/**
 * Privacy Policy Page
 * Design coerente con lo stile del sito
 */

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { siteData } from '../constants/siteData'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Header */}
      <header
        className="py-8 md:py-12"
        style={{ background: 'var(--color-bg-warm)' }}
      >
        <div className="container-wide px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-small mb-6 hover:text-[var(--color-rust)] transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna alla Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full"
              style={{ background: 'var(--color-rust)' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-text)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-display" style={{ color: 'var(--color-text)' }}>
                Privacy Policy
              </h1>
              <p className="text-small" style={{ color: 'var(--color-text-muted)' }}>
                Informativa sul trattamento dei dati personali
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 md:py-20">
        <div className="container-wide px-6">
          <div
            className="max-w-4xl mx-auto p-8 md:p-12"
            style={{ background: 'var(--color-bg-cream)' }}
          >
            <p className="text-small mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Ultimo aggiornamento: {siteData.policy.lastUpdate}
            </p>

            {/* Sezione 1 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                1. Titolare del Trattamento
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Il Titolare del trattamento dei dati personali è:
              </p>
              <div
                className="p-6 border-l-4"
                style={{ background: 'var(--color-bg-sand)', borderColor: 'var(--color-rust)' }}
              >
                <p className="text-body font-semibold" style={{ color: 'var(--color-text-dark)' }}>
                  {siteData.legalName}
                </p>
                <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  {siteData.contact.address.full}
                </p>
                <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  Tel: {siteData.contact.phone}
                </p>
                <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  Email: {siteData.contact.email}
                </p>
              </div>
            </section>

            {/* Sezione 2 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                2. Dati Raccolti e Finalità del Trattamento
              </h2>

              <h3 className="text-title mb-3" style={{ color: 'var(--color-text-dark)' }}>
                2.1 Dati forniti volontariamente dall'utente
              </h3>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Nome e Cognome</strong> - per identificare l'interessato
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Indirizzo Email</strong> - per rispondere alle richieste
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Numero di Telefono</strong> (facoltativo) - per contatti telefonici
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Messaggio/Descrizione del Progetto</strong> - per comprendere le esigenze
                </li>
              </ul>

              <div
                className="p-6 mb-6"
                style={{ background: 'var(--color-bg-sand)' }}
              >
                <p className="text-small font-semibold mb-3" style={{ color: 'var(--color-rust)' }}>
                  Finalità: I dati vengono raccolti esclusivamente per:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Rispondere alle richieste di preventivo</li>
                  <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Fornire informazioni sui nostri servizi</li>
                  <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Organizzare sopralluoghi e consultazioni</li>
                  <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Gestire la relazione commerciale</li>
                </ul>
              </div>

              <h3 className="text-title mb-3" style={{ color: 'var(--color-text-dark)' }}>
                2.2 Base giuridica del trattamento
              </h3>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Il trattamento è basato sul <strong>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso l'invio del modulo di contatto, e sulla <strong>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
              </p>
            </section>

            {/* Sezione 3 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                3. Modalità di Trattamento
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
              </p>
              <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.
              </p>
            </section>

            {/* Sezione 4 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                4. Conservazione dei Dati
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le relazioni commerciali conseguenti:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Richieste di preventivo:</strong> I dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Rapporti contrattuali:</strong> I dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Richieste di informazioni:</strong> I dati vengono conservati per 12 mesi dalla risposta
                </li>
              </ul>
            </section>

            {/* Sezione 5 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                5. Comunicazione e Diffusione dei Dati
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Autorità competenti in caso di richieste legittime previste per legge</li>
              </ul>

              <div
                className="p-6 border-l-4"
                style={{ background: 'rgba(180, 83, 9, 0.1)', borderColor: 'var(--color-rust)' }}
              >
                <p className="text-small font-semibold mb-2" style={{ color: 'var(--color-rust)' }}>
                  I tuoi dati NON verranno MAI:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Venduti a terze parti</li>
                  <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Condivisi con scopi di marketing</li>
                  <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Utilizzati per invio di newsletter non richieste</li>
                  <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Trasferiti fuori dall'Unione Europea</li>
                </ul>
              </div>
            </section>

            {/* Sezione 6 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                6. Diritti dell'Interessato
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                In qualità di interessato, hai il diritto di:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e ricevere copia
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento
                </li>
              </ul>

              <div
                className="p-6"
                style={{ background: 'var(--color-bg-sand)' }}
              >
                <p className="text-small font-semibold mb-2" style={{ color: 'var(--color-rust)' }}>
                  Come esercitare i tuoi diritti:
                </p>
                <p className="text-body mb-2" style={{ color: 'var(--color-text-muted)' }}>
                  Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${siteData.contact.email}`} className="underline hover:text-[var(--color-rust)]" style={{ color: 'var(--color-rust)' }}>{siteData.contact.email}</a> o tramite raccomandata A/R all'indirizzo: {siteData.contact.address.full}.
                </p>
                <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.
                </p>
              </div>
            </section>

            {/* Sezione 7 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                7. Diritto di Reclamo
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il trattamento dei tuoi dati violi il GDPR.
              </p>
              <div
                className="p-6"
                style={{ background: 'var(--color-bg-sand)' }}
              >
                <p className="text-small font-semibold mb-2" style={{ color: 'var(--color-rust)' }}>
                  Garante per la protezione dei dati personali:
                </p>
                <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--color-rust)]" style={{ color: 'var(--color-rust)' }}>www.garanteprivacy.it</a>
                </p>
                <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  Email: garante@gpdp.it
                </p>
                <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  PEC: protocollo@pec.gpdp.it
                </p>
              </div>
            </section>

            {/* Sezione 8 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                8. Cookie e Tecnologie di Tracciamento
              </h2>
              <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni, consulta la nostra <Link to="/cookie-policy" className="underline hover:text-[var(--color-rust)]" style={{ color: 'var(--color-rust)' }}>Cookie Policy</Link>.
              </p>
            </section>

            {/* Sezione 9 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                9. Modifiche alla Privacy Policy
              </h2>
              <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
              </p>
            </section>

            {/* Sezione 10 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                10. Contatti
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:
              </p>
              <div
                className="p-6"
                style={{ background: 'var(--color-bg-sand)' }}
              >
                <p className="text-body flex items-center gap-2 mb-2" style={{ color: 'var(--color-text-muted)' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-rust)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${siteData.contact.email}`} className="underline hover:text-[var(--color-rust)]" style={{ color: 'var(--color-rust)' }}>{siteData.contact.email}</a>
                </p>
                <p className="text-body flex items-center gap-2" style={{ color: 'var(--color-text-muted)' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-rust)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${siteData.contact.phone}`} className="hover:text-[var(--color-rust)]" style={{ color: 'var(--color-rust)' }}>{siteData.contact.phone}</a>
                </p>
              </div>
            </section>

            {/* Footer nota */}
            <div
              className="p-6 text-center border-t mt-12"
              style={{ borderColor: 'var(--color-bg-warm)' }}
            >
              <p className="text-small" style={{ color: 'var(--color-text-muted)' }}>
                Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.lgs. 196/2003 come modificato dal D.lgs. 101/2018
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row gap-4 justify-center px-6">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Torna alla Home
            </Link>
            <Link
              to="/cookie-policy"
              className="btn-primary inline-flex items-center justify-center gap-2"
              style={{ background: 'transparent', border: '1px solid var(--color-rust)', color: 'var(--color-rust)' }}
            >
              Leggi la Cookie Policy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
