# TODO — Ponte São João Odontologia Estética

- [x] **Um site único com identidade visual preservada**
  - Substituir a versão anterior por um único site completo.
  - Preservar a identidade visual editorial, premium e orientada à conversão da landing page de implantes enviada pelo usuário.
  - Usar a landing de implantes como referência principal de composição e a página institucional como fonte de conteúdo.

- [x] **Páginas próprias para campanhas do Google**
  - `/implantes-proteses-cirurgias` para implantes, próteses, cirurgias, enxerto ósseo e reabilitação oral.
  - `/clinica-geral` para avaliação, prevenção, limpeza, restaurações, diagnóstico e encaminhamento.
  - `/urgencia-odontologica` para dor, trauma, dente quebrado, sangramento e outras intercorrências.
  - `/cirurgias` para cirurgia bucomaxilofacial, implantodontia, enxerto ósseo e cirurgia/trauma, separada da urgência.
  - `/tratamentos`, `/profissionais` e `/duvidas` como páginas de apoio e navegação.

- [x] **Conteúdo completo das referências**
  - Incorporar atendimento particular, ausência de convênios, telefone/WhatsApp, endereço, horários, Google Maps, responsável técnica, CRO da clínica, profissionais, formações, especialidades e dúvidas.
  - Incluir áreas informadas: estética dental, ortodontia, periodontia, endodontia, odontogeriatria, estomatologia, reabilitação oral, ATM, sedação, Protocolo Branemark, odontologia hospitalar e pacientes especiais.

- [x] **Conversão e localização**
  - CTAs por intenção com mensagens de WhatsApp específicas para home, implantes, clínica geral, urgência, tratamentos, equipe e dúvidas.
  - Cada aba abre uma página própria, com headline, prova, benefícios, orientação e CTA voltados à conversão do anúncio correspondente.
  - Botão flutuante do WhatsApp no padrão da referência: círculo verde, ícone, pulso, tooltip e acessibilidade.
  - Mapa, rota, telefone, horários e botão flutuante de WhatsApp em todo o site.

- [x] **SEO, acessibilidade e deploy**
  - Títulos, descrições, canonical, Open Graph, Twitter Card, sitemap, robots, manifesto de rotas e 404 com noindex.
  - Layout responsivo, skip link, foco visível e `prefers-reduced-motion`.
  - Deploy em container preparado no Webdev.
- [x] **Tipografia inspirada na referência visual**
  - Usar DM Sans no corpo e nos controles e Playfair Display nos títulos, sem copiar textos, dados ou imagens da referência.
  - Manter o botão flutuante do WhatsApp do site e seu número oficial; usar microtexto próprio da clínica.

- [x] **WhatsApp e navegação móvel ajustados**
  - Botão flutuante compacto, circular e verde, mantendo o número oficial e texto próprio da clínica.
  - Menu responsivo com abertura suave, fechamento ao escolher uma página, clicar fora, pressionar Esc ou voltar à largura desktop.
- [x] **Botão flutuante de WhatsApp visualmente alinhado à referência**
  - Círculo de 44 px, ícone gráfico do WhatsApp de 24 px, posição de 24 px das bordas, sombra e anel pulsante; tooltip no desktop com frase própria da clínica.
  - Manter o destino no WhatsApp oficial da Ponte São João, sem usar o texto, número ou link da Digital Rocha.
- [x] **Retratos da equipe e layout global responsivo**
  - Confirmar as quatro associações por retrato e nome; exibir os originais completos sem corte nos cartões.
  - Ajustar colunas, espaçamentos e dimensões de fotos e mapas em todas as rotas para desktop, tablet e celular; carregar fotos de cartões sob demanda.
- [x] **Telefone com chamada direta**
  - Os números de contato no cabeçalho e no rodapé são links `tel:` para iniciar a chamada no aparelho, com rótulo acessível.
- [x] **Imagens das heroes com apresentação responsiva**
  - Imagens das páginas internas permanecem completas em desktop e mobile; na Home, a imagem fica ampla e quadrada no desktop e usa faixa panorâmica com recorte intencional no mobile, conforme a referência mais recente.
- [x] **Escala da hero equilibrada em mobile e desktop**
  - A Home usa imagem quase quadrada no computador e proporção panorâmica no celular; as páginas internas mantêm as imagens completas.
- [x] **CTAs das heroes**
  - “Agendar avaliação” permanece como primeiro botão e abre o WhatsApp; “Conheça os tratamentos” aponta à seção específica da própria rota, exceto em `/clinica-geral`, que abre `/tratamentos`.
- [x] **Tipografia da referência pontesaojoaoimplantes.com.br**
  - DM Sans em textos e controles; Playfair Display em títulos, aplicada globalmente nas oito páginas.

- [x] **Telefone removido da faixa superior**
  - Ocultar somente o número na parte superior; manter o telefone e os links diretos de chamada nas demais áreas do site.
- [x] **Favicon com a marca Ponte São João**
  - Usar o símbolo da logo da clínica como ícone de página legível e servi-lo como favicon.

- [x] **Botão secundário da hero rola para a seção correta**
  - `/implantes-proteses-cirurgias` → `#implantes-proteses`; `/cirurgias` → `#procedimentos`; `/` → `#areas`.
  - `/urgencia-odontologica` → `#urgencia`; `/tratamentos` → `#tratamentos`; `/profissionais` → `#equipe`; `/duvidas` → `#duvidas`.
  - Exceção: `/clinica-geral` → `/tratamentos`. O botão “Agendar avaliação” continua abrindo o WhatsApp.

- [x] **Hero inicial inspirada na referência de implantes**
  - Aplicar composição clara em duas colunas no desktop, imagem quadrada ampla com etiqueta própria sobreposta; no mobile, apresentar a foto em faixa panorâmica como a referência, sem alterar as demais páginas.
  - Referência observada: https://www.pontesaojoaoimplantes.com.br/ — foto quase quadrada ampla no desktop; no viewport móvel de 390 px, faixa panorâmica próxima de 2,85:1, sem etiqueta sobre a foto.
