import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  ClipboardList,
  FileCheck2,
  FileText,
  Film,
  Layers3,
  Menu,
  Minus,
  MoveUpRight,
  Play,
  Plus,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const checkoutUrl = "#checkout";

const documents = [
  ["01", "Contrato Master de Fornecedor Corporativo", "Estrutura documental para relações com fornecedores de operações audiovisuais."],
  ["02", "Cessão de Direitos e Liberação de Imagem/Voz", "Documentação relacionada à formalização de direitos autorais, imagem e voz."],
  ["03", "Locação e Comodato de Infraestrutura Técnica", "Estrutura para operações envolvendo equipamentos e infraestrutura de captação."],
  ["04", "Acordo de Confidencialidade Empresarial — NDA", "Estrutura documental para confidencialidade em projetos, campanhas e operações."],
  ["05", "Parceria e Trabalho por Encomenda para Freelancers", "Documentação para relações de produção com editores, sound designers e outros profissionais."],
  ["06", "Licenciamento de Obras Musicais e Fonogramas", "Estrutura relacionada ao licenciamento de música e fonogramas para projetos."],
  ["07", "Aceite, Entrega Definitiva e Quitação Geral", "Documentação para formalização de entrega e encerramento de projetos."],
  ["08", "Memorando de Entendimento para Coproduções", "Estrutura para organização inicial de relações e divisão de direitos em coproduções."],
  ["09", "Rescisão Amigável e Distrato", "Documentação para encerramento formal de relações contratuais."],
  ["10", "Agenciamento e Gestão de Carreiras de Talentos", "Estrutura documental para relações de prestação de serviços relacionadas a talentos."],
  ["11", "Responsabilidade e Autorização para Gravação em Locações", "Documentação relacionada a operações de gravação em determinados espaços."],
  ["12", "Patrocínio, Branded Content e Product Placement", "Estrutura para projetos envolvendo patrocínio e inserção de marcas."],
  ["13", "Compliance e Auditoria de Direitos Autorais", "Checklist e material de apoio para organização e revisão documental."],
];

const situations = [
  "Contratação de fornecedores e freelancers",
  "Cessão de direitos e autorização de imagem e voz",
  "Locação, comodato e infraestrutura técnica",
  "Confidencialidade, música e fonogramas",
  "Coprodução, patrocínio e branded content",
  "Aceite, entrega, distrato e encerramento",
];

const audiences = [
  ["PRODUTORAS", "Para empresas que coordenam múltiplos projetos, fornecedores e profissionais."],
  ["AGÊNCIAS", "Para operações que trabalham com campanhas, conteúdo, produção e parceiros externos."],
  ["ESTÚDIOS E EMPRESAS DE ÁUDIO", "Para operações envolvendo gravação, música, edição e sound design."],
  ["EQUIPES DE PRODUÇÃO", "Para profissionais que precisam organizar documentação recorrente de projetos."],
];

const faq = [
  ["O que é a Suíte CNAE 59?", "É uma biblioteca digital de estruturas documentais para situações recorrentes de operações audiovisuais, reunida na Temporada 1 da Kalipeiro."],
  ["Quantos documentos estão incluídos?", "A coleção inclui 13 documentos e materiais de apoio organizados por diferentes momentos da operação audiovisual."],
  ["Os documentos são editáveis?", "Sim. A oferta inclui modelos editáveis em Word e materiais em PDF, conforme descrito na coleção."],
  ["Para quem o produto foi desenvolvido?", "Para produtoras, agências, empresas de conteúdo, estúdios, empresas de áudio e música, produtores executivos e equipes de operações."],
  ["O pagamento é único?", "Sim. O valor da Temporada 1 Completa é R$ 297,00 em pagamento único."],
  ["Como recebo o acesso?", "O acesso é digital após a confirmação do pagamento, conforme a configuração do checkout utilizado na venda."],
  ["Posso adaptar os documentos?", "Sim. Eles podem ser usados como base e adaptados às necessidades específicas da sua operação."],
  ["A Suíte oferece consultoria jurídica?", "Não. A Suíte é uma biblioteca de modelos e ferramentas de organização documental; não inclui consultoria jurídica individual."],
  ["A Suíte substitui um advogado?", "Não. Os documentos devem ser avaliados e adaptados por profissional habilitado quando as circunstâncias da operação exigirem."],
  ["Posso utilizar os modelos em minha empresa?", "Sim. A biblioteca foi pensada para servir como base documental de uso profissional, respeitando a necessidade de adaptação a cada contexto."],
];

