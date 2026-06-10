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

  // pilares em destaque
  pillars: [
    { k: 'Liderança', ke: 'Leadership',
      pt: 'Times de até 13 engenheiros, formando arquitetos e disseminando boas práticas — mentoria, roadmaps e OKRs técnicos.',
      en: 'Teams of up to 13 engineers, growing architects and spreading best practices — mentoring, roadmaps and technical OKRs.' },
    { k: 'Arquitetura', ke: 'Architecture',
      pt: 'Sistemas distribuídos e microservices para o mercado financeiro — match engines de baixa latência, tokenização, exchanges e DREX.',
      en: 'Distributed systems and microservices for capital markets — low-latency match engines, tokenization, exchanges and DREX.' },
    { k: 'Engenharia', ke: 'Engineering',
      pt: 'C#/.NET, Go e Node sobre Azure, AWS e Kubernetes. Resultados medidos: −99% de incidentes, +112% de receita.',
      en: 'C#/.NET, Go and Node on Azure, AWS and Kubernetes. Measured results: −99% incidents, +112% revenue.' },
  ],

  // grid de competências
  stack: [
    {
      icon: '◆', pt: 'Liderança & Gestão', en: 'Leadership & Management',
      items: ['Liderança técnica', 'Mentoria', 'One-on-ones', 'Kanban', 'Roadmaps', 'OKRs & KPIs', 'Recrutamento', 'Desenvolvimento de carreira'],
    },
    {
      icon: '✦', pt: 'Inteligência Artificial', en: 'Artificial Intelligence',
      items: ['Claude API', 'Model Context Protocol', 'Agent Skills', 'Claude Code', 'Agentes de IA', 'Multi-agente', 'RAG', 'Guardrails'],
    },
    {
      icon: '◈', pt: 'Arquitetura & Code Design', en: 'Architecture & Code Design',
      hi: ['DDD', 'The Method', 'Hexagonal', 'Vertical Slice', 'Clean Architecture', 'CQRS', 'Event Sourcing'],
      items: ['Microservices', 'Sistemas distribuídos', 'REST APIs', 'WebSocket', 'FIX Protocol', 'Match Engine', 'SOLID', 'Clean Code'],
    },
    {
      icon: '⟨⟩', pt: 'Linguagens', en: 'Languages',
      items: ['C#', '.NET / .NET Core', 'Node.js', 'TypeScript', 'Go', 'Java', 'ASP.NET'],
    },
    {
      icon: '☁︎', pt: 'Cloud & Infra', en: 'Cloud & Infra',
      items: ['Azure', 'AWS', 'GCP', 'Kubernetes', 'Docker', 'Azure Functions', 'AWS Lambda'],
    },
    {
      icon: '◫', pt: 'Dados', en: 'Data',
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
      icon: '₿', pt: 'Domínios', en: 'Domains',
      items: ['Mercado financeiro', 'Fintech', 'BaaS', 'Blockchain', 'Tokenização', 'DREX', 'Exchanges', 'OMS / EMS'],
    },
  ],

  // timeline de experiência (mais recente primeiro)
  experience: [
    {
      company: 'Blip', period: { pt: '2026 — presente', en: '2026 — present' },
      role: { pt: 'Senior Staff Engineer', en: 'Senior Staff Engineer' },
      tags: ['IA', 'Contato inteligente', 'Mercado financeiro', 'Crédito'],
      bullets: {
        pt: [
          'Integração de IA em plataformas de contato inteligente para sistemas do mercado financeiro.',
          'Soluções conversacionais que elevam a conversão de adesão de crédito em diversos bancos.',
        ],
        en: [
          'AI integration into intelligent-contact platforms for financial-market systems.',
          'Conversational solutions raising credit-adoption conversion across several banks.',
        ],
      },
    },
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
          'Plataforma corporativa de cartões pré-pagos com crescimento de receita de 112% em 9 meses.',
          'Integrações bancárias completas; migração de Azure para AWS; APIs com Docker, Azure Functions e AWS Lambda.',
        ],
        en: [
          'Co-built a digital bank from scratch (Acesso Card → Bankly), one of Brazil’s first BaaS platforms, later acquired by Banco BV.',
          'Corporate prepaid-card platform with 112% revenue growth over 9 months.',
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
      name: 'moodline', repo: 'moodline', lang: 'JavaScript', accent: '#f1e05a', feat: true,
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
      name: 'jdi-cli', repo: 'jdi-cli', lang: 'PowerShell', accent: '#012456', feat: true,
      pt: 'Ferramenta de linha de comando multiplataforma (PowerShell · Shell · JavaScript) para produtividade de desenvolvimento.',
      en: 'Cross-platform command-line tool (PowerShell · Shell · JavaScript) for developer productivity.',
    },
    {
      name: 'kanban-autogen', repo: 'kanban-autogen', lang: 'Python', accent: '#3776ab',
      pt: 'Automação de fluxo Kanban com geração assistida por agentes de IA (Python) — experimentos de orquestração e automação.',
      en: 'Kanban-flow automation with AI-agent assisted generation (Python) — orchestration and automation experiments.',
    },
  ],

  // artigos publicados no LinkedIn (fonte: _meta/artigos-alison-amorim.md)
  articles: {
    profileUrl: 'https://www.linkedin.com/in/alison-amorim/recent-activity/articles/',
    featured: [
      { tag: 'Liderança & IA', t: 'Da dívida técnica à dívida cognitiva: liderando times na era da IA', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7432745022711750656/' },
      { tag: '.NET', t: '.NET 10 vs Java 25: O Duelo Definitivo das Plataformas Modernas', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7421507293244108800/' },
      { tag: 'IA', t: 'RAG Sem Romance: Como Fazer Busca + Contexto Que Não Vira Máquina de Alucinação', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7445035995772829696/' },
      { tag: 'Performance', t: 'Compare-and-Swap em .NET: a instrução invisível que limita (ou destrava) a escalabilidade', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7396177914918068225/' },
      { tag: 'Arquitetura', t: 'Por Que Sua Arquitetura de Software Está Falhando (e Como Consertar)', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7424013785729949696/' },
      { tag: 'Governança', t: 'Governança de Modelos: Quem Assina em Baixo Quando a IA Erra?', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7465692123263086593/' },
    ],
    all: [
      { t: 'Thread Safety em .NET: exemplos práticos para não “quebrar” sob concorrência', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7380968832477159425/' },
      { t: 'Governança de Modelos: Quem Assina em Baixo Quando a IA Erra?', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7465692123263086593/' },
      { t: 'From Batch to Real Time: IA em Baixa Latência Para Casos Críticos', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7464604962849902592/' },
      { t: 'Arquiteturas Híbridas: Misturando Modelos Grandes, Pequenos e Regras Clássicas', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7462792990118502400/' },
      { t: 'JDI: como construir um workflow lean pra agentes de IA (sem cerimônia, sem alucinação, sem queimar token)', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7462068225753710592/' },
      { t: 'Treinando Modelos Proprietários: Quando Vale a Pena e o Que Você Não Está Vendo na Conta', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7460256283770920960/' },
      { t: 'Agentes de IA: Entre o Brinquedo Bonito e o Operador Real de Processo', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7459531505548234752/' },
      { t: 'Design de Feedback Loop: Como Ensinar a IA Usando o Próprio Uso do Produto', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7457719662966046722/' },
      { t: 'Segurança e Compliance em Produtos com IA: Do LGPD ao "Não Deixa Esse Modelo Ver Esse Dado"', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7456994804002955265/' },
      { t: 'Fine-tuning vs Prompting vs RAG: A Tríade Que Vai Comer Seu Orçamento se Você Não Entender', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7455182841866407936/' },
      { t: 'Avaliação Contínua: Não Basta Subir o Modelo, Tem Que Medir, Quebrar e Ajustar', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7454458104118730752/' },
      { t: 'Custo de IA em Produção: Como Parar de Levar Surpresa na Fatura no Final do Mês', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7452646147682353152/' },
      { t: 'Do Monólito ao "AI Mesh": Quebrando Capacidades em Serviços de IA Reutilizáveis', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7451921375780384768/' },
      { t: 'Orquestração de Fluxos de IA: De um Prompt Solto para um Workflow Confiável', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7450109414692339712/' },
      { t: 'MCPs, Plugins e Ecossistemas: Colando Sua Plataforma no Cérebro dos Modelos', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7449384659542728704/' },
      { t: 'Skills e Ferramentas: Quando o LLM Precisa Apertar Parafusos no Seu Stack', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7447672882652094465/' },
      { t: 'Data Lake Para IA: Do “Joga No S3” ao “Consigo Explicar de Onde Saiu Essa Resposta”', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7446847939034996736/' },
      { t: 'RAG Sem Romance: Como Fazer Busca + Contexto Que Não Vira Máquina de Alucinação', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7445035995772829696/' },
      { t: 'Arquitetura de Um Backend Pronto Para IA: Contexto, Logs e Telemetria Desde o Dia 1', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7444386729945616384/' },
      { t: 'Do Prompt ao Produto: Desenhando Features de IA Com User Journey e Não Com Hype', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7442499298451243009/' },
      { t: 'Avaliar Qualidade de Resposta de IA Sem Ficar Perguntando no Slack: “O Que Vocês Acharam Disso?”', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7441774493506621440/' },
      { t: 'Guardrails: Colocando Cinto de Segurança em LLM Antes Que o Jurídico Descubra', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7440324948180537344/' },
      { t: 'Como Escolher Entre ChatGPT, Claude, Gemini, Mistral e Modelo Open Source Sem Virar Fanboy', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7439237790359248896/' },
      { t: 'Barbara Liskov: A mulher que redefiniu abstrações e contratos em software', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7437425871776296960/' },
      { t: 'Prompt Engineering Que Funciona em Produção, Não Só em Playground', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7436701065523269632/' },
      { t: 'Do Zero ao Prompt: Como Explicar IA Para o Time Sem Virar Palestra Motivacional', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7435251547556667392/' },
      { t: 'Antes de Falar em IA, Arruma Esse CRUD', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7434164354264174592/' },
      { t: 'Da dívida técnica à dívida cognitiva: liderando times na era da IA', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7432745022711750656/' },
      { t: 'Code design não é sobre código bonito, é sobre AGILIZAR e MITIGAR RISCOS de mudança', u: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7431360188315705345/' },
      { t: 'Liderança em Ambiente de Alta Pressão: O Que a Ciência e a Prática Revelam', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7427286543200874496/' },
      { t: 'Decisões Arquiteturais: Como Tomar Boas Decisões com Informação Imperfeita', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7426561817923112960/' },
      { t: 'Por Que Sua Arquitetura de Software Está Falhando (e Como Consertar)', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7424013785729949696/' },
      { t: 'O Perigo de Ser o Único no Elevador: Construindo Comunidades de Arquitetos', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7422209620221247488/' },
      { t: '.NET 10 vs Java 25: O Duelo Definitivo das Plataformas Modernas', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7421507293244108800/' },
      { t: 'Os Três Pilares do Arquiteto: Skill, Impact e Leadership', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7419729252608266240/' },
      { t: 'A Primeira Derivativa: Por Que a Velocidade de Mudança Define a Arquitetura', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7419004481562042368/' },
      { t: 'Arquitetura Baseada em Diagramas: Por Que Desenhos Importam', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7417554906703847424/' },
      { t: 'Agile morreu. E a culpa não é da IA', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7416467782470545410/' },
      { t: 'Arquitetos Não São Desenvolvedores Sênior: Entenda a Diferença', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7409582384301428736/' },
      { t: 'Enterprise Architecture: O Elo Perdido Entre Negócio e TI', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7408857628145258496/' },
      { t: 'Você Está Construindo a Estratégia de Arquitetura Sem Ver o Tabuleiro?', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7407019244066017280/' },
      { t: 'RIP VIBE CODE: Por Que Spec-Driven Development é o Futuro do Desenvolvimento de Software', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7406294532847288320/' },
      { t: 'Zombies Vão Comer Seu Cérebro: O Custo Oculto da Dívida Técnica', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7404871336420020224/' },
      { t: 'Entity Framework Core 10: Transformando a Forma Como Você Interage com Dados', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7403784166904938498/' },
      { t: 'C# 14: A Revolução na Expressividade e Produtividade do Desenvolvedor .NET', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7402334630705762304/' },
      { t: 'Melhorias do JIT (Just-In-Time Compiler) no .NET 10: Um Guia Didático Completo', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7401247464290238465/' },
      { t: 'Garbage Collection em .NET Core: Ciclo de Vida, Erros Comuns e GC.SuppressFinalize', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7399435531232833536/' },
      { t: 'A Importância do Algoritmo de Huffman no Cotidiano Digital', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7398710738774585344/' },
      { t: 'Redis Não É Uma Bala de Prata: Por Que Estratégia Importa Mais Que Velocidade', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7396898804299452416/' },
      { t: 'Compare-and-Swap em .NET: a instrução invisível que limita (ou destrava) a escalabilidade', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7396177914918068225/' },
      { t: 'SOLID: O Guia Definitivo para Código de Qualidade e Design de Software', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7394354553325871104/' },
      { t: 'Async/Await no .NET: Desvendando a Arquitetura por Trás da Programação Assíncrona', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7393629759127244800/' },
      { t: 'Memory Barriers e Reordenação de Instruções: Controle de Execução em Processadores Modernos', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7388560155245723648/' },
      { t: 'System.Threading.Channels: Producer-Consumer Patterns Modernos', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7391825381588185088/' },
      { t: 'TDD: Repensando a Forma de Desenvolver com Simplicidade e Autonomia', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7391100613368983554/' },
      { t: 'DORA Metrics: A Transformação da Entrega de Software em Organizações de Alta Performance', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7389368094160355328/' },
      { t: 'Dev, a IA Não Vai Roubar Seu Emprego! Ou Será Que Vai?', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7386751940594126848/' },
      { t: 'Cache Lines e False Sharing: Otimizações de Performance em Nível de Hardware com .NET', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7386027163155578880/' },
      { t: 'Como a IA me Ajudou a Documentar mais de 100 Projetos em uma Tarde', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7384215230072926208/' },
      { t: 'Context Switches: O Custo Oculto da Programação Multithread', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7383490456132665344/' },
      { t: 'Segurança em Primeiro Lugar: Protegendo seu Código com Azure GPT em Ambientes de Nuvem Privada', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7376034258471182336/' },
      { t: 'Race Conditions em C#: Identificando e Corrigindo Condições de Corrida', u: 'https://www.linkedin.com/feed/update/urn:li:activity:7378111993569800192/' },
    ],
  },

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
      icon: '◈', pt: 'Formação', en: 'Education', year: '',
      lines: {
        pt: ['Tecnólogo em Análise e Desenvolvimento de Sistemas — Impacta Tecnologia'],
        en: ['Technologist in Systems Analysis & Development — Impacta Tecnologia'],
      },
    },
  ],
};
