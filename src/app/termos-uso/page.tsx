export default function TermsOfUsePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black mb-8">Termos de Uso</h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <p className="text-muted-foreground leading-relaxed">
              Bem-vindo à <strong>StepMax Sneakers</strong>. Ao acessar e usar nosso
              site, você concorda com os seguintes termos e condições. Por favor, leia
              atentamente antes de realizar qualquer compra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao utilizar nosso site e realizar compras, você declara que leu,
              compreendeu e concordou com estes Termos de Uso e nossa Política de
              Privacidade. Se você não concorda com qualquer parte destes termos, não
              utilize nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Uso do Site</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Você concorda em usar nosso site apenas para fins legítimos e de acordo
              com as leis aplicáveis. É proibido:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Usar o site de forma fraudulenta ou enganosa</li>
              <li>Tentar acessar áreas restritas do site sem autorização</li>
              <li>Transmitir vírus ou códigos maliciosos</li>
              <li>Copiar ou reproduzir conteúdo do site sem permissão</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Pedidos e Pagamentos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todos os pedidos estão sujeitos à disponibilidade de estoque e confirmação
              de preço. Nos reservamos o direito de recusar ou cancelar pedidos em caso
              de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
              <li>Informações de pagamento inválidas</li>
              <li>Suspeita de fraude</li>
              <li>Erros de precificação</li>
              <li>Indisponibilidade de produto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Preços e Disponibilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              Os preços exibidos em nosso site estão sujeitos a alterações sem aviso
              prévio. Nos esforçamos para garantir a precisão das informações de preço e
              disponibilidade, mas erros podem ocorrer. Em caso de erro, entraremos em
              contato para confirmar o pedido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Entrega</h2>
            <p className="text-muted-foreground leading-relaxed">
              Os prazos de entrega são estimativas e podem variar de acordo com a
              localização e disponibilidade de transporte. Não nos responsabilizamos por
              atrasos causados por transportadoras ou eventos fora do nosso controle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              6. Garantia e Autenticidade dos Produtos
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Garantimos que todos os produtos vendidos em nosso site são 100%
              originais. Oferecemos garantia de 90 dias contra defeitos de fabricação,
              conforme previsto pelo Código de Defesa do Consumidor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Propriedade Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todo o conteúdo do site, incluindo textos, imagens, logotipos e design,
              são propriedade da StepMax Sneakers ou de seus licenciadores e estão
              protegidos por leis de propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              A StepMax Sneakers não se responsabiliza por danos indiretos,
              incidentais ou consequenciais resultantes do uso ou impossibilidade de uso
              do site ou produtos adquiridos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Modificações dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamos o direito de modificar estes Termos de Uso a qualquer momento.
              As alterações entrarão em vigor imediatamente após a publicação no site.
              Recomendamos que você revise periodicamente esta página.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Lei Aplicável</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa do
              Brasil. Quaisquer disputas serão resolvidas nos tribunais competentes do
              Brasil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para dúvidas sobre estes Termos de Uso, entre em contato através de:
            </p>
            <ul className="list-none space-y-2 text-muted-foreground mt-3">
              <li>
                E-mail:{' '}
                <a
                  href="mailto:contato@stepmax.com.br"
                  className="text-accent font-semibold"
                >
                  contato@stepmax.com.br
                </a>
              </li>
              <li>
                WhatsApp:{' '}
                <a
                  href="https://wa.me/5521999999999"
                  className="text-accent font-semibold"
                >
                  (21) 99999-9999
                </a>
              </li>
            </ul>
          </section>

          <section className="bg-secondary/30 p-6 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Última atualização:</strong> Janeiro de 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
