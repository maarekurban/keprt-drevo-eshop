# KEPRT Dřevo E-shop

Moderní e-shop pro prodej palivového dřeva, briket a řeziva. Vytvořený s Next.js, TypeScript a Tailwind CSS.

## 🚀 Funkce

### Hlavní funkce
- **Responzivní design** - optimalizováno pro všechny zařízení
- **Moderní UI/UX** - přírodní barevné schéma s vysokým kontrastem
- **Přístupnost** - WCAG 2.2 kompatibilní
- **Jazykové verze** - čeština, němčina, angličtina
- **Vyhledávání** - s našeptávačem
- **Filtry a řazení** - pokročilé filtrování produktů
- **Košík** - plně funkční nákupní košík
- **Newsletter** - přihlášení k odběru

### Stránky a sekce
- **Domovská stránka** - hero sekce, kategorie, akce, newsletter
- **Kategorie produktů** - palivové dřevo, brikety, pelety
- **Detail produktu** - galerie, parametry, recenze
- **B2B sekce** - řezivo pro truhláře
- **Kontejnerová doprava** - pronájem a doprava
- **Blog** - články o dřevu a topení
- **Kontakt** - formulář a informace

### Technické funkce
- **SEO optimalizace** - meta tagy, strukturovaná data
- **Performance** - optimalizované obrázky, lazy loading
- **Animace** - Framer Motion animace
- **Formuláře** - validace a zpracování
- **Notifikace** - toast zprávy

## 🛠️ Technologie

- **Next.js 14** - React framework
- **TypeScript** - typová bezpečnost
- **Tailwind CSS** - utility-first CSS framework
- **Framer Motion** - animace
- **Heroicons** - ikony
- **React Hook Form** - formuláře
- **React Hot Toast** - notifikace

## 📦 Instalace

1. **Klonujte repozitář**
```bash
git clone <repository-url>
cd keprt-drevo-eshop
```

2. **Nainstalujte závislosti**
```bash
npm install
```

3. **Spusťte vývojový server**
```bash
npm run dev
```

4. **Otevřete prohlížeč**
```
http://localhost:3000
```

## 🏗️ Struktura projektu

```
keprt-drevo-eshop/
├── app/                    # Next.js App Router
│   ├── globals.css        # Globální styly
│   ├── layout.tsx         # Hlavní layout
│   ├── page.tsx           # Domovská stránka
│   └── kategorie/         # Kategorie produktů
├── components/            # React komponenty
│   ├── Header.tsx         # Navigace
│   ├── Footer.tsx         # Patička
│   ├── HeroSection.tsx    # Hero sekce
│   ├── ProductCard.tsx    # Karta produktu
│   └── ...
├── public/                # Statické soubory
├── tailwind.config.js     # Tailwind konfigurace
└── package.json           # Závislosti
```

## 🎨 Design

### Barevné schéma
- **Forest** - zelené odstíny pro přírodní motiv
- **Wood** - béžové odstíny pro dřevo
- **Gold** - zlaté akcenty pro CTA
- **Gray** - neutrální barvy

### Typografie
- **Font**: Arial, Helvetica, Open Sans
- **Velikost**: minimálně 16px
- **Kontrast**: 4.5:1 poměr

### Responzivita
- **Mobile First** přístup
- **Breakpoints**: sm, md, lg, xl
- **Touch friendly** tlačítka

## 📱 Responzivní design

E-shop je plně responzivní a optimalizovaný pro:
- **Mobilní telefony** (320px+)
- **Tablety** (768px+)
- **Desktop** (1024px+)
- **Velké obrazovky** (1280px+)

## ♿ Přístupnost

- **WCAG 2.2** kompatibilní
- **Klaviatura** navigace
- **Screen reader** podpora
- **Vysoký kontrast** barvy
- **Alt texty** pro obrázky

## 🚀 Deployment

### Vercel (doporučeno)
```bash
npm run build
vercel --prod
```

### Jiné platformy
```bash
npm run build
npm start
```

## 📝 Poznámky

- Projekt používá mock data pro demonstraci
- V reálné implementaci by bylo potřeba připojit backend API
- Obrázky jsou z Unsplash pro demonstraci
- Kontaktní údaje jsou fiktivní

## 🤝 Přispívání

1. Fork repozitáře
2. Vytvořte feature branch
3. Commit změny
4. Push do branch
5. Otevřete Pull Request

## 📄 Licence

MIT License - viz LICENSE soubor

## 📞 Kontakt

Pro dotazy ohledně implementace nebo funkcí kontaktujte vývojový tým.

# Updated Fri Aug 22 19:09:48 CEST 2025
# Force deployment Fri Aug 22 19:17:57 CEST 2025
