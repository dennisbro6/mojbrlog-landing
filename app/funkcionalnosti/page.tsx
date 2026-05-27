'use client'

const APP_URL = 'https://app.mojbrlog.eu'

const sections = [
  {
    emoji: '🔥',
    title: 'Dnevni fokus',
    subtitle: 'Tvoj dan, na enem mestu.',
    description:
      'Vsako jutro odpreš mojbrlog in vidiš točno to kar potrebuješ za danes — naloge, ki čakajo, in prostor za kratke misli. Ko dan mine, vidiš kaj si naredil. Ko pride jutro, začneš sveže.',
    bullets: [
      'Naloge samo za ta dan — brez preostalega nereda',
      'Dnevni zapisek: kratek prostor za misli, ideje ali opombe',
      'Mini koledar za hitro skok na kateri koli dan',
      'Vidiš koliko nalog si opravil — motivacija na dlani',
    ],
    analogy:
      'Predstavljaj si, da vsako jutro dobiš čist list papirja — samo za ta dan. Zvečer ga zložiš in jutri dobiš novega.',
  },
  {
    emoji: '📥',
    title: 'Inbox',
    subtitle: 'Najprej zajemi, potem uredi.',
    description:
      'Kadar ti pride misel ali naloga, jo preprosto vtipkaš. Brez odločanja v katero mapo gre, brez datumov, brez pritiska. Inbox je varno mesto za vse kar še nima pravega doma.',
    bullets: [
      'Hitro dodaj nalogo z enim vnosom — brez klikov po menijih',
      'Vtipkaš "jutri" ali "v ponedeljek" in app sam nastavi datum',
      'Filtriraj po področjih: Delo, Osebno, Projekt X...',
      'Povleci in spusti naloge v želen vrstni red',
    ],
    analogy:
      'Inbox je kot predprostor stanovanja — sem odložiš vse preden se odločiš kam sodi. Ni treba takoj vedeti.',
  },
  {
    emoji: '🔁',
    title: 'Ponavljajoče naloge',
    subtitle: 'Enkrat nastavi, za vedno urejeno.',
    description:
      'Nekatere naloge se vrnejo vsak teden ali vsak mesec. Namesto da jih vedno znova ustvarjaš, ji povej da se ponavlja — in app poskrbi za ostalo.',
    bullets: [
      '"Vsak dan", "Vsak ponedeljek", "Vsak mesec 15-ga" — app razume',
      'Ko nalogo označiš za opravljeno, se naslednja ustvari sama',
      'Vidna v dnevnem fokusu in v inboxu ob pravem času',
    ],
    analogy:
      'Kot alarm na telefonu — enkrat nastaviš "zbudi me vsak dan ob 7" in se ne rabiš več spomniti.',
  },
  {
    emoji: '📝',
    title: 'Zapiski',
    subtitle: 'Več kot beležnica — pravo delovno okolje.',
    description:
      'Zapiski v mojbrlogu niso navaden tekst. Imaš na voljo bogat urejevalnik z naslovi, seznami, kodo, slikami in celo YouTube videi. Vtipkaš "/" in se prikaže meni z vsemi možnostmi.',
    bullets: [
      'Slash ukazi: /naslov, /seznam, /koda, /slika, /citat...',
      'Tipi zapiskov: sestanek, ideja, projekt, osebno — vsak ima svojo ikono',
      'Status: aktiven, čaka, zaključen, arhiviran',
      'Povezi zapisek z območjem (Delo, Osebno) in z osebami',
      'Iskanje po vsebini v realnem času',
    ],
    analogy:
      'Predstavljaj si Wordov dokument, ki se a) ne izgubi, b) ve s kom je povezan in c) ga najdeš v dveh sekundah.',
  },
  {
    emoji: '🔗',
    title: 'Backlinks — misli v mreži',
    subtitle: 'Zapiski se poznajo med seboj.',
    description:
      'Ko v enem zapisku omeniš drug zapisek ali osebo, se med njima ustvari povezava. Zdaj v vsakem zapisku vidiš seznam — "kdo me omenja?" To ni mapa, to je mreža.',
    bullets: [
      'Omeni osebo z @Janez in zapisek se poveže z njo',
      'Na dnu vsakega zapiska vidiš vse zapiske ki ga omenjajo',
      'Ideje začnejo tvoriti mrežo, ne le seznam',
      'Nič se ne izgubi — vsak zapisek je dosegljiv iz več smeri',
    ],
    analogy:
      'Ko v šoli napišeš "glej stran 42" — backlinks so kot ta opomba, samo samodejno in v obe smeri.',
  },
  {
    emoji: '📄',
    title: 'PDF Trezor',
    subtitle: 'Dokumenti ki jih dejansko najdeš.',
    description:
      'Naloži pogodbo, račun ali kateri koli PDF dokument. Aplikacija ga prebere in ti pomaga izpolniti naslov in datum — ni treba tipkati vsega ročno. Potem ga vedno najdeš v sekundi.',
    bullets: [
      'AI samodejno predlaga naslov in datum iz vsebine dokumenta',
      'Statusi: Novo, V obdelavi, Zaključeno, Arhiv',
      'Dodaj naloge neposredno k dokumentu (npr. "Podpiši do petka")',
      'Poveži dokument z osebo ali podjetjem',
    ],
    analogy:
      'Kot škatla za dokumente doma, samo digitalna — in ne rabiš vedeti točno kje si jo odložil.',
  },
  {
    emoji: '👤',
    title: 'Osebe & podjetja',
    subtitle: 'Vse kar veš o nekom, na enem mestu.',
    description:
      'Dodaš Janeza, Majo ali podjetje ABC. Od zdaj naprej ko omeniš @Janez v nalogi ali zapisku, se ta poveže z njim. Na Janezovem profilu vidiš vse — zapiske, naloge, dokumente.',
    bullets: [
      'Dodaj osebo ročno ali jo ustvari med tipkanjem z @',
      'Na profilu osebe: vse naloge, zapiski in dokumenti ki jo omenjajo',
      'Osebne opombe za vsakega stika',
      'Vtipkaš @ v kateri koli vnos — in jo povežeš',
    ],
    analogy:
      'Kot kontaktna knjiga, ki je pametna — ne samo telefonska številka, ampak celotna zgodovina odnosa.',
  },
  {
    emoji: '🗓️',
    title: 'Koledar',
    subtitle: 'Štirje načini da vidiš čas.',
    description:
      'Tvoje naloge z datumi se samodejno pokažejo v koledarju. Izbereš ali gledaš cel mesec, teden, tri dni ali samo danes. Nalogo lahko tudi povlečeš na drug dan — in datum se posodobi sam.',
    bullets: [
      'Mesečni pogled: celoten mesec v mrežni obliki',
      'Tedenski pogled: sedem dni od ponedeljka do nedelje',
      '3-dnevni pogled: idealen za kratkoročno planiranje',
      'Dnevni pogled: razširiš en dan in vidiš vse podrobnosti',
      'Povleci nalogo na drug dan — datum se posodobi takoj',
    ],
    analogy:
      'Kot stenski koledar, samo pameten — vidiš naloge, ne samo praznike.',
  },
  {
    emoji: '🏷️',
    title: 'Področja',
    subtitle: 'Organizacija brez map in predalčkov.',
    description:
      'Področja so tvoje kategorije — Delo, Osebno, Projekt Alpha, Šola... Vsako dobi svojo barvo in emoji. Naloge, zapiski in dokumenti so urejeni po področjih. Filtriraj z enim klikom.',
    bullets: [
      'Ustvari področje z imenom, emojiem in eno od 8 barv',
      'Vsaka naloga, zapisek ali dokument pripada področju',
      'Filtriraj inbox, zapiske ali PDF trezor po področju',
      'Brzo preklapljaš med konteksti — Delo zjutraj, Osebno zvečer',
    ],
    analogy:
      'Kot barvni robčki v šolski torbi — modri za matematiko, rdeči za slovenščino. Samo digitalno in brez zmede.',
  },
  {
    emoji: '⌘K',
    title: 'Iskanje po vsem',
    subtitle: 'Eno polje. Vse najdeš.',
    description:
      'Pritisni Cmd+K (na Macu) ali Ctrl+K (na Windows) in odpreš iskanje. Vtipkaš eno besedo in takoj vidiš vse ustrezne naloge, zapiske, dokumente in osebe — razporejene po tipu.',
    bullets: [
      'Iščeš po naloge, zapiski, dokumenti in osebe hkrati',
      'Rezultati so razvrščeni po tipu — takoj vidiš kje je kaj',
      'Klik na rezultat te pelje neposredno tja',
      'Cmd+K → vtipkaš → Enter. Trije pritisci.',
    ],
    analogy:
      'Kot Googlov iskalnik, samo samo za tvoje stvari. Brez da bi moral vedeti kje si kaj odložil.',
  },
]

