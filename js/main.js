(function () {
  const dict = {
    es: {
      "meta.title": "Harryson Montesdeoca — Desarrollador Full Stack | .NET · Angular · Flutter",
      "meta.desc": "Desarrollador full stack en Quito. APIs con ASP.NET Core, interfaces en Angular, SQL Server y apps móviles en Flutter. Abierto a freelance remoto y roles full-time.",
      "nav.skip": "Saltar al contenido",
      "nav.home": "Harryson Montesdeoca, inicio",
      "nav.open": "Abrir menú",
      "nav.close": "Cerrar menú",
      "nav.about": "Sobre mí",
      "nav.services": "Servicios",
      "nav.stack": "Stack",
      "nav.experience": "Experiencia",
      "nav.contact": "Contacto",
      "nav.cta": "Contacto",
      "nav.lang": "Idioma",
      "nav.sections": "Secciones",
      "hero.eyebrow": "Quito, Ecuador · Abierto a oportunidades remotas",
      "hero.lead": "Construyo el sistema completo: interfaces en Angular, APIs en ASP.NET Core, datos en SQL Server y apps móviles en Flutter.",
      "hero.primary": "Hablemos",
      "hero.secondary": "Descargar CV",
      "hero.system": "Un producto, cuatro capas",
      "hero.node.web": "Web y landing pages",
      "hero.node.api": "APIs y reglas de negocio",
      "hero.node.db": "Datos y consultas",
      "hero.node.mobile": "Apps multiplataforma",
      "hero.systemFoot": "JWT · EF Core · IIS · Scrum",
      "hero.scroll": "Desplázate",
      "about.eyebrow": "Sobre mí",
      "about.title": "Software con usuarios reales, de la pantalla a la base de datos.",
      "about.pull": "Diseño, construyo y mantengo aplicaciones que ya están en uso.",
      "about.p1": "Soy desarrollador full stack en SAGAT Systems, en Quito. En el backend trabajo con C#, ASP.NET Core (.NET 8) y Entity Framework Core. En el frontend, con Angular 14+, TypeScript, RxJS y Angular Material. En móvil, con Flutter.",
      "about.p2": "También administro SQL Server: procedimientos almacenados, triggers, vistas, índices y el aprovisionamiento de bases nuevas. Despliego en IIS, uso Git a diario y trabajo en Scrum. Si algo falla en producción, lo reviso y lo dejo estable.",
      "about.p3": "Estudio Ingeniería en Software en la Escuela Politécnica Nacional, noveno semestre. Español nativo e inglés C1. Además he trabajado con Java Spring Boot, Python y Node.js.",
      "about.role.k": "Rol",
      "about.role.v": "Full Stack Developer",
      "about.co.k": "Empresa",
      "about.co.v": "SAGAT Systems S.A.S.",
      "about.base.k": "Base",
      "about.base.v": "Quito, Ecuador",
      "about.lang.k": "Idiomas",
      "about.lang.v": "Español nativo · Inglés C1",
      "about.edu.k": "Formación",
      "about.edu.v": "Ing. en Software · EPN",
      "about.open.k": "Abierto a",
      "about.open.v": "Freelance remoto y full-time remoto",
      "svc.eyebrow": "Servicios",
      "svc.title": "Qué construyo",
      "svc.lede": "Cuatro frentes en los que puedo entrar a un producto y dejar la web, la API, los datos y el móvil hablando el mismo idioma.",
      "svc.web.kicker": "Frontend",
      "svc.web.title": "Web y landing pages",
      "svc.web.body": "Interfaces de producto y páginas de aterrizaje. En el trabajo diario es Angular. Cuando hace falta presentar algo con claridad y velocidad, también HTML, CSS y JavaScript.",
      "svc.web.b1": "Angular 14+, TypeScript y manejo de estado con RxJS.",
      "svc.web.b2": "Formularios reactivos, Angular Material y consumo de APIs REST.",
      "svc.web.b3": "Landing pages cuidadas en móvil, jerarquía visual y rendimiento.",
      "viz.web.url": "landing",
      "svc.api.kicker": "Backend",
      "svc.api.title": "APIs y backend",
      "svc.api.body": "APIs REST que la web y el móvil pueden compartir. Autenticación, autorización y un acceso a datos que se puede seguir manteniendo.",
      "svc.api.b1": "ASP.NET Core sobre .NET 8, con contratos REST claros.",
      "svc.api.b2": "JWT y ASP.NET Identity para autenticación y roles.",
      "svc.api.b3": "Entity Framework Core como capa de acceso a datos.",
      "viz.api.app": "App",
      "viz.api.data": "Datos",
      "svc.data.kicker": "Datos",
      "svc.data.title": "Bases de datos",
      "svc.data.body": "SQL Server entra en el diseño, no al final. Modelo, consultas, índices y la operación del día a día: respaldos, restauración y bases nuevas.",
      "svc.data.b1": "Procedimientos almacenados, vistas y triggers.",
      "svc.data.b2": "Índices y optimización de consultas.",
      "svc.data.b3": "Aprovisionamiento de bases, backup y restore.",
      "viz.user": "Usuario",
      "viz.role": "Rol",
      "viz.session": "Sesión",
      "svc.mobile.kicker": "Móvil",
      "svc.mobile.title": "Apps móviles",
      "svc.mobile.body": "Aplicaciones multiplataforma en Flutter, apoyadas en las mismas APIs que usa la web. Una base de código para iOS y Android.",
      "svc.mobile.b1": "Interfaces en Flutter conectadas a APIs REST.",
      "svc.mobile.b2": "La misma autenticación y los mismos recursos que la web.",
      "svc.mobile.b3": "Un solo código para iOS y Android.",
      "proc.eyebrow": "Proceso",
      "proc.title": "Cómo trabajo",
      "proc.lede": "Ciclos cortos, con algo que se puede revisar en cada vuelta. Así es como llevo un encargo de la conversación a producción.",
      "proc.1.t": "Alcance",
      "proc.1.d": "El problema, quién lo usa y qué tiene que quedar resuelto en esta entrega.",
      "proc.2.t": "Diseño",
      "proc.2.d": "Modelo de datos y endpoints antes de abrir demasiados frentes a la vez.",
      "proc.3.t": "Iteración",
      "proc.3.d": "Ciclos cortos con Git y Scrum, y software que ya se puede usar.",
      "proc.4.t": "Producción",
      "proc.4.d": "Despliegue en IIS, incidencias reales y un sistema que sigue operando.",
      "stack.eyebrow": "Stack",
      "stack.title": "Herramientas del trabajo diario",
      "stack.lede": "El núcleo es .NET, Angular, SQL Server y Flutter. Al lado, lenguajes con los que también he construido.",
      "stack.backend": "Backend",
      "stack.frontend": "Frontend",
      "stack.data": "Bases de datos",
      "stack.mobile": "Móvil",
      "stack.delivery": "Entrega",
      "stack.also": "También",
      "stack.alsoNote": "Experiencia adicional. No es el núcleo de mi trabajo actual.",
      "stack.sp": "Procedimientos almacenados",
      "stack.views": "Vistas",
      "stack.idx": "Índices",
      "stack.opt": "Optimización de consultas",
      "stack.bak": "Backup y restore",
      "stack.docker": "Docker · básico",
      "exp.eyebrow": "Experiencia",
      "exp.title": "Dónde trabajo",
      "exp.date": "Ago 2025 — Actualidad",
      "exp.now": "Actualidad",
      "exp.role": "Desarrollador Full Stack",
      "exp.where": "SAGAT Systems S.A.S. · Quito, Ecuador",
      "exp.b1": "APIs REST en ASP.NET Core (.NET 8), consumidas por aplicaciones web y móviles.",
      "exp.b2": "Acceso a datos con Entity Framework Core. Autenticación y autorización con ASP.NET Identity y JWT.",
      "exp.b3": "Frontend en Angular 14+: formularios reactivos, RxJS y Angular Material.",
      "exp.b4": "Aplicaciones móviles multiplataforma con Flutter.",
      "exp.b5": "SQL Server: procedimientos almacenados, triggers, vistas, índices, optimización de consultas y aprovisionamiento de bases.",
      "exp.b6": "Despliegue en IIS y Application Pools, soporte a sistemas en producción, Git, GitHub y Scrum.",
      "edu.eyebrow": "Formación",
      "edu.title": "Estudios e idiomas",
      "edu.kicker": "En curso",
      "edu.degree": "Ingeniería en Software",
      "edu.school": "Escuela Politécnica Nacional",
      "edu.status": "Noveno semestre · en curso",
      "edu.langTitle": "Idiomas",
      "edu.es": "Español",
      "edu.esk": "Nativo",
      "edu.en": "Inglés",
      "edu.enk": "C1",
      "contact.eyebrow": "Contacto",
      "contact.title": "Si el producto necesita las cuatro capas, escríbeme.",
      "contact.lede": "Freelance remoto o un rol full-time remoto. La forma más directa es el correo.",
      "contact.copy": "Copiar correo",
      "contact.copied": "Copiado",
      "contact.githubAria": "GitHub, se abre en una pestaña nueva",
      "contact.linkedinAria": "LinkedIn, se abre en una pestaña nueva",
      "contact.schoolAria": "Sitio de la Escuela Politécnica Nacional, se abre en una pestaña nueva",
      "footer.copy": "Harryson Ariel Montesdeoca Rhea · Quito, Ecuador",
      "footer.formacion": "Formación",
      "footer.top": "Volver arriba"
    },
    en: {
      "meta.title": "Harryson Montesdeoca — Full Stack Developer | .NET · Angular · Flutter",
      "meta.desc": "Full stack developer in Quito. ASP.NET Core APIs, Angular interfaces, SQL Server, and Flutter mobile apps. Open to remote freelance and full-time roles.",
      "nav.skip": "Skip to content",
      "nav.home": "Harryson Montesdeoca, home",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.stack": "Stack",
      "nav.experience": "Experience",
      "nav.contact": "Contact",
      "nav.cta": "Contact",
      "nav.lang": "Language",
      "nav.sections": "Sections",
      "hero.eyebrow": "Quito, Ecuador · Open to remote opportunities",
      "hero.lead": "I build the whole system: Angular interfaces, ASP.NET Core APIs, SQL Server data, and Flutter mobile apps.",
      "hero.primary": "Let’s talk",
      "hero.secondary": "Download CV",
      "hero.system": "One product, four layers",
      "hero.node.web": "Web and landing pages",
      "hero.node.api": "APIs and business rules",
      "hero.node.db": "Data and queries",
      "hero.node.mobile": "Cross-platform apps",
      "hero.systemFoot": "JWT · EF Core · IIS · Scrum",
      "hero.scroll": "Scroll",
      "about.eyebrow": "About",
      "about.title": "Software with real users, from the screen to the database.",
      "about.pull": "I design, build, and maintain applications that people already use.",
      "about.p1": "I am a full stack developer at SAGAT Systems in Quito. On the backend I use C#, ASP.NET Core (.NET 8), and Entity Framework Core. On the frontend, Angular 14+, TypeScript, RxJS, and Angular Material. On mobile, Flutter.",
      "about.p2": "I also administer SQL Server: stored procedures, triggers, views, indexes, and provisioning new databases. I deploy on IIS, use Git every day, and work in Scrum. When production breaks, I trace it and leave the system stable.",
      "about.p3": "I am a ninth-semester Software Engineering student at Escuela Politécnica Nacional. Native Spanish, English C1. I have also worked with Java Spring Boot, Python, and Node.js.",
      "about.role.k": "Role",
      "about.role.v": "Full Stack Developer",
      "about.co.k": "Company",
      "about.co.v": "SAGAT Systems S.A.S.",
      "about.base.k": "Based in",
      "about.base.v": "Quito, Ecuador",
      "about.lang.k": "Languages",
      "about.lang.v": "Native Spanish · English C1",
      "about.edu.k": "Education",
      "about.edu.v": "Software Engineering · EPN",
      "about.open.k": "Open to",
      "about.open.v": "Remote freelance and remote full-time",
      "svc.eyebrow": "Services",
      "svc.title": "What I build",
      "svc.lede": "Four places I can join a product so the web app, the API, the data, and the mobile app speak the same language.",
      "svc.web.kicker": "Frontend",
      "svc.web.title": "Web and landing pages",
      "svc.web.body": "Product interfaces and landing pages. Day to day that means Angular. When something needs to be presented clearly and quickly, it also means HTML, CSS, and JavaScript.",
      "svc.web.b1": "Angular 14+, TypeScript, and state with RxJS.",
      "svc.web.b2": "Reactive forms, Angular Material, and REST API clients.",
      "svc.web.b3": "Landing pages with care for mobile layout, hierarchy, and speed.",
      "viz.web.url": "landing",
      "svc.api.kicker": "Backend",
      "svc.api.title": "APIs and backend",
      "svc.api.body": "REST APIs the web app and the mobile app can share. Authentication, authorization, and a data layer that stays maintainable.",
      "svc.api.b1": "ASP.NET Core on .NET 8, with clear REST contracts.",
      "svc.api.b2": "JWT and ASP.NET Identity for authentication and roles.",
      "svc.api.b3": "Entity Framework Core as the data access layer.",
      "viz.api.app": "App",
      "viz.api.data": "Data",
      "svc.data.kicker": "Data",
      "svc.data.title": "Databases",
      "svc.data.body": "SQL Server is part of the design, not an afterthought. Modeling, queries, indexes, and day-to-day operations: backups, restores, and new databases.",
      "svc.data.b1": "Stored procedures, views, and triggers.",
      "svc.data.b2": "Indexes and query optimization.",
      "svc.data.b3": "Provisioning databases, backup, and restore.",
      "viz.user": "User",
      "viz.role": "Role",
      "viz.session": "Session",
      "svc.mobile.kicker": "Mobile",
      "svc.mobile.title": "Mobile apps",
      "svc.mobile.body": "Cross-platform Flutter apps on the same APIs the web uses. One codebase for iOS and Android.",
      "svc.mobile.b1": "Flutter interfaces talking to REST APIs.",
      "svc.mobile.b2": "The same authentication and resources as the web app.",
      "svc.mobile.b3": "One codebase aimed at both iOS and Android.",
      "proc.eyebrow": "Process",
      "proc.title": "How I work",
      "proc.lede": "Short cycles, with something reviewable each time around. This is how I take a piece of work from the first conversation to production.",
      "proc.1.t": "Scope",
      "proc.1.d": "The problem, who uses it, and what this delivery has to resolve.",
      "proc.2.t": "Design",
      "proc.2.d": "The data model and the endpoints before too many fronts open at once.",
      "proc.3.t": "Iteration",
      "proc.3.d": "Short cycles with Git and Scrum, and software people can already use.",
      "proc.4.t": "Production",
      "proc.4.d": "IIS deployment, real incidents, and a system that keeps running.",
      "stack.eyebrow": "Stack",
      "stack.title": "Tools I use on the job",
      "stack.lede": "The core is .NET, Angular, SQL Server, and Flutter. Beside that, languages I have also built with.",
      "stack.backend": "Backend",
      "stack.frontend": "Frontend",
      "stack.data": "Databases",
      "stack.mobile": "Mobile",
      "stack.delivery": "Delivery",
      "stack.also": "Also",
      "stack.alsoNote": "Additional experience. Not the core of my current work.",
      "stack.sp": "Stored procedures",
      "stack.views": "Views",
      "stack.idx": "Indexing",
      "stack.opt": "Query optimization",
      "stack.bak": "Backup and restore",
      "stack.docker": "Docker · basic",
      "exp.eyebrow": "Experience",
      "exp.title": "Where I work",
      "exp.date": "Aug 2025 — Present",
      "exp.now": "Present",
      "exp.role": "Full Stack Developer",
      "exp.where": "SAGAT Systems S.A.S. · Quito, Ecuador",
      "exp.b1": "REST APIs on ASP.NET Core (.NET 8), consumed by web and mobile applications.",
      "exp.b2": "Data access with Entity Framework Core. Authentication and authorization with ASP.NET Identity and JWT.",
      "exp.b3": "Frontend in Angular 14+: reactive forms, RxJS, and Angular Material.",
      "exp.b4": "Cross-platform mobile applications with Flutter.",
      "exp.b5": "SQL Server: stored procedures, triggers, views, indexes, query optimization, and database provisioning.",
      "exp.b6": "IIS deployment and Application Pools, production support, Git, GitHub, and Scrum.",
      "edu.eyebrow": "Education",
      "edu.title": "Studies and languages",
      "edu.kicker": "In progress",
      "edu.degree": "Software Engineering",
      "edu.school": "Escuela Politécnica Nacional",
      "edu.status": "Ninth semester · in progress",
      "edu.langTitle": "Languages",
      "edu.es": "Spanish",
      "edu.esk": "Native",
      "edu.en": "English",
      "edu.enk": "C1",
      "contact.eyebrow": "Contact",
      "contact.title": "If the product needs all four layers, write to me.",
      "contact.lede": "Remote freelance or a remote full-time role. Email is the direct way.",
      "contact.copy": "Copy email",
      "contact.copied": "Copied",
      "contact.githubAria": "GitHub, opens in a new tab",
      "contact.linkedinAria": "LinkedIn, opens in a new tab",
      "contact.schoolAria": "Escuela Politécnica Nacional website, opens in a new tab",
      "footer.copy": "Harryson Ariel Montesdeoca Rhea · Quito, Ecuador",
      "footer.formacion": "Education",
      "footer.top": "Back to top"
    }
  };

  const state = { lang: "es" };

  function preferredLang() {
    const query = new URLSearchParams(location.search).get("lang");
    if (query === "en" || query === "es") return query;
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "es") return saved;
    } catch (err) {
      /* storage unavailable */
    }
    return "es";
  }

  function textFor(lang, key) {
    if (dict[lang] && dict[lang][key] != null) return dict[lang][key];
    return dict.es[key] != null ? dict.es[key] : "";
  }

  function apply(lang) {
    if (lang !== "en" && lang !== "es") lang = "es";
    state.lang = lang;
    document.documentElement.lang = lang;
    document.title = textFor(lang, "meta.title");
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", textFor(lang, "meta.desc"));
    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach((node) => {
      node.setAttribute("content", textFor(lang, "meta.title"));
    });
    document.querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]').forEach((node) => {
      node.setAttribute("content", textFor(lang, "meta.desc"));
    });
    const locale = document.querySelector('meta[property="og:locale"]');
    if (locale) locale.setAttribute("content", lang === "en" ? "en_US" : "es_EC");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = textFor(lang, key);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", textFor(lang, el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const on = btn.dataset.lang === lang;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    const menuOpen = document.querySelector("[data-nav]")?.classList.contains("is-open");
    const toggle = document.querySelector(".nav-toggle");
    if (toggle) {
      toggle.setAttribute("aria-label", textFor(lang, menuOpen ? "nav.close" : "nav.open"));
    }

    try {
      localStorage.setItem("lang", lang);
    } catch (err) {
      /* ignore */
    }
    const url = new URL(location.href);
    if (lang === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    history.replaceState(null, "", url);
  }

  function setupLang() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => apply(btn.dataset.lang));
    });
    apply(preferredLang());
  }

  function setupNav() {
    const header = document.querySelector("[data-nav]");
    const toggle = document.querySelector(".nav-toggle");
    if (!header || !toggle) return;

    function setMenu(open) {
      header.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", textFor(state.lang, open ? "nav.close" : "nav.open"));
    }

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      setMenu(!header.classList.contains("is-open"));
    });

    header.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    document.addEventListener("click", (event) => {
      if (!header.classList.contains("is-open")) return;
      if (header.contains(event.target)) return;
      setMenu(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
    });

    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const links = [...header.querySelectorAll(".nav-links a")];
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);
    if ("IntersectionObserver" in window) {
      const spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = "#" + entry.target.id;
            links.forEach((link) => {
              const on = link.getAttribute("href") === id;
              link.classList.toggle("is-active", on);
              if (on) link.setAttribute("aria-current", "true");
              else link.removeAttribute("aria-current");
            });
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 }
      );
      sections.forEach((section) => spy.observe(section));
    }
  }

  function setupReveal() {
    const nodes = document.querySelectorAll(".reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -32px 0px" }
    );
    nodes.forEach((node) => io.observe(node));
  }

  function setupCopy() {
    const button = document.querySelector("[data-copy]");
    if (!button) return;
    const label = button.querySelector("[data-i18n]");
    let timer = 0;
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(value);
      } catch (err) {
        const area = document.createElement("textarea");
        area.value = value;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.left = "-999px";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
      }
      if (!label) return;
      label.textContent = textFor(state.lang, "contact.copied");
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        label.textContent = textFor(state.lang, "contact.copy");
      }, 1800);
    });
  }

  function setupParticles() {
    const canvas = document.getElementById("field");
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (navigator.connection && navigator.connection.saveData) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const parent = canvas.parentElement;
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    const count = window.innerWidth < 740 ? 24 : 46;
    const dots = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00018,
      vy: (Math.random() - 0.5) * 0.00018
    }));

    function resize() {
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function frame() {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      for (const dot of dots) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > 1) dot.vx *= -1;
        if (dot.y < 0 || dot.y > 1) dot.vy *= -1;
      }
      for (let i = 0; i < dots.length; i += 1) {
        for (let j = i + 1; j < dots.length; j += 1) {
          const dx = (dots[i].x - dots[j].x) * width;
          const dy = (dots[i].y - dots[j].y) * height;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.strokeStyle = "rgba(228,245,106," + ((1 - dist / 130) * 0.18).toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x * width, dots[i].y * height);
            ctx.lineTo(dots[j].x * width, dots[j].y * height);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = "rgba(244,240,230,0.72)";
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x * width, dot.y * height, 1.15, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = window.requestAnimationFrame(frame);
    }

    function play() {
      if (running || document.hidden) return;
      running = true;
      raf = window.requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      window.cancelAnimationFrame(raf);
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else play();
    });
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) play();
        else stop();
      });
      io.observe(parent);
    } else {
      play();
    }
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  setupLang();
  setupNav();
  setupReveal();
  setupCopy();
  setupParticles();
})();
