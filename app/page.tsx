'use client'
import { useState } from 'react'
import type { ReactNode, CSSProperties } from 'react'

const APP_URL = 'https://app.mojbrlog.eu'

// ─── Mini UI components ───────────────────────────────────────────────────────

function MockWindow({ children, title, style }: { children: ReactNode; title?: string; style?: CSSProperties }) {
  return (
    <div style={{
      background: '#14201A',
      border: '1px solid #2F3D34',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
      ...style,
    }}>
      <div style={{
        padding: '10px 16px',
        borderBottom: '1px solid #1F2A22',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['rgba(255,95,87,0.65)', 'rgba(254,188,46,0.65)', 'rgba(40,200,64,0.65)'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
        </div>
        {title && <span style={{ fontSize: 11, color: 'rgba(139,153,143,0.65)', marginLeft: 6 }}>{title}</span>}
      </div>
      {children}
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      borderBottom: '0.5px solid #1F2A22',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'none', border: 'none', cursor: 'pointer',
          padding: '22px 0', gap: 16, textAlign: 'left',
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: '#F5F2EA', lineHeight: 1.4 }}>{q}</span>
        <span style={{
          fontSize: 18, color: '#3DDC84', flexShrink: 0,
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease',
          display: 'inline-block',
        }}>+</span>
      </button>
      {open && (
        <div style={{
          fontSize: 14, lineHeight: 1.75, color: '#8B998F',
          paddingBottom: 22, paddingRight: 32,
        }}>{a}</div>
      )}
    </div>
  )
}

function TaskRow({ done, text, tag, date }: { done?: boolean; text: string; tag?: string; date?: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '8px 0',
      borderBottom: '0.5px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{
        width: 15, height: 15, borderRadius: 4, flexShrink: 0,
        border: done ? 'none' : '1.5px solid rgba(255,255,255,0.2)',
        background: done ? '#3DDC84' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {done && <span style={{ fontSize: 8, color: '#000', fontWeight: 900 }}>✓</span>}
      </div>
      <span style={{
        fontSize: 13, flex: 1,
        color: done ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.75)',
        textDecoration: done ? 'line-through' : 'none',
      }}>{text}</span>
      {tag && (
        <span style={{
          fontSize: 11, padding: '2px 8px', borderRadius: 4,
          background: 'rgba(61,220,132,0.1)', color: '#3DDC84',
        }}>{tag}</span>
      )}
      {date && <span style={{ fontSize: 11, color: 'rgba(139,153,143,0.8)', whiteSpace: 'nowrap' }}>{date}</span>}
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const problems = [
  {
    icon: '📋',
    title: 'Zapiski povsod. Ideje nikjer.',
    desc: 'Telefonske beležke, sticky notes, email sebi, Notion stran... Pravi zapis najdeš šele takrat, ko ga ne potrebuješ več.',
  },
  {
    icon: '🔗',
    title: 'Tvoje znanje ni povezano.',
    desc: 'Vsaka misel živi v svojem mehurčku. Uvid od ponedeljka ne najde naloge od četrtka. Vzorec vidiš šele prepozno.',
  },
  {
    icon: '⚙️',
    title: 'Urejanje je postalo delo samo po sebi.',
    desc: 'Preden začneš delati, moraš urediti sistem. Mape, oznake, projekti, workspace-i... Kdaj pa pride pravo delo?',
  },
]

const quickFeatures = [
  {
    icon: '📄',
    title: 'PDF Trezor',
    desc: 'Naloži dokument, AI samodejno izpolni opis in datum. Pogodbe, računi in dokumenti na dosegu roke — vedno.',
  },
  {
    icon: '👤',
    title: 'Osebe & podjetja',
    desc: 'Poveži zapiske in naloge z osebami. Vtipkaš @Janez in vidiš vse kar je kdajkoli vezano na to ime.',
  },
  {
    icon: '⌘K',
    title: 'Iskanje po vsem',
    desc: 'Eno iskalno polje za naloge, zapiske, dokumente in osebe. Cmd+K — in si že tam.',
  },
  {
    icon: '🗓️',
    title: 'Štirje pogledi na teden',
    desc: 'Mesečni, tedenski, 3-dnevni ali dnevni pogled. Prevleci nalogo na drug dan — in je urejeno.',
  },
  {
    icon: '🏷️',
    title: 'Področja z barvami',
    desc: 'Ustvari področja (Delo, Osebno, Projekt X) z emojiji in barvami. Filtriraj z enim klikom — brez hrupa.',
  },
  {
    icon: '🔁',
    title: 'Ponavljajoče naloge',
    desc: '"Vsak teden" ali "Vsakega 15-ga v mesecu" — app ustvari naslednjo instanco sam. Brez opomnikov.',
  },
]

const differentiators = [
  {
    title: 'Zgrajen za tebe, ne za tim.',
    desc: 'Brez workspace-ov, brez admin panelov, brez licenc po glavi. Samo tvoj sistem — tvoja pravila.',
  },
  {
    title: 'Razume slovenščino.',
    desc: 'Vtipkaš "jutri", "v ponedeljek" ali "čez 3 dni" — app razume in nastavi datum. Brez klikov, brez formatov.',
  },
  {
    title: 'Tvoji podatki, tvoja last.',
    desc: 'GDPR skladen. Izvozi vse kar tvoje je, kadarkoli. Brez lock-ina, brez presenečenj.',
  },
]

const faqCategories = [
  {
    category: 'Splošno',
    items: [
      {
        q: 'Kaj točno je mojbrlog?',
        a: 'mojbrlog je osebni produktivnostni sistem za posameznike. Združuje naloge, zapiske, dokumente in osebe v eno aplikacijo — brez kaosa, brez preskakovanja med orodji. Vse kar misliš, naučiš in narediš, živi na enem mestu.',
      },
      {
        q: 'Za koga je mojbrlog namenjen?',
        a: 'Za vsakogar, ki želi imeti urejen sistem za misli in naloge — freelancerje, podjetnike, študente, ustvarjalce. Če imaš občutek, da se tvoje ideje izgubijo preden jih ujameš, je mojbrlog za tebe.',
      },
    ],
  },
  {
    category: 'Cena & dostop',
    items: [
      {
        q: 'Ali je mojbrlog brezplačen?',
        a: 'Da, trenutno je mojbrlog popolnoma brezplačen. Brez kreditne kartice, brez skritih stroškov. V prihodnosti bo na voljo plačljivi plan z dodatnimi funkcijami — ampak osnovna izkušnja ostane brezplačna.',
      },
      {
        q: 'Kdaj pride plačljivi plan?',
        a: 'Delamo na tem. Ko bo pripravljen, bodo zgodnji uporabniki deležni posebnih pogojev. Registriraj se zdaj in boš prvi izvedel.',
      },
    ],
  },
  {
    category: 'Podatki & zasebnost',
    items: [
      {
        q: 'Ali so moji podatki varni?',
        a: 'Da. mojbrlog je GDPR skladen, podatki so šifrirani in shranjeni varno na evropskih strežnikih. Tvojih podatkov nikoli ne delimo s tretjimi osebami ali oglasnimi omrežji.',
      },
      {
        q: 'Ali lahko izvozim vse svoje podatke?',
        a: 'Ja, kadarkoli. Tvoji podatki so tvoja last — vedno imaš možnost izvoza vsega. Brez lock-ina, brez presenečenj. Odločiš se oditi? Odneseš vse s seboj.',
      },
    ],
  },
  {
    category: 'Funkcionalnosti',
    items: [
      {
        q: 'Katere naprave so podprte?',
        a: 'mojbrlog deluje v vsakem sodobnem brskalniku — na računalniku, tablici ali telefonu. Nativne mobilne aplikacije so na roadmapu.',
      },
      {
        q: 'Kako aplikacija razume "jutri" ali "v ponedeljek"?',
        a: 'Vgrajeno je razumevanje slovenskega naravnega jezika. Ko vtipkaš nalogo z besednim opisom datuma ("jutri", "v petek", "čez 3 dni"), jo aplikacija samodejno razporedi. Brez ročnega izbiranja datumov, brez klikanja.',
      },
      {
        q: 'Ali deluje brez internetne povezave?',
        a: 'Zaenkrat mojbrlog zahteva internetno povezavo. Offline način je na roadmapu in ga razvijamo za eno naslednjih verzij.',
      },
      {
        q: 'Kako deluje PDF trezor?',
        a: 'Naloži katerikoli dokument — pogodbo, račun, potrdilo — in AI samodejno zapolni opis in zazna datum. Dokumenti so potem iskljivi po imenu, vsebini ali osebi, s katero so povezani.',
      },
    ],
  },
  {
    category: 'Razlike od ostalih aplikacij',
    items: [
      {
        q: 'Čim se mojbrlog razlikuje od Notion, Todoist ali Bear?',
        a: 'Notion je timsko orodje s kompleksno strukturo baz podatkov. Todoist je samo za naloge. Bear je samo za zapiske. mojbrlog je vse v enem — zasebno, v slovenščini, brez nepotrebne kompleksnosti. Zgrajen za posameznika, ne za tim.',
      },
      {
        q: 'Zakaj ne kar Notion ali Obsidian?',
        a: 'Ker sta zgrajena za napredne uporabnike, ki uživajo v urejanju sistemov. mojbrlog je zgrajen za tiste, ki hočejo enostavno delovati — brez ur konfiguracije, brez učenja. Vtipkaš in delaš.',
      },
    ],
  },
]

const footerCols = [
  { title: 'Produkt', links: [{ label: 'Funkcionalnosti', href: '/funkcionalnosti' }, { label: 'Cenik', href: '#' }, { label: 'Roadmap', href: '#' }] },
  { title: 'Vire', links: [{ label: 'Dokumentacija', href: '#' }, { label: 'Blog', href: '#' }, { label: 'FAQ', href: '#faq' }] },
  { title: 'Podjetje', links: [{ label: 'O nas', href: '#' }, { label: 'Kontakt', href: '#' }] },
  { title: 'Pravno', links: [{ label: 'Zasebnost', href: '/zasebnost' }, { label: 'Pogoji uporabe', href: '/pogoji-uporabe' }, { label: 'GDPR', href: '#' }] },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0E1410',
      color: '#F5F2EA',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>

      {/* ── Nav ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px', height: 62,
        background: 'rgba(14,20,16,0.88)',
        backdropFilter: 'blur(14px)',
        borderBottom: '0.5px solid #1F2A22',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28,
            background: 'linear-gradient(135deg, #3DDC84, #2AB870)',
            borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 700,
          }}>◎</div>
          <span style={{ fontWeight: 700, fontSize: 15, color: '#F5F2EA', letterSpacing: '-0.02em' }}>mojbrlog</span>
        </div>
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

      {/* ── Hero ── */}
      <section style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center',
        padding: '120px 24px 100px',
        background: 'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(61,220,132,0.1) 0%, transparent 65%)',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(61,220,132,0.08)', border: '0.5px solid rgba(61,220,132,0.25)',
          borderRadius: 20, padding: '5px 16px', marginBottom: 36,
          fontSize: 12, color: '#3DDC84', letterSpacing: '0.03em',
        }}>
          ✦ Misli v mreži, ne v mapah.
        </div>

        <h1 style={{
          fontSize: 'clamp(44px, 7.5vw, 86px)',
          fontWeight: 800, lineHeight: 1.05,
          letterSpacing: '-0.04em',
          maxWidth: 820, marginBottom: 28,
          background: 'linear-gradient(170deg, #ffffff 45%, rgba(255,255,255,0.3) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Dom za vse kar misliš, naučiš in ustvariš.
        </h1>

        <p style={{
          fontSize: 19, lineHeight: 1.7,
          color: '#8B998F',
          maxWidth: 520, marginBottom: 48,
        }}>
          Naloge, zapiski, dokumenti in osebe — vse v enem sistemu.
          Brez kaosa, brez kompromisov.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 80 }}>
          <a href={`${APP_URL}/login`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#3DDC84', color: '#000',
            fontWeight: 700, fontSize: 15,
            textDecoration: 'none', borderRadius: 10,
            padding: '14px 32px',
            boxShadow: '0 0 60px rgba(61,220,132,0.3), 0 4px 16px rgba(0,0,0,0.4)',
          }}>
            Začni brezplačno <span style={{ fontSize: 18 }}>→</span>
          </a>
          <a href="#funkcionalnosti" style={{
            display: 'inline-flex', alignItems: 'center',
            color: '#8B998F',
            fontWeight: 500, fontSize: 15,
            textDecoration: 'none', borderRadius: 10,
            padding: '14px 28px',
            border: '0.5px solid #2F3D34',
          }}>
            Poglej kaj zmore
          </a>
        </div>

        {/* Hero mockup */}
        <div style={{ width: '100%', maxWidth: 860 }}>
          <MockWindow title="mojbrlog — Danes">
            <div style={{ padding: '24px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: '#F5F2EA' }}>Torek, 27. maj</span>
                <span style={{
                  fontSize: 12, color: '#3DDC84',
                  background: 'rgba(61,220,132,0.1)', padding: '2px 10px', borderRadius: 20,
                }}>Danes</span>
              </div>
              <TaskRow text="Pregled predloga za stranko" tag="Delo" />
              <TaskRow done text="Jutranjo vadbo" />
              <TaskRow text="Poklici Janeza glede pogodbe" tag="Osebno" date="Jutri" />
              <TaskRow text="Pripraviti prezentacijo za sestanek" tag="Delo" />
              <TaskRow done text="Odgovoriti na email od Maje" />
              <div style={{
                marginTop: 20, padding: '14px 16px',
                background: 'rgba(31,42,34,0.5)', borderRadius: 10,
                border: '0.5px solid #1F2A22',
              }}>
                <div style={{ fontSize: 11, color: 'rgba(139,153,143,0.65)', marginBottom: 8 }}>Dnevni zapisek</div>
                <div style={{ fontSize: 13, color: '#8B998F', lineHeight: 1.65 }}>
                  Dober dan. Fokus na predlog — do 16h mora biti gotov. Sestanek z Miho preloži na sredo, on je potrdil...
                </div>
              </div>
            </div>
          </MockWindow>
        </div>
      </section>

      {/* ── Problem section ── */}
      <section style={{ padding: '100px 24px', textAlign: 'center', maxWidth: 1040, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 54px)',
          fontWeight: 800, letterSpacing: '-0.03em',
          lineHeight: 1.08, color: '#F5F2EA', marginBottom: 20,
        }}>
          Tvoje najboljše misli se izgubijo.
        </h2>
        <p style={{
          fontSize: 17, color: '#8B998F',
          maxWidth: 480, margin: '0 auto 64px',
          lineHeight: 1.7,
        }}>
          Imaš aplikacijo za naloge, eno za zapiske, eno za dokumente… In kljub temu se počutiš kaotično.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20, marginBottom: 72,
        }}>
          {problems.map(p => (
            <div key={p.title} style={{
              background: '#14201A',
              border: '0.5px solid #1F2A22',
              borderRadius: 16, padding: '32px 28px', textAlign: 'left',
            }}>
              <div style={{ fontSize: 28, marginBottom: 14 }}>{p.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#F5F2EA', marginBottom: 10 }}>{p.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: '#8B998F', margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '0.5px solid #1F2A22',
          paddingTop: 48,
        }}>
          <p style={{
            fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 700,
            color: '#F5F2EA', lineHeight: 1.3,
            marginBottom: 12,
          }}>
            Naši možgani ne razmišljajo v mapah —<br />zakaj bi naše beležke?
          </p>
          <p style={{ fontSize: 15, color: '#8B998F', margin: 0 }}>
            Ni tvoja krivda. To so tvoja orodja.
          </p>
        </div>
      </section>

      {/* ── Manifesto strip ── */}
      <section style={{
        padding: '0 48px 80px',
        display: 'flex', justifyContent: 'center',
      }}>
        <div style={{
          maxWidth: 1160, width: '100%',
          background: 'linear-gradient(135deg, rgba(61,220,132,0.08) 0%, rgba(61,220,132,0.04) 100%)',
          border: '0.5px solid rgba(61,220,132,0.2)',
          borderRadius: 20,
          padding: '44px 56px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 32, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontSize: 11, color: '#3DDC84', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 600 }}>
              Filozofija
            </div>
            <p style={{
              fontSize: 'clamp(20px, 3.5vw, 32px)',
              fontWeight: 800, letterSpacing: '-0.03em',
              color: '#F5F2EA', lineHeight: 1.2, margin: 0,
            }}>
              Brlog za misli —<br />brez predalčkov, polno povezav.
            </p>
          </div>
          <a href={`${APP_URL}/login`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#3DDC84', color: '#000',
            fontWeight: 700, fontSize: 14,
            textDecoration: 'none', borderRadius: 10,
            padding: '12px 24px', whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            Preizkusi brezplačno →
          </a>
        </div>
      </section>

      {/* ── Feature 1: Dnevni fokus ── */}
      <section id="funkcionalnosti" style={{ padding: '80px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: 80, alignItems: 'center',
          maxWidth: 1160, margin: '0 auto',
        }}>
          <div>
            <div style={{
              fontSize: 11, color: '#3DDC84',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: 18, fontWeight: 600,
            }}>Dnevni fokus</div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 800, letterSpacing: '-0.03em',
              lineHeight: 1.08, marginBottom: 22, color: '#F5F2EA',
            }}>
              Vsak dan začneš s čisto platno.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#8B998F', marginBottom: 18 }}>
              Dan view zbere naloge za danes, prostor za dnevni zapisek in hiter pregled — vse naenkrat. Brez iskanja, brez osmih zavihkov.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#8B998F', margin: 0 }}>
              Na koncu dneva vidiš točno kaj je bilo opravljeno. In naslednji dan začneš sveže.
            </p>
          </div>
          <MockWindow title="Danes — Torek, 27. maj">
            <div style={{ padding: '24px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: '#F5F2EA' }}>Torek, 27. maj</span>
                <span style={{ fontSize: 11, color: '#3DDC84', background: 'rgba(61,220,132,0.1)', padding: '2px 8px', borderRadius: 20 }}>Danes</span>
              </div>
              <TaskRow text="Pregled predloga za stranko" tag="Delo" />
              <TaskRow done text="Jutranjo vadbo" />
              <TaskRow text="Poklici Janeza glede pogodbe" tag="Osebno" />
              <TaskRow text="Predlog posreduj do 16h" date="Danes" />
              <TaskRow done text="Odgovoriti Maji" />
              <div style={{ marginTop: 16, padding: '12px 14px', background: 'rgba(31,42,34,0.5)', borderRadius: 8 }}>
                <div style={{ fontSize: 11, color: 'rgba(139,153,143,0.55)', marginBottom: 6 }}>Dnevni zapisek</div>
                <div style={{ fontSize: 13, color: '#8B998F', lineHeight: 1.6 }}>
                  Fokus na predlog — do 16h mora biti gotov. Sestanek preloži na sredo...
                </div>
              </div>
            </div>
          </MockWindow>
        </div>
      </section>

      {/* ── Feature 2: Inbox & Naloge ── */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: 80, alignItems: 'center',
          maxWidth: 1160, margin: '0 auto',
        }}>
          <MockWindow title="Inbox">
            <div style={{ padding: '20px 24px' }}>
              <div style={{
                display: 'flex', alignItems: 'center',
                background: '#1F2A22',
                border: '0.5px solid #2F3D34',
                borderRadius: 8, padding: '10px 14px', marginBottom: 20,
              }}>
                <span style={{ fontSize: 13, color: 'rgba(139,153,143,0.65)' }}>
                  Dodaj nalogo… (npr. "Poklici Janeza jutri")
                </span>
              </div>
              <TaskRow text="Naroči se pri zobozdravniku" tag="Osebno" date="Jutri" />
              <TaskRow text="Preglej ponudbo dobavitelja" tag="Delo" />
              <TaskRow text="Kupi darilo za rojstni dan" date="V petek" />
              <TaskRow text="Tedenski pregled" date="Vsak ponedeljek" />
              <TaskRow text="Razmisli o novi funkciji" tag="Ideja" />
              <div style={{ marginTop: 14, paddingTop: 10, borderTop: '0.5px solid #1F2A22' }}>
                <span style={{ fontSize: 11, color: 'rgba(139,153,143,0.55)' }}>5 nalog • 2 s ponavljanjem</span>
              </div>
            </div>
          </MockWindow>
          <div>
            <div style={{
              fontSize: 11, color: '#3DDC84',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: 18, fontWeight: 600,
            }}>Inbox & Naloge</div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 800, letterSpacing: '-0.03em',
              lineHeight: 1.08, marginBottom: 22, color: '#F5F2EA',
            }}>
              Samo zajemi. App uredi sam.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#8B998F', marginBottom: 18 }}>
              Vtipkaš "Pokliči Janeza jutri" in app razume datum. "Vsak mesec 15-ga" postane ponavljajoča naloga, ki se obnovi sama, ko jo označiš za opravljeno.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#8B998F', margin: 0 }}>
              Organiziraj po področjih — Delo, Osebno, Projekt X — z barvami in emojiji. Filtriraj z enim klikom, brez hrupa.
            </p>
          </div>
        </div>
      </section>

      {/* ── Feature 3: Zapiski ── */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: 80, alignItems: 'center',
          maxWidth: 1160, margin: '0 auto',
        }}>
          <div>
            <div style={{
              fontSize: 11, color: '#3DDC84',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: 18, fontWeight: 600,
            }}>Zapiski</div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 800, letterSpacing: '-0.03em',
              lineHeight: 1.08, marginBottom: 22, color: '#F5F2EA',
            }}>
              Zapiski ki razmišljajo s teboj.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#8B998F', marginBottom: 18 }}>
              Rich text editor z slash ukazi —{' '}
              <span style={{ fontFamily: 'monospace', fontSize: 13, background: '#1F2A22', padding: '2px 7px', borderRadius: 4, color: 'rgba(245,242,234,0.7)' }}>/naslov</span>,{' '}
              <span style={{ fontFamily: 'monospace', fontSize: 13, background: '#1F2A22', padding: '2px 7px', borderRadius: 4, color: 'rgba(245,242,234,0.7)' }}>/seznam</span>,{' '}
              <span style={{ fontFamily: 'monospace', fontSize: 13, background: '#1F2A22', padding: '2px 7px', borderRadius: 4, color: 'rgba(245,242,234,0.7)' }}>/koda</span>.{' '}
              Vstavi YouTube, slike, check liste.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#8B998F', margin: 0 }}>
              Backlinks povežejo zapiske med seboj. Vidiš kateri zapiski te omenjajo — tvoje znanje začne tvoriti mrežo, ne le seznam.
            </p>
          </div>
          <MockWindow title="Sestanek z Janezom — 27. maj">
            <div style={{ padding: '24px' }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#F5F2EA', marginBottom: 20 }}>
                Sestanek z Janezom — 27. maj
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(245,242,234,0.6)', marginBottom: 10 }}>
                Ključne točke
              </div>
              {[
                'Ponudba je bila sprejeta ✓',
                'Pogodba do konca tedna',
                'Naslednji korak: demo za stranko',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
                  <span style={{ color: '#3DDC84', fontSize: 13, marginTop: 1, flexShrink: 0 }}>•</span>
                  <span style={{ fontSize: 13, color: 'rgba(245,242,234,0.6)' }}>{item}</span>
                </div>
              ))}
              <div style={{ marginTop: 20, borderTop: '0.5px solid #1F2A22', paddingTop: 16 }}>
                <div style={{ fontSize: 11, color: 'rgba(139,153,143,0.65)', marginBottom: 8 }}>Naloge iz tega zapiska</div>
                <TaskRow text="Pripravi pogodbo" tag="Delo" date="Petek" />
              </div>
              <div style={{
                marginTop: 16, padding: '10px 14px',
                background: 'rgba(61,220,132,0.05)',
                border: '0.5px solid rgba(61,220,132,0.15)',
                borderRadius: 8,
              }}>
                <div style={{ fontSize: 11, color: '#3DDC84', marginBottom: 6 }}>Backlinks (2)</div>
                <div style={{ fontSize: 12, color: 'rgba(139,153,143,0.9)' }}>↳ Projekt Alpha &nbsp;·&nbsp; ↳ @Janez Novak</div>
              </div>
            </div>
          </MockWindow>
        </div>
      </section>

      {/* ── Quick features grid ── */}
      <section style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 800, letterSpacing: '-0.03em',
              marginBottom: 16, color: '#F5F2EA',
            }}>
              Vse kar potrebuješ. Nič kar ne.
            </h2>
            <p style={{ fontSize: 16, color: '#8B998F', maxWidth: 420, margin: '0 auto' }}>
              Šest modulov, ki delajo skupaj. Kot bi moral.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 16,
          }}>
            {quickFeatures.map(f => (
              <div
                key={f.title}
                style={{
                  background: '#14201A',
                  border: '0.5px solid #1F2A22',
                  borderRadius: 14, padding: '28px',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(61,220,132,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              >
                <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#F5F2EA', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#8B998F', margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiator ── */}
      <section style={{
        padding: '100px 48px',
        borderTop: '0.5px solid #1F2A22',
        borderBottom: '0.5px solid #1F2A22',
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(61,220,132,0.06) 0%, transparent 70%)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 800, letterSpacing: '-0.03em',
              color: '#F5F2EA', marginBottom: 16,
            }}>
              Zgrajen drugače. Namerno.
            </h2>
            <p style={{ fontSize: 16, color: '#8B998F', maxWidth: 440, margin: '0 auto' }}>
              Nismo še ena productivity aplikacija. Smo tvoj sistem.
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 40,
          }}>
            {differentiators.map(d => (
              <div key={d.title} style={{ textAlign: 'center', padding: '8px 16px' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#F5F2EA', marginBottom: 12 }}>{d.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: '#8B998F', margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: '100px 48px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(61,220,132,0.08)', border: '0.5px solid rgba(61,220,132,0.25)',
              borderRadius: 20, padding: '5px 16px', marginBottom: 24,
              fontSize: 12, color: '#3DDC84', letterSpacing: '0.03em',
            }}>
              Pogosta vprašanja
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 800, letterSpacing: '-0.03em',
              color: '#F5F2EA', marginBottom: 16,
            }}>
              Imaš vprašanje?
            </h2>
            <p style={{ fontSize: 16, color: '#8B998F', maxWidth: 420, margin: '0 auto' }}>
              Tukaj so odgovori na najpogostejša. Ni tvojega? Napiši nam.
            </p>
          </div>

          {faqCategories.map(cat => (
            <div key={cat.category} style={{ marginBottom: 48 }}>
              <div style={{
                fontSize: 11, fontWeight: 700,
                color: '#3DDC84', letterSpacing: '0.1em',
                textTransform: 'uppercase', marginBottom: 4,
              }}>{cat.category}</div>
              <div style={{
                borderTop: '0.5px solid #1F2A22',
              }}>
                {cat.items.map(item => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}

          <div style={{
            marginTop: 56, padding: '28px 32px',
            background: 'rgba(61,220,132,0.05)',
            border: '0.5px solid rgba(61,220,132,0.15)',
            borderRadius: 14, textAlign: 'center',
          }}>
            <p style={{ fontSize: 15, color: '#8B998F', margin: '0 0 16px' }}>
              Še vedno imaš vprašanje?
            </p>
            <a href="mailto:info@mojbrlog.eu" style={{
              fontSize: 14, fontWeight: 600,
              color: '#3DDC84', textDecoration: 'none',
            }}>
              Piši nam na info@mojbrlog.eu →
            </a>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{
        padding: '130px 24px 150px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(61,220,132,0.12) 0%, transparent 70%)',
      }}>
        <h2 style={{
          fontSize: 'clamp(36px, 6vw, 66px)',
          fontWeight: 800, letterSpacing: '-0.04em',
          lineHeight: 1.06, marginBottom: 20,
          background: 'linear-gradient(170deg, #ffffff 45%, rgba(255,255,255,0.35) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          maxWidth: 640, margin: '0 auto 20px',
        }}>
          Začni danes.<br />Brezplačno.
        </h2>
        <p style={{ fontSize: 17, color: '#8B998F', marginBottom: 48 }}>
          Brez kreditne kartice. Brez obveznosti. Brez kompromisov.
        </p>
        <a href={`${APP_URL}/login`} style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: '#3DDC84', color: '#000',
          fontWeight: 700, fontSize: 16,
          textDecoration: 'none', borderRadius: 12,
          padding: '16px 38px',
          boxShadow: '0 0 80px rgba(61,220,132,0.35), 0 4px 20px rgba(0,0,0,0.5)',
        }}>
          Odpri mojbrlog →
        </a>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: '0.5px solid #1F2A22',
        padding: '64px 48px 40px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 48, marginBottom: 64,
          }}>
            {/* Brand */}
            <div style={{ gridColumn: 'span 2', maxWidth: 240 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 26, height: 26,
                  background: 'linear-gradient(135deg, #3DDC84, #2AB870)',
                  borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13,
                }}>◎</div>
                <span style={{ fontWeight: 700, fontSize: 15, color: '#F5F2EA' }}>mojbrlog</span>
              </div>
              <p style={{ fontSize: 13, color: '#8B998F', lineHeight: 1.75, margin: 0 }}>
                Dom za vse kar misliš, naučiš in ustvariš.
              </p>
            </div>

            {/* Link columns */}
            {footerCols.map(col => (
              <div key={col.title}>
                <div style={{
                  fontSize: 11, fontWeight: 600,
                  color: '#8B998F',
                  letterSpacing: '0.07em', textTransform: 'uppercase',
                  marginBottom: 18,
                }}>{col.title}</div>
                {col.links.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      display: 'block', fontSize: 13,
                      color: '#8B998F',
                      textDecoration: 'none', marginBottom: 12,
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.38)')}
                  >{link.label}</a>
                ))}
              </div>
            ))}
          </div>

          <div style={{
            borderTop: '0.5px solid #1F2A22',
            paddingTop: 28,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 12,
          }}>
            <span style={{ fontSize: 12, color: 'rgba(139,153,143,0.55)' }}>
              © {new Date().getFullYear()} mojbrlog
            </span>
            <span style={{ fontSize: 12, color: 'rgba(139,153,143,0.55)' }}>
              Narejeno v Sloveniji 🇸🇮
            </span>
          </div>
        </div>
      </footer>

    </div>
  )
}
