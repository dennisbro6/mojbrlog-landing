import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pravilnik o zasebnosti — mojbrlog',
  description: 'Pravilnik o zasebnosti in varstvu osebnih podatkov za mojbrlog.',
}

export default function ZasebnostPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0E1410',
      color: '#F5F2EA',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>

      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px', height: 62,
        background: 'rgba(14,20,16,0.88)',
        backdropFilter: 'blur(14px)',
        borderBottom: '0.5px solid #1F2A22',
      }}>
        <Link href="/" style={{
          display: 'flex', alignItems: 'center', gap: 10,
          textDecoration: 'none',
        }}>
          <div style={{
            width: 28, height: 28,
            background: 'linear-gradient(135deg, #3DDC84, #2AB870)',
            borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 700,
          }}>◎</div>
          <span style={{ fontWeight: 700, fontSize: 15, color: '#F5F2EA', letterSpacing: '-0.02em' }}>mojbrlog</span>
        </Link>
        <Link href="/" style={{
          fontSize: 13, color: '#8B998F',
          textDecoration: 'none', padding: '7px 16px', borderRadius: 8,
        }}>← Nazaj na domačo stran</Link>
      </nav>

      {/* Content */}
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '72px 32px 120px' }}>

        <div style={{ marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(61,220,132,0.08)', border: '0.5px solid rgba(61,220,132,0.25)',
            borderRadius: 20, padding: '5px 16px', marginBottom: 28,
            fontSize: 12, color: '#3DDC84', letterSpacing: '0.03em',
          }}>
            Pravno
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800, letterSpacing: '-0.03em',
            lineHeight: 1.08, marginBottom: 20, color: '#F5F2EA',
          }}>
            Pravilnik o zasebnosti
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(139,153,143,0.7)', margin: 0 }}>
            Datum zadnje posodobitve: 27. maj 2026
          </p>
        </div>

        <div style={{ borderTop: '0.5px solid #1F2A22', paddingTop: 48 }}>

          <Section>
            <p>
              V podjetju <strong style={{ color: '#F5F2EA' }}>Studio56</strong>, Hafnerjevo naselje 27, 4220 Škofja Loka,
              ID za DDV: SI45771375, zakoniti zastopnik Tomaž Mezek (v nadaljevanju: &ldquo;upravljalec&rdquo;), spoštujemo
              vašo zasebnost in sledimo načelom transparentnosti in skrbnega ravnanja z osebnimi podatki v skladu z
              veljavnimi določbami na področju varstva osebnih podatkov in ostalo veljavno zakonodajo. Družba je vpisana
              pri Okrožnem sodišču v Kranju.
            </p>
            <p>
              Potrebujemo vašo privolitev, da lahko osebne podatke, ki smo jih pridobili z vašo prijavo na naše storitve,
              uporabljamo, hranimo in obdelujemo za določene namene. Vse informacije o upravljanju posameznih privolitev
              najdete v nadaljevanju.
            </p>
          </Section>

          <Heading>Podatki, ki jih obdelujemo</Heading>
          <Section>
            <ul>
              <li>ime in priimek</li>
              <li>e-naslov</li>
              <li>naslov</li>
              <li>IP naslov in podatki o napravi (ob prijavi in uporabi storitve)</li>
              <li>podatki o uporabi storitve (dnevnik aktivnosti, čas prijav)</li>
            </ul>
          </Section>

          <Heading>Privolitev in namen obdelave</Heading>
          <Section>
            <p>
              S posredovanjem oz. izpolnitvijo zahtevanih osebnih podatkov izjavljate, da ste seznanjeni in soglašate
              ter izrecno dovoljujete upravljalcu vaših osebnih podatkov podjetju Studio56, Tomaž Mezek s.p., da zbira
              in obdeluje vaše osebne podatke, ki ste jih vnesli v vnosni obrazec za naslednje namene:
            </p>
            <ul>
              <li>
                Zagotavljanje in delovanje storitve mojbrlog — upravljanje vašega računa, shranjevanje vaših nalog,
                zapiskov, dokumentov in osebnih nastavitev.
              </li>
              <li>
                Posredovanje sporočil z informativnimi vsebinami za namen obveščanja o novostih produktov, novih
                funkcijah in storitvah, posebnih ponudbah, ugodnostih ter novicah in dogodkih, ki so objavljene na
                spletnih straneh podjetja.
              </li>
            </ul>
            <p>
              Soglašate z obdelavo vaših osebnih podatkov s strani družbe in izjavljate, da ste seznanjeni z namenom
              obdelave teh osebnih podatkov za namen obveščanja na e-naslov. Seznanjeni ste z dejstvom, da se lahko
              kadarkoli odjavite oz. odstopite od soglasja za namen prejemanja sporočil z oglasnimi vsebinami s klikom
              na odjavo posamezne poti.
            </p>
            <p>
              Potrjujete, da ste starejši od 15 let in seznanjeni s Splošnimi pogoji obdelave osebnih podatkov, katere
              ste podali prostovoljno ter s svojimi pravicami do upravljalca vaših osebnih podatkov.
            </p>
          </Section>

          <Heading>Hramba podatkov</Heading>
          <Section>
            <p>
              Vaše osebne podatke bomo hranili dokler se ne boste s klikom na odjavo odjavili iz naše zbirke osebnih
              podatkov za posamezne namene uporabe in poti, oz. dokler ne zahtevate izbrisa računa.
            </p>
          </Section>

          <Heading>Pravna podlaga obdelave</Heading>
          <Section>
            <p>
              Obdelava in varna uporaba vaših osebnih podatkov se bo vršila v skladu z Zakonom o varstvu osebnih
              podatkov (ZVOP-2) in Uredbo (EU) 2016/679 (GDPR). Upravljalec vaših osebnih podatkov izjavlja, da nosi
              popolno odgovornost za zakonito obdelavo.
            </p>
            <p>
              Izjavljamo, da vaših osebnih podatkov, ki ste nam jih posredovali, ne bomo prenašali izven naše zbirke
              osebnih podatkov oz. tretjim osebam brez vaše izrecne privolitve, razen v primerih, ki jih določa
              zakonodaja.
            </p>
          </Section>

          <Heading>Vaše pravice</Heading>
          <Section>
            <p>
              Poleg odjave oz. odstopa od vašega soglasja za posamezne namene imate v skladu z veljavno zakonodajo,
              ki ureja varstvo osebnih podatkov (ZVOP-2 in Uredba (EU) 2016/679), naslednje pravice, ki jih pri
              družbi lahko uveljavljate pisno na e-naslov{' '}
              <a href="mailto:info@studio56.si" style={{ color: '#3DDC84', textDecoration: 'none' }}>info@studio56.si</a>:
            </p>
            <ul>
              <li>Zahtevo za dostop do svojih osebnih podatkov.</li>
              <li>
                Zahtevo, da se vam dopusti, da osebne podatke popravljate in dopolnjujete v obsegu, ki ga predvidevajo
                rubrike soglasja.
              </li>
              <li>
                Zahtevo, da se vam posreduje poročilo za katere namene, kdaj in katere osebne podatke je družba
                uporabljala.
              </li>
              <li>Zahtevo za omejitev obdelave osebnih podatkov.</li>
              <li>
                Vpogled, prepis, kopiranje in potrdilo lahko zahtevate skladno z veljavno zakonodajo o varstvu osebnih
                podatkov.
              </li>
            </ul>
            <p>
              V kolikor menite, da so kršene vaše pravice, se lahko obrnete na{' '}
              <a
                href="https://www.ip-rs.si"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#3DDC84', textDecoration: 'none' }}
              >
                Informacijskega pooblaščenca
              </a>.
            </p>
          </Section>

          <Heading>Kontakt</Heading>
          <Section>
            <p>
              Za vsa vprašanja v zvezi z obdelavo osebnih podatkov nas kontaktirajte na{' '}
              <a href="mailto:info@studio56.si" style={{ color: '#3DDC84', textDecoration: 'none' }}>info@studio56.si</a>.
            </p>
          </Section>

        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '0.5px solid #1F2A22',
        padding: '32px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 12,
        maxWidth: 760, margin: '0 auto',
      }}>
        <span style={{ fontSize: 12, color: 'rgba(139,153,143,0.55)' }}>
          © {new Date().getFullYear()} mojbrlog · Studio56
        </span>
        <span style={{ fontSize: 12, color: 'rgba(139,153,143,0.55)' }}>
          Narejeno v Sloveniji 🇸🇮
        </span>
      </footer>

    </div>
  )
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontSize: 18, fontWeight: 700,
      color: '#F5F2EA',
      marginTop: 48, marginBottom: 16,
      letterSpacing: '-0.01em',
    }}>{children}</h2>
  )
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 15, lineHeight: 1.8,
      color: '#8B998F',
    }}>
      <style>{`
        .privacy-section p { margin: 0 0 16px; }
        .privacy-section ul { margin: 0 0 16px; padding-left: 20px; }
        .privacy-section li { margin-bottom: 8px; }
      `}</style>
      <div className="privacy-section">{children}</div>
    </div>
  )
}
