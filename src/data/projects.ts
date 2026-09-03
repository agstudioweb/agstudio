import avexum from "@/assets/project-avexum.jpg";
import arise from "@/assets/project-arise.jpg";
import p03 from "@/assets/project-03.jpg";
import p04 from "@/assets/project-04.jpg";
import p05 from "@/assets/project-05.jpg";
import p06 from "@/assets/project-06.jpg";

export type ProjectSection = { label: string; title: string; body: string };

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  image: string;
  gallery: string[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "avexum",
    index: "01",
    title: "Avexum",
    subtitle: "Social Meme Exchange",
    tags: ["Product Design", "Creative Development", "Web3"],
    year: "2026",
    image: avexum,
    gallery: [p03, p06],
    sections: [
      {
        label: "Overview",
        title: "Uma bolsa social para cultura de internet",
        body: "Avexum transforma atenção coletiva em um mercado navegável. Projetei o produto do zero: arquitetura de informação, sistema visual, motion e a camada de front-end que sustenta dados em tempo real.",
      },
      {
        label: "Challenge",
        title: "Densidade de dados sem parecer terminal financeiro",
        body: "O desafio era manter leitura de mercado precisa sem transformar a interface em um painel hostil. A resposta foi hierarquia tipográfica agressiva e movimento que comunica variação em vez de decorá-la.",
      },
      {
        label: "Solution",
        title: "Tipografia como interface",
        body: "Números grandes, rótulos minúsculos, contraste extremo. Cada mudança de preço acontece através de transições mascaradas, nunca por piscadas de cor.",
      },
      {
        label: "Design",
        title: "Sistema de escala fluida",
        body: "Um sistema construído em escala fluida e grid generoso, permitindo a mesma composição respirar de 360px a 1800px sem quebrar ritmo.",
      },
      {
        label: "Development",
        title: "Front-end orientado a motion",
        body: "GSAP controla toda a camada de movimento, com scroll interpolado e transições de rota contínuas. Animações limitadas a transform, opacity e clip-path.",
      },
      {
        label: "Result",
        title: "Um produto com peso",
        body: "O resultado é uma experiência que responde ao usuário: scroll provoca movimento, cursor provoca movimento, e cada troca de contexto tem continuidade visual.",
      },
    ],
  },
  {
    slug: "arise",
    index: "02",
    title: "Arise",
    subtitle: "Trading Intelligence Platform",
    tags: ["Product", "Trading", "AI"],
    year: "2026",
    image: arise,
    gallery: [p05, p04],
    sections: [
      {
        label: "Overview",
        title: "Inteligência de mercado legível em um olhar",
        body: "Arise reúne sinais, execução e leitura de risco em uma superfície única. Meu papel cobriu produto, design e desenvolvimento criativo.",
      },
      {
        label: "Challenge",
        title: "Decisão rápida exige silêncio visual",
        body: "Traders não precisam de mais estímulo, precisam de menos ruído. Reduzi a paleta a dois neutros e um acento usado apenas para estado crítico.",
      },
      {
        label: "Solution",
        title: "Camadas em vez de abas",
        body: "Contexto aparece em camadas sobrepostas com máscaras animadas, mantendo o usuário no mesmo lugar mental durante toda a sessão.",
      },
      {
        label: "Design",
        title: "Grid assimétrico",
        body: "Composições editoriais assimétricas guiam o olho para o dado mais importante de cada tela.",
      },
      {
        label: "Development",
        title: "Streaming e IA",
        body: "Modelos de linguagem resumem fluxo de mercado em texto curto, entregue via streaming com reveal tipográfico progressivo.",
      },
      {
        label: "Result",
        title: "Menos telas, mais clareza",
        body: "A plataforma sustenta operação intensa mantendo a sensação de calma e precisão.",
      },
    ],
  },
  {
    slug: "orbita",
    index: "03",
    title: "Órbita",
    subtitle: "Editorial Platform",
    tags: ["Editorial", "Web Design", "Motion"],
    year: "2025",
    image: p03,
    gallery: [p06, p04],
    sections: [
      {
        label: "Overview",
        title: "Publicação digital com ritmo impresso",
        body: "Placeholder editável. Um projeto editorial onde a tipografia carrega toda a hierarquia e o scroll funciona como virada de página.",
      },
      {
        label: "Challenge",
        title: "Leitura longa sem fadiga",
        body: "Placeholder editável. Substitua por contexto do desafio real.",
      },
      {
        label: "Solution",
        title: "Ritmo vertical rigoroso",
        body: "Placeholder editável. Substitua por descrição da solução.",
      },
      {
        label: "Design",
        title: "Duas famílias, uma voz",
        body: "Placeholder editável.",
      },
      {
        label: "Development",
        title: "Reveals mascarados",
        body: "Placeholder editável.",
      },
      { label: "Result", title: "Sessões mais longas", body: "Placeholder editável." },
    ],
  },
  {
    slug: "nucleo",
    index: "04",
    title: "Núcleo",
    subtitle: "AI Operations Studio",
    tags: ["AI Products", "Web App", "Systems"],
    year: "2025",
    image: p04,
    gallery: [p05, p03],
    sections: [
      {
        label: "Overview",
        title: "Operação assistida por IA",
        body: "Placeholder editável. Um estúdio interno para orquestrar agentes e fluxos de trabalho.",
      },
      { label: "Challenge", title: "Confiança em automação", body: "Placeholder editável." },
      { label: "Solution", title: "Estados sempre visíveis", body: "Placeholder editável." },
      { label: "Design", title: "Interface monoespaçada", body: "Placeholder editável." },
      { label: "Development", title: "Fluxos em tempo real", body: "Placeholder editável." },
      { label: "Result", title: "Menos trabalho manual", body: "Placeholder editável." },
    ],
  },
  {
    slug: "vetor",
    index: "05",
    title: "Vetor",
    subtitle: "Brand & Motion System",
    tags: ["Brand", "Motion", "Identity"],
    year: "2025",
    image: p05,
    gallery: [p04, p06],
    sections: [
      {
        label: "Overview",
        title: "Identidade construída em movimento",
        body: "Placeholder editável. Um sistema de marca onde o comportamento é tão definido quanto a forma.",
      },
      { label: "Challenge", title: "Marca viva em vários canais", body: "Placeholder editável." },
      { label: "Solution", title: "Gramática de easing", body: "Placeholder editável." },
      { label: "Design", title: "Formas mínimas", body: "Placeholder editável." },
      { label: "Development", title: "Componentes animados", body: "Placeholder editável." },
      { label: "Result", title: "Reconhecimento imediato", body: "Placeholder editável." },
    ],
  },
  {
    slug: "prisma",
    index: "06",
    title: "Prisma",
    subtitle: "Landing System",
    tags: ["Landing Pages", "Creative Dev", "CRO"],
    year: "2024",
    image: p06,
    gallery: [p03, p05],
    sections: [
      {
        label: "Overview",
        title: "Landings de alta conversão sem template",
        body: "Placeholder editável. Um sistema modular de landings com motion consistente.",
      },
      { label: "Challenge", title: "Velocidade sem repetição", body: "Placeholder editável." },
      { label: "Solution", title: "Blocos combináveis", body: "Placeholder editável." },
      { label: "Design", title: "Escala fluida", body: "Placeholder editável." },
      { label: "Development", title: "Performance primeiro", body: "Placeholder editável." },
      { label: "Result", title: "Entrega em dias", body: "Placeholder editável." },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getNextProject = (slug: string): Project => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length] as Project;
};

export const labImages = [p05, p04, p06, p03, avexum, arise];
