# Limpar redundâncias do site

Hoje o site conta a mesma história três vezes. As seis categorias (Web Apps, AI Products, Web Design, Landing Pages, Motion, Automações) aparecem em "02 — Capacidades" com imagem e texto, e novamente em "04 — Serviços" como accordion com descrição e tags. Além disso "01 — Como eu trabalho" (Design. Código. Movimento. IA.) repete a headline de "03 — Sobre" (Design, código e inteligência), e os prazos aparecem em Investimento e outra vez no FAQ — com números diferentes.

## O que muda

1. **Remover "04 — Serviços"** (o accordion). "02 — Capacidades" já mostra o mesmo catálogo, com imagens reais e melhor. As tags úteis do accordion (ex. SaaS, CRO, LLMs) migram para as listas de exemplos dos cards de Capacidades, para nada de conteúdo se perder.

2. **Enxugar "01 — Como eu trabalho"** para não competir com Sobre: a pilha de palavras (Design / Código / Movimento / IA) sai, e a seção passa a ser uma frase-manifesto curta de posicionamento, com altura de scroll reduzida (de 260vh para uma tela). Alternativa, se preferir: remover a seção por completo e ir do Hero direto para Capacidades.

3. **Corrigir a contradição de prazos**: Investimento diz "3 a 7 dias" para landing page, o FAQ diz "7 a 10 dias". O FAQ deixa de repetir prazos e passa a apontar para a seção Investimento; a pergunta vira sobre como o escopo é definido.

4. **Reduzir a repetição de CTA de WhatsApp**: hoje o número/link aparece em Capacidades, nos três cards de Investimento, no CTA final e nas páginas de serviço. Mantemos um CTA por seção; no CTA final fica só o botão principal (o número duplicado ao lado sai) e nos cards de Investimento fica o link "Ver detalhes", com o pedido de orçamento concentrado no CTA final e no card sem página própria.

5. **Renumerar as seções** após as remoções (001…006 em vez de 001…008) e atualizar o contador de progresso e os links do menu (o item "Serviços" do header passa a apontar para Capacidades, que é a seção de serviços de fato).

## Detalhes técnicos

- Excluir `src/components/sections/Services.tsx`; remover import e uso em `src/routes/index.tsx`; ajustar `<SectionProgress total>` de 8 para 6.
- `Capabilities.tsx`: absorver tags relevantes no array `examples`.
- `IntroWords.tsx`: substituir a stack de palavras por copy única, reduzir `height` e simplificar o ScrollTrigger.
- Renumerar `SectionId` e os rótulos "0X — …" em Capabilities, About, Process, Packages, Faq, CtaFinal.
- `Header.tsx`: rótulo "Serviços" → hash `#criacoes` (já é), remover entrada duplicada se sobrar; nada mais muda no header.
- `Faq.tsx`: reescrever a primeira pergunta; `CtaFinal.tsx`: remover o link de telefone redundante.
- Sem mudanças em backend, rotas de serviço ou tokens de design.
