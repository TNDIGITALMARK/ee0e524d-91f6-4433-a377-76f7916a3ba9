export default function ReturnPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black mb-8">Política de Trocas e Devoluções</h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Prazo para Troca ou Devolução</h2>
            <p className="text-muted-foreground leading-relaxed">
              Você tem até <strong>7 dias corridos</strong> após o recebimento do produto
              para solicitar troca ou devolução, conforme previsto no Código de Defesa do
              Consumidor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Condições para Troca</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>O produto deve estar sem uso e em perfeito estado</li>
              <li>Embalagem original preservada</li>
              <li>Todos os acessórios e etiquetas devem estar intactos</li>
              <li>Nota fiscal deve acompanhar o produto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Como Solicitar</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para solicitar uma troca ou devolução:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>
                Entre em contato através do e-mail{' '}
                <a href="mailto:contato@stepmax.com.br" className="text-accent font-semibold">
                  contato@stepmax.com.br
                </a>{' '}
                ou WhatsApp{' '}
                <a href="https://wa.me/5521999999999" className="text-accent font-semibold">
                  (21) 99999-9999
                </a>
              </li>
              <li>Informe o número do pedido e o motivo da troca/devolução</li>
              <li>Nossa equipe enviará as instruções de postagem</li>
              <li>
                Após recebermos o produto e verificarmos as condições, processaremos sua
                solicitação em até 5 dias úteis
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Custos de Frete</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Defeito de fabricação:</strong> O frete de devolução é por nossa
              conta.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              <strong>Desistência ou troca de tamanho:</strong> O cliente é responsável
              pelo custo do frete de devolução.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Reembolso</h2>
            <p className="text-muted-foreground leading-relaxed">
              Em caso de devolução, o reembolso será processado da seguinte forma:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
              <li>Cartão de crédito: estorno em até 2 faturas</li>
              <li>Pix/Boleto: transferência bancária em até 10 dias úteis</li>
            </ul>
          </section>

          <section className="bg-secondary/30 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Precisa de ajuda?</h3>
            <p className="text-muted-foreground">
              Nossa equipe está pronta para ajudar! Entre em contato através do nosso{' '}
              <a href="/contato" className="text-accent font-semibold">
                formulário de contato
              </a>{' '}
              ou WhatsApp.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
