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
  - Em todas as páginas, a imagem própria da rota fica ampla e quase quadrada no desktop; no mobile, usa faixa panorâmica de aproximadamente 2,85:1 com recorte intencional.
- [x] **Escala das heroes equilibrada em mobile e desktop**
  - Todas as rotas usam imagem ampla no computador e faixa panorâmica no celular, preservando o ponto focal de cada imagem.
- [x] **CTAs das heroes**
  - “Agendar avaliação” permanece como primeiro botão e abre o WhatsApp; o comportamento do segundo botão está descrito em seu próprio item abaixo.
- [x] **Tipografia da referência pontesaojoaoimplantes.com.br**
  - DM Sans em textos e controles; Playfair Display em títulos, aplicada globalmente nas oito páginas.
- [x] **Acabamento da hero conforme a referência: fontes e WhatsApp na imagem**
  - Usar DM Sans nos textos e controles e Playfair Display nos títulos, com os pesos e a escala visual da referência `https://www.pontesaojoaoimplantes.com.br/`.
  - Em todas as páginas, manter o texto à esquerda e a imagem alinhada à direita no desktop; preservar o recorte responsivo e o ponto focal próprio de cada foto.
  - Sobrepor à imagem um cartão clicável com ícone do WhatsApp, “Converse com a equipe” e “Tire suas dúvidas”, levando ao WhatsApp da página; manter também o botão flutuante de WhatsApp.
- [x] **Centralizar o ponto focal das imagens das heroes conforme a referência**
  - Em todas as oito páginas, usar `object-position: 50% 50%` no desktop e no mobile, mantendo a composição e o recorte responsivo da hero.
  - Referência: `https://www.pontesaojoaoimplantes.com.br/`.
- [x] **Imagem da hero vem antes das informações no mobile**
  - Nas oito páginas, em telas até 820 px a imagem aparece primeiro e centralizada; eyebrow, título, descrição e botões, inclusive “Agendar avaliação” pelo WhatsApp, ficam abaixo. No desktop, preservar as duas colunas da referência.
- [x] **Telefone removido da faixa superior**
  - Ocultar somente o número na parte superior; manter o telefone e os links diretos de chamada nas demais áreas do site.
- [x] **Favicon com a marca Ponte São João**
  - Usar o símbolo da logo da clínica como ícone de página legível e servi-lo como favicon.

- [x] **Segundo botão das heroes acompanha o conteúdo da página**
  - Em `/`, `/implantes-proteses-cirurgias`, `/urgencia-odontologica`, `/cirurgias`, `/tratamentos` e `/duvidas`, mostrar “Conheça nossos tratamentos” e apontar para a seção de tratamentos da própria página.
  - Em `/clinica-geral`, “Conheça nossos tratamentos” abre `/tratamentos`. Somente em `/profissionais`, manter “Conheça nossa equipe” e apontar para `#equipe`.
  - Manter “Agendar avaliação” como primeiro botão e abrir o WhatsApp.
- [x] **Hero inicial da Home inspirada na referência de implantes**
  - Composição clara em duas colunas no desktop, imagem ampla com etiqueta própria sobreposta; no mobile, foto panorâmica como a referência.
  - Referência: https://www.pontesaojoaoimplantes.com.br/ — foto quase quadrada no desktop; no viewport móvel de 390 px, faixa próxima de 2,85:1, sem etiqueta sobre a foto.

- [x] **Aplicar a composição da hero em todas as páginas**
  - Em cada rota, mostrar a imagem da hero ampla e quase quadrada no desktop, com etiqueta própria sobreposta; no mobile, usar faixa panorâmica próxima de 2,85:1 sem etiqueta sobre a foto.
  - Preservar a imagem, os textos, os links e o conteúdo próprios de cada página.
  - Referência: https://www.pontesaojoaoimplantes.com.br/.

- [x] **Substituir imagens repetidas por fotos oficiais adequadas**
  - Escolher imagens nítidas e pertinentes de procedimentos e da clínica no site antigo e no Perfil da Empresa do Google; substituir as atuais repetidas sem reutilizar textos, números ou informações desses materiais.
  - Manter textos, links, conteúdo e associação correta de cada imagem com sua página; evitar repetição desnecessária entre as heroes afetadas.

- [x] **Aviso de horário especial de fim de ano**
  - Informar que a clínica atenderá diretamente, sem intervalo, de segunda a sábado, das 8h às 19h; manter as referências de horário do site coerentes com esse período especial e não anunciar urgência 24h durante a vigência do aviso.

- [x] **Mensagem institucional na faixa superior**
  - Mostrar “Atendimento particular · Não atendemos convênios” na parte de cima e retirar dali o aviso de horário sazonal; manter o horário especial no FAQ e na localização.

- [x] **Escala anterior da hero mobile restaurada com WhatsApp visível**
  - Em todas as páginas, restaurar o tamanho anterior dos títulos, textos, botões e espaçamentos da hero; deixar o WhatsApp abaixo da foto quando houver espaço e mantê-lo fixo e visível quando não couber, mesmo que se sobreponha à imagem. Preservar o conteúdo e os links existentes e o layout desktop. Validado visualmente em 390×720 e 390×844.
