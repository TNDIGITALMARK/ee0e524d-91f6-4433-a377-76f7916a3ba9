export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black mb-8">Política de Privacidade</h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <p className="text-muted-foreground leading-relaxed">
              A <strong>StepMax Sneakers</strong> respeita sua privacidade e está
              comprometida em proteger seus dados pessoais. Esta política descreve como
              coletamos, usamos e protegemos suas informações, em conformidade com a
              Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Informações que Coletamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Coletamos as seguintes informações quando você utiliza nosso site:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Dados de cadastro:</strong> nome, e-mail, telefone, CPF
              </li>
              <li>
                <strong>Dados de entrega:</strong> endereço completo para envio dos
                produtos
              </li>
              <li>
                <strong>Dados de pagamento:</strong> informações necessárias para
                processar transações (processadas por plataformas seguras)
              </li>
              <li>
                <strong>Dados de navegação:</strong> cookies e informações sobre como
                você usa nosso site
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Como Usamos Suas Informações</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Utilizamos seus dados pessoais para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Processar e entregar seus pedidos</li>
              <li>Enviar comunicações sobre o status do pedido</li>
              <li>Melhorar sua experiência de compra</li>
              <li>Enviar ofertas e novidades (com seu consentimento)</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Compartilhamento de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros
              para fins de marketing. Compartilhamos informações apenas com:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
              <li>Empresas de transporte para entrega dos produtos</li>
              <li>Plataformas de pagamento para processar transações</li>
              <li>Autoridades legais, quando exigido por lei</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Segurança dos Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para proteger
              seus dados contra acesso não autorizado, perda ou destruição. Utilizamos
              criptografia SSL em todas as transações e armazenamos dados em servidores
              seguros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Seus Direitos</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar seu consentimento</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Para exercer seus direitos, entre em contato através do e-mail{' '}
              <a
                href="mailto:privacidade@stepmax.com.br"
                className="text-accent font-semibold"
              >
                privacidade@stepmax.com.br
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos cookies para melhorar sua experiência de navegação. Você pode
              gerenciar suas preferências de cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Alterações nesta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar esta política periodicamente. Recomendamos que você
              revise esta página regularmente para se manter informado sobre como
              protegemos seus dados.
            </p>
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
