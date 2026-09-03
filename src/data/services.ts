export type ServiceItem = { index: string; title: string; body: string };
export type ServiceStep = { step: string; title: string; body: string };
export type ServiceFaq = { q: string; a: string };

export type Service = {
  /** URL segment: /servicos/<slug> */
  slug: string;
  /** Short technical code shown in the tech layer */
  code: string;
  /** Label shown as "Serviço — <label>" */
  label: string;
  /** Micro label on the right of the header rule */
  micro: string;
  /** SEO title */
  title: string;
  /** SEO description */
  description: string;
  cta: { heading: string; body: string; whatsappMessage: string };
  included: ServiceItem[];
  steps: ServiceStep[];
  faq: ServiceFaq[];
};

/**
 * Single source of truth for every service page.
 * Edit the content here — the page layout is shared by /servicos/$slug.
 */
export const SERVICES: Service[] = [
  {
    slug: "landing-pages",
    code: "LP",
    label: "Landing Pages",
    micro: "No ar em 3 a 7 dias",
    title: "Landing Pages para campanhas e captação de leads | AG",
    description: "Páginas de destino sob medida para campanhas, lançamentos e captação: narrativa que sustenta a decisão, formulário conectado ao seu funil e medição de ponta a ponta.",
    cta: {
      heading: "Me conte o objetivo da campanha.",
      body: "Em uma conversa curta eu já consigo dizer o que a página precisa ter e em quantos dias ela fica no ar.",
      whatsappMessage: "Olá Augusto! Quero uma landing page.",
    },
    included: [
  {
    index: "01",
    title: "Uma página, um objetivo",
    body: "Nada entra na página se não empurrar a pessoa para a ação. Cada bloco existe para reduzir dúvida e encurtar o caminho até o contato.",
  },
  {
    index: "02",
    title: "Narrativa antes do layout",
    body: "Escrevo a sequência do argumento primeiro — contexto, promessa, evidência, oferta — e só depois desenho em cima dela.",
  },
  {
    index: "03",
    title: "Texto que fala com quem decide",
    body: "Copy construída no vocabulário do seu cliente, com as objeções reais respondidas dentro da própria página.",
  },
  {
    index: "04",
    title: "Lead onde você trabalha",
    body: "Formulário ligado ao seu CRM, planilha, e-mail ou WhatsApp, carregando origem, campanha e contexto junto com o contato.",
  },
  {
    index: "05",
    title: "Velocidade como conversão",
    body: "Página leve, imagens tratadas e render rápido no celular — porque tráfego pago não espera três segundos.",
  },
  {
    index: "06",
    title: "Medir e ajustar",
    body: "Eventos, pixel e analytics configurados desde o primeiro dia, com estrutura pronta para variações e testes A/B.",
  },
],
    steps: [
  { step: "01", title: "Conversa inicial", body: "Objetivo, oferta, público e prazo. Saio dessa conversa com escopo e plano." },
  { step: "02", title: "Estrutura e texto", body: "Roteiro da página e copy aprovados antes de qualquer pixel de design." },
  { step: "03", title: "Design e build", body: "Interface autoral, responsiva, animada com critério e construída em código próprio." },
  { step: "04", title: "Integrações", body: "Formulário, CRM, pixel, e-mail e domínio conectados e testados de verdade." },
  { step: "05", title: "No ar em 3 a 7 dias", body: "Deploy, checagem final e acompanhamento dos primeiros resultados." },
],
    faq: [
  {
    q: "Funciona para anúncio pago?",
    a: "É justamente o cenário principal. A página é pensada para tráfego frio: carrega rápido, entrega a promessa acima da dobra e identifica de onde cada visita veio.",
  },
  {
    q: "Conecta com meu CRM e meu pixel?",
    a: "Sim. Formulário, pixel, eventos, ferramenta de e-mail e CRM ficam ligados, então dá para seguir a jornada do clique no anúncio até a reunião marcada.",
  },
  {
    q: "Você escreve os textos?",
    a: "Escrevo. Copy e design nascem juntos. Se você já tem material pronto, uso como base e reescrevo o que atrapalha a conversão.",
  },
  {
    q: "E o domínio?",
    a: "Registro um novo ou aponto o que você já tem. O domínio fica sempre no seu nome — nunca no meu.",
  },
  {
    q: "Como fica a hospedagem?",
    a: "Infraestrutura moderna, rápida e com custo transparente. As contas podem ficar no seu nome desde o começo.",
  },
  {
    q: "O código é meu?",
    a: "É seu. Na entrega você recebe projeto, código e acessos. Sem plataforma fechada e sem mensalidade obrigatória para manter a página no ar.",
  },
  {
    q: "Quem entrega imagens e conteúdo?",
    a: "Podemos partir do que você tem ou produzir junto. Falta de material não trava o projeto.",
  },
  {
    q: "Tem suporte depois de publicar?",
    a: "Tem. A página é entregue pensada para você mesmo editar o conteúdo, e existe a opção de eu seguir cuidando de evolução e testes.",
  },
  {
    q: "Trabalha à distância?",
    a: "Toda a operação é remota. Alinhamentos por chamada e um canal direto comigo durante o projeto.",
  },
  {
    q: "Quanto custa?",
    a: "Depende do escopo e do que precisa ser integrado. Você recebe uma proposta fechada antes de qualquer coisa começar.",
  },
  {
    q: "Como começamos?",
    a: "Me conte objetivo, contexto e prazo. Eu devolvo um plano com escopo, etapas e proposta. Aprovou, o discovery começa.",
  },
],
  },
  {
    slug: "sites-institucionais",
    code: "SI",
    label: "Sites Institucionais",
    micro: "No ar em 7 a 15 dias",
    title: "Sites institucionais sob medida | AG",
    description: "Sites institucionais rápidos, modernos e responsivos. Design próprio, estrutura estratégica, SEO técnico e integrações que conectam sua empresa ao dia a dia da operação.",
    cta: {
      heading: "Vamos construir o site da sua empresa.",
      body: "Em uma conversa curta eu já consigo entender o que seu site precisa ter, quantas páginas fazem sentido e em quantos dias ele pode ficar no ar.",
      whatsappMessage: "Olá Augusto! Quero criar um site institucional.",
    },
    included: [
  {
    index: "01",
    title: "Direção visual própria",
    body: "Layout construído em cima da identidade e do posicionamento da empresa — não é template com outra cor. Cada decisão visual justifica o que sua marca precisa comunicar.",
  },
  {
    index: "02",
    title: "Estrutura que guia",
    body: "Páginas, seções e navegação organizadas para que o visitante encontre serviços, diferenciais, cases e contato sem esforço. Quem entra no site entende o que você faz em poucos segundos.",
  },
  {
    index: "03",
    title: "Código moderno e estável",
    body: "Build performático, responsivo e preparado para evoluir. O site funciona bem no desktop, no celular e em qualquer tela intermediária — sem depender de plugins pesados.",
  },
  {
    index: "04",
    title: "SEO e performance na base",
    body: "Metadados, estrutura semântica, velocidade de carregamento e responsividade fazem parte do desenvolvimento desde o início. O site nasce pronto para ser encontrado.",
  },
  {
    index: "05",
    title: "Integrações com a operação",
    body: "Formulários, WhatsApp, Analytics, pixels, CRM e automações conectados conforme o que sua empresa já usa. O site deixa de ser um folder e passa a funcionar como ponto de entrada de leads.",
  },
  {
    index: "06",
    title: "Movimento com critério",
    body: "Animações, transições e microinterações aplicadas onde fazem sentido. Movimento para criar fluidez, não distração — e para deixar a experiência mais memorável.",
  },
],
    steps: [
  { step: "01", title: "Briefing e referências", body: "Entendo a empresa, o público, os objetivos e as referências. Saio daqui com direção clara e escopo definido." },
  { step: "02", title: "Arquitetura e conteúdo", body: "Estruturo páginas, seções e textos antes do design. Se precisar, ajudo a reorganizar ou criar o conteúdo." },
  { step: "03", title: "Design e aprovação", body: "Apresento a direção visual e as páginas principais. Ajustamos juntos até o conceito estar alinhado." },
  { step: "04", title: "Build e integrações", body: "Transformo o aprovado em site real: responsivo, rápido, com formulários, analytics e demais integrações testadas." },
  { step: "05", title: "No ar e acompanhamento", body: "Configuro domínio, hospedagem, publico o projeto e acompanho os primeiros dias para garantir que tudo funciona." },
],
    faq: [
  {
    q: "Que tipo de site institucional vocês desenvolvem?",
    a: "Sites para empresas, marcas, startups e profissionais que precisam transmitir credibilidade. Pode ser uma estrutura enxuta ou um site completo com várias páginas, cases, blog e integrações.",
  },
  {
    q: "Vocês usam templates?",
    a: "Não trabalho trocando textos e cores de um template pronto. Cada projeto recebe uma direção visual baseada na empresa, no público e nas referências apresentadas no briefing.",
  },
  {
    q: "Posso enviar sites como referência?",
    a: "Sim, e recomendo. As referências ajudam a entender o nível visual, o estilo e as experiências que você busca. A partir delas desenvolvo uma direção própria, sem copiar.",
  },
  {
    q: "Vocês fazem as animações do site?",
    a: "Sim. Microinterações, animações de entrada, efeitos de scroll, transições e elementos interativos. A complexidade é ajustada ao escopo e ao objetivo do projeto.",
  },
  {
    q: "Vocês ajudam com os textos?",
    a: "Ajudo a estruturar títulos, textos, páginas, serviços e chamadas para ação. Se você já tem conteúdo pronto, reorganizo para funcionar melhor dentro da experiência do site.",
  },
  {
    q: "O site funciona no celular?",
    a: "Sim. Todos os projetos são desenvolvidos para desktop, tablet e mobile. A experiência precisa continuar funcionando bem, não apenas cabendo na tela menor.",
  },
  {
    q: "O site é preparado para SEO?",
    a: "Sim. Estrutura de páginas, títulos, metadados, performance e responsividade fazem parte do desenvolvimento. Estratégias contínuas de conteúdo podem ser tratadas separadamente.",
  },
  {
    q: "Vocês integram formulário, WhatsApp, CRM e Analytics?",
    a: "Sim. Formulários, WhatsApp, ferramentas de análise, pixels, CRM e outras plataformas podem fazer parte do escopo, conforme a necessidade da operação.",
  },
  {
    q: "Consigo alterar o conteúdo depois?",
    a: "Sim. Se o projeto precisar de atualizações frequentes, preparo uma estrutura que facilita essas alterações. Isso é definido de acordo com a necessidade de cada site.",
  },
  {
    q: "Vocês cuidam do domínio e da hospedagem?",
    a: "Posso configurar um domínio existente, orientar na compra de um novo e configurar toda a infraestrutura de publicação. Domínio e contas ficam no seu nome.",
  },
  {
    q: "O site e os arquivos ficam comigo?",
    a: "Sim. Após a conclusão e o cumprimento das condições acordadas, você recebe os acessos e arquivos previstos no escopo. Sem ficar preso à AG Studio para manter o site no ar.",
  },
  {
    q: "Como começamos?",
    a: "Me conte sobre sua empresa, o que você precisa no novo site e, se tiver, envie referências do que gosta. Eu devolvo uma proposta com escopo, prazo e investimento.",
  },
],
  },
  {
    slug: "web-apps",
    code: "WA",
    label: "Web Apps, Automações & IA",
    micro: "Entrega em 15 dias +",
    title: "Web Apps, Automações & IA sob medida | AG",
    description: "Aplicações web, ferramentas internas, automações e agentes de IA para transformar processos manuais em sistemas que funcionam de verdade.",
    cta: {
      heading: "Vamos automatizar o que consome tempo do seu time.",
      body: "Me conte qual processo você gostaria que acontecesse sozinho. Em uma conversa curta eu já consigo mostrar como transformar isso em sistema.",
      whatsappMessage: "Olá Augusto! Quero automatizar meu negócio com Web Apps/IA.",
    },
    included: [
  {
    index: "01",
    title: "Autenticação e permissões",
    body: "Login, cadastro, recuperação de senha e diferentes níveis de acesso. Cada usuário vê e faz apenas o que faz sentido dentro do sistema.",
  },
  {
    index: "02",
    title: "Banco de dados estruturado",
    body: "Modelamos onde as informações ficam armazenadas e como se relacionam: clientes, pedidos, documentos, histórico, produtos ou qualquer dado da operação.",
  },
  {
    index: "03",
    title: "Integrações e APIs",
    body: "Seu sistema conectado a CRMs, gateways de pagamento, plataformas de comunicação e outras ferramentas por APIs e webhooks.",
  },
  {
    index: "04",
    title: "Recursos de IA",
    body: "Busca inteligente, análise de documentos, classificação de informações, assistentes internos e agentes que interpretam contexto e decidem dentro de regras.",
  },
  {
    index: "05",
    title: "Dashboards e gestão",
    body: "Indicadores, atividades, usuários e processos centralizados em uma interface clara, para que sua equipe acompanhe tudo sem depender de planilhas.",
  },
  {
    index: "06",
    title: "Evolução contínua",
    body: "Começamos com o essencial, colocamos em operação e continuamos adicionando funcionalidades conforme novas necessidades aparecem.",
  },
],
    steps: [
  { step: "01", title: "Mapeamento do processo", body: "Entendo o que hoje é feito manualmente, onde a operação trava e o que poderia acontecer automaticamente." },
  { step: "02", title: "Arquitetura do sistema", body: "Defino usuários, dados, integrações, regras e automações. Saímos daqui com escopo, prazo e proposta fechada." },
  { step: "03", title: "Build da aplicação", body: "Desenvolvo a interface, banco de dados, APIs e fluxos automáticos com código próprio e estrutura escalável." },
  { step: "04", title: "Integrações e testes", body: "Conecto as ferramentas que você já usa, testo regras, erros e exceções para garantir que o fluxo funciona de verdade." },
  { step: "05", title: "No ar e acompanhamento", body: "Publico o sistema, configuro monitoramento e acompanho os primeiros dias de operação para ajustar o que for necessário." },
],
    faq: [
  {
    q: "O que vocês conseguem criar?",
    a: "Desde pequenas automações até aplicações web completas. Sistemas internos, plataformas para clientes, dashboards, portais, agentes de IA, chatbots e fluxos conectando diferentes ferramentas.",
  },
  {
    q: "O que é um Web App?",
    a: "É uma aplicação que funciona pelo navegador, mas com funcionalidades de um software: login, usuários, banco de dados, dashboards, pagamentos, integrações e regras de negócio.",
  },
  {
    q: "Qual a diferença entre site e Web App?",
    a: "Um site apresenta informações e direciona para uma ação. Um Web App permite que o usuário cadastre dados, gerencie processos, gere documentos, faça pagamentos e utilize ferramentas dentro da aplicação.",
  },
  {
    q: "Preciso construir tudo de uma vez?",
    a: "Não. Na maioria dos casos faz mais sentido começar com uma primeira versão focada no problema principal, colocar em operação e evoluir conforme necessário.",
  },
  {
    q: "Vocês integram com os sistemas que já uso?",
    a: "Na maioria dos casos, sim. Se a plataforma tem API, webhook ou outra forma de integração, estudamos como conectar. As possibilidades e limitações são verificadas antes do projeto começar.",
  },
  {
    q: "Vocês criam chatbot para WhatsApp?",
    a: "Sim. Criamos agentes para atendimento, qualificação, suporte e captura de informações. O agente também pode consultar dados, registrar informações e iniciar outras automações.",
  },
  {
    q: "A IA vai substituir minha equipe?",
    a: "Não necessariamente. O objetivo é tirar da equipe as tarefas repetitivas para que as pessoas foquem no que exige decisão, criatividade, negociação ou relacionamento.",
  },
  {
    q: "As automações funcionam 24 horas?",
    a: "Sim, desde que os serviços e integrações envolvidos estejam disponíveis. Os fluxos continuam executando mesmo quando ninguém da equipe está trabalhando.",
  },
  {
    q: "Consigo acompanhar o que a automação faz?",
    a: "Sim. Registramos execuções, ações, erros e resultados. Também podemos criar dashboards específicos para que você acompanhe o funcionamento de tudo.",
  },
  {
    q: "O sistema pode crescer depois?",
    a: "Sim. A arquitetura é preparada para que novas funcionalidades, integrações e automações sejam adicionadas conforme a operação evolui. Você não precisa prever tudo na primeira versão.",
  },
  {
    q: "O projeto e o código ficam comigo?",
    a: "Sim. Após a conclusão e pagamento conforme as condições acordadas, entregamos os acessos e o código previstos no escopo.",
  },
  {
    q: "Como começamos?",
    a: "Me conte qual processo está tomando tempo, onde sua operação está travando ou o que você gostaria que acontecesse automaticamente. Eu analiso e devolvo a melhor forma de transformar isso em tecnologia.",
  },
],
  },
  {
    slug: "produtos-ia",
    code: "IA",
    label: "Produtos com Inteligência Artificial",
    micro: "Primeira versão em 10 a 20 dias",
    title: "Produtos e copilotos com Inteligência Artificial | AG",
    description:
      "Copilotos de atendimento, busca semântica, análise de documentos e agentes que executam tarefas dentro das suas regras — com IA aplicada ao seu contexto, não genérica.",
    cta: {
      heading: "Me conte onde a IA pode assumir o trabalho repetitivo.",
      body: "Em uma conversa curta eu já consigo apontar qual recurso de IA resolve o seu caso e qual seria a primeira versão útil.",
      whatsappMessage: "Olá Augusto! Quero um produto com IA.",
    },
    included: [
      { index: "01", title: "IA treinada no seu contexto", body: "A resposta nasce da sua base — documentos, histórico de atendimento, catálogo e políticas internas — em vez de um modelo falando de forma genérica." },
      { index: "02", title: "Copiloto para o time", body: "Sugestão de resposta pronta, resumo do histórico e citação da fonte. A pessoa revisa e envia, ganhando velocidade sem perder controle." },
      { index: "03", title: "Busca que entende intenção", body: "Busca semântica sobre seus dados: quem procura encontra pelo significado da pergunta, não pela palavra exata." },
      { index: "04", title: "Leitura de documentos", body: "Contratos, notas, laudos e planilhas lidos automaticamente, com extração dos campos que importam e envio para o sistema certo." },
      { index: "05", title: "Agentes com regras claras", body: "O agente executa tarefas dentro de limites definidos, registra o que fez e escala para um humano quando sai do combinado." },
      { index: "06", title: "Custo e qualidade medidos", body: "Monitoramento de uso, custo por interação e qualidade das respostas, com ajuste contínuo de prompts e do modelo escolhido." },
    ],
    steps: [
      { step: "01", title: "Caso de uso", body: "Escolhemos um problema com ganho claro. IA sem caso de uso definido vira demonstração, não produto." },
      { step: "02", title: "Base de conhecimento", body: "Organizo e preparo os dados que a IA vai consultar, com fontes e permissões definidas." },
      { step: "03", title: "Protótipo avaliado", body: "Primeira versão testada com casos reais e critérios de acerto, antes de entrar na rotina do time." },
      { step: "04", title: "Produto e integrações", body: "Interface, histórico, permissões e conexão com as ferramentas onde o trabalho realmente acontece." },
      { step: "05", title: "Operação e ajuste", body: "No ar com métricas de uso e qualidade, com refino contínuo a partir do que o time reporta." },
    ],
    faq: [
      { q: "Qual modelo de IA é usado?", a: "Escolho conforme a tarefa, o custo e a qualidade exigida. A arquitetura fica preparada para trocar de modelo sem reescrever o produto." },
      { q: "Meus dados vão treinar o modelo?", a: "Não. Seus dados são usados para consulta no momento da resposta, com acesso restrito e sem virar material de treino." },
      { q: "E quando a IA erra?", a: "Existe fallback: resposta com fonte citada, revisão humana antes do envio e caminho de escalonamento quando a confiança é baixa." },
      { q: "Dá para começar pequeno?", a: "É o recomendado. Um caso de uso, uma métrica, uma primeira versão em produção — e a expansão vem depois do resultado." },
      { q: "Como começamos?", a: "Me conte qual tarefa consome mais tempo do seu time hoje. Eu devolvo o desenho da solução, o escopo e a proposta." },
    ],
  },
  {
    slug: "web-design",
    code: "WD",
    label: "Web Design & Identidade Visual",
    micro: "Direção visual em 5 a 12 dias",
    title: "Web design e identidade visual sob medida | AG",
    description:
      "Direção visual autoral, identidade de marca e design system: logomarca, tipografia, paleta e componentes prontos para virar interface sem perder consistência.",
    cta: {
      heading: "Vamos definir a cara do seu produto.",
      body: "Com referências e contexto em mãos eu proponho uma direção visual própria, sem template e sem parecer com todo mundo.",
      whatsappMessage: "Olá Augusto! Quero trabalhar o design da minha marca.",
    },
    included: [
      { index: "01", title: "Direção visual autoral", body: "Uma decisão estética assumida — tipografia, escala, contraste e ritmo — construída a partir do seu posicionamento e do seu público." },
      { index: "02", title: "Identidade aplicada", body: "Logomarca, símbolo e variações funcionando em tela, impresso, redes sociais e dispositivos, com regras de uso claras." },
      { index: "03", title: "Sistema de tipografia e cor", body: "Escalas, pesos, tokens de cor e estados definidos, para que qualquer tela nova nasça coerente com o resto." },
      { index: "04", title: "Design system em componentes", body: "Botões, cards, formulários, navegação e tabelas documentados — o que o desenvolvimento consome direto, sem adivinhar." },
      { index: "05", title: "Layout responsivo de verdade", body: "Composição pensada por breakpoint: o mobile é projetado, não é a versão desktop apertada." },
      { index: "06", title: "Entrega pronta para build", body: "Arquivos organizados, especificações de espaçamento e assets exportados, prontos para virar código." },
    ],
    steps: [
      { step: "01", title: "Contexto e referências", body: "Marca, público, concorrência e o que você admira visualmente. Daqui sai a direção a perseguir." },
      { step: "02", title: "Conceito visual", body: "Proposta de direção com tipografia, cor e composição aplicadas em telas-chave, para decidir cedo." },
      { step: "03", title: "Expansão do sistema", body: "A direção aprovada se transforma em componentes, estados e páginas restantes." },
      { step: "04", title: "Documentação", body: "Regras de uso, tokens e especificações registradas para o time aplicar sem depender de mim." },
      { step: "05", title: "Handoff", body: "Entrega dos arquivos e assets, com acompanhamento durante o build para o resultado sair fiel." },
    ],
    faq: [
      { q: "Você redesenha uma marca existente?", a: "Sim. Posso evoluir a identidade atual preservando o que já é reconhecido, ou propor uma reconstrução quando ela não sustenta mais o posicionamento." },
      { q: "Design vem antes do código?", a: "Nos projetos de interface, sim — mas caminham juntos. Desenho pensando no que é viável e performático de construir." },
      { q: "Recebo os arquivos editáveis?", a: "Recebe. Arquivos de design, assets exportados e documentação ficam com você na entrega." },
      { q: "Serve para um produto já existente?", a: "Serve. É o caso mais comum: um sistema em produção que cresceu sem consistência e precisa de um design system para voltar ao eixo." },
      { q: "Como começamos?", a: "Me envie sua marca atual, o contexto do projeto e referências que você gosta. Eu devolvo a direção proposta e a proposta comercial." },
    ],
  },
  {
    slug: "motion",
    code: "MO",
    label: "Motion & Interação",
    micro: "Camada de motion em 5 a 10 dias",
    title: "Motion design e interação para web | AG",
    description:
      "Scroll narrativo, transições de rota, cursor interativo e microinterações com curva própria — movimento usado para guiar atenção, nunca para enfeitar.",
    cta: {
      heading: "Quer que a sua interface tenha movimento próprio?",
      body: "Me mostre o site ou produto atual e eu aponto onde o movimento aumenta clareza — e onde ele só atrapalharia.",
      whatsappMessage: "Olá Augusto! Quero motion e interação no meu projeto.",
    },
    included: [
      { index: "01", title: "Movimento com intenção", body: "Cada animação existe para explicar uma mudança de estado, hierarquia ou continuidade. Nada se move sem função." },
      { index: "02", title: "Scroll narrativo", body: "A rolagem conduz a história: revelações em sequência, camadas em parallax e cenas ancoradas em pontos exatos da página." },
      { index: "03", title: "Transições de rota", body: "Trocas de página encadeadas, sem flash branco, mantendo a sensação de um produto contínuo." },
      { index: "04", title: "Microinterações", body: "Hover, foco, arraste, carregamento e feedback de erro tratados com o mesmo cuidado das telas principais." },
      { index: "05", title: "Curvas e ritmo próprios", body: "Easing, duração e atraso definidos como sistema, para que o produto todo tenha a mesma assinatura de movimento." },
      { index: "06", title: "Performance e acessibilidade", body: "Animação em GPU, sem travar a rolagem, e respeito total a quem prefere movimento reduzido." },
    ],
    steps: [
      { step: "01", title: "Leitura da interface", body: "Mapeio onde a atenção se perde e quais transições estão faltando para o fluxo fazer sentido." },
      { step: "02", title: "Roteiro de movimento", body: "Defino as cenas, os gatilhos de scroll e o vocabulário de easing antes de animar." },
      { step: "03", title: "Protótipo das cenas", body: "As animações principais são construídas e ajustadas em tela real, com o conteúdo de verdade." },
      { step: "04", title: "Implementação", body: "Motion integrado ao código do produto, com controle de performance e variação para reduced motion." },
      { step: "05", title: "Refino final", body: "Ajuste de timing em desktop e mobile até o movimento parecer natural, não notado." },
    ],
    faq: [
      { q: "Animação deixa o site lento?", a: "Não quando é feita direito: propriedades aceleradas por GPU, sem layout thrashing e com carga de assets controlada." },
      { q: "Funciona no celular?", a: "Funciona. As cenas são simplificadas onde o toque e a bateria pedem — o resultado continua fluido." },
      { q: "E quem prefere menos movimento?", a: "A preferência do sistema é respeitada: o conteúdo aparece completo, com transições reduzidas ao mínimo." },
      { q: "Dá para aplicar em um site já existente?", a: "Dá, desde que o código permita. Faço uma leitura técnica antes e proponho a camada de motion possível." },
      { q: "Como começamos?", a: "Me envie o link do projeto atual ou o design aprovado. Eu devolvo o roteiro de movimento proposto e a proposta." },
    ],
  },
  {
    slug: "automacoes",
    code: "AU",
    label: "Automações & Chatbots",
    micro: "Primeiro fluxo em 5 a 12 dias",
    title: "Automações e chatbots que rodam sozinhos | AG",
    description:
      "Fluxos que qualificam lead no WhatsApp, integram sistemas por webhook e disparam a ação certa sem ninguém no meio — com registro de tudo o que aconteceu.",
    cta: {
      heading: "Qual tarefa repetitiva você quer parar de fazer?",
      body: "Me descreva o processo como ele acontece hoje e eu devolvo o desenho do fluxo automático, com escopo e prazo.",
      whatsappMessage: "Olá Augusto! Quero automatizar um processo.",
    },
    included: [
      { index: "01", title: "Mapa do processo atual", body: "Antes de automatizar, o fluxo é desenhado como ele realmente acontece — inclusive as exceções que ninguém documentou." },
      { index: "02", title: "Chatbot que qualifica", body: "Atendimento no WhatsApp ou site que faz as perguntas certas, classifica o lead e entrega o contexto pronto para o time." },
      { index: "03", title: "Integrações por webhook e API", body: "CRM, planilhas, e-mail, pagamentos e sistemas internos conversando entre si, sem trabalho manual de copiar e colar." },
      { index: "04", title: "Regras e condições", body: "O fluxo decide o caminho conforme valor, origem, horário ou resposta do cliente — e escala para uma pessoa quando precisa." },
      { index: "05", title: "Notificações e relatórios", body: "Alertas no canal que o time já usa e relatórios automáticos com o resumo do que rodou no período." },
      { index: "06", title: "Registro e recuperação de erro", body: "Cada execução fica registrada, com retentativa automática e aviso quando algo falha de verdade." },
    ],
    steps: [
      { step: "01", title: "Diagnóstico", body: "Levanto o processo, o volume e onde o tempo é perdido hoje." },
      { step: "02", title: "Desenho do fluxo", body: "Gatilhos, condições, integrações e pontos de intervenção humana definidos antes de construir." },
      { step: "03", title: "Construção", body: "Fluxo implementado com as conexões reais das suas ferramentas." },
      { step: "04", title: "Testes com casos reais", body: "Rodamos o fluxo com dados verdadeiros, incluindo os cenários de erro." },
      { step: "05", title: "Operação monitorada", body: "No ar com registro, alertas e ajuste conforme o comportamento real." },
    ],
    faq: [
      { q: "Funciona com as ferramentas que já uso?", a: "Na maioria dos casos sim. Se a ferramenta tem API ou webhook, ela entra no fluxo; quando não tem, procuramos o caminho alternativo." },
      { q: "O chatbot substitui meu atendimento?", a: "Não. Ele assume a triagem e as perguntas repetidas, e passa a conversa para uma pessoa no momento em que isso agrega." },
      { q: "E se o fluxo falhar?", a: "Existe retentativa automática, registro do erro e alerta para o responsável — nada desaparece silenciosamente." },
      { q: "Dá para automatizar só uma parte?", a: "Dá, e costuma ser o melhor começo: automatiza o trecho mais custoso, mede o ganho e expande depois." },
      { q: "Como começamos?", a: "Me conte o processo em detalhes, com volume e ferramentas envolvidas. Eu devolvo o fluxo proposto e a proposta comercial." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
