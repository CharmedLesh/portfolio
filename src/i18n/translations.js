export const translations = {
  en: {
    meta: {
      title: 'Viacheslav Matvieiev \u2011 Frontend Engineer',
      description:
        'Frontend Engineer with 3 years of experience building web applications with TypeScript, React, and Next.js for products with millions of users.',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      certificates: 'Certificates',
      contact: 'Contact',
      downloadCv: 'Download CV',
    },
    hero: {
      greeting: 'Hi, my name is',
      name: 'Viacheslav Matvieiev',
      title: 'Frontend Engineer',
      summary:
        'Frontend Engineer with 3 years of experience building web applications with TypeScript, React, and Next.js. Shipped features for products with millions of users, including Manchester City F.C. (5M+ monthly visits) and a digital keys marketplace (3M+ monthly visits). Experienced in leading frontend development, from architecture decisions to deployment.',
      getInTouch: 'Get in Touch',
      viewExperience: 'View Experience',
      downloadCv: 'Download CV',
      scroll: 'Scroll',
    },
    about: {
      sectionNumber: '01.',
      title: 'About Me',
      text1:
        'Frontend Engineer with 3 years of experience building web applications with TypeScript, React, and Next.js across media, e\u2011commerce, fintech, SaaS, and IoT. I`ve shipped features for products with millions of users, including Manchester City F.C. (5M+ monthly visits) and a digital keys marketplace (3M+ monthly visits).',
      text3: 'Based in Tbilisi, Georgia (UTC+4). I work best in environments where frontend quality is taken seriously \u2011 whether that means a well\u2011maintained design system, meaningful test coverage, or real attention to application performance.',
      text2Before: 'I`m comfortable owning features end\u2011to\u2011end: from architecture decisions and API integration to testing infrastructure, accessibility, and deployment. I`ve shipped in ',
      text2Middle: ' and ',
      text2After:
        ' across both greenfield projects and deeply legacy codebases \u2011 including jQuery, PHP, and mixed\u2011stack environments.',
      yearsNumber: '3',
      yearsLabel: 'Years of Experience',
      visitsNumber: '8M+',
      visitsLabel: 'Monthly Visits on Shipped Products',
      promotionsNumber: '2\u00d7',
      promotionsLabel: 'Projects Led',
    },
    experience: {
      sectionNumber: '02.',
      title: 'Experience',
      jobs: [
        {
          role: 'Frontend Engineer',
          company: 'WhiteTech',
          date: 'Sep 2025 \u2011 Sep 2026',
          projects: [
            {
              title: 'Digital Keys Marketplace',
              meta: 'E\u2011commerce, Marketplace \u00b7 3M+ monthly visits',
              description:
                'Sole frontend developer shipping features on a legacy project within tight deadlines. Shipped a real\u2011time messaging system with Vue 3 and WebSocket and integrated the messenger into a legacy JavaScript/jQuery/PHP codebase with no disruption to existing functionality. Managed a complex local development environment independently using Ubuntu VM with Docker.',
              tags: ['React', 'Vue', 'jQuery', 'Node.js', 'JavaScript', 'PHP', 'WebSocket', 'Jest', 'Docker'],
            },
            {
              title: 'Web Application Builder Platform',
              meta: 'SaaS, PaaS, No\u2011code platform, Application builder \u00b7 Startup',
              description:
                'Joined a no\u2011code web application builder platform at pre\u2011MVP stage. Improved overall product quality by systematically resolving issues inherited from the prototyping phase. Built 20+ Storybook components with full Jest coverage and configured tests, themes, docs, and Figma addons for Storybook. Promoted to lead frontend on a high\u2011priority production project (Digital Keys Marketplace) in recognition of consistent delivery.',
              tags: ['React', 'Next.js', 'TypeScript', 'Storybook', 'Jest'],
            },
          ],
        },
        {
          role: 'Software Engineer',
          company: 'GlobalLogic',
          date: 'Aug 2023 \u2011 Aug 2025',
          projects: [
            {
              title: 'US Private Capital Fund Administration Service',
              meta: 'FinTech \u00b7 $1.5T+ AuA, 12K+ fund entities, 500+ clients',
              description:
                'Delivered new features and improvements across a multi\u2011app platform, working across both modern and legacy codebases. Created test coverage, detecting and fixing more than 15 bugs. Integrated backend API endpoints to coordinate features across multiple client\u2011facing applications.',
              tags: ['React', 'jQuery', 'TypeScript', 'Jest'],
            },
            {
              title: 'Video & Telemetry Streaming Application',
              meta: 'Streaming, IoT, MilTech \u00b7 Proof\u2011of\u2011concept built for a prospective client',
              description:
                'Owned the full lifecycle as the only frontend developer. Built a real\u2011time telemetry visualization interface that consumed live data streams with sub\u2011second latency. Developed a data emulator to generate and transmit telemetry signals, enabling development without physical hardware. Implemented HLS video streaming alongside the telemetry dashboard, delivering a unified real\u2011time monitoring interface. Deployed and maintained the demo environment on a remote server, enabling live presentations to the prospective client.',
              tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'WebSocket', 'HLS'],
            },
            {
              title: 'Manchester City F.C.',
              meta: 'Media, E\u2011commerce \u00b7 5M+ monthly visits',
              description:
                'Contributed 20+ reusable components to the internal Storybook library, used across 3 production applications. Replaced third\u2011party UI components, improving Lighthouse score by ~15 points and eliminating ~200KB from the bundle. Implemented REST API integrations, handling data transformation for centralized state management. Resolved critical auth\u2011flow bugs on legacy iOS versions, restoring login for thousands of affected users. Promoted mid\u2011engagement to lead frontend for a new division, bootstrapping its Next.js app from zero to demo in 4 weeks.',
              tags: ['React', 'Next.js', 'TypeScript', 'Storybook', 'i18next', 'Nx', 'Jest'],
            },
          ],
        },
      ],
    },
    skills: {
      sectionNumber: '03.',
      title: 'Skills',
      core: 'Core',
      markup: 'Markup & Styling',
      state: 'State & Data',
      tooling: 'Tests & Tooling',
      ai: 'Artificial Intelligence',
      languages: 'Languages',
      langItems: [
        { name: 'English', level: 'Professional (C1)' },
        { name: 'Ukrainian', level: 'Native' },
        { name: 'Russian', level: 'Native' },
      ],
    },
    education: {
      sectionNumber: '04.',
      title: 'Education',
      degree: "Bachelor's Degree in Computer Engineering",
      school: 'Petro Mohyla Black Sea National University',
      date: 'September 2020 \u2011 June 2024',
    },
    certificates: {
      sectionNumber: '05.',
      title: 'Certificates',
      issuedLabel: 'Issued',
      credentialIdLabel: 'Credential ID',
      showCredential: 'Show credential',
      viewCertificate: 'View certificate',
      closeLabel: 'Close',
      items: [
        {
          name: 'Claude Code in Action',
          issuer: 'Anthropic',
          date: 'May 2026',
          credentialId: 'jmho4x8buhtk',
          credentialUrl: 'https://verify.skilljar.com/c/jmho4x8buhtk',
          pdf: '/certificate-claude-code-in-action.pdf',
        },
        {
          name: 'Introduction to Agent Skills',
          issuer: 'Anthropic',
          date: 'May 2026',
          credentialId: '7ruv9uar8kgx',
          credentialUrl: 'https://verify.skilljar.com/c/7ruv9uar8kgx',
          pdf: '/certificate-introduction-to-agent-skills.pdf',
        },
      ],
    },
    contact: {
      sectionNumber: '06.',
      title: 'Get in Touch',
      text: "I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out.",
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        subjectPlaceholder: 'What is this about?',
        messagePlaceholder: 'Your message...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Something went wrong. Please try again.',
      },
      labels: {
        email: 'Email',
        linkedin: 'LinkedIn',
        telegram: 'Telegram',
      },
      linkedinName: 'Viacheslav Matvieiev',
    },
    footer: {
      text: 'Designed & Built by Viacheslav Matvieiev',
    },
  },

  uk: {
    meta: {
      title: "В'ячеслав Матвєєв ‑ Фронтенд‑інженер",
      description:
        "Фронтенд‑інженер із 3 роками досвіду створення веб‑застосунків на TypeScript, React та Next.js для продуктів з мільйонами користувачів.",
    },
    nav: {
      about: 'Про мене',
      experience: 'Досвід',
      skills: 'Навички',
      education: 'Освіта',
      certificates: 'Сертифікати',
      contact: 'Контакт',
      downloadCv: 'Завантажити CV',
    },
    hero: {
      greeting: 'Привіт, мене звати',
      name: "Матвєєв В'ячеслав",
      title: "Фронтенд‑інженер",
      summary:
        "Фронтенд‑інженер із 3 роками досвіду створення веб‑застосунків на TypeScript, React та Next.js. Реалізовував функціонал для продуктів з мільйонами користувачів, зокрема Manchester City F.C. (5M+ відвідувань на місяць) та маркетплейсу цифрових ключів (3M+ відвідувань на місяць). Маю досвід керівництва розробки фронтенду: від прийняття архітектурних рішень до розгортання.",
      getInTouch: "Зв'язатися",
      viewExperience: 'Переглянути досвід',
      downloadCv: 'Завантажити CV',
      scroll: 'Гортайте',
    },
    about: {
      sectionNumber: '01.',
      title: 'Про мене',
      text1:
        "Фронтенд‑інженер із 3 роками досвіду створення веб‑застосунків на TypeScript, React та Next.js у сферах медіа, електронної комерції, фінтеху, SaaS та IoT. Реалізовував функціонал для продуктів з мільйонами користувачів, зокрема Manchester City F.C. (5M+ відвідувань на місяць) та маркетплейсу цифрових ключів (3M+ відвідувань на місяць).",
      text3: 'Перебуваю в Тбілісі, Грузія (UTC+4). Показую найкращі результати в середовищах, де якість фронтенду сприймається серйозно ‑ чи то добре підтримувана система дизайну, змістовне тестове покриття, чи справжня увага до продуктивності продукту.',
      text2Before: 'Для мене не проблема вести розробку від початку до кінця: від архітектурних рішень та інтеграції API до тестування інфраструктури, доступності та розгортання. Я впроваджував ',
      text2Middle: ' та ',
      text2After:
        " як у новітніх проектах, так і в глибоко застарілих кодових базах, включаючи jQuery, PHP та змішані середовища.",
      yearsNumber: '3',
      yearsLabel: 'Роки Досвіду',
      visitsNumber: '8M+',
      visitsLabel: 'Відвідувань на Місяць у Продуктах',
      promotionsNumber: '2×',
      promotionsLabel: 'Підвищення до Лід Фронтенду',
    },
    experience: {
      sectionNumber: '02.',
      title: 'Досвід',
      jobs: [
        {
          role: 'Фронтенд‑інженер',
          company: 'WhiteTech',
          date: 'Вер 2025 ‑ Вер 2026',
          projects: [
            {
              title: 'Маркетплейс цифрових ключів',
              meta: 'Електронна комерція, Маркетплейс · 3M+ відвідувань на місяць',
              description:
                "Соло фронтенд‑розробник, що реалізовував функціонал на legacy‑проєкті в стислі терміни. Розробив чат в реальному часі на Vue 3 та WebSocket та інтегрував месенджер у застарілу JavaScript/jQuery/PHP кодову базу без порушення існуючого функціоналу. Самостійно керував складним локальним середовищем розробки з використанням Ubuntu VM та Docker.",
              tags: ['React', 'Vue', 'jQuery', 'Node.js', 'JavaScript', 'PHP', 'WebSocket', 'Jest', 'Docker'],
            },
            {
              title: 'Платформа для створення веб‑застосунків',
              meta: 'SaaS, PaaS, No‑code платформа, Конструктор застосунків · Стартап',
              description:
                "Приєднався до no‑code платформи для створення веб‑застосунків на етапі pre‑MVP. Покращив загальну якість продукту, систематично вирішуючи проблеми успадковані від фази прототипування. Створив 20+ компонентів у Storybook з повним покриттям Jest тестами та налаштував для Storybook плагіни тем, тестів, документації та Figma. Отримав підвищення до керівника фронтенду на високопріоритетному продакшн‑проєкті (Маркетплейс цифрових ключів) за визнання стабільних результатів.",
              tags: ['React', 'Next.js', 'TypeScript', 'Storybook', 'Jest'],
            },
          ],
        },
        {
          role: 'Інженер‑програміст',
          company: 'GlobalLogic',
          date: 'Сер 2023 ‑ Сер 2025',
          projects: [
            {
              title: 'Сервіс адміністрування приватних інвестиційних фондів США',
              meta: 'Фінтех · $1.5T+ активів в адмініструванні, 12K+ фондів, 500+ клієнтів',
              description:
                "Реалізовував нові фічі та фікси мульти‑додаткової платформи, працюючи як із сучасним, так і з застарілим кодом. Створив тестове покриття, завдяки якому виявив та виправив понад 15 багів. Інтегрував ендпоінти API для координації функціоналу між кількома клієнтськими застосунками.",
              tags: ['React', 'jQuery', 'TypeScript', 'Jest'],
            },
            {
              title: 'Застосунок потокового відео та телеметрії',
              meta: 'Стримінг, IoT, MilTech · Proof‑of‑concept для потенційного клієнта',
              description:
                "Вів повний цикл розробки як єдиний фронтенд‑розробник. Побудував інтерфейс візуалізації телеметрії в реальному часі, що отримував потоки даних із затримкою менше секунди. Розробив емулятор даних для генерації та передачі телеметричних сигналів, що дозволило вести розробку без фізичного обладнання. Реалізував HLS стримінг відео поряд із телеметричним дашбордом, забезпечивши єдиний інтерфейс моніторингу в реальному часі. Розгорнув та підтримував демо‑середовище на віддаленому сервері, що дозволило проводити живі презентації для потенційного клієнта.",
              tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'WebSocket', 'HLS'],
            },
            {
              title: 'Manchester City F.C.',
              meta: 'Медіа, Електронна комерція · 5M+ відвідувань на місяць',
              description:
                "Створив 20+ повторно використовуваних компонентів для внутрішньої бібліотеки Storybook, що наразі використовуються у 3 продакшн‑застосунках. Замінив сторонні UI‑компоненти, покращивши оцінку Lighthouse на ~15 пунктів та зменшивши бандл на ~200КБ. Реалізував інтеграції REST API, виконуючи трансформацію даних для централізованого менеджменту станів. Вирішив критичні баги авторизації на застарілих версіях iOS, відновивши логін для тисяч користувачів. По ходу проєкту отримав підвищення до керування фронтендом у новому підрозділі, де побудував новий Next.js застосунок з нуля до демо за 4 тижні.",
              tags: ['React', 'Next.js', 'TypeScript', 'Storybook', 'i18next', 'Nx', 'Jest'],
            },
          ],
        },
      ],
    },
    skills: {
      sectionNumber: '03.',
      title: 'Навички',
      core: 'Основне',
      markup: 'Розмітка та стилі',
      state: 'Стан та дані',
      tooling: 'Тести та інструменти',
      ai: 'Штучний Інтелект',
      languages: 'Мови',
      langItems: [
        { name: 'Англійська', level: 'Професійна (C1)' },
        { name: 'Українська', level: 'Рідна' },
        { name: 'Російська', level: 'Рідна' },
      ],
    },
    education: {
      sectionNumber: '04.',
      title: 'Освіта',
      degree: "Бакалавр комп'ютерної інженерії",
      school: 'Чорноморський національний університет імені Петра Могили',
      date: 'Вересень 2020 \u2011 Червень 2024',
    },
    certificates: {
      sectionNumber: '05.',
      title: 'Сертифікати',
      issuedLabel: 'Видано',
      credentialIdLabel: 'ID сертифіката',
      showCredential: 'Переглянути підтвердження',
      viewCertificate: 'Переглянути сертифікат',
      closeLabel: 'Закрити',
      items: [
        {
          name: 'Claude Code in Action',
          issuer: 'Anthropic',
          date: 'Травень 2026',
          credentialId: 'jmho4x8buhtk',
          credentialUrl: 'https://verify.skilljar.com/c/jmho4x8buhtk',
          pdf: '/certificate-claude-code-in-action.pdf',
        },
        {
          name: 'Introduction to Agent Skills',
          issuer: 'Anthropic',
          date: 'Травень 2026',
          credentialId: '7ruv9uar8kgx',
          credentialUrl: 'https://verify.skilljar.com/c/7ruv9uar8kgx',
          pdf: '/certificate-introduction-to-agent-skills.pdf',
        },
      ],
    },
    contact: {
      sectionNumber: '06.',
      title: "Зв'язатися",
      text: 'Наразі я відкритий до нових можливостей. Якщо у вас є питання або ви просто хочете привітатися, не соромтеся написати.',
      form: {
        name: "Ім'я",
        email: 'Електронна пошта',
        subject: 'Тема',
        message: 'Повідомлення',
        namePlaceholder: "Ваше ім'я",
        emailPlaceholder: 'ваш@email.com',
        subjectPlaceholder: 'Про що ви хочете написати?',
        messagePlaceholder: 'Ваше повідомлення...',
        send: 'Надіслати',
        sending: 'Надсилання...',
        success: 'Повідомлення надіслано успішно!',
        error: 'Щось пішло не так. Спробуйте ще раз.',
      },
      labels: {
        email: 'Пошта',
        linkedin: 'LinkedIn',
        telegram: 'Telegram',
      },
      linkedinName: "Матвєєв В'ячеслав",
    },
    footer: {
      text: "Спроєктував та розробив Матвєєв В'ячеслав",
    },
  },
};
