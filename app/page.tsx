'use client'

const APP_URL = 'https://app.mojbrlog.eu'

const features = [
  {
    icon: '🔥',
    title: 'Dnevni fokus',
    desc: 'Vsak dan začneš s čisto platno. Naloge za danes, dnevni zapisek in pregled — vse na enem mestu.',
  },
  {
    icon: '📥',
    title: 'Inbox za misli',
    desc: 'Hitro zajemi vsako idejo ali nalogo. Brez datuma, brez pritiska — inbox poskrbi, da nič ne izgubiš.',
  },
  {
    icon: '📝',
    title: 'Zapiski z glavo',
    desc: 'Strukturirani zapiski z lastnimi tipi — projekti, ideje, sestanki. Filtriraj, iščej, poveži z nalogami.',
  },
  {
    icon: '📄',
    title: 'PDF Trezor',
    desc: 'Naloži dokument, AI samodejno izpolni opis in datum. Vse pogodbe, računi in dokumenti na dosegu roke.',
  },
  {
    icon: '👤',
    title: 'Osebe & podjetja',
    desc: 'Poveži zapiske in naloge z osebami. Vtipkaj @ in vidiš vse kar je vezano na neko ime.',
  },
  {
    icon: '📅',
    title: 'Koledar s pregledom',
    desc: 'Mesečni, tedenski ali 3-dnevni pogled. Vidiš naloge in zapisek za vsak dan naenkrat.',
  },
]

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#f0f0f0' }}>

      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', height: 60,
        background: 'rgba(8,8,8,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '0.5px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 26, height: 26,
            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
            borderRadius: 7,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14,
          }}>◎</div>
          <span style={{ fontWeight: 600, fontSize: 15, color: '#fff' }}>mojbrlog</span>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href={`${APP_URL}/login`} style={{
            fontSize: 13, color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            padding: '6px 14px',
          }}>
            Prijava
          </a>
          <a href={`${APP_URL}/login`} style={{
            fontSize: 13, fontWeight: 500,
            background: '#22c55e', color: '#000',
            textDecoration: 'none', borderRadius: 8,
            padding: '7px 16px',
          }}>
            Začni brezplačno →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center',
        padding: '100px 24px 80px 24px',
        background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(34,197,94,0.12) 0%, transparent 70%)',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(34,197,94,0.1)', border: '0.5px solid rgba(34,197,94,0.3)',
          borderRadius: 20, padding: '5px 14px', marginBottom: 28,
          fontSize: 12, color: '#22c55e',
        }}>
          ✦ Tvoj osebni operacijski sistem
        </div>

        <h1 style={{
          fontSize: 'clamp(40px, 7vw, 76px)',
          fontWeight: 700, lineHeight: 1.08,
          letterSpacing: '-0.03em',
          maxWidth: 800,
          marginBottom: 24,
          background: 'linear-gradient(180deg, #ffffff 60%, rgba(255,255,255,0.4) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Vse za tvoj dan.<br />Na enem mestu.
        </h1>

        <p style={{
          fontSize: 18, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.5)',
          maxWidth: 520, marginBottom: 44,
        }}>
          Naloge, dnevni zapiski, dokumenti in osebe — brez kaosa, brez aplikacij za vsako reč posebej.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={`${APP_URL}/login`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#22c55e', color: '#000',
            fontWeight: 600, fontSize: 15,
            textDecoration: 'none', borderRadius: 10,
            padding: '14px 28px',
            boxShadow: '0 0 40px rgba(34,197,94,0.25)',
          }}>
            Začni brezplačno
            <span style={{ fontSize: 18 }}>→</span>
          </a>
          <a href="#funkcionalnosti" style={{
            display: 'inline-flex', alignItems: 'center',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 500, fontSize: 15,
            textDecoration: 'none', borderRadius: 10,
            padding: '14px 28px',
            border: '0.5px solid rgba(255,255,255,0.12)',
          }}>
            Kaj vse zmore
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 48, marginTop: 80,
          borderTop: '0.5px solid rgba(255,255,255,0.08)',
          paddingTop: 40,
          flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {[
            { num: '6', label: 'modulov v enem' },
            { num: '∞', label: 'zapiskov in nalog' },
            { num: 'AI', label: 'za dokumente' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#22c55e' }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="funkcionalnosti" style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 12 }}>
            Vse kar potrebuješ
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 440, margin: '0 auto' }}>
            Nič odvečnega. Samo orodja ki jih dejansko uporabljaš vsak dan.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 16,
        }}>
          {features.map((f) => (
            <div key={f.title} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '0.5px solid rgba(255,255,255,0.08)',
              borderRadius: 14,
              padding: '28px 28px',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{f.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#fff' }}>{f.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.45)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '80px 24px 100px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(34,197,94,0.1) 0%, transparent 70%)',
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 700, letterSpacing: '-0.02em',
          marginBottom: 16, maxWidth: 500, margin: '0 auto 16px',
        }}>
          Začni danes.<br />Brezplačno.
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', marginBottom: 36 }}>
          Brez kreditne kartice. Brez obveznosti.
        </p>
        <a href={`${APP_URL}/login`} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#22c55e', color: '#000',
          fontWeight: 600, fontSize: 16,
          textDecoration: 'none', borderRadius: 10,
          padding: '15px 32px',
          boxShadow: '0 0 60px rgba(34,197,94,0.3)',
        }}>
          Odpri mojbrlog →
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '0.5px solid rgba(255,255,255,0.08)',
        padding: '24px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 20, height: 20,
            background: 'linear-gradient(135deg, #22c55e, #16a34a)',
            borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11,
          }}>◎</div>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>mojbrlog.eu</span>
        </div>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
          © {new Date().getFullYear()} mojbrlog
        </span>
      </footer>

    </div>
  )
}