export default function FunkcionalnostiPage() {
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
        <a href="/" style={{
          display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none',
        }}>
          <div style={{
            width: 28, height: 28,
            background: 'linear-gradient(135deg, #3DDC84, #2AB870)',
            borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14,
          }}>◎</div>
          <span style={{ fontWeight: 700, fontSize: 15, color: '#F5F2EA', letterSpacing: '-0.02em' }}>mojbrlog</span>
        </a>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href={`${APP_URL}/login`} style={{
            fontSize: 13, color: '#8B998F',
            textDecoration: 'none', padding: '7px 16px', borderRadius: 8,
          }}>Prijava</a>
          <a href={`${APP_URL}/login`} style={{
            fontSize: 13, fontWeight: 600,
            background: '#3DDC84', color: '#000',
            textDecoration: 'none', borderRadius: 8,
            padding: '7px 18px',
          }}>Začni brezplačno →</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        padding: '80px 48px 72px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(61,220,132,0.1) 0%, transparent 65%)',
        borderBottom: '0.5px solid #1F2A22',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(61,220,132,0.08)', border: '0.5px solid rgba(61,220,132,0.25)',
          borderRadius: 20, padding: '5px 16px', marginBottom: 28,
          fontSize: 12, color: '#3DDC84', letterSpacing: '0.03em',
        }}>
          ✦ Vse funkcionalnosti
        </div>
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 800, letterSpacing: '-0.04em',
          lineHeight: 1.06, marginBottom: 20,
          background: 'linear-gradient(170deg, #ffffff 45%, rgba(255,255,255,0.3) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          maxWidth: 700, margin: '0 auto 20px',
        }}>
          Kaj zmore mojbrlog?
        </h1>
        <p style={{
          fontSize: 18, lineHeight: 1.75,
          color: '#8B998F',
          maxWidth: 520, margin: '0 auto 40px',
        }}>
          Tukaj je razloženo vse — brez tehničnega žargona. Kot bi razložili prijatelju.
        </p>
        <a href={`${APP_URL}/login`} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#3DDC84', color: '#000',
          fontWeight: 700, fontSize: 14,
          textDecoration: 'none', borderRadius: 10,
          padding: '12px 28px',
          boxShadow: '0 0 40px rgba(61,220,132,0.25)',
        }}>
          Preizkusi brezplačno →
        </a>
      </section>

      {/* Quick nav */}
      <section style={{
        padding: '32px 48px',
        borderBottom: '0.5px solid #1F2A22',
        overflowX: 'auto',
      }}>
        <div style={{
          display: 'flex', gap: 10, flexWrap: 'wrap',
          maxWidth: 1100, margin: '0 auto',
        }}>
          {sections.map(s => (
            <a
              key={s.title}
              href={`#${s.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 13, color: '#8B998F',
                textDecoration: 'none',
                background: '#1F2A22',
                border: '0.5px solid #1F2A22',
                borderRadius: 8, padding: '6px 14px',
                transition: 'color 0.15s, border-color 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.borderColor = 'rgba(61,220,132,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              <span>{s.emoji}</span> {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Feature sections */}
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px' }}>
        {sections.map((s, i) => (
          <section
            key={s.title}
            id={s.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
            style={{
              padding: '72px 0',
              borderBottom: i < sections.length - 1 ? '0.5px solid #1F2A22' : 'none',
            }}
          >
            <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start', flexWrap: 'wrap' }}>

              {/* Left: icon + title */}
              <div style={{ minWidth: 220, flexShrink: 0 }}>
                <div style={{
                  width: 56, height: 56,
                  background: 'rgba(61,220,132,0.08)',
                  border: '0.5px solid rgba(61,220,132,0.2)',
                  borderRadius: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, marginBottom: 20,
                }}>{s.emoji}</div>
                <h2 style={{
                  fontSize: 26, fontWeight: 800,
                  letterSpacing: '-0.02em', color: '#F5F2EA',
                  marginBottom: 6,
                }}>{s.title}</h2>
                <p style={{ fontSize: 14, color: '#3DDC84', margin: 0, fontWeight: 500 }}>{s.subtitle}</p>
              </div>

              {/* Right: content */}
              <div style={{ flex: 1, minWidth: 280 }}>
                <p style={{
                  fontSize: 16, lineHeight: 1.8,
                  color: 'rgba(245,242,234,0.65)',
                  marginBottom: 28,
                }}>{s.description}</p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {s.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{
                        width: 18, height: 18, borderRadius: 5, flexShrink: 0,
                        background: 'rgba(61,220,132,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 10, color: '#3DDC84', marginTop: 2, fontWeight: 700,
                      }}>✓</span>
                      <span style={{ fontSize: 15, color: 'rgba(245,242,234,0.65)', lineHeight: 1.6 }}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Analogy box */}
                <div style={{
                  background: '#14201A',
                  border: '0.5px solid #1F2A22',
                  borderRadius: 12,
                  padding: '18px 22px',
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                }}>
                  <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>💡</span>
                  <div>
                    <div style={{ fontSize: 11, color: 'rgba(139,153,143,0.9)', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>
                      Z drugimi besedami
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: '#8B998F', margin: 0, fontStyle: 'italic' }}>
                      {s.analogy}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>
        ))}
      </main>

      {/* Bottom CTA */}
      <section style={{
        padding: '100px 48px 120px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(61,220,132,0.12) 0%, transparent 70%)',
        borderTop: '0.5px solid #1F2A22',
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 800, letterSpacing: '-0.03em',
          lineHeight: 1.1, marginBottom: 16, color: '#F5F2EA',
        }}>
          Pripravljeni preizkusiti?
        </h2>
        <p style={{ fontSize: 16, color: '#8B998F', marginBottom: 40 }}>
          Brez kreditne kartice. Brez obveznosti. Samo začneš.
        </p>
        <a href={`${APP_URL}/login`} style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: '#3DDC84', color: '#000',
          fontWeight: 700, fontSize: 16,
          textDecoration: 'none', borderRadius: 12,
          padding: '15px 36px',
          boxShadow: '0 0 60px rgba(61,220,132,0.3)',
        }}>
          Odpri mojbrlog →
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '0.5px solid #1F2A22',
        padding: '32px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12,
      }}>
        <a href="/" style={{
          display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none',
        }}>
          <div style={{
            width: 20, height: 20,
            background: 'linear-gradient(135deg, #3DDC84, #2AB870)',
            borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11,
          }}>◎</div>
          <span style={{ fontSize: 13, color: 'rgba(139,153,143,0.9)' }}>mojbrlog.eu</span>
        </a>
        <span style={{ fontSize: 12, color: 'rgba(139,153,143,0.55)' }}>
          © {new Date().getFullYear()} mojbrlog · Narejeno v Sloveniji 🇸🇮
        </span>
      </footer>

    </div>
  )
}
