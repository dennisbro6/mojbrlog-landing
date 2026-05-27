import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Splošni pogoji uporabe — mojbrlog',
  description: 'Splošni pogoji uporabe spletne aplikacije Moj Brlog.',
}

const S = {
  text: { fontSize: 15, lineHeight: 1.8, color: '#8B998F' } as React.CSSProperties,
  h2: {
    fontSize: 18, fontWeight: 700, color: '#F5F2EA',
    marginTop: 48, marginBottom: 16, letterSpacing: '-0.01em',
  } as React.CSSProperties,
  art: {
    fontSize: 12, fontWeight: 600, color: '#3DDC84',
    letterSpacing: '0.05em', marginBottom: 6, marginTop: 28,
  } as React.CSSProperties,
  p: { margin: '0 0 14px' } as React.CSSProperties,
  ul: { margin: '0 0 14px', paddingLeft: 20 } as React.CSSProperties,
  li: { marginBottom: 7 } as React.CSSProperties,
  a: { color: '#3DDC84', textDecoration: 'none' } as React.CSSProperties,
}

export default function PogojiUporabePage() {
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
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 28, height: 28,
            background: 'linear-gradient(135deg, #3DDC84, #2AB870)',
            borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 700,
          }}>◎</div>
          <span style={{ fontWeight: 700, fontSize: 15, color: '#F5F2EA', letterSpacing: '-0.02em' }}>mojbrlog</span>
        </Link>
        <Link href="/" style={{ fontSize: 13, color: '#8B998F', textDecoration: 'none', padding: '7px 16px', borderRadius: 8 }}>
          ← Nazaj na domačo stran
        </Link>
      </nav>

      {/* Content */}
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '72px 32px 120px' }}>

        {/* Header */}
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
            Splošni pogoji uporabe
          </h1>
          <p style={{ fontSize: 15, color: '#8B998F', fontStyle: 'italic', margin: 0 }}>
            Splošni pogoji uporabe spletne aplikacije Moj Brlog, dostopne na naslovu{' '}
            <a href="https://mojbrlog.eu" style={S.a}>mojbrlog.eu</a>.
          </p>
          <p style={{ fontSize: 14, color: 'rgba(139,153,143,0.7)', marginTop: 12, marginBottom: 0 }}>
            Datum zadnje posodobitve: 27. maj 2026
          </p>
        </div>

        {/* Body */}
        <div style={{ ...S.text, borderTop: '0.5px solid #1F2A22', paddingTop: 48 }}>

          {/* 1 */}
          <h2 style={S.h2}>Opredelitev pojmov</h2>

          <p style={S.art}>1. člen</p>
          <p style={S.p}>
            Storitve »MOJ BRLOG« obsegajo vse funkcionalnosti in storitve spletne aplikacije za produktivnost, ki je dostopna na spletnih straneh{' '}
            <a href="https://mojbrlog.eu" style={S.a}>www.mojbrlog.eu</a>{' '}
            (v nadaljevanju Storitve oziroma Aplikacija). Ponudnik storitev »MOJ BRLOG« je podjetje Studio56, Hafnerjevo naselje 27, 4220 Škofja Loka (v nadaljevanju Ponudnik). Naročnik storitev »MOJ BRLOG« je vsaka pravna ali fizična oseba, ki je preko spletnih strani ali na kakšen drug pisni način naročila storitve Ponudnika (v nadaljevanju Naročnik). Uporabnik storitev »MOJ BRLOG« je vsaka pravna ali fizična oseba, ki uporablja storitve »MOJ BRLOG« (v nadaljevanju Uporabnik). Stranka »MOJ BRLOG« je vsak Naročnik ali Uporabnik storitev »MOJ BRLOG« (v nadaljevanju Stranka).
          </p>

          <p style={S.art}>2. člen</p>
          <p style={S.p}>
            Aplikacija »MOJ BRLOG« je spletna aplikacija za produktivnost, ki Uporabniku omogoča organizacijo, upravljanje in sledenje osebnim ter delovnim aktivnostim. Aplikacija je dostopna preko spletnega brskalnika brez potrebe po lokalni namestitvi. Ponudnik si pridržuje pravico, da kadarkoli spreminja, dodaja ali odstranjuje posamezne funkcionalnosti Aplikacije z namenom izboljšanja storitve, zagotavljanja varnosti ali skladnosti z veljavno zakonodajo. Posamezne funkcionalnosti so lahko brezplačne ali plačljive, odvisno od izbranega naročniškega paketa, ki je objavljen na spletnih straneh Ponudnika. Cene posameznih paketov se lahko spremenijo, pri čemer bo Ponudnik o spremembah obvestil Uporabnike vsaj 15 dni pred uveljavitvijo nove cene za obstoječe naročnike.
          </p>

          {/* 2 */}
          <h2 style={S.h2}>Splošna določila</h2>

          <p style={S.art}>3. člen</p>
          <p style={S.p}>
            Storitve »MOJ BRLOG« opredeljujejo naslednji, za vse Stranke zavezujoči, Splošni pogoji uporabe storitev »MOJ BRLOG« (v nadaljevanju Splošni pogoji). Splošni pogoji imajo skupaj z opravljenim naročilom storitev oziroma registracijo uporabniškega računa naravo pogodbe, sklenjene med Ponudnikom in Naročnikom oziroma Uporabnikom. V kolikor Ponudnik in Naročnik skleneta pogodbo v pisni obliki, imajo posamezna določila te pogodbe prednost pred določili Splošnih pogojev. Za vsa določila, ki niso urejena s temi Splošnimi pogoji, se smiselno uporabljajo določila Obligacijskega zakonika in druge veljavne zakonodaje Republike Slovenije.
          </p>

          <p style={S.art}>4. člen</p>
          <p style={S.p}>
            Ponudnik in Stranka se obvezujeta ravnati kot dobra gospodarja. Njune izjave bodo tolmačene v dobri veri. Ponudnik in Stranka spore rešujeta sporazumno. V nasprotnem primeru spore rešuje stvarno pristojno sodišče v Kranju.
          </p>

          <p style={S.art}>5. člen</p>
          <p style={S.p}>
            Ponudnik storitev si pridržuje pravico do spremembe določil Splošnih pogojev kadarkoli in brez predhodnega obvestila Strankam, za zagotavljanje skladnosti z veljavno zakonodajo ter internimi poslovnimi akti. Za datum spremembe se šteje objava na straneh{' '}
            <a href="https://mojbrlog.eu" style={S.a}>www.mojbrlog.eu</a>. Če v 15 dneh po objavi sprememb Stranka ne ugovarja, se smatra, da se s spremembami strinja. V primeru, da se Stranka s spremembami ne strinja, ima pravico do prekinitve uporabe Aplikacije.
          </p>

          {/* 3 */}
          <h2 style={S.h2}>Registracija in uporabniški račun</h2>

          <p style={S.art}>6. člen</p>
          <p style={S.p}>
            Za uporabo Aplikacije je potrebna registracija uporabniškega računa. Uporabnik je dolžan ob registraciji navesti resnične, točne in popolne podatke ter jih po potrebi sproti posodabljati. Uporabnik je sam odgovoren za varovanje svojih dostopnih podatkov (uporabniško ime in geslo) in za vse aktivnosti, ki se izvajajo preko njegovega uporabniškega računa. Uporabnik je dolžan Ponudnika nemudoma obvestiti o vsaki nepooblaščeni uporabi svojega računa ali drugi kršitvi varnosti. Uporabniški račun je oseben in ga ni dovoljeno deliti s tretjimi osebami brez predhodnega pisnega soglasja Ponudnika.
          </p>

          <p style={S.art}>7. člen</p>
          <p style={S.p}>
            Uporabnik lahko kadarkoli zahteva izbris svojega uporabniškega računa preko nastavitev Aplikacije ali s pisno zahtevo, posredovano Ponudniku. Z izbrisom računa se trajno izbrišejo vsi podatki Uporabnika, razen tistih, ki jih je Ponudnik dolžan hraniti na podlagi veljavne zakonodaje. Ponudnik si pridržuje pravico, da po lastni presoji onemogoči ali izbriše uporabniški račun, če Uporabnik krši Splošne pogoje, veljavno zakonodajo ali kako drugače ogroža delovanje Aplikacije oziroma druge Uporabnike.
          </p>

          {/* 4 */}
          <h2 style={S.h2}>Cene in komercialni pogoji</h2>

          <p style={S.art}>8. člen</p>
          <p style={S.p}>
            Vse cene na spletnih straneh Ponudnika so v eurih (€) in ne vsebujejo davka na dodano vrednost, ker podjetje Studio56 ni zavezanec za DDV. V kolikor določena specifična storitev ali paket ni naveden na spletnih straneh Ponudnika, jo lahko Naročnik dobi po pisnem zahtevku ali na sedežu podjetja Ponudnika.
          </p>

          <p style={S.art}>9. člen</p>
          <p style={S.p}>
            Naročnina na storitve »MOJ BRLOG« se obračunava za tekoče obračunsko obdobje po vsakokrat veljavnem ceniku. Cenik storitev je objavljen na spletnih straneh »MOJ BRLOG« in se lahko za prihodnje obračunsko obdobje spremeni. O spremembah cen bo Ponudnik obstoječe Naročnike obvestil vsaj 15 dni pred uveljavitvijo, in sicer preko elektronske pošte oziroma obvestila znotraj Aplikacije.
          </p>

          <p style={S.art}>10. člen</p>
          <p style={S.p}>
            Naročnik se obvezuje, da bo Ponudniku plačeval storitve do datuma valute. V primeru neplačila ima Ponudnik pravico Naročniku, v kolikor se izkaže, da Naročnik kljub dodatnemu opominu zamuja s plačilom storitev za več kot 15 dni od dneva zapadlosti računa, prekiniti dobavo vseh storitev, vključno z začasnim onemogočanjem dostopa do uporabniškega računa in podatkov v Aplikaciji. Ponudnik v tem primeru ne odgovarja za dejansko nastalo poslovno škodo Naročnika. Naročnik se zavezuje, da bo poravnal tudi morebitne stroške, nastale s ponovno aktivacijo storitve.
          </p>

          <p style={S.art}>11. člen</p>
          <p style={S.p}>
            Naročnik s plačilom računa potrjuje, da je storitev, ki jo Ponudnik nudi, ustrezna in brez napak, ki bi lahko bile predmet reklamacije. Če se Naročnik z izstavljenim računom ne strinja, ga ima pravico pisno zavrniti v roku 8 dni od prejema, po preteku tega roka zavrnitev računa ni več možna.
          </p>

          {/* 5 */}
          <h2 style={S.h2}>Trajanje in razveza naročniške pogodbe</h2>

          <p style={S.art}>12. člen</p>
          <p style={S.p}>
            Za naročilo storitev velja kakršnokoli naročilo, ki ga Naročnik posreduje Ponudniku v pisni, lahko tudi elektronski obliki, vključno z izbiro plačljivega paketa znotraj Aplikacije. Z aktivacijo plačljivega paketa Naročnik potrjuje, da je seznanjen s temi Splošnimi pogoji in veljavnim cenikom storitev Ponudnika.
          </p>

          <p style={S.art}>13. člen</p>
          <p style={S.p}>
            Naročniško razmerje se sklepa za obdobje, izbrano ob naročilu (mesečno, letno ali drugo obdobje, ki je opredeljeno v ponudbi). Če ni določeno drugače, se naročniško razmerje samodejno podaljša za enako obdobje, razen če Naročnik vsaj 15 dni pred iztekom tekočega obračunskega obdobja pisno obvesti Ponudnika o prekinitvi naročniškega razmerja. Naročnik se obvezuje, da bo do dneva prekinitve poravnal vse obveznosti iz naslova naročniške pogodbe. V primeru predčasne prekinitve pogodbe Naročnik ni upravičen do povračila že plačanih sredstev.
          </p>

          <p style={S.art}>14. člen</p>
          <p style={{ ...S.p, marginBottom: 8 }}>Ponudnik lahko prekine pogodbo brez predhodnega obvestila, če Naročnik oziroma Uporabnik:</p>
          <ul style={S.ul}>
            <li style={S.li}>krši določila teh Splošnih pogojev;</li>
            <li style={S.li}>uporablja Aplikacijo v nasprotju z veljavno zakonodajo;</li>
            <li style={S.li}>uporablja Aplikacijo na način, ki ogroža njeno delovanje ali varnost drugih Uporabnikov;</li>
            <li style={S.li}>ne poravna obveznosti iz naročniške pogodbe v dogovorjenem roku;</li>
            <li style={S.li}>poskuša pridobiti nepooblaščen dostop do podatkov drugih Uporabnikov ali sistemov Ponudnika.</li>
          </ul>

          {/* 6 */}
          <h2 style={S.h2}>Garancijska izjava</h2>

          <p style={S.art}>15. člen</p>
          <p style={S.p}>
            Uporabnik in Naročnik storitev »MOJ BRLOG« se strinjata, da vse storitve uporabljata na lastno odgovornost. Ponudnik ne ponuja nobene garancije, da bodo storitve popolnoma ustrezale zahtevam in potrebam Naročnika ali Uporabnika, ali da bodo storitve na voljo brez prekinitev – časovnih, varnostnih in brez napak. Prav tako Ponudnik ne ponuja nikakršne garancije za točnost ali zanesljivost vseh, skozi storitve pridobljenih informacij, ali da bodo programske napake takoj odpravljene. Ponudnik si bo prizadeval, da bo Aplikacija delovala zanesljivo in neprekinjeno, vendar ne more zagotoviti 100% dostopnosti.
          </p>

          {/* 7 */}
          <h2 style={S.h2}>Varovanje podatkov in zasebnost</h2>

          <p style={S.art}>16. člen</p>
          <p style={S.p}>
            Ponudnik in Naročnik se obvezujeta, kot poslovno tajnost varovati vse podatke, do katerih bosta prišla pri svojem poslovnem sodelovanju, ves čas sodelovanja, in da bosta vse pridobljene podatke iz naslova sodelovanja varovala vsaj še tri (3) leta po prenehanju veljavnosti pogodbenega razmerja. Ponudnik se zavezuje, da podatkov Naročnika ne bo posredoval tretjim osebam, razen ob izrecnem pisnem dovoljenju Naročnika ali kadar to zahteva veljavna zakonodaja.
          </p>

          <p style={S.art}>17. člen</p>
          <p style={S.p}>
            Podrobnejša pravila o obdelavi osebnih podatkov, varovanju zasebnosti in pravicah Uporabnikov v zvezi z osebnimi podatki so opredeljena v{' '}
            <Link href="/zasebnost" style={S.a}>Pravilniku o zasebnosti</Link>,
            {' '}ki je sestavni del teh Splošnih pogojev in je dostopna na spletni strani{' '}
            <a href="https://mojbrlog.eu" style={S.a}>mojbrlog.eu</a>.
          </p>

          <p style={S.art}>18. člen</p>
          <p style={S.p}>
            Naročnik soglaša, da Ponudnik anonimizirane statistične podatke o uporabi Aplikacije uporabi za izboljšanje storitve, raziskovalne namene in za predstavitev rezultatov na spletnih straneh Ponudnika. Naročnik soglaša tudi, da lahko Ponudnik naziv Naročnika (v primeru pravne osebe) z njegovim predhodnim soglasjem objavi kot referenco na svojih spletnih straneh.
          </p>

          {/* 8 */}
          <h2 style={S.h2}>Pravice in obveznosti ponudnika storitev</h2>

          <p style={S.art}>19. člen</p>
          <p style={S.p}>
            Storitve Ponudnika so odvisne od splošnega delovanja omrežja Internet ter strežniške infrastrukture, na kateri gostuje Aplikacija. Ponudnik bo naredil vse, kar je v njegovi moči, za neprekinjeno in nemoteno delovanje Aplikacije.
          </p>

          <p style={S.art}>20. člen</p>
          <p style={S.p}>
            Ponudnik se obvezuje, da bo vsa potrebna vzdrževalna dela izvajal v časovnem okviru, ko bo predvidena uporaba Aplikacije in s tem izpad delovanja storitev najmanjša. V primeru načrtovane prekinitve, daljše od 3 ur, bodo Uporabniki obveščeni preko elektronske pošte ali obvestila znotraj Aplikacije. Časovni okvir in prekinitve se ne nanašajo na izredne in nujne popravke. Med te spadajo popravki, katerih zamuda pri izvajanju bi lahko bistveno vplivala na varnost in zaupnost podatkov v Aplikaciji.
          </p>

          <p style={S.art}>21. člen</p>
          <p style={S.p}>
            Ponudnik v nobenem primeru ne more biti odgovoren za posredno ali neposredno izgubo prihodka oziroma kakršnokoli škodo, ki bi nastala zaradi nepravilnega delovanja storitev ali naprav Ponudnika. Ponudnik v nobenem primeru ne more biti odgovoren za posredno ali neposredno izgubo prihodka oziroma kakršnokoli škodo, ki bi nastala zaradi izgube oziroma odtujitve Naročnikovih podatkov ali drugih parametrov, potrebnih za uporabo storitev Ponudnika.
          </p>

          <p style={S.art}>22. člen</p>
          <p style={S.p}>
            V primeru kakršnegakoli dejanja Naročnika ali Uporabnika, ki je v nasprotju z veljavno slovensko ali mednarodno zakonodajo ali v primeru grobega kršenja Splošnih pogojev, ima Ponudnik pravico Uporabniku takoj, brez predhodnega obvestila, prekiniti dobavo storitev, ne glede na dejansko poslovno škodo, ki bi jo Naročnik s tem posegom lahko utrpel.
          </p>

          <p style={S.art}>23. člen</p>
          <p style={S.p}>
            Ponudnik ima pravico začasno onemogočiti dostop ali omejiti uporabo Aplikacije Uporabnikom, katerih aktivnost prekomerno obremenjuje strežniško infrastrukturo ali ogroža stabilnost storitve. Ponavljajoče kršitve imajo lahko za posledico trajno ukinitev uporabniškega računa.
          </p>

          {/* 9 */}
          <h2 style={S.h2}>Izključitev odgovornosti ponudnika</h2>

          <p style={S.art}>24. člen</p>
          <p style={S.p}>
            Ponudnik ni odgovoren za vsebine in podatke, ki jih Uporabniki shranjujejo v Aplikaciji, in v nobenem primeru ne more biti odgovoren za posredno ali neposredno izgubo prihodka, dobička oz. kakršnokoli škodo, ki bi nastala zaradi nepravilnega delovanja omrežja, strežnikov ali Aplikacije, kakor tudi za izgubo, poškodbo ali odtujitev Uporabnikovih podatkov. Ponudnik se zavezuje, da bo redno izdeloval varnostne kopije podatkov, vendar ne prevzema nobene odgovornosti v zvezi z nepravilnostjo hranjenih podatkov ali njihove izgube. Uporabniku se priporoča, da pomembne podatke dodatno hrani izven Aplikacije.
          </p>

          <p style={S.art}>25. člen</p>
          <p style={S.p}>
            Ponudnik ni odgovoren za vsebino povezav, ki vodijo do spletnih strani tretjih oseb, niti za izpade ali težave v delovanju zunanjih storitev, ki so integrirane v Aplikacijo (npr. plačilni sistemi, koledarji, sinhronizacijske storitve).
          </p>

          {/* 10 */}
          <h2 style={S.h2}>Pravice in obveznosti uporabnika</h2>

          <p style={S.art}>26. člen</p>
          <p style={S.p}>
            Uporabnik je dolžan Ponudnika obvestiti o morebitnih napakah v delovanju Aplikacije v razumnem roku po njihovi zaznavi. Ponudnik si bo prizadeval napake odpraviti v najkrajšem možnem času. Brezplačna tehnična podpora je vključena v vse aktivne plačljive pakete in se izvaja preko elektronske pošte oziroma obrazcev znotraj Aplikacije.
          </p>

          <p style={S.art}>27. člen</p>
          <p style={S.p}>
            Uporabnik odgovarja za tajnost, zaščito in uporabo dostopnih gesel ter uporabniških imen za dostop do storitev. Uporabnik odgovarja za vsebino, ki jo shranjuje v Aplikaciji, za zaščito zaupnih podatkov in za spoštovanje splošnih moralno-etičnih norm. Uporabnik mora upoštevati obstoječo zakonodajo glede objave in shranjevanja informacij, ter odgovarja za vse posledice dovoljene in nedovoljene uporabe naročenih storitev. Uporabnik se strinja, da bo upošteval predpise v zvezi z avtorskopravnim varstvom in zagotavlja, da bo vsa vsebina, ki jo bo shranjeval ali delil preko Aplikacije, prosta avtorskopravnih kršitev. V Aplikaciji ni dovoljeno neavtorizirano shranjevati avtorsko zaščitenih dokumentov in vsebin.
          </p>

          <p style={S.art}>28. člen</p>
          <p style={S.p}>
            Uporabnik je dolžan poravnati račun za opravljene storitve do datuma valute plačila. V primeru neplačila oz. nepopolnega plačila lahko Ponudnik kadarkoli omeji ali onemogoči dostop do plačljivih funkcionalnosti Aplikacije brez predhodnega obvestila. Ponudnik skladno z zakonom zaračunava zamudne obresti.
          </p>

          <p style={S.art}>29. člen</p>
          <p style={{ ...S.p, marginBottom: 8 }}>Uporabnik se zavezuje, da Aplikacije ne bo uporabljal za:</p>
          <ul style={S.ul}>
            <li style={S.li}>kakršnekoli nezakonite ali škodljive namene;</li>
            <li style={S.li}>pošiljanje neželenih sporočil (SPAM) ali masovne komunikacije brez predhodnega soglasja prejemnikov;</li>
            <li style={S.li}>nalaganje ali širjenje zlonamerne programske opreme (virusov, trojanskih konjev ipd.);</li>
            <li style={S.li}>poskuse vdiranja, zaobiti varnostnih mehanizmov ali pridobivanja nepooblaščenega dostopa do podatkov;</li>
            <li style={S.li}>obratno inženirstvo, dekompiliranje ali kopiranje programske kode Aplikacije;</li>
            <li style={S.li}>preprodajanje ali nadaljnjo distribucijo storitev brez izrecnega pisnega soglasja Ponudnika.</li>
          </ul>

          {/* 11 */}
          <h2 style={S.h2}>Intelektualna lastnina</h2>

          <p style={S.art}>30. člen</p>
          <p style={S.p}>
            Vse pravice intelektualne lastnine, vključno z avtorskimi pravicami, blagovnimi znamkami, oblikovnimi rešitvami in programsko kodo Aplikacije »MOJ BRLOG«, so izključna last Ponudnika. Uporabnik z uporabo Aplikacije pridobi le pravico do uporabe storitev v skladu s temi Splošnimi pogoji, ne pa tudi pravic intelektualne lastnine. Vsebine, ki jih Uporabnik vnese v Aplikacijo, ostanejo v lasti Uporabnika. Uporabnik s shranjevanjem vsebin v Aplikaciji Ponudniku podeljuje neizključno pravico do njihove obdelave izključno za namen zagotavljanja storitev.
          </p>

          {/* 12 */}
          <h2 style={S.h2}>Spanje računa in neaktivnost</h2>

          <p style={S.art}>31. člen</p>
          <p style={S.p}>
            V primeru daljše neaktivnosti uporabniškega računa (brez prijave v obdobju, daljšem od 12 mesecev) si Ponudnik pridržuje pravico, da Uporabnika obvesti o stanju računa in po dodatnem opozorilu račun označi kot »speči« oziroma ga arhivira. Ponudnik ni odgovoren za izgubo podatkov, ki bi lahko nastala zaradi dolgotrajne neaktivnosti. Ponovna aktivacija arhiviranega računa se lahko obračuna po veljavnem ceniku.
          </p>

          {/* 13 */}
          <h2 style={S.h2}>Končne določbe</h2>

          <p style={S.art}>32. člen</p>
          <p style={S.p}>
            Ti Splošni pogoji veljajo za vse Uporabnike in Naročnike Aplikacije »MOJ BRLOG« od dneva objave dalje. Z registracijo uporabniškega računa oziroma uporabo Aplikacije Uporabnik potrjuje, da je seznanjen s temi Splošnimi pogoji in jih v celoti sprejema.
          </p>

          <p style={S.art}>33. člen</p>
          <p style={S.p}>
            V primeru, da je posamezno določilo teh Splošnih pogojev neveljavno ali neizvršljivo, to ne vpliva na veljavnost preostalih določil. Neveljavno določilo se nadomesti z določilom, ki najbolj ustreza prvotnemu namenu.
          </p>

          <p style={S.art}>34. člen</p>
          <p style={S.p}>
            Za vsa morebitna vprašanja, pripombe ali zahteve v zvezi s temi Splošnimi pogoji oziroma uporabo Aplikacije so Uporabniki vabljeni, da Ponudnika kontaktirajo preko elektronskega naslova, objavljenega na spletni strani{' '}
            <a href="https://mojbrlog.eu" style={S.a}>mojbrlog.eu</a>.
          </p>

          {/* Date */}
          <div style={{
            marginTop: 56, paddingTop: 24,
            borderTop: '0.5px solid #1F2A22',
            fontSize: 14, color: 'rgba(139,153,143,0.65)',
            fontStyle: 'italic',
          }}>
            V Škofji Loki, dne 27. 05. 2026
          </div>

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
