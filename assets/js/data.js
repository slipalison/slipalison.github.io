/* ==========================================================================
   Conteúdo bilíngue (PT/EN) — fonte: currículo Alison Amorim + repositórios
   ========================================================================== */
window.SITE_DATA = {
  // frases rotativas do efeito "typing" no hero
  typed: {
    pt: [
      'Arquitetura de sistemas de alta performance',
      'Sistemas distribuídos & microservices',
      'Mercado financeiro, fintech & BaaS',
      'Match engines de baixa latência',
      'IA & sistemas multi-agente',
      'Liderança técnica & mentoria',
    ],
    en: [
      'High-performance systems architecture',
      'Distributed systems & microservices',
      'Capital markets, fintech & BaaS',
      'Low-latency match engines',
      'AI & multi-agent systems',
      'Technical leadership & mentoring',
    ],
  },

  // contadores animados
  stats: [
    { value: 15, suffix: '+', pt: 'anos de experiência', en: 'years of experience' },
    { value: 99, suffix: '%', pt: 'redução de incidentes (XP Inc.)', en: 'incident reduction (XP Inc.)' },
    { value: 112, suffix: '%', pt: 'crescimento em 9 meses (Bankly)', en: 'growth in 9 months (Bankly)' },
    { value: 13, suffix: '', pt: 'engenheiros liderados (B3)', en: 'engineers led (B3)' },
  ],

  // cartão "resumo rápido" no Sobre
  facts: [
    { pt: 'Tech Manager / Principal Engineer', en: 'Tech Manager / Principal Engineer' },
    { pt: '15+ anos em engenharia & arquitetura', en: '15+ years in engineering & architecture' },
    { pt: 'B3 · XP Inc. · Banco BS2 · Bankly', en: 'B3 · XP Inc. · Banco BS2 · Bankly' },
    { pt: 'Co-construtor da Bankly (1ª BaaS do Brasil)', en: 'Co-builder of Bankly (Brazil’s first BaaS)' },
    { pt: 'Foco: performance, escala & confiabilidade', en: 'Focus: performance, scale & reliability' },
  ],

  // grid de competências
  stack: [
    {
      icon: '⟨⟩', pt: 'Linguagens', en: 'Languages',
      items: ['C#', '.NET / .NET Core', 'Node.js', 'TypeScript', 'Go', 'Java', 'ASP.NET'],
    },
    {
      icon: '◈', pt: 'Arquitetura', en: 'Architecture',
      items: ['Microservices', 'Sistemas distribuídos', 'REST APIs', 'WebSocket', 'FIX Protocol', 'Match Engine', 'Clean Code'],
    },
    {
      icon: '☁', pt: 'Cloud & Infra', en: 'Cloud & Infra',
      items: ['Azure', 'AWS', 'GCP', 'Kubernetes', 'Docker', 'Azure Functions', 'AWS Lambda'],
    },
    {
      icon: '⛁', pt: 'Dados', en: 'Data',
      items: ['Redis', 'PostgreSQL', 'SQL Server'],
    },
    {
      icon: '⟳', pt: 'DevOps & Plataforma', en: 'DevOps & Platform',
      items: ['CI/CD', 'GitHub Actions', 'Azure DevOps', 'Platform Engineering'],
    },
    {
      icon: '◎', pt: 'Observabilidade & Qualidade', en: 'Observability & Quality',
      items: ['Datadog', 'Grafana', 'ELK Stack', 'BDD', 'Testes de performance', 'Mutação'],
    },
    {
      icon: '✦', pt: 'Inteligência Artificial', en: 'Artificial Intelligence',
      items: ['Claude API', 'Model Context Protocol', 'Agent Skills', 'Claude Code', 'Agentes de IA'],
    },
    {
      icon: '₿', pt: 'Domínios', en: 'Domains',
      items: ['Mercado financeiro', 'Fintech', 'BaaS', 'Blockchain', 'Tokenização', 'DREX', 'Exchanges', 'OMS / EMS'],
    },
    {
      icon: '◆', pt: 'Liderança & Gestão', en: 'Leadership & Management',
      items: ['Liderança técnica', 'Mentoria', 'One-on-ones', 'Kanban', 'Roadmaps', 'OKRs & KPIs', 'Recrutamento'],
    },
  ],

  // timeline de experiência (mais recente primeiro)
  experience: [
    {
      company: 'B3', period: '10/2025 — 03/2026',
      role: { pt: 'Tech Leader / Coordenador de Engenharia', en: 'Tech Leader / Engineering Coordinator' },
      tags: ['.NET', 'OMS/EMS', 'GitHub Actions', 'Liderança'],
      bullets: {
        pt: [
          'Liderança da equipe responsável pela internalização da plataforma Lynx Trading (OMS, EMS e Market Makers) distribuída pela B3 a grandes instituições financeiras.',
          'Mapeamento e documentação da base de código, identificando falhas estruturais, riscos de segurança e melhorias de arquitetura.',
          'Pipelines de CI/CD on-premise com GitHub Actions; análise e otimização de custos de infraestrutura.',
        ],
        en: [
          'Led the team internalizing the Lynx Trading platform (OMS, EMS and Market Makers) distributed by B3 to large financial institutions.',
          'Mapped and documented the codebase, identifying structural flaws, security risks and architecture improvements.',
          'On-premise CI/CD pipelines with GitHub Actions; infrastructure cost analysis and optimization.',
        ],
      },
    },
    {
      company: 'B3 Digitas', period: '06/2023 — 10/2025',
      role: { pt: 'Tech Lead', en: 'Tech Lead' },
      tags: ['.NET', 'Azure', 'Kubernetes', 'Redis', 'WebSocket', 'FIX'],
      bullets: {
        pt: [
          'Liderança de equipe de 13 engenheiros no desenvolvimento de plataformas críticas do ecossistema financeiro brasileiro.',
          'Soluções de tokenização de ativos, exchange e iniciativas DREX, com microservices, REST e tempo real via WebSocket e FIX Protocol.',
          'Participação em match engine de alto throughput e baixa latência; definição de arquitetura e roadmaps tecnológicos.',
        ],
        en: [
          'Led a 13-engineer team building business-critical platforms of the Brazilian financial ecosystem.',
          'Asset-tokenization, exchange and DREX solutions with microservices, REST and real-time via WebSocket and FIX Protocol.',
          'Contributed to a high-throughput, low-latency match engine; defined architecture and technology roadmaps.',
        ],
      },
    },
    {
      company: 'Banco BS2', period: '03/2023 — 06/2023',
      role: { pt: 'Senior Staff Software Engineer', en: 'Senior Staff Software Engineer' },
      tags: ['.NET Core', 'SQL Server', 'GCP', 'Microservices'],
      bullets: {
        pt: [
          'Arquitetura de sistemas bancários de alta disponibilidade com .NET Core, SQL Server e Google Cloud Platform.',
          'Liderança técnica na modernização de sistemas financeiros e integração com plataformas legadas.',
          'Padronização de práticas de DevOps e CI/CD; mentoria técnica de engenheiros.',
        ],
        en: [
          'Architecture of high-availability banking systems with .NET Core, SQL Server and Google Cloud Platform.',
          'Technical leadership modernizing financial systems and integrating with legacy platforms.',
          'Standardized DevOps and CI/CD practices; technical mentoring of engineers.',
        ],
      },
    },
    {
      company: 'XP Inc.', period: '03/2020 — 02/2023',
      role: { pt: 'Senior Staff Software Engineer', en: 'Senior Staff Software Engineer' },
      tags: ['.NET', 'Azure', 'Kubernetes', 'Datadog', 'Observabilidade'],
      bullets: {
        pt: [
          'Liderança técnica da plataforma de abertura de contas digitais usada por diferentes marcas do grupo.',
          'Redução de 99% dos incidentes via reestruturação da arquitetura distribuída e melhoria das práticas de engenharia.',
          'Estratégia completa de testes (unitário, integrado, BDD, performance, mutação) e observabilidade com Datadog, Grafana e ELK.',
        ],
        en: [
          'Technical lead of the digital account-opening platform used across the group’s brands.',
          '99% incident reduction by restructuring the distributed architecture and improving engineering practices.',
          'Full testing strategy (unit, integration, BDD, performance, mutation) and observability with Datadog, Grafana and ELK.',
        ],
      },
    },
    {
      company: 'Bankly — BaaS', period: '12/2017 — 03/2020',
      role: { pt: 'Software Engineer Full Stack', en: 'Software Engineer Full Stack' },
      tags: ['.NET Core', 'AWS', 'Docker', 'Lambda', 'ELK'],
      bullets: {
        pt: [
          'Co-construção de um banco digital do zero (Acesso Card → Bankly), uma das primeiras plataformas BaaS do Brasil, depois adquirida pelo Banco BV.',
          'Plataforma corporativa de cartões pré-pagos com crescimento de 112% em resultados em 9 meses.',
          'Integrações bancárias completas; migração de Azure para AWS; APIs com Docker, Azure Functions e AWS Lambda.',
        ],
        en: [
          'Co-built a digital bank from scratch (Acesso Card → Bankly), one of Brazil’s first BaaS platforms, later acquired by Banco BV.',
          'Corporate prepaid-card platform with 112% growth in results over 9 months.',
          'Complete banking integrations; Azure-to-AWS migration; APIs with Docker, Azure Functions and AWS Lambda.',
        ],
      },
    },
    {
      company: 'SML Brasil', period: '03/2014 — 11/2017',
      role: { pt: 'Analista Programador .NET', en: '.NET Developer Analyst' },
      tags: ['.NET Framework', 'ASP.NET', 'BPM/ECM', 'Cordova'],
      bullets: {
        pt: [
          'Soluções para instituições financeiras e laboratórios médicos com .NET Framework, C# e ASP.NET.',
          'Automação de processos com BPM/ECM; apps móveis com Cordova e PhoneGap.',
          'Mentoria e disseminação de boas práticas (Clean Code, arquitetura).',
        ],
        en: [
          'Solutions for financial institutions and medical labs with .NET Framework, C# and ASP.NET.',
          'Process automation with BPM/ECM; mobile apps with Cordova and PhoneGap.',
          'Mentoring and best-practice dissemination (Clean Code, architecture).',
        ],
      },
    },
    {
      company: 'Edenred', period: '08/2012 — 02/2014',
      role: { pt: 'Analista Desenvolvedor de Sistemas', en: 'Systems Developer Analyst' },
      tags: ['.NET', 'Java', 'QlikView', 'BI'],
      bullets: {
        pt: [
          'Automação e Business Intelligence para operações financeiras com .NET, Java e QlikView.',
          'Dashboards e relatórios analíticos; consultoria técnica em projetos da plataforma Ticket Car.',
        ],
        en: [
          'Automation and Business Intelligence for financial operations with .NET, Java and QlikView.',
          'Dashboards and analytical reports; technical consulting on Ticket Car platform projects.',
        ],
      },
    },
  ],

  // projetos em destaque (dados reais dos repositórios)
  projects: [
    {
      name: 'NEXUS', repo: 'NEXUS', lang: 'Python', accent: '#3776ab',
      pt: 'Plataforma agnóstica de orquestração multi-agente: cria e orquestra agentes com LLMs locais (Ollama), decompõe tarefas em micro-tasks e faz streaming live de raciocínio e tool calls.',
      en: 'Agnostic multi-agent orchestration platform: builds and orchestrates agents with local LLMs (Ollama), decomposes tasks into micro-tasks and live-streams reasoning and tool calls.',
    },
    {
      name: 'moodline', repo: 'moodline', lang: 'JavaScript', accent: '#f1e05a',
      pt: 'Statusline divertida e informativa para CLIs de IA (Claude Code, Copilot CLI): barra de contexto em gradiente, git, custo e trocadilhos de dev.',
      en: 'Fun, informative statusline for AI CLIs (Claude Code, Copilot CLI): gradient context bar, git, cost and dev puns.',
    },
    {
      name: 'Vindi.NET', repo: 'Vindi.NET', lang: 'C#', accent: '#178600',
      pt: 'SDK .NET para a API de Recorrência da Vindi — pagamentos e billing recorrente. Repositório open source mais estrelado do perfil.',
      en: '.NET SDK for Vindi’s Recurrence API — recurring payments and billing. Most-starred open-source repo on the profile.',
    },
    {
      name: 'simulator-ccb', repo: 'simulator-ccb', lang: 'C# · TypeScript', accent: '#178600',
      pt: 'Aplicação full-stack (C# + TypeScript) — simulador com backend robusto e front-end tipado. Um dos maiores projetos do perfil.',
      en: 'Full-stack application (C# + TypeScript) — simulator with a robust backend and typed front-end. One of the largest projects on the profile.',
    },
    {
      name: 'jdi-cli', repo: 'jdi-cli', lang: 'PowerShell', accent: '#012456',
      pt: 'Ferramenta de linha de comando multiplataforma (PowerShell · Shell · JavaScript) para produtividade de desenvolvimento.',
      en: 'Cross-platform command-line tool (PowerShell · Shell · JavaScript) for developer productivity.',
    },
    {
      name: 'kanban-autogen', repo: 'kanban-autogen', lang: 'Python', accent: '#3776ab',
      pt: 'Automação de fluxo Kanban com geração assistida por agentes de IA (Python) — experimentos de orquestração e automação.',
      en: 'Kanban-flow automation with AI-agent assisted generation (Python) — orchestration and automation experiments.',
    },
  ],

  // credenciais & formação
  certs: [
    {
      icon: '✦', pt: 'IA com Claude — Anthropic', en: 'AI with Claude — Anthropic', year: '2026',
      lines: {
        pt: ['AI Fluency: Framework & Foundations', 'Building with the Claude API', 'Model Context Protocol', 'Agent Skills', 'Claude Code 101 & in Action', 'Claude Cowork · Claude 101'],
        en: ['AI Fluency: Framework & Foundations', 'Building with the Claude API', 'Model Context Protocol', 'Agent Skills', 'Claude Code 101 & in Action', 'Claude Cowork · Claude 101'],
      },
    },
    {
      icon: '◆', pt: 'Arquitetura & Liderança', en: 'Architecture & Leadership', year: '',
      lines: {
        pt: ['Mentoria de Arquitetura de Software c/ ênfase em IA — Elemar Jr.', 'Liderança, Comunicação e Feedback — Udemy', 'Arquitetura .NET — Eduardo Pires'],
        en: ['Software Architecture Mentorship w/ AI focus — Elemar Jr.', 'Leadership, Communication & Feedback — Udemy', '.NET Architecture — Eduardo Pires'],
      },
    },
    {
      icon: '₿', pt: 'Compliance & Cripto', en: 'Compliance & Crypto', year: '',
      lines: {
        pt: ['Cryptocurrency Financial Crime Compliance Bootcamp — Financial Crime Academy'],
        en: ['Cryptocurrency Financial Crime Compliance Bootcamp — Financial Crime Academy'],
      },
    },
    {
      icon: '🎓', pt: 'Formação', en: 'Education', year: '',
      lines: {
        pt: ['Tecnólogo em Análise e Desenvolvimento de Sistemas — Impacta Tecnologia'],
        en: ['Technologist in Systems Analysis & Development — Impacta Tecnologia'],
      },
    },
  ],
};
