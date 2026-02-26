export default function DadosPage() {
  return (
    <>
      <main className="page-wrapper">
        {/* Hero */}
        <section className="hero">
          <h1>Soluções Estratégicas em Promoção, Conteúdo e Capacitação</h1>
          <p>
            Atuamos de forma integrada na promoção de vendas, produção de
            conteúdos editoriais e desenvolvimento profissional, oferecendo
            soluções modernas e eficientes para empresas e profissionais que
            buscam crescimento sustentável e resultados consistentes.
          </p>
        </section>

        {/* Cards de serviços */}
        <section className="services">
          <div className="card">
            <h3>Promoção de Vendas</h3>
            <p>
              Desenvolvemos estratégias voltadas à divulgação de produtos e
              serviços, com foco em aumentar visibilidade, engajamento e
              conversão. Atuamos de forma personalizada, alinhando ações
              promocionais aos objetivos comerciais de cada projeto.
            </p>
          </div>

          <div className="card">
            <h3>Edição de Conteúdos</h3>
            <p>
              Produzimos e organizamos conteúdos editoriais com clareza,
              qualidade e propósito, apoiando iniciativas educacionais,
              institucionais e comerciais, sempre com atenção à linguagem,
              estrutura e comunicação eficaz.
            </p>
          </div>

          <div className="card">
            <h3>Treinamento e Desenvolvimento</h3>
            <p>
              Oferecemos treinamentos voltados ao desenvolvimento profissional e
              gerencial, contribuindo para o aprimoramento de competências,
              melhoria de processos e fortalecimento da gestão e da performance
              organizacional.
            </p>
          </div>
        </section>

        {/* Compromisso */}
        <section className="commitment">
          <h2>Compromisso com Qualidade e Resultados</h2>
          <div className="commitment-box">
            <p>
              Nossa atuação é pautada pela ética, profissionalismo e foco em
              resultados. Trabalhamos com soluções flexíveis, adaptáveis às
              necessidades de cada cliente, buscando sempre agregar valor por
              meio de estratégias bem estruturadas, conteúdos relevantes e
              capacitação contínua.
            </p>
          </div>
        </section>
      </main>

      {/* Footer escuro full-width */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <p className="footer-company">
              <strong>
                54.588.391 NAYARA CARNEIRO SALUSTIANO DA SILVA
              </strong>
            </p>
            <p>CNPJ: 54.588.391/0001-36</p>
            <p>Telefone: (85) 99245-8564</p>
          </div>
          <div className="footer-right">
            <p>Endereço:</p>
            <p>Rua 3, nº 371</p>
            <p>Bairro Mondubim – Fortaleza/CE</p>
            <p>CEP: 60.767-630</p>
          </div>
        </div>
      </footer>
    </>
  );
}