const steps = [
  ["01", "ACESSE", "Realize o pagamento pelo checkout."],
  ["02", "RECEBA", "Tenha acesso digital à Temporada 1."],
  ["03", "ORGANIZE", "Adapte os modelos às necessidades da sua operação."],
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`brand-mark ${light ? "brand-mark--light" : ""}`} aria-label="Kalipeiro — início">
      <span className="brand-mark__symbol">K</span>
      <span className="brand-mark__word">KALIPEIRO</span>
    </a>
  );
}

function SectionLabel({ index, children, light = false }: { index: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`section-label ${light ? "section-label--light" : ""}`}>
      <span>{index}</span>
      <i />
      <strong>{children}</strong>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container header-inner">
          <Logo light />
          <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Navegação principal">
            <a href="#visao" onClick={closeMenu}>A biblioteca</a>
            <a href="#documentos" onClick={closeMenu}>13 documentos</a>
            <a href="#metodo" onClick={closeMenu}>Contexto</a>
            <a href="#faq" onClick={closeMenu}>Dúvidas</a>
            <a className="nav-cta" href={checkoutUrl} onClick={closeMenu}>Acessar suíte <ArrowUpRight size={15} /></a>
          </nav>
          <button className="mobile-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-texture" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow eyebrow--light"><span className="eyebrow-dot" /> TEMPORADA 1 · 13 DOCUMENTOS</div>
              <h1 id="hero-title">Infraestrutura documental para <em>operações audiovisuais.</em></h1>
              <p className="hero-lede">A Suíte CNAE 59 reúne 13 documentos editáveis para estruturar diferentes etapas de operações envolvendo produção audiovisual, fornecedores, direitos, propriedade intelectual, parcerias, locações, patrocínios e encerramento de projetos.</p>
              <div className="hero-actions">
                <a href={checkoutUrl} className="button button--silver">Acessar a Suíte CNAE 59 <ArrowRight size={17} /></a>
                <a href="#documentos" className="text-link text-link--light">Explorar a coleção <ArrowDownRight size={16} /></a>
              </div>
              <div className="hero-proof"><span>Acesso digital</span><span>Documentos editáveis</span><span>Pagamento único</span></div>
            </div>
            <div className="hero-aside" aria-label="Resumo da oferta">
              <div className="hero-aside__line" />
              <div className="hero-aside__label">SUÍTE CNAE 59</div>
              <div className="hero-price"><small>R$</small>297<span>,00</span></div>
              <div className="hero-payment">pagamento único</div>
              <div className="hero-index"><span>01</span><span>13</span><span>01</span></div>
              <div className="hero-index-label"><span>temporada</span><span>estruturas</span><span>aquisição</span></div>
            </div>
          </div>
          <div className="hero-bottom container"><span>01 — KALIPEIRO / INFRAESTRUTURA DOCUMENTAL</span><span>São Paulo · Rio de Janeiro · Brasil</span></div>
        </section>

        <section className="statement-section" id="visao">
          <div className="container statement-grid">
            <SectionLabel index="01">A perspectiva</SectionLabel>
            <div className="statement-copy"><p className="statement-lede">Uma operação profissional precisa de mais do que produção.</p><p>Precisa de estruturas que organizem como projetos, fornecedores, direitos e entregas são formalizados.</p></div>
            <div className="statement-mark" aria-hidden="true"><span>01</span><span>/</span><span>13</span></div>
          </div>
        </section>

        <section className="problem-section section-padding" aria-labelledby="problem-title">
          <div className="container two-column-grid">
            <div><SectionLabel index="02">O contexto operacional</SectionLabel><h2 id="problem-title">Cada projeto cria uma nova <em>necessidade documental.</em></h2></div>
            <div className="problem-content"><p className="lead-text">Operações audiovisuais possuem múltiplas interfaces contratuais e documentais. Cada etapa traz uma situação específica — e reconstruir a estrutura do zero consome tempo, atenção e consistência.</p><div className="situation-list">{situations.map((item, index) => <div className="situation-item" key={item}><span>0{index + 1}</span><p>{item}</p><ArrowUpRight size={16} /></div>)}</div></div>
          </div>
        </section>

        <section className="solution-section section-padding" id="solucao" aria-labelledby="solution-title">
          <div className="container solution-grid">
            <div className="solution-visual"><div className="stack-card stack-card--back"><FileText size={24} /><span>DOCUMENTAÇÃO</span></div><div className="stack-card stack-card--middle"><Layers3 size={25} /><span>ORGANIZAÇÃO</span></div><div className="stack-card stack-card--front"><span className="stack-card__number">13</span><span className="stack-card__caption">estruturas<br />em uma biblioteca</span><ArrowDownRight size={22} /></div><div className="visual-note">CNAE 59 / T.01</div></div>
            <div className="solution-copy"><SectionLabel index="03" light>A solução</SectionLabel> <h2 id="solution-title">Uma biblioteca. Treze estruturas. <em>Uma operação mais organizada.</em></h2><p className="lead-text">A Suíte CNAE 59 consolida uma coleção de documentos concebidos para diferentes situações da cadeia audiovisual.</p><p>Em vez de procurar ou reconstruir modelos individualmente, você recebe uma coleção organizada em uma única aquisição — pronta para ser adaptada ao contexto do seu projeto.</p><a className="button button--outline-light" href="#documentos">Ver os 13 documentos <ArrowRight size={17} /></a></div>
          </div>
        </section>

        <section className="method-section section-padding" id="metodo" aria-labelledby="method-title">
          <div className="container method-grid"><div className="method-intro"><SectionLabel index="04">Contexto & método</SectionLabel><h2 id="method-title">Entender o setor antes de estruturar a <em>operação.</em></h2></div><div className="method-copy"><p className="lead-text">A pesquisa que originou o projeto usa classificações econômicas e fontes de contexto para observar a atividade audiovisual como setor — sem transformar pesquisa em selo comercial.</p><div className="method-source"><div className="source-icon"><Sparkles size={18} /></div><div><strong>Pesquisa e contextualização</strong><p>NAICS é uma classificação econômica utilizada na América do Norte. CNAE é a classificação utilizada no Brasil. A análise usa essas nomenclaturas como instrumentos de pesquisa e contextualização; para esta oferta, a referência brasileira relevante é a CNAE 59.</p><p className="source-note">Harvard Growth Lab / Metroverse aparece como fonte de contexto e pesquisa, não como endosso, certificação ou aprovação da Kalipeiro.</p></div></div></div></div>
        </section>

        <section className="documents-section section-padding" id="documentos" aria-labelledby="documents-title">
          <div className="container"><div className="section-heading-row"><div><SectionLabel index="05">A coleção</SectionLabel><h2 id="documents-title">O conteúdo da <em>Temporada 1.</em></h2></div><p>13 estruturas documentais organizadas para diferentes situações da operação audiovisual.</p></div><div className="documents-grid">{documents.map(([number, title, description]) => <article className="document-card" key={number}><div className="document-card__top"><span>VOLUME {number}</span><FileCheck2 size={18} /></div><h3>{title}</h3><p>{description}</p><div className="document-card__bottom"><span>estrutura editável</span><ArrowUpRight size={15} /></div></article>)}</div></div>
        </section>

        <section className="system-section section-padding" aria-labelledby="system-title">
          <div className="container"><div className="system-heading"><SectionLabel index="06">O sistema</SectionLabel><h2 id="system-title">Mais do que modelos <em>isolados.</em></h2><p>A Temporada 1 foi organizada como um sistema de documentação para diferentes pontos da jornada de um projeto audiovisual.</p></div><div className="journey-line" aria-label="Etapas da jornada documental">{[["CONTRATAR", "fornecedores · freelancers · talentos"], ["PROTEGER", "confidencialidade · direitos · imagem · voz"], ["PRODUZIR", "equipamentos · locações · parceiros"], ["LICENCIAR", "música · fonogramas · conteúdo"], ["ENTREGAR", "aceite · master · encerramento"], ["EXPANDIR", "coproduções · patrocínio · branded content"]].map(([title, subtitle], index) => <div className="journey-step" key={title}><div className="journey-step__number">0{index + 1}</div><div><h3>{title}</h3><p>{subtitle}</p></div>{index < 5 && <ArrowRight className="journey-arrow" size={18} />}</div>)}</div></div>
        </section>

        <section className="included-section section-padding" aria-labelledby="included-title">
          <div className="container included-grid"><div><SectionLabel index="07">A entrega</SectionLabel><h2 id="included-title">Você recebe <em>a coleção completa.</em></h2><p className="lead-text">Uma aquisição, uma biblioteca organizada, diferentes pontos de partida para a documentação da sua operação.</p></div><div className="included-list">{["13 documentos da Temporada 1", "Modelos editáveis em Word", "Materiais em PDF", "Biblioteca digital organizada", "Acesso à coleção completa", "Pagamento único"].map((item) => <div key={item}><Check size={17} /><span>{item}</span></div>)}</div></div>
        </section>

        <section className="audience-section section-padding" aria-labelledby="audience-title"><div className="container"><div className="section-heading-row"><div><SectionLabel index="08">Para quem é</SectionLabel><h2 id="audience-title">Construída para quem <em>coordena a operação.</em></h2></div><p>Especificidade é parte da utilidade. A biblioteca foi desenhada para o ecossistema que produz, contrata, licencia e entrega conteúdo.</p></div><div className="audience-grid">{audiences.map(([title, description], index) => <article className="audience-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p><ArrowDownRight size={18} /></article>)}</div></div></section>

        <section className="disclaimer-section section-padding"><div className="container disclaimer-grid"><div className="disclaimer-icon"><ShieldCheck size={27} /></div><div><SectionLabel index="09">Limites da oferta</SectionLabel><h2>Esta suíte não substitui <em>assessoria jurídica.</em></h2><p className="lead-text">A Suíte CNAE 59 é uma biblioteca de modelos e ferramentas de organização documental.</p><p>Ela não constitui consultoria jurídica individual, representação jurídica, parecer jurídico, garantia de resultado ou substituição da análise de um advogado. Os documentos devem ser avaliados e adaptados às circunstâncias específicas de cada operação quando necessário.</p></div></div></section>

        <section className="pricing-section section-padding" id="checkout" aria-labelledby="pricing-title"><div className="container pricing-grid"><div className="pricing-context"><SectionLabel index="10" light>Investimento</SectionLabel><h2 id="pricing-title">A infraestrutura começa com <em>clareza.</em></h2><p>Treze estruturas documentais reunidas em uma única biblioteca para empresas e profissionais do ecossistema audiovisual.</p><div className="pricing-footnote"><CircleCheck size={17} /> Nota fiscal conforme disponibilidade e configuração fiscal da operação de venda.</div></div><div className="pricing-card"><div className="pricing-card__top"><span>SUÍTE CNAE 59</span><span>TEMPORADA 1 COMPLETA</span></div><div className="pricing-card__icon"><ClipboardList size={24} /></div><div className="pricing-card__content"><h3>Biblioteca documental</h3><p>13 documentos · materiais de apoio · arquivos editáveis · acesso digital</p><div className="price"><small>R$</small>297<span>,00</span></div><p className="price-caption">Pagamento único</p><a href={checkoutUrl} className="button button--dark">Acessar a Suíte CNAE 59 <ArrowRight size={17} /></a><span className="card-microcopy">Acesso digital · Pagamento único</span></div></div></div></section>

        <section className="process-section section-padding" aria-labelledby="process-title"><div className="container"><div className="section-heading-row"><div><SectionLabel index="11">Como funciona</SectionLabel><h2 id="process-title">Do pagamento ao acesso <em>em três passos.</em></h2></div></div><div className="process-grid">{steps.map(([number, title, description]) => <div className="process-step" key={number}><span>{number}</span><div className="process-step__icon">{number === "01" ? <Play size={18} /> : number === "02" ? <FileText size={18} /> : <ClipboardList size={18} />}</div><h3>{title}</h3><p>{description}</p></div>)}</div></div></section>

        <section className="faq-section section-padding" id="faq" aria-labelledby="faq-title"><div className="container faq-grid"><div className="faq-intro"><SectionLabel index="12">Perguntas frequentes</SectionLabel><h2 id="faq-title">Clareza antes <em>da decisão.</em></h2><p>As informações essenciais para avaliar se a Suíte CNAE 59 é adequada à sua operação.</p><a className="text-link" href={checkoutUrl}>Acessar a suíte <ArrowRight size={16} /></a></div><div className="faq-list">{faq.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "faq-item--open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span>{openFaq === index ? <Minus size={18} /> : <Plus size={18} />}</button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></div></section>

        <section className="final-section" aria-labelledby="final-title"><div className="final-grid" aria-hidden="true" /><div className="container final-content"><SectionLabel index="13" light>Próximo passo</SectionLabel><h2 id="final-title">Estruture a documentação da sua <em>operação audiovisual.</em></h2><p>Treze estruturas documentais reunidas em uma única biblioteca para empresas e profissionais do ecossistema audiovisual.</p><div className="final-offer"><span>R$ 297,00</span><small>pagamento único</small></div><a href={checkoutUrl} className="button button--silver">Acessar a Suíte CNAE 59 <ArrowRight size={17} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><Logo light /><div className="footer-links"><a href="#visao">A biblioteca</a><a href="#documentos">Documentos</a><a href="#faq">FAQ</a><a href={checkoutUrl}>Acessar</a></div><div className="footer-meta">KALIPEIRO · SUÍTE CNAE 59<br />TEMPORADA 1 COMPLETA</div></div><div className="container footer-bottom"><span>© 2026 Kalipeiro. Conteúdo documental para operações audiovisuais.</span><span>Infraestrutura para produzir melhor.</span></div></footer>
    </div>
  );
}

function ArrowUpRight({ size = 16 }: { size?: number }) { return <MoveUpRight size={size} />; }
