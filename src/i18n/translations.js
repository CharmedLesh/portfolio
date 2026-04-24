export const translations = {
  en: {
    meta: {
      title: 'Viacheslav Matvieiev \u2011 Frontend Engineer',
      description:
        'Frontend Engineer with over 2 years building production-grade web apps across sports, fintech, IoT, and e-commerce.',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      downloadCv: 'Download CV',
    },
    hero: {
      greeting: 'Hi, my name is',
      name: 'Viacheslav Matvieiev',
      title: 'Frontend Engineer',
      summary:
        'Frontend Engineer with over 2 years building production\u2011grade web apps across sports, fintech, IoT, and e\u2011commerce. Shipped features as sole frontend developer on real\u2011time streaming systems; contributed to enterprise\u2011scale component libraries serving major UK clients.',
      getInTouch: 'Get in Touch',
      viewExperience: 'View Experience',
      downloadCv: 'Download CV',
      scroll: 'Scroll',
    },
    about: {
      sectionNumber: '01.',
      title: 'About Me',
      text1:
        'Frontend Engineer with 2+ years building production\u2011grade web applications across sports, fintech, IoT, and e\u2011commerce. I`ve worked across the full frontend spectrum \u2011 from architecting real\u2011time telemetry dashboards and implementing HLS video streaming as the sole developer, to contributing enterprise\u2011scale component libraries for major UK clients inside 30+ person Agile teams.',
      text3: 'Currently available for remote contract and short\u2011term roles with US and EU product teams. I work best in environments where frontend quality is taken seriously \u2011 whether that means a well\u2011maintained design system, meaningful test coverage, or real attention to application performance.',
      text2Before: 'I`m comfortable owning features end\u2011to\u2011end: from architecture decisions and API integration to testing infrastructure, accessibility, and deployment. I`ve shipped in ',
      text2Middle: ' and ',
      text2After:
        ' across both greenfield projects and deeply legacy codebases \u2011 including jQuery, PHP, and mixed\u2011stack environments.',
      yearsNumber: '2+',
      yearsLabel: 'Years of Experience',
      sectorsNumber: '5',
      sectorsLabel: 'Enterprise Projects',
      projectsNumber: '7',
      projectsLabel: 'Delivered Projects',
    },
    experience: {
      sectionNumber: '02.',
      title: 'Experience',
      jobs: [
        {
          role: 'Frontend Engineer',
          company: 'Whitetech',
          date: 'Jul 2025 \u2011 Oct 2025',
          projects: [
            {
              title: 'Web Application Builder Platform',
              description:
                'Joined a no\u2011code web application builder platform at pre\u2011MVP stage \u2011 contributed 10+ UI components to the React/Next.js (SSR) codebase and integrated them into the Storybook library with Jest test coverage. Improved overall product quality by systematically resolving visual, logical, cross\u2011browser, and accessibility issues inherited from the prototyping phase. Reassigned prior to MVP release to a higher\u2011priority production project \u2011 a recognition of capacity and reliability rather than a project end.',
              tags: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'CSS', 'SASS', 'Tailwind CSS', 'Storybook', 'Jest', 'React Testing Library', 'RESTful API', 'Jira', 'Figma', 'Git'],
            },
            {
              title: 'Digital Key Marketplace',
              description:
                'Sole frontend developer on a major new feature \u2011 a real\u2011time messaging system for customers and sellers built with Vue 3 and WebSocket. Integrated the messenger seamlessly into a legacy JavaScript/jQuery/PHP codebase with no disruption to existing functionality. Managed a complex local development environment independently using Ubuntu VM with Docker. Delivered end\u2011to\u2011end within a 3\u2011week deadline.',
              tags: ['Vue 3', 'jQuery', 'JavaScript', 'TypeScript', 'CSS', 'WebSocket', 'Docker', 'RESTful API', 'Jira', 'Figma', 'Git'],
            },
          ],
        },
        {
          role: 'Software Engineer',
          company: 'GlobalLogic',
          date: 'Aug 2023 \u2011 Aug 2025',
          projects: [
            {
              title: 'UK Major Sports Club',
              description:
                'Worked as part of a 30+ person international Agile team maintaining and extending a suite of applications for a major UK sports club. Contributed 20+ reusable components to the internal Storybook library, used across 3 production applications. Replaced 6 third\u2011party UI components with custom React implementations, improving Lighthouse score by ~15 points and eliminating ~200KB from the production bundle. Implemented RESTful API integrations across the application suite, handling data transformation and normalization for centralized state management. Resolved a critical auth flow bug on a specific legacy iOS version \u2011 traced an endless redirect loop and incorrect token handling, restoring login functionality for all affected users. Promoted mid\u2011engagement to carry frontend on a new product division \u2011 bootstrapped a Next.js app from zero to demo in 4 weeks, including Jest/RTL testing infrastructure, SSR/SSG architecture, and a product\u2011specific design token framework.',
              tags: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'CSS', 'SASS', 'BEM', 'Storybook', 'Jest', 'React Testing Library', 'RESTful API', 'JWT', 'Jira', 'Figma', 'Bitbucket', 'Git'],
            },
            {
              title: 'Ukrainian Video & Telemetry Streaming Application',
              description:
                'Sole developer (frontend + tooling) on an internal IoT dashboard \u2011 owned the full lifecycle from architecture design to remote deployment via SSH, delivering in 3 weeks. Built a real\u2011time telemetry visualization interface in React, consuming live data streams with sub\u2011second latency. Developed a Python data emulator from scratch to generate and transmit telemetry signals, enabling frontend development and testing without physical hardware at early stage. Implemented HLS video streaming alongside the telemetry dashboard, delivering a unified real\u2011time monitoring interface.',
              tags: ['React', 'JavaScript', 'TypeScript', 'Python', 'CSS', 'HLS', 'RESTful API', 'WebSocket', 'JWT', 'Figma', 'Git', 'SSH'],
            },
            {
              title: 'US Fund Service',
              description:
                'Delivered new features and legacy improvements across a multi\u2011app fintech platform serving US\u2011based financial services clients, working across both modern React and jQuery codebases. Wrote comprehensive Jest test coverage for existing functionality, improving codebase stability ahead of new feature rollout. Integrated backend API endpoints to enable feature coordination across multiple client\u2011facing applications, collaborating directly with backend developers.',
              tags: ['React', 'jQuery', 'JavaScript', 'CSS', 'Jest', 'React Testing Library', 'RESTful API', 'Figma', 'Azure DevOps', 'Git'],
            },
          ],
        },
      ],
    },
    skills: {
      sectionNumber: '03.',
      title: 'Skills',
      frontend: 'Front\u2011End Technologies',
      testing: 'Testing',
      devtools: 'Dev Tools & Collaboration',
      ai: 'Artificial Intelligence',
      languages: 'Languages',
      langItems: [
        { name: 'English', level: 'Professional' },
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
    contact: {
      sectionNumber: '05.',
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
      title: "В'ячеслав Матвєєв \u2011 Фронтенд\u2011інженер",
      description:
        "Фронтенд\u2011інженер із понад 2 роками досвіду створення продакшн веб\u2011застосунків у сферах спорту, фінтеху, IoT та електронної комерції.",
    },
    nav: {
      about: 'Про мене',
      experience: 'Досвід',
      skills: 'Навички',
      education: 'Освіта',
      contact: 'Контакт',
      downloadCv: 'Завантажити CV',
    },
    hero: {
      greeting: 'Привіт, мене звати',
      name: "В'ячеслав Матвєєв",
      title: "Фронтенд\u2011інженер",
      summary:
        "Фронтенд\u2011інженер із понад 2 роками досвіду створення продакшн веб\u2011застосунків у сферах спорту, фінтеху, IoT та електронної комерції. Реалізовував функціонал як єдиний фронтенд\u2011розробник на системах потокового відео в реальному часі; створював корпоративні бібліотеки компонентів для великих клієнтів з Великобританії.",
      getInTouch: "Зв'язатися",
      viewExperience: 'Переглянути досвід',
      downloadCv: 'Завантажити CV',
      scroll: 'Гортайте',
    },
    about: {
      sectionNumber: '01.',
      title: 'Про мене',
      text1:
        "Фронтенд\u2011інженер із понад 2 роками досвіду розробки веб\u2011застосунків для секторів спорту, фінтеху, IoT та електронної комерції. Я працював з усім спектром фронтенд\u2011застосунків \u2011 від розробки архітектури інформаційних панелей відображення телеметрії в реальному часі та впровадження потокового відео HLS як єдиний розробник, до розробки бібліотеки компонентів корпоративного масштабу для великих клієнтів з Великої Британії в рамках Agile\u2011команди з понад 30 осіб.",
      text3: 'Наразі доступний для віддаленої роботи за контрактом та для короткострокових посад у продуктових командах США та ЄС. Найкраще себе почуваю в середовищах, де якість фронтенду сприймається серйозно \u2011 чи то добре підтримувана система дизайну, змістовне тестове покриття, чи справжня увага до продуктивності продукту.',
      text2Before: 'Для мене не проблема вести розобку від початку до кінця: від архітектурних рішень та інтеграції API до тестування інфраструктури, доступності та розгортання. Я впроваджував ',
      text2Middle: ' та ',
      text2After:
        " як у новітніх проектах, так і в глибоко застарілих кодових базах, включаючи jQuery, PHP та змішані середовища.",
      yearsNumber: '2+',
      yearsLabel: 'Років Досвіду',
      sectorsNumber: '5',
      sectorsLabel: 'Корпоративних Проєктів',
      projectsNumber: '7',
      projectsLabel: 'Реалізованих Проєктів',
    },
    experience: {
      sectionNumber: '02.',
      title: 'Досвід',
      jobs: [
        {
          role: 'Фронтенд\u2011інженер',
          company: 'Whitetech',
          date: 'Лип 2025 \u2011 Жов 2025',
          projects: [
            {
              title: 'Платформа для створення веб\u2011застосунків',
              description:
                "Приєднався до no\u2011code платформи для створення веб\u2011застосунків на етапі pre\u2011MVP \u2011 розробив 10+ UI\u2011компонентів для React/Next.js (SSR) кодової бази та інтегрував їх до бібліотеки Storybook із покриттям Jest тестами. Покращив загальну якість продукту, систематично вирішуючи візуальні, логічні, кросбраузерні проблеми та проблеми доступності, успадковані від фази прототипування. Переведений на проєкт з вищим пріоритетом до релізу MVP \u2011 у результаті визнання компетентності та надійності, а не завершення проєкту.",
              tags: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'CSS', 'SASS', 'Tailwind CSS', 'Storybook', 'Jest', 'React Testing Library', 'RESTful API', 'Jira', 'Figma', 'Git'],
            },
            {
              title: 'Маркетплейс цифрових ключів',
              description:
                "Єдиний фронтенд\u2011розробник для розробки великої фічі \u2011 системи обміну повідомленнями в реальному часі для покупців та продавців, побудованій на Vue 3 та WebSocket. Безшовно інтегрував месенджер у застарілу JavaScript/jQuery/PHP кодову базу без порушення існуючої функціональності. Самостійно керував складним локальним середовищем розробки з використанням Ubuntu VM та Docker. Завершив розробку у 3\u2011тижневий дедлайн.",
              tags: ['Vue 3', 'jQuery', 'JavaScript', 'TypeScript', 'CSS', 'WebSocket', 'Docker', 'RESTful API', 'Jira', 'Figma', 'Git'],
            },
          ],
        },
        {
          role: 'Інженер\u2011програміст',
          company: 'GlobalLogic',
          date: 'Сер 2023 \u2011 Сер 2025',
          projects: [
            {
              title: 'Великий спортивний клуб Великобританії',
              description:
                "Працював у складі міжнародної Agile\u2011команди з 30+ осіб, підтримуючи та розширюючи набір застосунків для великого спортивного клубу Великобританії. Створив 20+ повторно використовуваних компонентів для внутрішньої бібліотеки Storybook, що використовуються у 3 продакшн\u2011застосунках. Замінив 6 сторонніх UI\u2011компонентів власними React\u2011реалізаціями, покращивши Lighthouse на ~15 пунктів та зменшивши продакшн\u2011бандл на ~200КБ. Реалізував інтеграції RESTful API по всьому набору застосунків, виконуючи трансформацію та нормалізацію даних для централізованого менеджменту станів. Вирішив критичний баг авторизації на специфічній застарілій версії iOS \u2011 відстежив нескінченний цикл пересилань та неправильну обробку токенів, відновивши функціональність логіну для всіх постраждалих користувачів. По ходу проєкту був підвищений до ведення фронтенду у складі нового продуктового підрозділу \u2011 побудував Next.js застосунок з нуля до демо за 4 тижні, включаючи інфраструктуру тестування Jest/RTL, архітектуру SSR/SSG та дизайн\u2011токен фреймворк розроблений спеціально під продукт.",
              tags: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'CSS', 'SASS', 'BEM', 'Storybook', 'Jest', 'React Testing Library', 'RESTful API', 'JWT', 'Jira', 'Figma', 'Bitbucket', 'Git'],
            },
            {
              title: 'Український застосунок потокового відео та телеметрії',
              description:
                "Єдиний розробник (фронтенд + інструменти) на внутрішньому IoT\u2011дашборді \u2011 вів повний цикл від проєктування архітектури до віддаленого розгортання через SSH за 3 тижні. Побудував інтерфейс візуалізації телеметрії в реальному часі на React, споживаючи потоки даних із затримкою в долю секунди. Розробив з нуля емулятор даних на Python для генерації та передачі телеметричних сигналів, що дозволило вести фронтенд\u2011розробку та тестування без фізичного обладнання на ранньому етапі. Реалізував HLS стримінг відео поряд із телеметричним дашбордом, забезпечуючи єдиний інтерфейс моніторингу в реальному часі.",
              tags: ['React', 'JavaScript', 'TypeScript', 'Python', 'CSS', 'HLS', 'RESTful API', 'WebSocket', 'JWT', 'Figma', 'Git', 'SSH'],
            },
            {
              title: 'Фінансовий сервіс США',
              description:
                "Реалізовував нові фічі та покращення застарілої мульти\u2011додаткової фінтех\u2011платформи для US\u2011клієнтів у сфері фінансових послуг, працюючи як із сучасними React, так і з jQuery кодовими базами. Створив комплексне покриття Jest тестами для існуючого функціоналу, підвищивши стабільність кодової бази перед розгортанням нових фіч. Інтегрував бекенд API\u2011ендпоінти для координації функціоналу між кількома клієнтськими застосунками, співпрацюючи безпосередньо з бекенд\u2011розробниками.",
              tags: ['React', 'jQuery', 'JavaScript', 'CSS', 'Jest', 'React Testing Library', 'RESTful API', 'Figma', 'Azure DevOps', 'Git'],
            },
          ],
        },
      ],
    },
    skills: {
      sectionNumber: '03.',
      title: 'Навички',
      frontend: 'Фронтенд\u2011технології',
      testing: 'Тестування',
      devtools: 'Інструменти та співпраця',
      ai: 'Штучний Інтелект',
      languages: 'Мови',
      langItems: [
        { name: 'Англійська', level: 'Професійна' },
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
    contact: {
      sectionNumber: '05.',
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
