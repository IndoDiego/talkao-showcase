export type Locale = "en" | "es";

export const translations = {
  en: {
    nav: {
      ecosystem: "Ecosystem",
      voiceTranslator: "Voice Translator",
      offiwiz: "Offiwiz",
      nexaflow: "NexaFlow",
      parkao: "Parkao",
      stack: "Stack",
      contact: "Contact",
    },
    hero: {
      badge: "Google Play Accelerator 2026 · Bootstrapped",
      greeting: "Hi, I'm",
      name: "Diego",
      tagline: "Four companies. One operator.",
      achievements: [
        { headline: "4 companies", sub: "one operator" },
        { headline: "9 products", sub: "live and shipping" },
        { headline: "125+ languages", sub: "voice · text · image" },
        { headline: "Bootstrapped", sub: "profitable · data-driven" },
        { headline: "Accelerator '26", sub: "Google Play cohort" },
        { headline: "4 platforms", sub: "Android · iOS · Web · API" },
      ],
      ctaTalk: "Talk to me",
      ctaExplore: "See the work",
      scrollDown: "Scroll down",
    },
    bento: {
      eyebrow: "The ecosystem · at a glance",
      headingA: "Four products.",
      headingB: "One operator.",
      rightNote:
        "Each product solves a distinct problem, but they share the same playbook: ship, measure, compound.",
      voice: {
        tagA: "Flagship",
        tagB: "Accelerator 2026",
        title: "Voice Translator",
        desc: "AI-powered real-time voice, text and image translation across 125+ language combinations. 170K monthly active users.",
        statDownloads: "Downloads",
        statRevenue: "Annual revenue",
        statRoas: "ROAS",
      },
      offiwiz: {
        tag: "Productivity suite",
        title: "Offiwiz",
        desc: "Enterprise-grade PDF tools at consumer pricing. 4 apps, one of them crossed 10M downloads.",
        rows: {
          pdfEditor: { label: "PDF Editor", value: "#2 revenue" },
          pdfConverter: { label: "PDF Converter", value: "10M+ dls" },
          aiChat: { label: "AI Chat Docs", value: "live" },
          scanner: { label: "Scanner + OCR", value: "live" },
        },
      },
      nexaflow: {
        tag: "B2B",
        title: "NexaFlow",
        desc: "AI automation consultancy. Custom agents, Stripe-ready, from $1,500 packages to $3K/mo retainers.",
      },
      parkao: {
        tag: "Marketplace",
        title: "Parkao",
        desc: "Peer-to-peer parking. 5 repos: web, React Native, Node API, admin, marketing.",
      },
    },
    voice: {
      badgeA: "Flagship Product",
      badgeB: "Google Play Accelerator 2026",
      title: "Voice Translator",
      subtitle: "AI-Powered Real-Time Translation",
      stats: {
        downloads: "Downloads",
        mau: "Monthly Active Users",
        revenue: "Annual Revenue",
        roas: "ROAS",
      },
      features: {
        languages: "125+ language combinations",
        realtime: "Real-time voice translation",
        assistants: "7 AI Chat Assistants",
        paywalls: "Smart Paywalls + A/B Testing",
      },
      callout: {
        title: "Accelerator Transformation",
        body: "10+ components shipped in 4 weeks. Average 4 days from Google mentor recommendation to production code. Target: 3x MRR through data-driven monetization.",
      },
      projection: {
        label: "ANNUAL REVENUE PROJECTION",
        current: "Current",
        target: "Target",
        benchmark: "Benchmark",
        note: "Conversion rate vs. annual revenue — same 170K users, zero additional ad spend",
      },
      cta: "View on Google Play",
      suite: {
        label: "Also in the translation suite",
        photo: {
          name: "Photo Translator",
          desc: "AI-powered image translation — snap, scan, translate",
        },
        ar: {
          name: "AR Camera Translator",
          desc: "Real-time AR overlay across 100+ languages",
        },
        seeAll: "See all Talkao apps on Google Play",
      },
    },
    offiwiz: {
      badge: "Document Productivity Suite",
      title: "Offiwiz",
      subtitle: "Enterprise-grade PDF tools, consumer pricing",
      apps: {
        editor: {
          name: "PDF Editor",
          desc: "Read, edit, annotate & sign PDFs",
          badge: "#2 Revenue App",
        },
        aiChat: {
          name: "AI Chat PDF & Docs",
          desc: "AI-powered document assistant",
        },
        scanner: {
          name: "Document Scanner",
          desc: "Smart scanning + OCR",
        },
        converter: {
          name: "PDF Converter",
          desc: "Any format to PDF and back",
          badge: "10M+ Downloads",
        },
      },
      googlePlay: "Google Play",
    },
    nexaflow: {
      badge: "B2B AI Platform",
      title: "NexaFlow",
      subtitle: "AI Automation Consultancy & Web Platform",
      description:
        "We build AI-powered websites and automation systems for businesses. Full-stack delivery with custom AI agents, Stripe payments, and ongoing support retainers.",
      packagesLabel: "Packages",
      retainersLabel: "Retainers",
      cta: "Visit nexaflow.work",
    },
    parkao: {
      badge: "Full-Stack Marketplace",
      title: "Parkao",
      subtitle: "Peer-to-Peer Parking Marketplace",
      earn: "Earn up to €900/month renting your unused parking space",
      pillars: {
        web: "Web",
        mobile: "Mobile",
        api: "API",
      },
      features: {
        stripe: "Stripe payments",
        maps: "Google Maps",
        chat: "Real-time chat",
        invoicing: "PDF invoicing",
        notifications: "Instant notifications",
      },
      note: {
        bold: "5 integrated repositories",
        body: "— Web frontend, React Native mobile, Node.js API, admin panel, and marketing site. Full marketplace architecture built in-house.",
      },
      cta: "Visit parkao.com",
    },
    tech: {
      eyebrow: "How we build",
      headingA: "Stack,",
      headingB: "opinionated",
      subtitle:
        "A deliberately small set of tools, reused across every product — so velocity compounds instead of fragmenting.",
      categories: {
        mobile: "Mobile",
        web: "Web",
        ai: "AI & Data",
        backend: "Backend & Payments",
      },
      agentic: {
        label: "Agentic Programming",
        title: "Talkao Custom Agents",
        tagline: "Agentic Programming Architecture",
        body: "Specialist AI agents for development, code review, analytics, and operations — built in-house to orchestrate complex multi-step workflows autonomously.",
      },
      footer: "Translation · SaaS · Marketplaces · AI Agents",
    },
    contact: {
      titleA: "Let's build",
      titleB: "something",
      role: "Diego Jarrin Caric — Co-CEO & Co-Founder",
      brands: "Talkao · Offiwiz · Parkao · NexaFlow",
      links: {
        email: { label: "Email Me", sub: "indogroup.diego@gmail.com" },
        call: { label: "Book a Call", sub: "Calendly" },
        linkedin: { label: "LinkedIn", sub: "Connect" },
        pdf: { label: "One-Pager", sub: "Download PDF" },
      },
      quote: "\u201CProfitable. Bootstrapped. Data-driven. Ready to scale.\u201D",
      alumni: "Google Play Accelerator 2026 Alumni",
    },
    settings: {
      language: "Language",
      theme: "Theme",
      dark: "Dark",
      light: "Light",
    },
  },
  es: {
    nav: {
      ecosystem: "Ecosistema",
      voiceTranslator: "Voice Translator",
      offiwiz: "Offiwiz",
      nexaflow: "NexaFlow",
      parkao: "Parkao",
      stack: "Stack",
      contact: "Contacto",
    },
    hero: {
      badge: "Google Play Accelerator 2026 · Bootstrapped",
      greeting: "Hola, soy",
      name: "Diego",
      tagline: "Cuatro empresas. Un operador.",
      achievements: [
        { headline: "4 empresas", sub: "un operador" },
        { headline: "9 productos", sub: "en producción" },
        { headline: "125+ idiomas", sub: "voz · texto · imagen" },
        { headline: "Bootstrapped", sub: "rentable · data-driven" },
        { headline: "Accelerator '26", sub: "cohorte Google Play" },
        { headline: "4 plataformas", sub: "Android · iOS · Web · API" },
      ],
      ctaTalk: "Hablemos",
      ctaExplore: "Ver el trabajo",
      scrollDown: "Desplázate hacia abajo",
    },
    bento: {
      eyebrow: "El ecosistema · de un vistazo",
      headingA: "Cuatro productos.",
      headingB: "Un operador.",
      rightNote:
        "Cada producto resuelve un problema distinto, pero todos comparten el mismo playbook: lanzar, medir, componer.",
      voice: {
        tagA: "Producto estrella",
        tagB: "Accelerator 2026",
        title: "Voice Translator",
        desc: "Traducción de voz, texto e imagen en tiempo real con IA, en más de 125 combinaciones de idiomas. 170K usuarios activos mensuales.",
        statDownloads: "Descargas",
        statRevenue: "Ingresos anuales",
        statRoas: "ROAS",
      },
      offiwiz: {
        tag: "Suite de productividad",
        title: "Offiwiz",
        desc: "Herramientas PDF de nivel empresarial a precio de consumidor. 4 apps, una superó los 10M de descargas.",
        rows: {
          pdfEditor: { label: "PDF Editor", value: "#2 en ingresos" },
          pdfConverter: { label: "PDF Converter", value: "10M+ dls" },
          aiChat: { label: "AI Chat Docs", value: "activo" },
          scanner: { label: "Scanner + OCR", value: "activo" },
        },
      },
      nexaflow: {
        tag: "B2B",
        title: "NexaFlow",
        desc: "Consultoría de automatización con IA. Agentes a medida, listos para Stripe, desde paquetes de $1,500 hasta retainers de $3K/mes.",
      },
      parkao: {
        tag: "Marketplace",
        title: "Parkao",
        desc: "Parking peer-to-peer. 5 repos: web, React Native, API Node, admin y marketing.",
      },
    },
    voice: {
      badgeA: "Producto estrella",
      badgeB: "Google Play Accelerator 2026",
      title: "Voice Translator",
      subtitle: "Traducción en tiempo real potenciada por IA",
      stats: {
        downloads: "Descargas",
        mau: "Usuarios Activos Mensuales",
        revenue: "Ingresos Anuales",
        roas: "ROAS",
      },
      features: {
        languages: "Más de 125 combinaciones de idiomas",
        realtime: "Traducción de voz en tiempo real",
        assistants: "7 asistentes de chat con IA",
        paywalls: "Paywalls inteligentes + A/B Testing",
      },
      callout: {
        title: "Transformación en el Accelerator",
        body: "Más de 10 componentes enviados en 4 semanas. 4 días de media desde la recomendación del mentor de Google hasta el código en producción. Objetivo: 3x MRR mediante monetización data-driven.",
      },
      projection: {
        label: "PROYECCIÓN DE INGRESOS ANUALES",
        current: "Actual",
        target: "Objetivo",
        benchmark: "Referencia",
        note: "Tasa de conversión vs. ingresos anuales — mismos 170K usuarios, sin gasto publicitario adicional",
      },
      cta: "Ver en Google Play",
      suite: {
        label: "Más de la suite de traducción",
        photo: {
          name: "Photo Translator",
          desc: "Traducción de imagen con IA — fotografía, escanea, traduce",
        },
        ar: {
          name: "AR Camera Translator",
          desc: "Overlay AR en tiempo real, 100+ idiomas",
        },
        seeAll: "Ver todas las apps de Talkao en Google Play",
      },
    },
    offiwiz: {
      badge: "Suite de Productividad Documental",
      title: "Offiwiz",
      subtitle:
        "Herramientas PDF de nivel empresarial a precio de consumidor",
      apps: {
        editor: {
          name: "PDF Editor",
          desc: "Lee, edita, anota y firma PDFs",
          badge: "#2 en ingresos",
        },
        aiChat: {
          name: "AI Chat PDF & Docs",
          desc: "Asistente documental con IA",
        },
        scanner: {
          name: "Document Scanner",
          desc: "Escaneo inteligente + OCR",
        },
        converter: {
          name: "PDF Converter",
          desc: "Cualquier formato a PDF y viceversa",
          badge: "10M+ descargas",
        },
      },
      googlePlay: "Google Play",
    },
    nexaflow: {
      badge: "Plataforma B2B con IA",
      title: "NexaFlow",
      subtitle: "Consultoría de Automatización con IA y Plataforma Web",
      description:
        "Construimos webs y sistemas de automatización potenciados por IA para empresas. Entrega full-stack con agentes a medida, pagos con Stripe y retainers de soporte continuo.",
      packagesLabel: "Paquetes",
      retainersLabel: "Retainers",
      cta: "Visita nexaflow.work",
    },
    parkao: {
      badge: "Marketplace Full-Stack",
      title: "Parkao",
      subtitle: "Marketplace Peer-to-Peer de Parking",
      earn: "Gana hasta €900/mes alquilando tu plaza de parking sin uso",
      pillars: {
        web: "Web",
        mobile: "Móvil",
        api: "API",
      },
      features: {
        stripe: "Pagos con Stripe",
        maps: "Google Maps",
        chat: "Chat en tiempo real",
        invoicing: "Facturación en PDF",
        notifications: "Notificaciones instantáneas",
      },
      note: {
        bold: "5 repositorios integrados",
        body: "— Frontend web, móvil en React Native, API Node.js, panel de admin y sitio de marketing. Arquitectura completa de marketplace construida in-house.",
      },
      cta: "Visita parkao.com",
    },
    tech: {
      eyebrow: "Cómo construimos",
      headingA: "Stack,",
      headingB: "con criterio",
      subtitle:
        "Un conjunto deliberadamente pequeño de herramientas, reutilizado en cada producto — para que la velocidad se componga en lugar de fragmentarse.",
      categories: {
        mobile: "Móvil",
        web: "Web",
        ai: "IA & Datos",
        backend: "Backend & Pagos",
      },
      agentic: {
        label: "Programación agéntica",
        title: "Talkao Custom Agents",
        tagline: "Arquitectura de programación agéntica",
        body: "Agentes de IA especialistas para desarrollo, revisión de código, analítica y operaciones — construidos en casa para orquestar flujos multi-paso complejos de forma autónoma.",
      },
      footer: "Traducción · SaaS · Marketplaces · Agentes de IA",
    },
    contact: {
      titleA: "Construyamos",
      titleB: "algo juntos",
      role: "Diego Jarrin Caric — Co-CEO & Co-fundador",
      brands: "Talkao · Offiwiz · Parkao · NexaFlow",
      links: {
        email: { label: "Escríbeme", sub: "indogroup.diego@gmail.com" },
        call: { label: "Reserva una llamada", sub: "Calendly" },
        linkedin: { label: "LinkedIn", sub: "Conectar" },
        pdf: { label: "One-Pager", sub: "Descargar PDF" },
      },
      quote:
        "\u201CRentable. Bootstrapped. Data-driven. Listos para escalar.\u201D",
      alumni: "Alumni del Google Play Accelerator 2026",
    },
    settings: {
      language: "Idioma",
      theme: "Tema",
      dark: "Oscuro",
      light: "Claro",
    },
  },
} as const;

type WidenStrings<T> = {
  [K in keyof T]: T[K] extends string ? string : WidenStrings<T[K]>;
};

export type Dict = WidenStrings<typeof translations.en>;
