/**
 * Simple client-side i18n / language switcher.
 * Translates every element carrying a data-i18n="key" attribute.
 * Language choice is remembered in localStorage.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "site_lang";
  var SUPPORTED = ["en", "fr", "nl", "zh", "yo", "ja", "ig", "po"];

  var translations = {
    en: {
      nav_home: "Home",
      nav_about: "About Us",
      nav_services: "Services",
      nav_management: "Management",
      nav_contact: "Contact Us",

      hero_h1: "Better digital experience with Desires Investment Limited",
      hero_h2: "We have emerged with our experience to deliver robust, cost effective and reliable web solutions to our clients.",
      hero_btn: "About Us",

      about_h3: "About Us",
      about_p: "Desires Investment Limited is a private, employee-owned IT professional services company that supports national and international customer base. Our typical clients are large to mid-sized businesses whose Information Technology environments are complex and mission critical. While Information Technology Infrastructure professional service is our business, our focus is on leveraging Technology, Process and People(T+P+P) to enhance our client\u2019s overall efficiency and profitability.",
      mission_h4: "Mission",
      mission_p: "We aim to Provide excellence driven, requirement-oriented, cost-effective and value-added solutions as service. We work with competence to build lasting relationships rather than just doing business.",
      vision_h4: "Vision",
      vision_p: "To seize the prospects of tomorrow, and create expectations that is customer\u2019s \u201cgreat relief\u201d and needs",
      policy_h4: "Policy",
      policy_p: "Our quality policy is to use consistent, repeatable and renewable processes to deliver timely and cost-effective solutions to its clients. We use an effective mix of training programs, quality testing models to deliver effective solutions.",

      services_h2: "Services",
      services_sub: "Check out the great services we offer",
      svc1_title: "Information Technology Consultation",
      svc1_desc: "We help you to re-focus the power of your enterprise IT assets in a way that contains costs, manage risk and prepares for growth.",
      svc2_title: "Hardware sales, Maintainance & Repair",
      svc2_desc: "With numerous amounts of choices in the hardware (Laptops, desktops and the likes) market, you may be confused of what to select for your home and/or office. Desires Investment Limited sales team will help you by listening to your needs, analyze it and come up with best-fit hardware.",
      svc3_title: "Software Development & Web Services",
      svc3_desc: "We offer a wide range of custom software development services. We have outstanding experience in custom database developments, desktop and distributed application design as well as various custom software components and web programing that can be integrated into main core application systems.",
      svc4_title: "Managed Services",
      svc4_desc: "In today\u2019s workplace, managed services and outsourcing is key to cost control and efficiency in services delivery. We can completely manage your Helpdesk, Datacenter, staff recruitment or staff outsourcing. We get the professionals to give the best services at affordable cost. All our outsourced staff are well trained and re-trained from time to time to meet up with changes in environment and technology.",

      mgmt_h2: "Management",
      mgmt_sub: "Team to Meet Your Heart Desires",
      role_ceo: "Chief Executive Officer",
      role_dos: "Director Of Services",
      role_edm: "Executive Director-Marketing",
      role_ssa: "Senior Software Architect",
      role_sa: "Software Architect",
      role_fao: "Finance and Admin. Officer",
      role_cso: "Customer Services Officer",

      contact_h2: "Contact Us",
      contact_sub: "Contact us to get started",
      contact_location_label: "Location:",
      contact_address: "Shop D41-42, Sabo Market, Ijebu-Ode Road, Ikorodu, Lagos. Nigeria.",
      contact_email_label: "Email:",
      contact_call_label: "Call:",
      form_name_label: "Your Name",
      form_name_msg: "Please enter at least 4 chars",
      form_email_label: "Your Email",
      form_email_msg: "Please enter a valid email",
      form_subject_label: "Subject",
      form_subject_msg: "Please enter at least 8 characters of subject",
      form_message_label: "Message",
      form_message_msg: "Please write something for us",
      form_submit: "Send Message",

      footer_address: "Shop D41-42, Sabo Market. Ijebu-Ode Road, Ikorodu, Lagos. Nigeria",
      contact_call_label_inline: "Phone:",
      contact_email_label_inline: "Email:",
      footer_links_h4: "Useful Links",
      footer_about: "About us",
      footer_services_h4: "Our Services",
      footer_svc1: "IT Consultation",
      footer_svc2: "Web Development",
      footer_svc3: "Software Development",
      footer_svc4: "Hardware Sales",
      footer_svc5: "Training",
      footer_social_h4: "Our Social Networks",
      footer_social_p: "Follow Us On All Our Social Media Platforms",
      footer_copyright_prefix: "Copyright",
      footer_copyright_suffix: "All Rights Reserved."
    },

    po: {
      nav_home: "Início",
      nav_about: "Sobre Nós",
      nav_services: "Serviços",
      nav_management: "Gestão",
      nav_contact: "Fale Conosco",

      hero_h1: "Uma melhor experiência digital com a Desires Investment Limited",
      hero_h2: "Unimos nossa experiência para entregar soluções web robustas, econômicas e confiáveis para nossos clientes.",
      hero_btn: "Sobre Nós",

      about_h3: "Sobre Nós",
      about_p: "A Desires Investment Limited é uma empresa privada de serviços profissionais de TI, pertencente aos próprios funcionários, que atende a uma base de clientes nacional e internacional. Nossos clientes típicos são empresas de grande e médio porte cujos ambientes de Tecnologia da Informação são complexos e de missão crítica. Embora nosso negócio seja a prestação de serviços profissionais em Infraestrutura de TI, nosso foco está em alavancar Tecnologia, Processos e Pessoas (T+P+P) para aumentar a eficiência e a lucratividade geral de nossos clientes.",
      mission_h4: "Missão",
      mission_p: "Nosso objetivo é fornecer soluções de valor agregado, orientadas a requisitos, econômicas e pautadas pela excelência como serviço. Trabalhamos com competência para construir relacionamentos duradouros, em vez de apenas fazer negócios.",
      vision_h4: "Visão",
      vision_p: "Aproveitar as oportunidades do amanhã e criar expectativas que sejam o \"alívio\" e atendam às necessidades dos nossos clientes.",
      policy_h4: "Política",
      policy_p: "Nossa política de qualidade consiste em utilizar processos consistentes, repetíveis e renováveis para entregar soluções pontuais e econômicas aos nossos clientes. Usamos uma combinação eficaz de programas de treinamento e modelos de testes de qualidade para entregar soluções eficientes.",

      services_h2: "Serviços",
      services_sub: "Confira os excelentes serviços que oferecemos",
      svc1_title: "Consultoria em Tecnologia da Informação",
      svc1_desc: "Ajudamos você a redirecionar o poder dos ativos de TI da sua empresa de forma a conter custos, gerenciar riscos e se preparar para o crescimento.",
      svc2_title: "Venda, Manutenção e Reparo de Hardware",
      svc2_desc: "Com uma vasta quantidade de opções no mercado de hardware (laptops, desktops e afins), você pode ficar confuso sobre o que escolher para sua casa ou escritório. A equipe de vendas da Desires Investment Limited ajudará você ouvindo suas necessidades, analisando-as e oferecendo o hardware ideal.",
      svc3_title: "Desenvolvimento de Software e Serviços Web",
      svc3_desc: "Oferecemos uma ampla gama de serviços de desenvolvimento de software customizado. Temos excelente experiência no desenvolvimento de bancos de dados personalizados, design de aplicações desktop e distribuídas, bem como em diversos componentes de software sob medida e programação web que podem ser integrados aos principais sistemas core.",
      svc4_title: "Serviços Gerenciados",
      svc4_desc: "No ambiente de trabalho atual, serviços gerenciados e terceirização são fundamentais para o controle de custos e a eficiência na entrega de serviços. Podemos gerenciar completamente seu Central de Ajuda (Helpdesk), Data Center, recrutamento ou terceirização de pessoal. Trazemos os profissionais certos para oferecer os melhores serviços a um custo acessível. Toda a nossa equipe terceirizada é altamente treinada e reciclada periodicamente para acompanhar as mudanças no ambiente e na tecnologia.",

      mgmt_h2: "Gestão",
      mgmt_sub: "Equipe Pronta para Atender aos Desejos do Seu Coração",
      role_ceo: "Diretor Executivo (CEO)",
      role_dos: "Diretor de Serviços",
      role_edm: "Diretor Executivo de Marketing",
      role_ssa: "Arquiteto de Software Sênior",
      role_sa: "Arquiteto de Software",
      role_fao: "Responsável Financeiro e Administrativo",
      role_cso: "Responsável pelo Atendimento ao Cliente",

      contact_h2: "Fale Conosco",
      contact_sub: "Entre em contato conosco para começar",
      contact_location_label: "Localização:",
      contact_address: "Shop D41-42, Sabo Market, Ijebu-Ode Road, Ikorodu, Lagos. Nigéria.",
      contact_email_label: "E-mail:",
      contact_call_label: "Ligue:",
      form_name_label: "Seu Nome",
      form_name_msg: "Por favor, insira pelo menos 4 caracteres",
      form_email_label: "Seu E-mail",
      form_email_msg: "Por favor, insira um e-mail válido",
      form_subject_label: "Assunto",
      form_subject_msg: "Por favor, insira pelo menos 8 caracteres no assunto",
      form_message_label: "Mensagem",
      form_message_msg: "Por favor, escreva uma mensagem para nós",
      form_submit: "Enviar Mensagem",

      footer_address: "Shop D41-42, Sabo Market. Ijebu-Ode Road, Ikorodu, Lagos. Nigéria",
      contact_call_label_inline: "Telefone:",
      contact_email_label_inline: "E-mail:",
      footer_links_h4: "Links Úteis",
      footer_about: "Sobre nós",
      footer_services_h4: "Nossos Serviços",
      footer_svc1: "Consultoria em TI",
      footer_svc2: "Desenvolvimento Web",
      footer_svc3: "Desenvolvimento de Software",
      footer_svc4: "Venda de Hardware",
      footer_svc5: "Treinamento",
      footer_social_h4: "Nossas Redes Sociais",
      footer_social_p: "Siga-nos em todas as nossas redes sociais",
      footer_copyright_prefix: "Copyright",
      footer_copyright_suffix: "Todos os Direitos Reservados."

    },

    ig: {
      nav_home: "Ụlọ",
      nav_about: "Banyere Anyị",
      nav_services: "Ọrụ Anyị",
      nav_management: "Ndị Nduzi",
      nav_contact: "Kọtara Anyị",

      hero_h1: "Ahụmịhe dijitalụ ka mma site n'aka Desires Investment Limited",
      hero_h2: "Anyị ewetala ahụmịhe anyị iji nye ndị ahịa anyị azịza weebụ siri ike, nke na-anaghị egbu ego ma nwee ntụkwasị obi.",
      hero_btn: "Banyere Anyị",

      about_h3: "Banyere Anyị",
      about_p: "Desires Investment Limited bụ ụlọ ọrụ mma kacha mma na teknụzụ (IT) nke nwe onwe ya, nke ndị ọrụ nwe, nke na-akwado ndị ahịa nọ na mba na mba ụwa. Ndị ahịa anyị pụrụ iche bụ nnukwu ụlọ ọrụ na nke na-ajawanye mma nke nwere gburugburu ebe obibi teknụzụ dị mgbagwoju anya ma dị mkpa. Tra na ịnye ọrụ akụrụngwa teknụzụ bụ azụmahịa anyị, uche anyị dị na iji Teknụzụ, Usoro na Ndị mmadụ (T+P+P) iji bulie mma na uru ndị ahịa anyị n’ozuzu.",
      mission_h4: "Ebumnuche Anyị",
      mission_p: "Anyị na-achọ ịnye azịza dị elu, nke dabeere na ihe a chọrọ, nke na-anaghị egbu ego na nke na-agbakwunye uru dị ka ọrụ. Anyị na-arụ ọrụ n'afọ ojuju iji wuo mmekọrịta na-adịgide adịgide karịa naanị ime azụmahịa.",
      vision_h4: "Ọhụụ Anyị",
      vision_p: "Ịmụta ohere nke echi, na imepụta atụmanya nke bụ \"oké ntụsara ahụ\" na mkpa ndị ahịa",
      policy_h4: "Usoro Iwu Anyị",
      policy_p: "Usoro iwu mma anyị bụ iji usoro na-agbanweghị agbanwe, nke a pụrụ imegharị na nke a pụrụ ịhazi ọhụrụ iji nyefee ndị ahịa azịza siri ike n'oge ma na-anaghị egbu ego. Anyị na-alụ ọrụ site n'ijikọta usoro ọzụzụ dị mma na ụdị nnwale mma iji nye azịza bara uru.",

      services_h2: "Ọrụ Anyị",
      services_sub: "Lere anya na nnukwu ọrụ anyị na-enye",
      svc1_title: "Ndụmọdụ Teknụzụ (IT Consultation)",
      svc1_desc: "Anyị na-enyere gị aka ileghachi anya n'ike nke akụrụngwa IT gị n'ụzọ na-ebelata ego, na-ejikwa ihe ize ndụ, ma na-akwado maka uto.",
      svc2_title: "Ahịa Akụrụngwa (Hardware), Nlekọta na Ndozi",
      svc2_desc: "N'ihi na nọmba akụrụngwa kọmputa (Laptọọpụ, Desktọọpụ na ihe ndị yiri ha) dị n'ahịa gbagwojuru anya, ị nwere ike mgbagwoju anya gbasara ihe ị ga-ahọrọ maka ụlọ ma ọ bụ ọfịs gị. Ndị otu ahịa Desires Investment Limited ga-enyere gị aka site n'ige ntị na mkpa gị, nyochaa ya na inye gị akụrụngwa kacha mma.",
      svc3_title: "Mmepe Ngwanrọ (Software) na Ọrụ Weebụ",
      svc3_desc: "Anyị na-enye ọtụtụ ọrụ mmepe ngwanrọ pụrụ iche. Anyị nwere ahụmịhe dị mma na mmepe data kọmputa, mmepe ngwa desktọọpụ na nke sọfụwe kesara ekesa gụnyere mmemme weebụ dị iche iche a pụrụ ijikọ na sistemụ kacha mkpa.",
      svc4_title: "Ọrụ Ndị A Na-ejikwa Ejikwa (Managed Services)",
      svc4_desc: "N'ebe ọrụ taa, ọrụ a na-ejikwa ejikwa na iwepụta ọrụ n'èzí bụ igodo iji sarata ego na inye ọrụ n'ụzọ dị irè. Anyị nwere ike jikwaa gburugburu nkwado (Helpdesk), Datacenter, ma ọ bụ ịnara ma mụọ ndị ọrụ n'èzí. Anyị na-enweta ndị ọkachamara iji nye ọrụ kacha mma na ọnụahịa dị ala. Ndị ọrụ anyị niile sitere n'èzí ka a na-azụ nke ọma site n'oge gaa n'oge iji kwekọọ na mgbanwe nke gburugburu ebe obibi na teknụzụ.",

      mgmt_h2: "Ndị Nduzi",
      mgmt_sub: "Ndị Otu Iji Mezuo Ihe Obi Gị Chọrọ",
      role_ceo: "Prọfesọ Onye Nhazi Kacha Elu (CEO)",
      role_dos: "Onye Nduzi Ọrụ (Director of Services)",
      role_edm: "Onye Nduzi Azụmahịa (Executive Director-Marketing)",
      role_ssa: "Agadi Onye Nhazi Ngwanrọ (Senior Software Architect)",
      role_sa: "Onye Nhazi Ngwanrọ (Software Architect)",
      role_fao: "Onye Na-ahụ Maka Ego na Nchịkwa",
      role_cso: "Onye Na-ahụ Maka Ọrụ Ndị Ahịa",

      contact_h2: "Kọtara Anyị",
      contact_sub: "Kọtara anyị iji malite",
      contact_location_label: "Ebe Anyị Nọ:",
      contact_address: "Shop D41-42, Sabo Market, Ijebu-Ode Road, Ikorodu, Lagos. Nigeria.",
      contact_email_label: "Imel:",
      contact_call_label: "Kpọọ Anyị:",
      form_name_label: "Aha Gị",
      form_name_msg: "Biko tinye ma ọ dị ala mkpụrụ edemede 4",
      form_email_label: "Imel Gị",
      form_email_msg: "Biko tinye imel bara uru",
      form_subject_label: "Isi Okwu",
      form_subject_msg: "Biko tinye ma ọ dị ala mkpụrụ edemede 8 maka isi okwu",
      form_message_label: "Ozi Gị",
      form_message_msg: "Biko zitere anyị ozi",
      form_submit: "Ziga Ozi",

      footer_address: "Shop D41-42, Sabo Market. Ijebu-Ode Road, Ikorodu, Lagos. Nigeria",
      contact_call_label_inline: "Teelefonu:",
      contact_email_label_inline: "Imel:",
      footer_links_h4: "Njikọ Ndị Baro Uru",
      footer_about: "Banyere anyị",
      footer_services_h4: "Ọrụ Anyị",
      footer_svc1: "Ndụmọdụ Teknụzụ (IT)",
      footer_svc2: "Mmepe Weebụ",
      footer_svc3: "Mmepe Ngwanrọ (Software)",
      footer_svc4: "Ahịa Akụrụngwa (Hardware)",
      footer_svc5: "Ọzụzụ",
      footer_social_h4: "Sistemụ Mmekọrịta Anyị",
      footer_social_p: "Soro Anyị Na Mgbasa Ozi Mmekọrịta Anyị Niile",
      footer_copyright_prefix: "Ikike Nwere",
      footer_copyright_suffix: "Ikike Niile Echekwara."
  },

    fr: {
      nav_home: "Accueil",
      nav_about: "\u00c0 propos de nous",
      nav_services: "Services",
      nav_management: "Direction",
      nav_contact: "Contactez-nous",

      hero_h1: "Une meilleure exp\u00e9rience num\u00e9rique avec Desires Investment Limited",
      hero_h2: "Nous avons su tirer parti de notre exp\u00e9rience pour fournir des solutions web robustes, \u00e9conomiques et fiables \u00e0 nos clients.",
      hero_btn: "\u00c0 propos de nous",

      about_h3: "\u00c0 propos de nous",
      about_p: "Desires Investment Limited est une soci\u00e9t\u00e9 de services professionnels informatiques priv\u00e9e, d\u00e9tenue par ses employ\u00e9s, qui dessert une client\u00e8le nationale et internationale. Nos clients types sont des entreprises de taille moyenne \u00e0 grande dont les environnements informatiques sont complexes et essentiels \u00e0 leur activit\u00e9. Bien que les services professionnels d\u2019infrastructure informatique soient notre c\u0153ur de m\u00e9tier, nous nous concentrons sur la Technologie, les Processus et les Personnes (T+P+P) pour am\u00e9liorer l\u2019efficacit\u00e9 et la rentabilit\u00e9 globales de nos clients.",
      mission_h4: "Mission",
      mission_p: "Nous visons \u00e0 fournir des solutions ax\u00e9es sur l\u2019excellence, adapt\u00e9es aux besoins, \u00e9conomiques et \u00e0 valeur ajout\u00e9e. Nous travaillons avec comp\u00e9tence pour b\u00e2tir des relations durables plut\u00f4t que de simplement faire des affaires.",
      vision_h4: "Vision",
      vision_p: "Saisir les perspectives de demain et cr\u00e9er des attentes qui apportent un \u00ab\u202fgrand soulagement\u202f\u00bb et r\u00e9pondent aux besoins du client",
      policy_h4: "Politique",
      policy_p: "Notre politique qualit\u00e9 consiste \u00e0 utiliser des processus coh\u00e9rents, reproductibles et renouvelables pour fournir des solutions rapides et \u00e9conomiques \u00e0 nos clients. Nous utilisons un m\u00e9lange efficace de programmes de formation et de mod\u00e8les de tests qualit\u00e9 pour proposer des solutions efficaces.",

      services_h2: "Services",
      services_sub: "D\u00e9couvrez les excellents services que nous proposons",
      svc1_title: "Conseil en technologies de l\u2019information",
      svc1_desc: "Nous vous aidons \u00e0 recentrer la puissance de vos actifs informatiques d\u2019entreprise afin de ma\u00eetriser les co\u00fbts, g\u00e9rer les risques et pr\u00e9parer la croissance.",
      svc2_title: "Vente, maintenance et r\u00e9paration de mat\u00e9riel",
      svc2_desc: "Face au grand nombre de choix sur le march\u00e9 du mat\u00e9riel informatique (ordinateurs portables, de bureau, etc.), vous pouvez \u00eatre perdu quant \u00e0 ce qu\u2019il faut choisir pour votre domicile et/ou votre bureau. L\u2019\u00e9quipe commerciale de Desires Investment Limited vous aidera en \u00e9coutant vos besoins, en les analysant et en proposant le mat\u00e9riel le mieux adapt\u00e9.",
      svc3_title: "D\u00e9veloppement logiciel et services web",
      svc3_desc: "Nous proposons une large gamme de services de d\u00e9veloppement logiciel sur mesure. Nous avons une exp\u00e9rience remarquable dans le d\u00e9veloppement de bases de donn\u00e9es personnalis\u00e9es, la conception d\u2019applications de bureau et distribu\u00e9es, ainsi que divers composants logiciels sur mesure et la programmation web pouvant s\u2019int\u00e9grer aux syst\u00e8mes principaux existants.",
      svc4_title: "Services g\u00e9r\u00e9s",
      svc4_desc: "Dans le monde professionnel actuel, les services g\u00e9r\u00e9s et l\u2019externalisation sont essentiels \u00e0 la ma\u00eetrise des co\u00fbts et \u00e0 l\u2019efficacit\u00e9 de la prestation de services. Nous pouvons g\u00e9rer enti\u00e8rement votre helpdesk, votre centre de donn\u00e9es, le recrutement de personnel ou l\u2019externalisation du personnel. Nous mobilisons des professionnels pour offrir les meilleurs services \u00e0 un co\u00fbt abordable. Tout notre personnel externalis\u00e9 est bien form\u00e9 et r\u00e9guli\u00e8rement recycl\u00e9 pour s\u2019adapter aux \u00e9volutions de l\u2019environnement et de la technologie.",

      mgmt_h2: "Direction",
      mgmt_sub: "Une \u00e9quipe \u00e0 la hauteur de vos attentes",
      role_ceo: "Directeur G\u00e9n\u00e9ral",
      role_dos: "Directeur des Services",
      role_edm: "Directrice Ex\u00e9cutive - Marketing",
      role_ssa: "Architecte Logiciel Senior",
      role_sa: "Architecte Logiciel",
      role_fao: "Responsable Finance et Administration",
      role_cso: "Charg\u00e9e du Service Client",

      contact_h2: "Contactez-nous",
      contact_sub: "Contactez-nous pour d\u00e9marrer",
      contact_location_label: "Adresse\u202f:",
      contact_address: "Boutique D41-42, March\u00e9 Sabo, Route Ijebu-Ode, Ikorodu, Lagos. Nig\u00e9ria.",
      contact_email_label: "E-mail\u202f:",
      contact_call_label: "T\u00e9l\u00e9phone\u202f:",
      form_name_label: "Votre nom",
      form_name_msg: "Veuillez saisir au moins 4 caract\u00e8res",
      form_email_label: "Votre e-mail",
      form_email_msg: "Veuillez saisir une adresse e-mail valide",
      form_subject_label: "Sujet",
      form_subject_msg: "Veuillez saisir au moins 8 caract\u00e8res pour le sujet",
      form_message_label: "Message",
      form_message_msg: "Veuillez \u00e9crire un message",
      form_submit: "Envoyer le message",

      footer_address: "Boutique D41-42, March\u00e9 Sabo. Route Ijebu-Ode, Ikorodu, Lagos. Nig\u00e9ria",
      contact_call_label_inline: "T\u00e9l\u00e9phone\u202f:",
      contact_email_label_inline: "E-mail\u202f:",
      footer_links_h4: "Liens utiles",
      footer_about: "\u00c0 propos de nous",
      footer_services_h4: "Nos services",
      footer_svc1: "Conseil informatique",
      footer_svc2: "D\u00e9veloppement web",
      footer_svc3: "D\u00e9veloppement logiciel",
      footer_svc4: "Vente de mat\u00e9riel",
      footer_svc5: "Formation",
      footer_social_h4: "Nos r\u00e9seaux sociaux",
      footer_social_p: "Suivez-nous sur tous nos r\u00e9seaux sociaux",
      footer_copyright_prefix: "Droits d\u2019auteur",
      footer_copyright_suffix: "Tous droits r\u00e9serv\u00e9s."
    },

    nl: {
      nav_home: "Home",
      nav_about: "Over ons",
      nav_services: "Diensten",
      nav_management: "Management",
      nav_contact: "Contact",

      hero_h1: "Een betere digitale ervaring met Desires Investment Limited",
      hero_h2: "Met onze ervaring bieden wij robuuste, kosteneffectieve en betrouwbare weboplossingen aan onze klanten.",
      hero_btn: "Over ons",

      about_h3: "Over ons",
      about_p: "Desires Investment Limited is een particulier, door werknemers gedragen IT-dienstverleningsbedrijf dat een nationaal en internationaal klantenbestand bedient. Onze typische klanten zijn middelgrote tot grote bedrijven met complexe en bedrijfskritische IT-omgevingen. Hoewel professionele IT-infrastructuurdiensten onze kernactiviteit zijn, richten wij ons op het inzetten van Technologie, Processen en Mensen (T+P+P) om de algehele effici\u00ebntie en winstgevendheid van onze klanten te verbeteren.",
      mission_h4: "Missie",
      mission_p: "Wij streven ernaar om op excellentie gerichte, op maat gemaakte, kosteneffectieve en waardevolle oplossingen als dienst te leveren. Wij werken vakkundig aan duurzame relaties in plaats van alleen zaken te doen.",
      vision_h4: "Visie",
      vision_p: "De kansen van morgen grijpen en verwachtingen scheppen die voor de klant een \u201cgrote opluchting\u201d zijn en aan hun behoeften voldoen",
      policy_h4: "Beleid",
      policy_p: "Ons kwaliteitsbeleid is gericht op het gebruik van consistente, herhaalbare en vernieuwbare processen om tijdige en kosteneffectieve oplossingen aan klanten te leveren. Wij gebruiken een effectieve combinatie van trainingsprogramma\u2019s en kwaliteitstestmodellen om effectieve oplossingen te leveren.",

      services_h2: "Diensten",
      services_sub: "Bekijk onze uitstekende diensten",
      svc1_title: "IT-consultancy",
      svc1_desc: "Wij helpen u om de kracht van uw zakelijke IT-middelen opnieuw te focussen op een manier die kosten beheerst, risico\u2019s beperkt en groei mogelijk maakt.",
      svc2_title: "Hardwareverkoop, onderhoud & reparatie",
      svc2_desc: "Met de vele keuzes op de hardwaremarkt (laptops, desktops en dergelijke) weet u misschien niet wat u voor thuis en/of kantoor moet kiezen. Het verkoopteam van Desires Investment Limited helpt u door naar uw behoeften te luisteren, deze te analyseren en de best passende hardware voor te stellen.",
      svc3_title: "Softwareontwikkeling & webdiensten",
      svc3_desc: "Wij bieden een breed scala aan diensten voor maatwerksoftwareontwikkeling. Wij hebben uitgebreide ervaring met het bouwen van aangepaste databases, het ontwerpen van desktop- en gedistribueerde applicaties, evenals diverse softwarecomponenten en webprogrammering die ge\u00efntegreerd kunnen worden in bestaande kernsystemen.",
      svc4_title: "Beheerde diensten",
      svc4_desc: "In de huidige werkomgeving zijn beheerde diensten en outsourcing essentieel voor kostenbeheersing en effici00ente dienstverlening. Wij kunnen uw helpdesk, datacenter, personeelswerving of personeelsoutsourcing volledig beheren. Wij zetten professionals in om de beste diensten tegen een betaalbare prijs te leveren. Al ons uitbesteed personeel is goed opgeleid en wordt regelmatig bijgeschoold om mee te gaan met veranderingen in omgeving en technologie.",

      mgmt_h2: "Management",
      mgmt_sub: "Een team dat aan uw wensen voldoet",
      role_ceo: "Algemeen Directeur",
      role_dos: "Directeur Diensten",
      role_edm: "Directeur Marketing",
      role_ssa: "Senior Software-architect",
      role_sa: "Software-architect",
      role_fao: "Financieel en Administratief Medewerker",
      role_cso: "Klantenservicemedewerker",

      
      mgmt_h2: "Ndị Isi Nchịkwa",
      mgmt_sub: "Otu ndị na-egbo mkpa gị",
      role_ceo: "Onye Isi Nchịkwa (CEO)",
      role_dos: "Onye Isi Ngalaba Ọrụ",
      role_edm: "Onye Isi Ngalaba Mgbasa Ozi na Ahịa",
      role_ssa: "Ọkachamara Ukwu n'Ịmepụta Usoro Ngwanrọ",
      role_sa: "Ọkachamara n'Ịmepụta Usoro Ngwanrọ",
      role_fao: "Onye Ọrụ na-ahụ maka Ego na Nchịkwa",
      role_cso: "Onye na-ahụ maka Nlekọta Ndị Ahịa",

      contact_h2: "Contact",
      contact_sub: "Neem contact met ons op om te beginnen",
      contact_location_label: "Locatie:",
      contact_address: "Shop D41-42, Sabo Market, Ijebu-Ode Road, Ikorodu, Lagos. Nigeria.",
      contact_email_label: "E-mail:",
      contact_call_label: "Bel:",
      form_name_label: "Uw naam",
      form_name_msg: "Voer minimaal 4 tekens in",
      form_email_label: "Uw e-mail",
      form_email_msg: "Voer een geldig e-mailadres in",
      form_subject_label: "Onderwerp",
      form_subject_msg: "Voer minimaal 8 tekens in voor het onderwerp",
      form_message_label: "Bericht",
      form_message_msg: "Schrijf alstublieft een bericht",
      form_submit: "Bericht verzenden",

      footer_address: "Shop D41-42, Sabo Market. Ijebu-Ode Road, Ikorodu, Lagos. Nigeria",
      contact_call_label_inline: "Telefoon:",
      contact_email_label_inline: "E-mail:",
      footer_links_h4: "Nuttige links",
      footer_about: "Over ons",
      footer_services_h4: "Onze diensten",
      footer_svc1: "IT-consultancy",
      footer_svc2: "Webontwikkeling",
      footer_svc3: "Softwareontwikkeling",
      footer_svc4: "Hardwareverkoop",
      footer_svc5: "Training",
      footer_social_h4: "Onze sociale netwerken",
      footer_social_p: "Volg ons op al onze sociale-mediakanalen",
      footer_copyright_prefix: "Copyright",
      footer_copyright_suffix: "Alle rechten voorbehouden."
    },

    zh: {
      nav_home: "\u9996\u9875",
      nav_about: "\u5173\u4e8e\u6211\u4eec",
      nav_services: "\u670d\u52a1",
      nav_management: "\u7ba1\u7406\u56e2\u961f",
      nav_contact: "\u8054\u7cfb\u6211\u4eec",

      hero_h1: "Desires Investment Limited \u4e3a\u60a8\u5e26\u6765\u66f4\u4f18\u8d28\u7684\u6570\u5b57\u4f53\u9a8c",
      hero_h2: "\u51ed\u501f\u4e30\u5bcc\u7684\u7ecf\u9a8c\uff0c\u6211\u4eec\u4e3a\u5ba2\u6237\u63d0\u4f9b\u7a33\u5065\u3001\u7ecf\u6d4e\u9ad8\u6548\u4e14\u53ef\u9760\u7684\u7f51\u7edc\u89e3\u51b3\u65b9\u6848\u3002",
      hero_btn: "\u5173\u4e8e\u6211\u4eec",

      about_h3: "\u5173\u4e8e\u6211\u4eec",
      about_p: "Desires Investment Limited \u662f\u4e00\u5bb6\u79c1\u8425\u7684\u3001\u5458\u5de5\u6301\u80a1\u7684 IT \u4e13\u4e1a\u670d\u52a1\u516c\u53f8\uff0c\u670d\u52a1\u4e8e\u56fd\u5185\u5916\u5ba2\u6237\u7fa4\u3002\u6211\u4eec\u7684\u5178\u578b\u5ba2\u6237\u662f\u4fe1\u606f\u6280\u672f\u73af\u5883\u590d\u6742\u4e14\u81f3\u5173\u91cd\u8981\u7684\u4e2d\u5927\u578b\u4f01\u4e1a\u3002\u867d\u7136\u4fe1\u606f\u6280\u672f\u57fa\u7840\u8bbe\u65bd\u4e13\u4e1a\u670d\u52a1\u662f\u6211\u4eec\u7684\u6838\u5fc3\u4e1a\u52a1\uff0c\u4f46\u6211\u4eec\u66f4\u4e13\u6ce8\u4e8e\u5229\u7528\u6280\u672f\u3001\u6d41\u7a0b\u548c\u4eba\u624d\uff08T+P+P\uff09\u6765\u63d0\u5347\u5ba2\u6237\u7684\u6574\u4f53\u6548\u7387\u548c\u76c8\u5229\u80fd\u529b\u3002",
      mission_h4: "\u4f7f\u547d",
      mission_p: "\u6211\u4eec\u81f4\u529b\u4e8e\u63d0\u4f9b\u8ffd\u6c42\u5353\u8d8a\u3001\u4ee5\u9700\u6c42\u4e3a\u5bfc\u5411\u3001\u7ecf\u6d4e\u9ad8\u6548\u4e14\u5177\u6709\u9644\u52a0\u4ef7\u503c\u7684\u670d\u52a1\u578b\u89e3\u51b3\u65b9\u6848\u3002\u6211\u4eec\u51ed\u501f\u4e13\u4e1a\u80fd\u529b\u81f4\u529b\u4e8e\u5efa\u7acb\u957f\u4e45\u7684\u5408\u4f5c\u5173\u7cfb\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u5b8c\u6210\u4ea4\u6613\u3002",
      vision_h4: "\u613f\u666f",
      vision_p: "\u628a\u63e1\u672a\u6765\u7684\u673a\u9047\uff0c\u521b\u9020\u8ba9\u5ba2\u6237\u611f\u5230\u201c\u5982\u91ca\u91cd\u8d1f\u201d\u5e76\u6ee1\u8db3\u5176\u9700\u6c42\u7684\u671f\u671b",
      policy_h4: "\u653f\u7b56",
      policy_p: "\u6211\u4eec\u7684\u8d28\u91cf\u653f\u7b56\u662f\u91c7\u7528\u4e00\u81f4\u3001\u53ef\u91cd\u590d\u4e14\u53ef\u6301\u7eed\u7684\u6d41\u7a0b\uff0c\u4e3a\u5ba2\u6237\u63d0\u4f9b\u53ca\u65f6\u4e14\u7ecf\u6d4e\u9ad8\u6548\u7684\u89e3\u51b3\u65b9\u6848\u3002\u6211\u4eec\u7efc\u5408\u8fd0\u7528\u57f9\u8bad\u9879\u76ee\u548c\u8d28\u91cf\u6d4b\u8bd5\u6a21\u578b\uff0c\u4ee5\u63d0\u4f9b\u6709\u6548\u7684\u89e3\u51b3\u65b9\u6848\u3002",

      services_h2: "\u670d\u52a1",
      services_sub: "\u4e86\u89e3\u6211\u4eec\u63d0\u4f9b\u7684\u4f18\u8d28\u670d\u52a1",
      svc1_title: "\u4fe1\u606f\u6280\u672f\u54a8\u8be2",
      svc1_desc: "\u6211\u4eec\u5e2e\u52a9\u60a8\u91cd\u65b0\u805a\u7126\u4f01\u4e1a IT \u8d44\u4ea7\u7684\u6548\u80fd\uff0c\u4ece\u800c\u63a7\u5236\u6210\u672c\u3001\u7ba1\u7406\u98ce\u9669\u5e76\u4e3a\u589e\u957f\u505a\u597d\u51c6\u5907\u3002",
      svc2_title: "\u786c\u4ef6\u9500\u552e\u3001\u7ef4\u62a4\u4e0e\u7ef4\u4fee",
      svc2_desc: "\u9762\u5bf9\u786c\u4ef6\u5e02\u573a\uff08\u7b14\u8bb0\u672c\u7535\u8111\u3001\u53f0\u5f0f\u673a\u7b49\uff09\u4e2d\u4f17\u591a\u7684\u9009\u62e9\uff0c\u60a8\u53ef\u80fd\u4e0d\u77e5\u9053\u8be5\u4e3a\u5bb6\u5ead\u548c/\u6216\u529e\u516c\u5ba4\u9009\u62e9\u4ec0\u4e48\u4ea7\u54c1\u3002Desires Investment Limited \u7684\u9500\u552e\u56e2\u961f\u5c06\u503e\u542c\u60a8\u7684\u9700\u6c42\uff0c\u52a0\u4ee5\u5206\u6790\uff0c\u5e76\u4e3a\u60a8\u63a8\u8350\u6700\u5408\u9002\u7684\u786c\u4ef6\u65b9\u6848\u3002",
      svc3_title: "\u8f6f\u4ef6\u5f00\u53d1\u4e0e\u7f51\u7edc\u670d\u52a1",
      svc3_desc: "\u6211\u4eec\u63d0\u4f9b\u5e7f\u6cdb\u7684\u5b9a\u5236\u5316\u8f6f\u4ef6\u5f00\u53d1\u670d\u52a1\uff0c\u5728\u5b9a\u5236\u6570\u636e\u5e93\u5f00\u53d1\u3001\u684c\u9762\u53ca\u5206\u5e03\u5f0f\u5e94\u7528\u8bbe\u8ba1\uff0c\u4ee5\u53ca\u53ef\u96c6\u6210\u5230\u6838\u5fc3\u4e1a\u52a1\u7cfb\u7edf\u7684\u5404\u7c7b\u5b9a\u5236\u8f6f\u4ef6\u7ec4\u4ef6\u548c\u7f51\u7edc\u7f16\u7a0b\u65b9\u9762\u5177\u6709\u5353\u8d8a\u7ecf\u9a8c\u3002",
      svc4_title: "\u6258\u7ba1\u670d\u52a1",
      svc4_desc: "\u5728\u5f53\u4eca\u7684\u5de5\u4f5c\u73af\u5883\u4e2d\uff0c\u6258\u7ba1\u670d\u52a1\u548c\u5916\u5305\u5bf9\u4e8e\u6210\u672c\u63a7\u5236\u548c\u670d\u52a1\u4ea4\u4ed8\u6548\u7387\u81f3\u5173\u91cd\u8981\u3002\u6211\u4eec\u53ef\u4ee5\u5168\u9762\u7ba1\u7406\u60a8\u7684\u670d\u52a1\u53f0\u3001\u6570\u636e\u4e2d\u5fc3\u3001\u4eba\u5458\u62db\u8058\u6216\u4eba\u5458\u5916\u5305\u3002\u6211\u4eec\u8c03\u914d\u4e13\u4e1a\u4eba\u5458\uff0c\u4ee5\u5b9e\u60e0\u7684\u4ef7\u683c\u63d0\u4f9b\u6700\u4f18\u8d28\u7684\u670d\u52a1\u3002\u6211\u4eec\u6240\u6709\u7684\u5916\u5305\u5458\u5de5\u90fd\u63a5\u53d7\u8fc7\u826f\u597d\u57f9\u8bad\uff0c\u5e76\u4e0d\u65f6\u63a5\u53d7\u518d\u57f9\u8bad\uff0c\u4ee5\u9002\u5e94\u73af\u5883\u548c\u6280\u672f\u7684\u53d8\u5316\u3002",

      mgmt_h2: "\u7ba1\u7406\u56e2\u961f",
      mgmt_sub: "\u6ee1\u8db3\u60a8\u9700\u6c42\u7684\u4e13\u4e1a\u56e2\u961f",
      role_ceo: "\u9996\u5e2d\u6267\u884c\u5b98",
      role_dos: "\u670d\u52a1\u603b\u76d1",
      role_edm: "\u5e02\u573a\u6267\u884c\u603b\u76d1",
      role_ssa: "\u9ad8\u7ea7\u8f6f\u4ef6\u67b6\u6784\u5e08",
      role_sa: "\u8f6f\u4ef6\u67b6\u6784\u5e08",
      role_fao: "\u8d22\u52a1\u4e0e\u884c\u653f\u4e3b\u4efb",
      role_cso: "\u5ba2\u6237\u670d\u52a1\u4e13\u5458",

      contact_h2: "\u8054\u7cfb\u6211\u4eec",
      contact_sub: "\u8054\u7cfb\u6211\u4eec\uff0c\u5373\u523b\u5f00\u59cb",
      contact_location_label: "\u5730\u5740\uff1a",
      contact_address: "\u5c3c\u65e5\u5229\u4e9a\u62c9\u5404\u65af\uff0cIkorodu\uff0cIjebu-Ode \u8def\uff0cSabo \u5e02\u573a\uff0cD41-42 \u53f7\u5e97\u94fa\u3002",
      contact_email_label: "\u90ae\u7bb1\uff1a",
      contact_call_label: "\u7535\u8bdd\uff1a",
      form_name_label: "\u60a8\u7684\u59d3\u540d",
      form_name_msg: "\u8bf7\u81f3\u5c11\u8f93\u51654\u4e2a\u5b57\u7b26",
      form_email_label: "\u60a8\u7684\u90ae\u7bb1",
      form_email_msg: "\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7535\u5b50\u90ae\u7bb1\u5730\u5740",
      form_subject_label: "\u4e3b\u9898",
      form_subject_msg: "\u4e3b\u9898\u8bf7\u81f3\u5c11\u8f93\u51658\u4e2a\u5b57\u7b26",
      form_message_label: "\u7559\u8a00",
      form_message_msg: "\u8bf7\u8f93\u5165\u7559\u8a00\u5185\u5bb9",
      form_submit: "\u53d1\u9001\u4fe1\u606f",

      footer_address: "\u5c3c\u65e5\u5229\u4e9a\u62c9\u5404\u65af\uff0cIkorodu\uff0cIjebu-Ode \u8def\uff0cSabo \u5e02\u573a\uff0cD41-42 \u53f7\u5e97\u94fa",
      contact_call_label_inline: "\u7535\u8bdd\uff1a",
      contact_email_label_inline: "\u90ae\u7bb1\uff1a",
      footer_links_h4: "\u5e38\u7528\u94fe\u63a5",
      footer_about: "\u5173\u4e8e\u6211\u4eec",
      footer_services_h4: "\u6211\u4eec\u7684\u670d\u52a1",
      footer_svc1: "IT \u54a8\u8be2",
      footer_svc2: "\u7f51\u7ad9\u5f00\u53d1",
      footer_svc3: "\u8f6f\u4ef6\u5f00\u53d1",
      footer_svc4: "\u786c\u4ef6\u9500\u552e",
      footer_svc5: "\u57f9\u8bad",
      footer_social_h4: "\u6211\u4eec\u7684\u793e\u4ea4\u7f51\u7edc",
      footer_social_p: "\u5728\u6211\u4eec\u7684\u793e\u4ea4\u5a92\u4f53\u5e73\u53f0\u4e0a\u5173\u6ce8\u6211\u4eec",
      footer_copyright_prefix: "\u7248\u6743\u6240\u6709",
      footer_copyright_suffix: "\u4fdd\u7559\u6240\u6709\u6743\u5229\u3002"
    },

    yo: {
      nav_home: "Il\u00e9",
      nav_about: "N\u00edp\u00e0 Wa",
      nav_services: "Iṣ\u1eb9\u0301 Wa",
      nav_management: "Ol\u00f9dar\u00ed",
      nav_contact: "K\u00e0n S\u00ed Wa",

      hero_h1: "\u00cdr\u00edr\u00ec \u00f2n\u00ed-n\u1ecd\u0301mb\u00e0 t\u00ed \u00f3 d\u00e1ra j\u00f9l\u1ecd p\u1eb9\u0300l\u00fa Desires Investment Limited",
      hero_h2: "A ti lo \u00edr\u00edr\u00ec wa l\u00e1ti p\u00e8s\u1eb9\u0300 \u00e0w\u1ecdn oj\u00fat\u00f9\u00fa ay\u00e9lujara t\u00ed \u00f3 f\u1eb9s\u1eb9\u0300m\u00fal\u1eb9\u0300, t\u00ed \u00f3 w\u1ecd\u0301n k\u00e9r\u00e9, t\u00ed \u00f3 s\u00ed \u1e63e\u00e9 gb\u1eb9\u0301k\u1eb9\u0300l\u00e9 f\u00fan \u00e0w\u1ecdn on\u00edb\u00e0\u00e1r\u00e0 wa.",
      hero_btn: "N\u00edp\u00e0 Wa",

      about_h3: "N\u00edp\u00e0 Wa",
      about_p: "Desires Investment Limited j\u1eb9\u0301 il\u00e9-i\u1e63\u1eb9\u0301 \u00ecm\u1ecd\u0300-\u1eb9\u0300r\u1ecd \u00ecs\u1ecdf\u00fann\u00ec (IT) t\u00ed \u00e0w\u1ecdn \u00f2\u1e63\u00ec\u1e63\u1eb9\u0301 n\u0301 \u1e63\u00e0k\u00f3so, t\u00ed \u00f3 s\u00ec \u0144 s\u00ecn \u00e0w\u1ecdn on\u00edb\u00e0\u00e1r\u00e0 n\u00ecn\u00fa \u00e0ti l\u00f3de or\u00edl\u1eb9\u0300-\u00e8d\u00e8. \u00c0w\u1ecdn on\u00edb\u00e0\u00e1r\u00e0 wa n\u00ed gbogbog\u00f2 j\u1eb9\u0301 \u00e0w\u1ecdn il\u00e9-i\u1e63\u1eb9\u0301 al\u00e1b\u1ecd\u0301d\u00e9 s\u00ed \u0144l\u00e1 t\u00ed \u00e0y\u00edk\u00e1 \u00ecm\u1ecd\u0300-\u1eb9\u0300r\u1ecd \u00ecs\u1ecdf\u00fann\u00ec w\u1ecdn ti d\u00edj\u00fa t\u00ed \u00f3 s\u00ec \u1e63e p\u00e0t\u00e0k\u00ec. B\u00ed \u00f3 til\u1eb9\u0300 j\u1eb9\u0301 p\u00e9 iṣ\u1eb9\u0301 \u00ecm\u1ecd\u0300-\u1eb9\u0300r\u1ecd am\u00e1y\u00e9d\u1eb9r\u00f9n ni iṣ\u1eb9\u0301 \u00e0k\u1ecd\u0301k\u1ecd\u0301 wa, a \u0144 fi \u00cdm\u1ecd\u0300-\u1eb9\u0300r\u1ecd, \u00cdl\u00e0na \u00e0ti \u00c8n\u00ecyan (T+P+P) \u1e63i\u1e63\u1eb9\u0301 l\u00e1ti m\u00fa k\u00ed iṣ\u1eb9\u0301 \u00e0ti \u00e8r\u00e8 on\u00edb\u00e0\u00e1r\u00e0 wa p\u1ecd\u0300 s\u00ed i.",
      mission_h4: "\u00c8r\u1ecdngb\u00e0",
      mission_p: "\u00c8t\u1eb9 wa ni l\u00e1ti p\u00e8s\u1eb9\u0300 \u00e0w\u1ecdn oj\u00fat\u00f9\u00fa t\u00ed \u00f3 d\u00e1 l\u00f3r\u00ed \u00ectay\u1ecdl\u1ecd\u0301l\u00e1, t\u00ed \u00f3 b\u00e1 \u00e0\u00ecn\u00ed mu, t\u00ed k\u00f2 w\u1ecd\u0301n, t\u00ed \u00f3 s\u00ed n\u00ed iye ow\u00f3 t\u00ed \u00f3 p\u1ecd\u0300 s\u00ed i g\u1eb9\u0301g\u1eb9\u0301 b\u00ed iṣ\u1eb9\u0301 \u00ecs\u00ecn. A \u0144 fi \u00ecm\u1ecd\u0300 \u1e63i\u1e63\u1eb9\u0301 l\u00e1ti k\u1ecd\u0301 \u00e0j\u1ecd\u1e63e t\u00ed y\u00f3\u00f2 p\u00e9, k\u00ec \u00ed \u1e63e k\u00eck\u00ec \u1e63\u00ed\u1e63e \u00f2w\u00f2 l\u00e1s\u00e0n.",
      vision_h4: "\u00cdran",
      vision_p: "L\u00e1ti gb\u00e1 \u00e0\u01f9\u00e0\u00e0n\u00ed \u1ecdla m\u00fa, k\u00ed a s\u00ed d\u00e1 \u00ecr\u1eb9t\u00ed t\u00ed y\u00f3\u00f2 j\u1eb9\u0301 \u201c\u00ectura \u0144l\u00e1\u201d \u00e0ti ohun t\u00ed on\u00edb\u00e0\u00e1r\u00e0 n\u00edlo s\u00edl\u1eb9\u0300",
      policy_h4: "\u00ccl\u00e0na",
      policy_p: "\u00ccl\u00e0na oj\u00fal\u00f3w\u00f3 wa ni l\u00e1ti lo \u1ecd\u0300n\u00e0 t\u00ed \u00f3 d\u00far\u00f3 \u1e63in\u1e63in, t\u00ed a l\u00e8 \u1e63e l\u00e9ral\u00e9ra, t\u00ed a s\u00ed l\u00e8 t\u00fan \u1e63e, l\u00e1ti fi \u00f2w\u1ecd\u0301 \u00e0k\u00f3k\u00f2 \u00e0ti ow\u00f3 t\u00ed k\u00f2 w\u1ecd\u0301n m\u00fa oj\u00fat\u00f9\u00fa t\u1ecd \u00e0w\u1ecdn on\u00edb\u00e0\u00e1r\u00e0 r\u1eb9\u0300. A \u0144 lo \u00e0k\u00f3p\u1ecd\u0300 \u00ecd\u00e1nil\u00e9k\u1ecd\u0301\u1ecd\u0301 \u00e0ti \u00e0w\u00f2ṣe \u00e0y\u1eb9\u0300w\u00f2 oj\u00fal\u00f3w\u00f3 t\u00ed \u00f3 g\u00fan r\u00e9g\u00e9 l\u00e1ti p\u00e8s\u1eb9\u0300 \u00e0w\u1ecdn oj\u00fat\u00f9\u00fa t\u00ed \u00f3 munad\u00f3ko.",

      services_h2: "Iṣ\u1eb9\u0301 Wa",
      services_sub: "Wo \u00e0w\u1ecdn iṣ\u1eb9\u0301 \u00e0t\u00e0t\u00e0 t\u00ed a \u0144 p\u00e8s\u1eb9\u0300",
      svc1_title: "\u00cdm\u1ecd\u0300r\u00e0n N\u00edp\u00e0 \u00cdm\u1ecd\u0300-\u1eb9\u0300r\u1ecd \u00ccs\u1ecdf\u00fann\u00ec",
      svc1_desc: "A \u0144 r\u00e0n \u1ecd\u0301 l\u1ecd\u0301w\u1ecd\u0301 l\u00e1ti t\u00fan foj\u00fa s\u00ed agb\u00e1ra \u00e0w\u1ecdn ohun-\u00e8l\u1ecd IT il\u00e9-i\u1e63\u1eb9\u0301 r\u1eb9 n\u00ed \u1ecd\u0300n\u00e0 t\u00ed y\u00f3\u00f2 d\u00edn ow\u00f3 k\u00f9, t\u00ed y\u00f3\u00f2 \u1e63\u00e0k\u00f3so ewu, t\u00ed y\u00f3\u00f2 s\u00ec m\u00fa il\u00e9-i\u1e63\u1eb9\u0301 r\u1eb9 d\u00e0gb\u00e0.",
      svc2_title: "T\u00edt\u00e0 Ohun-\u00c8l\u1ecd, \u00cct\u1ecd\u0301j\u00fa \u00e0ti \u00c0t\u00fan\u1e63\u1eb9",
      svc2_desc: "P\u1eb9\u0300l\u00fa \u1ecd\u0300p\u1ecd\u0301l\u1ecd\u0301p\u1ecd\u0301 \u00e0\u1e63\u00e0y\u00e0n n\u00ecn\u00fa \u1ecdj\u00e0 ohun-\u00e8l\u1ecd (k\u1ecd\u0300\u0301np\u00fat\u00e0 al\u00e1gb\u00e8\u00e9k\u00e1, k\u1ecd\u0300\u0301np\u00fat\u00e0 t\u00e1b\u00ecl\u00ec \u00e0ti bb\u1eb9\u0301 bb\u1eb9\u0301 l\u1ecd), o l\u00e8 m\u00e0\u00e0 m\u1ecd \u00e8y\u00ed t\u00ed \u00f3 y\u1eb9 k\u00ed o y\u00e0n f\u00fan il\u00e9 \u00e0ti/tabi \u1ecd\u0301f\u00eds\u00ec r\u1eb9. \u1eb8gb\u1eb9\u0301 t\u00edt\u00e0 Desires Investment Limited y\u00f3\u00f2 r\u00e0n \u1ecd\u0301 l\u1ecd\u0301w\u1ecd\u0301 n\u00edp\u00e9 gb\u00edg\u1ecd\u0301 \u00e0\u00ecn\u00ed r\u1eb9, \u1e63\u00edṣ\u00e0y\u1eb9\u0300w\u00f2 r\u1eb9\u0300, k\u00ed \u00f3 s\u00ec d\u00e1b\u00e0\u00e1 ohun-\u00e8l\u1ecd t\u00ed \u00f3 b\u00e1 a mu j\u00f9l\u1ecd.",
      svc3_title: "\u00ccd\u00e0gb\u00e0s\u00f3k\u00e9 S\u1ecd\u0301f\u00edt\u00edwia \u00e0ti Iṣ\u1eb9\u0301 Ay\u00e9lujara",
      svc3_desc: "A \u0144 p\u00e8s\u1eb9\u0300 or\u00ed\u1e63ir\u00ed\u1e63i iṣ\u1eb9\u0301 \u00ecd\u00e0gb\u00e0s\u00f3k\u00e9 s\u1ecd\u0301f\u00edt\u00edwia t\u00ed a \u1e63e \u00e0k\u00e0n\u1e63e. A n\u00ed \u00edr\u00edr\u00ec \u00e0r\u00e0 \u1ecd\u0300t\u1ecd\u0300 n\u00ecn\u00fa \u00ecd\u00e0gb\u00e0s\u00f3k\u00e9 \u00e0w\u1ecdn ibi \u00ecpam\u1ecd\u0301 d\u00e1t\u00e0, \u00ecṣ\u00e8t\u1ecd \u00e0w\u1ecdn ohun \u00e8l\u1ecd t\u00e1b\u00ecl\u00ec \u00e0ti p\u00ednp\u00edn, \u00e0ti or\u00ed\u1e63ir\u00ed\u1e63i \u1eb9\u0300y\u00e0 s\u1ecd\u0301f\u00edt\u00edwia \u00e0ti \u00ecṣ\u00e0k\u00f3so ay\u00e9lujara t\u00ed a l\u00e8 fi k\u00fan \u00e0w\u1ecdn \u1eb9\u0300t\u1ecd \u00e0k\u00f3k\u00f2 il\u00e9-i\u1e63\u1eb9\u0301.",
      svc4_title: "Iṣ\u1eb9\u0301 \u00ccṣ\u00e0k\u00f3so",
      svc4_desc: "N\u00ed ibi iṣ\u1eb9\u0301 \u00f2de-\u00f2n\u00ed, iṣ\u1eb9\u0301 \u00ecṣ\u00e0k\u00f3so \u00e0ti f\u00edfi iṣ\u1eb9\u0301 r\u00e1n\u1e63\u1eb9\u0301 s\u00ed \u1eb9l\u00f2m\u00edr\u00e0n \u1e63e p\u00e0t\u00e0k\u00ec f\u00fan \u00edd\u00edw\u1ecd\u0301n ow\u00f3 \u00e0ti \u1e63\u00edṣe iṣ\u1eb9\u0301 d\u00e1adaa. A l\u00e8 \u1e63\u00e0k\u00f3so Helpdesk r\u1eb9, Il\u00e9-\u00ect\u1ecd\u0301j\u00fa D\u00e1t\u00e0, \u00ecgba\u1e63\u1eb9\u0301 \u00f2\u1e63\u00ec\u1e63\u1eb9\u0301 tabi f\u00edfi iṣ\u1eb9\u0301 \u00f2\u1e63\u00ec\u1e63\u1eb9\u0301 r\u00e1n\u1e63\u1eb9\u0301 s\u00ed \u1eb9l\u00f2m\u00edr\u00e0n n\u00ed k\u00edk\u00fan. A \u0144 m\u00fa \u00e0w\u1ecdn ak\u1ecd\u0301\u1e63\u1eb9\u0301m\u1ecd\u1e63\u1eb9\u0301 w\u00e1 l\u00e1ti p\u00e8s\u1eb9\u0300 iṣ\u1eb9\u0301 t\u00ed \u00f3 d\u00e1ra j\u00f9l\u1ecd n\u00ed ow\u00f3 t\u00ed \u00f3 b\u1ecd\u0301gb\u1ecd\u0301n mu. Gbogbo \u00e0w\u1ecdn \u00f2\u1e63\u00ec\u1e63\u1eb9\u0301 wa t\u00ed a fi r\u00e1n\u1e63\u1eb9\u0301 ni a ti f\u00fan n\u00ed \u00ecd\u00e1nil\u00e9k\u1ecd\u0301\u1ecd\u0301 d\u00e1radara, t\u00ed a s\u00ed \u0144 t\u00fan d\u00e1 w\u1ecdn l\u1eb9\u0301k\u1ecd\u0301\u1ecd\u0301 n\u00edgba gbogbo l\u00e1ti b\u00e1 \u00e0w\u1ecdn \u00edy\u00edpad\u00e0 n\u00ecn\u00fa \u00e0y\u00edk\u00e1 \u00e0ti \u00ecm\u1ecd\u0300-\u1eb9\u0300r\u1ecd mu.",

      mgmt_h2: "Ol\u00f9dar\u00ed",
      mgmt_sub: "\u1eb8gb\u1eb9\u0301 t\u00ed y\u00f3\u00f2 m\u00fa \u00ecf\u1eb9\u0301 \u1ecdk\u00e0n r\u1eb9 \u1e63\u1eb9\u0300",
      role_ceo: "Ol\u00f3r\u00ed \u00d2\u1e63\u00ec\u1e63\u1eb9\u0301 Al\u00e1boj\u00fat\u00f3",
      role_dos: "Ol\u00f9dar\u00ed Iṣ\u1eb9\u0301",
      role_edm: "Ol\u00f9dar\u00ed Al\u00e1k\u00f2\u0301\u1e63o - T\u00edta",
      role_ssa: "\u00c0gb\u00e0 On\u00edm\u1ecd\u0300-\u00cct\u1ecd\u0300l\u1eb9\u0301s\u1eb9\u1eb9\u0300s\u1eb9 S\u1ecd\u0301f\u00edt\u00edwia",
      role_sa: "On\u00edm\u1ecd\u0300-\u00cct\u1ecd\u0300l\u1eb9\u0301s\u1eb9\u1eb9\u0300s\u1eb9 S\u1ecd\u0301f\u00edt\u00edwia",
      role_fao: "\u00d2\u1e63\u00ec\u1e63\u1eb9\u0301 \u00ccṣ\u00fan\u00e1 \u00e0ti \u00ccṣ\u00e0k\u00f3so",
      role_cso: "\u00d2\u1e63\u00ec\u1e63\u1eb9\u0301 \u00cct\u1ecd\u0301j\u00fa On\u00edb\u00e0\u00e1r\u00e0",

      contact_h2: "K\u00e0n S\u00ed Wa",
      contact_sub: "K\u00e0n s\u00ed wa l\u00e1ti b\u1eb9\u0300r\u1eb9\u0300",
      contact_location_label: "\u00c0d\u00edr\u1eb9\u0301s\u00ec:",
      contact_address: "\u1e62\u1ecd\u0301\u1ecd\u0300b\u00f9 D41-42, \u1ecdj\u00e0 Sabo, \u1ecd\u0300n\u00e0 Ijebu-Ode, Ikorodu, \u00c8k\u00f3. Naij\u00edr\u00eda.",
      contact_email_label: "\u00cdme\u00e8l\u00ec:",
      contact_call_label: "P\u00e8 wa:",
      form_name_label: "Or\u00fak\u1ecd R\u1eb9",
      form_name_msg: "J\u1ecd\u0300w\u1ecd\u0301 t\u1eb9 \u00f3 k\u00e9r\u00e9 t\u00e1n \u00echun m\u1eb9\u0301rin",
      form_email_label: "\u00cdme\u00e8l\u00ec R\u1eb9",
      form_email_msg: "J\u1ecd\u0300w\u1ecd\u0301 t\u1eb9 \u00edme\u00e8l\u00ec t\u00ed \u00f3 t\u1ecd\u0301",
      form_subject_label: "\u00c0k\u1ecd\u0301l\u00e9",
      form_subject_msg: "J\u1ecd\u0300w\u1ecd\u0301 t\u1eb9 \u00f3 k\u00e9r\u00e9 t\u00e1n \u00echun m\u1eb9\u0301j\u1ecd f\u00fan \u00e0k\u1ecd\u0301l\u00e9",
      form_message_label: "\u1ecc\u0300r\u1ecd\u0300",
      form_message_msg: "J\u1ecd\u0300w\u1ecd\u0301 k\u1ecd ohun kan s\u00ed wa",
      form_submit: "Fi \u1ecc\u0300r\u1ecd\u0300 R\u00e1n\u1e63\u1eb9\u0301",

      footer_address: "\u1e62\u1ecd\u0301\u1ecd\u0300b\u00f9 D41-42, \u1ecdj\u00e0 Sabo. \u1ecd\u0300n\u00e0 Ijebu-Ode, Ikorodu, \u00c8k\u00f3. Naij\u00edr\u00eda",
      contact_call_label_inline: "F\u00f3\u00f2n\u00f9:",
      contact_email_label_inline: "\u00cdme\u00e8l\u00ec:",
      footer_links_h4: "\u00c0w\u1ecdn \u00ccj\u00e1p\u1ecd\u0300 Am\u00fal\u00f2",
      footer_about: "N\u00edp\u00e0 wa",
      footer_services_h4: "\u00c0w\u1ecdn Iṣ\u1eb9\u0301 Wa",
      footer_svc1: "\u00cdm\u1ecd\u0300r\u00e0n IT",
      footer_svc2: "\u00ccd\u00e0gb\u00e0s\u00f3k\u00e9 Ay\u00e9lujara",
      footer_svc3: "\u00ccd\u00e0gb\u00e0s\u00f3k\u00e9 S\u1ecd\u0301f\u00edt\u00edwia",
      footer_svc4: "T\u00edt\u00e0 Ohun-\u00c8l\u1ecd",
      footer_svc5: "\u00ccd\u00e1nil\u00e9k\u1ecd\u0301\u1ecd\u0301",
      footer_social_h4: "\u00c0w\u1ecdn N\u1eb9\u0301t\u00edw\u1ecd\u0300k\u00ec \u00c0w\u00f9j\u1ecd Wa",
      footer_social_p: "T\u1eb9\u0300l\u00e9 Wa L\u00f3r\u00ed Gbogbo \u00c0w\u1ecdn P\u00e1t\u00e1k\u00f2 \u00c0w\u00f9j\u1ecd Wa",
      footer_copyright_prefix: "\u1eb8\u0300t\u1ecd\u0301 \u00c0k\u1ecd\u0301s\u00edl\u1eb9\u0300",
      footer_copyright_suffix: "Gbogbo \u1eb8\u0300t\u1ecd\u0301 Ni A D\u00e1 S\u00edl\u1eb9\u0300."
    },

    ja: {
      nav_home: "\u30db\u30fc\u30e0",
      nav_about: "\u4f1a\u793e\u6982\u8981",
      nav_services: "\u30b5\u30fc\u30d3\u30b9",
      nav_management: "\u7d4c\u55b6\u9663",
      nav_contact: "\u304a\u554f\u3044\u5408\u308f\u305b",

      hero_h1: "Desires Investment Limited\u3067\u3088\u308a\u826f\u3044\u30c7\u30b8\u30bf\u30eb\u4f53\u9a13\u3092",
      hero_h2: "\u79c1\u305f\u3061\u306f\u8c4a\u5bcc\u306a\u7d4c\u9a13\u3092\u6d3b\u304b\u3057\u3001\u5805\u7262\u3067\u30b3\u30b9\u30c8\u52b9\u7387\u304c\u9ad8\u304f\u4fe1\u983c\u6027\u306e\u9ad8\u3044\u30a6\u30a7\u30d6\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u304a\u5ba2\u69d8\u306b\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",
      hero_btn: "\u4f1a\u793e\u6982\u8981",

      about_h3: "\u4f1a\u793e\u6982\u8981",
      about_p: "Desires Investment Limited\u306f\u3001\u56fd\u5185\u5916\u306e\u5e45\u5e83\u3044\u9867\u5ba2\u57fa\u76e4\u3092\u652f\u3048\u308b\u3001\u5f93\u696d\u54e1\u304c\u6240\u6709\u3059\u308b\u6c11\u9593\u306eIT\u5c02\u9580\u30b5\u30fc\u30d3\u30b9\u4f01\u696d\u3067\u3059\u3002\u5f53\u793e\u306e\u4e3b\u306a\u9867\u5ba2\u306f\u3001\u60c5\u5831\u6280\u8853\u74b0\u5883\u304c\u8907\u96d1\u3067\u30df\u30c3\u30b7\u30e7\u30f3\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u306a\u4e2d\u5805\u4f01\u696d\u304b\u3089\u5927\u4f01\u696d\u307e\u3067\u3067\u3059\u3002\u60c5\u5831\u6280\u8853\u30a4\u30f3\u30d5\u30e9\u306e\u5c02\u9580\u30b5\u30fc\u30d3\u30b9\u3092\u4e3b\u8ef8\u3068\u3057\u306a\u304c\u3089\u3082\u3001\u6280\u8853\u30fb\u30d7\u30ed\u30bb\u30b9\u30fb\u4eba\u6750\uff08T+P+P\uff09\u3092\u6d3b\u7528\u3057\u3066\u304a\u5ba2\u69d8\u306e\u5168\u4f53\u7684\u306a\u52b9\u7387\u6027\u3068\u53ce\u76ca\u6027\u306e\u5411\u4e0a\u306b\u6ce8\u529b\u3057\u3066\u3044\u307e\u3059\u3002",
      mission_h4: "\u30df\u30c3\u30b7\u30e7\u30f3",
      mission_p: "\u79c1\u305f\u3061\u306f\u3001\u5353\u8d8a\u6027\u3092\u8ffd\u6c42\u3057\u3001\u304a\u5ba2\u69d8\u306e\u30cb\u30fc\u30ba\u306b\u5373\u3057\u305f\u3001\u30b3\u30b9\u30c8\u52b9\u7387\u306e\u9ad8\u3044\u4ed8\u52a0\u4fa1\u5024\u306e\u3042\u308b\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059\u3002\u5358\u306a\u308b\u53d6\u5f15\u3067\u306f\u306a\u304f\u3001\u5c02\u9580\u6027\u3092\u3082\u3063\u3066\u9577\u671f\u7684\u306a\u4fe1\u983c\u95a2\u4fc2\u3092\u7bc9\u304f\u3053\u3068\u306b\u52aa\u3081\u3066\u3044\u307e\u3059\u3002",
      vision_h4: "\u30d3\u30b8\u30e7\u30f3",
      vision_p: "\u672a\u6765\u306e\u53ef\u80fd\u6027\u3092\u3064\u304b\u307f\u3001\u304a\u5ba2\u69d8\u306b\u300c\u5927\u304d\u306a\u5b89\u5fc3\u300d\u3068\u6e80\u8db3\u3092\u3082\u305f\u3089\u3059\u671f\u5f85\u3092\u5275\u9020\u3059\u308b\u3053\u3068",
      policy_h4: "\u65b9\u9488",
      policy_p: "\u5f53\u793e\u306e\u54c1\u8cea\u65b9\u9488\u306f\u3001\u4e00\u8cab\u6027\u304c\u3042\u308a\u3001\u518d\u73fe\u53ef\u80fd\u3067\u6301\u7d9a\u53ef\u80fd\u306a\u30d7\u30ed\u30bb\u30b9\u3092\u7528\u3044\u3066\u3001\u304a\u5ba2\u69d8\u306b\u8fc5\u901f\u3067\u30b3\u30b9\u30c8\u52b9\u7387\u306e\u9ad8\u3044\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u52b9\u679c\u7684\u306a\u7814\u4fee\u30d7\u30ed\u30b0\u30e9\u30e0\u3068\u54c1\u8cea\u30c6\u30b9\u30c8\u30e2\u30c7\u30eb\u3092\u7d44\u307f\u5408\u308f\u305b\u3001\u52b9\u679c\u7684\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",

      services_h2: "\u30b5\u30fc\u30d3\u30b9",
      services_sub: "\u79c1\u305f\u3061\u304c\u63d0\u4f9b\u3059\u308b\u512a\u308c\u305f\u30b5\u30fc\u30d3\u30b9\u3092\u3054\u898b\u304f\u3060\u3055\u3044",
      svc1_title: "\u60c5\u5831\u6280\u8853\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0",
      svc1_desc: "\u30b3\u30b9\u30c8\u3092\u62b1\u3048\u3001\u30ea\u30b9\u30af\u3092\u7ba1\u7406\u3057\u3001\u6210\u9577\u306b\u5099\u3048\u3089\u308c\u308b\u3088\u3046\u3001\u304a\u5ba2\u69d8\u306e\u4f01\u696dIT\u8cc7\u7523\u306e\u529b\u3092\u518d\u3073\u6700\u9069\u5316\u3059\u308b\u304a\u624b\u4f1d\u3044\u3092\u3057\u307e\u3059\u3002",
      svc2_title: "\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u8ca9\u58f2\u3001\u4fdd\u5b88\u30fb\u4fee\u7406",
      svc2_desc: "\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u5e02\u5834\uff08\u30ce\u30fc\u30c8\u30d1\u30bd\u30b3\u30f3\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u306a\u3069\uff09\u306b\u306f\u591a\u304f\u306e\u9078\u629e\u80a2\u304c\u3042\u308a\u3001\u3054\u81ea\u5b85\u3084\u30aa\u30d5\u30a3\u30b9\u5411\u3051\u306b\u4f55\u3092\u9078\u3079\u3070\u3088\u3044\u304b\u8ff7\u3046\u3053\u3068\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002Desires Investment Limited\u306e\u55b6\u696d\u30c1\u30fc\u30e0\u304c\u304a\u5ba2\u69d8\u306e\u30cb\u30fc\u30ba\u3092\u304a\u4f3a\u3044\u3057\u3001\u5206\u6790\u3057\u305f\u4e0a\u3067\u6700\u9069\u306a\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u3092\u3054\u63d0\u6848\u3057\u307e\u3059\u3002",
      svc3_title: "\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u958b\u767a\u30fb\u30a6\u30a7\u30d6\u30b5\u30fc\u30d3\u30b9",
      svc3_desc: "\u5f53\u793e\u306f\u5e45\u5e83\u3044\u30ab\u30b9\u30bf\u30e0\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u958b\u767a\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u30ab\u30b9\u30bf\u30e0\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u958b\u767a\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u304a\u3088\u3073\u5206\u6563\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u8a2d\u8a08\u3001\u3055\u3089\u306b\u306f\u57fa\u5e79\u30b7\u30b9\u30c6\u30e0\u306b\u7d71\u5408\u53ef\u80fd\u306a\u5404\u7a2e\u30ab\u30b9\u30bf\u30e0\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3084\u30a6\u30a7\u30d6\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306b\u304a\u3044\u3066\u5353\u8d8a\u3057\u305f\u5b9f\u7e3e\u304c\u3042\u308a\u307e\u3059\u3002",
      svc4_title: "\u30de\u30cd\u30fc\u30b8\u30c9\u30b5\u30fc\u30d3\u30b9",
      svc4_desc: "\u4eca\u65e5\u306e\u8077\u5834\u306b\u304a\u3044\u3066\u3001\u30de\u30cd\u30fc\u30b8\u30c9\u30b5\u30fc\u30d3\u30b9\u3068\u30a2\u30a6\u30c8\u30bd\u30fc\u30b7\u30f3\u30b0\u306f\u30b3\u30b9\u30c8\u7ba1\u7406\u3068\u30b5\u30fc\u30d3\u30b9\u63d0\u4f9b\u306e\u52b9\u7387\u5316\u306b\u4e0d\u53ef\u6b20\u3067\u3059\u3002\u5f53\u793e\u306f\u30d8\u30eb\u30d7\u30c7\u30b9\u30af\u3001\u30c7\u30fc\u30bf\u30bb\u30f3\u30bf\u30fc\u3001\u4eba\u6750\u63a1\u7528\u3084\u4eba\u6750\u30a2\u30a6\u30c8\u30bd\u30fc\u30b7\u30f3\u30b0\u3092\u5b8c\u5168\u306b\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002\u5c02\u9580\u5bb6\u304c\u624b\u9803\u306a\u30b3\u30b9\u30c8\u3067\u6700\u9ad8\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u5f53\u793e\u306e\u30a2\u30a6\u30c8\u30bd\u30fc\u30b7\u30f3\u30b0\u30b9\u30bf\u30c3\u30d5\u306f\u5341\u5206\u306a\u7814\u4fee\u3092\u53d7\u3051\u3066\u304a\u308a\u3001\u74b0\u5883\u3084\u6280\u8853\u306e\u5909\u5316\u306b\u5bfe\u5fdc\u3067\u304d\u308b\u3088\u3046\u96a8\u6642\u518d\u7814\u4fee\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002",

      mgmt_h2: "\u7d4c\u55b6\u9663",
      mgmt_sub: "\u304a\u5ba2\u69d8\u306e\u3054\u671f\u5f85\u306b\u5fdc\u3048\u308b\u30c1\u30fc\u30e0",
      role_ceo: "\u6700\u9ad8\u7d4c\u55b6\u8cac\u4efb\u8005\uff08CEO\uff09",
      role_dos: "\u30b5\u30fc\u30d3\u30b9\u62c5\u5f53\u30c7\u30a3\u30ec\u30af\u30bf\u30fc",
      role_edm: "\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u62c5\u5f53\u5f79\u54e1",
      role_ssa: "\u30b7\u30cb\u30a2\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30a2\u30fc\u30ad\u30c6\u30af\u30c8",
      role_sa: "\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30a2\u30fc\u30ad\u30c6\u30af\u30c8",
      role_fao: "\u8ca1\u52d9\u30fb\u7dcf\u52d9\u62c5\u5f53",
      role_cso: "\u30ab\u30b9\u30bf\u30de\u30fc\u30b5\u30fc\u30d3\u30b9\u62c5\u5f53",

      contact_h2: "\u304a\u554f\u3044\u5408\u308f\u305b",
      contact_sub: "\u307e\u305a\u306f\u304a\u6c17\u8efd\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044",
      contact_location_label: "\u6240\u5728\u5730\uff1a",
      contact_address: "\u30ca\u30a4\u30b8\u30a7\u30ea\u30a2\u3001\u30e9\u30b4\u30b9\u3001\u30a4\u30b3\u30ed\u30c9\u30a5\u3001\u30a4\u30b8\u30a7\u30d6\u30fb\u30aa\u30c7\u901a\u308a\u3001\u30b5\u30dc\u30fb\u30de\u30fc\u30b1\u30c3\u30c8\u3001D41-42\u53f7\u5e97",
      contact_email_label: "\u30e1\u30fc\u30eb\uff1a",
      contact_call_label: "\u96fb\u8a71\uff1a",
      form_name_label: "\u304a\u540d\u524d",
      form_name_msg: "4\u6587\u5b57\u4ee5\u4e0a\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
      form_email_label: "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",
      form_email_msg: "\u6709\u52b9\u306a\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
      form_subject_label: "\u4ef6\u540d",
      form_subject_msg: "\u4ef6\u540d\u306f8\u6587\u5b57\u4ee5\u4e0a\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
      form_message_label: "\u30e1\u30c3\u30bb\u30fc\u30b8",
      form_message_msg: "\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
      form_submit: "\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1",

      footer_address: "\u30ca\u30a4\u30b8\u30a7\u30ea\u30a2\u3001\u30e9\u30b4\u30b9\u3001\u30a4\u30b3\u30ed\u30c9\u30a5\u3001\u30a4\u30b8\u30a7\u30d6\u30fb\u30aa\u30c7\u901a\u308a\u3001\u30b5\u30dc\u30fb\u30de\u30fc\u30b1\u30c3\u30c8\u3001D41-42\u53f7\u5e97",
      contact_call_label_inline: "\u96fb\u8a71\uff1a",
      contact_email_label_inline: "\u30e1\u30fc\u30eb\uff1a",
      footer_links_h4: "\u30ea\u30f3\u30af",
      footer_about: "\u4f1a\u793e\u6982\u8981",
      footer_services_h4: "\u30b5\u30fc\u30d3\u30b9\u4e00\u89a7",
      footer_svc1: "IT\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0",
      footer_svc2: "\u30a6\u30a7\u30d6\u958b\u767a",
      footer_svc3: "\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u958b\u767a",
      footer_svc4: "\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u8ca9\u58f2",
      footer_svc5: "\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
      footer_social_h4: "\u30bd\u30fc\u30b7\u30e3\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",
      footer_social_p: "\u3059\u3079\u3066\u306e\u30bd\u30fc\u30b7\u30e3\u30eb\u30e1\u30c7\u30a3\u30a2\u3067\u79c1\u305f\u3061\u3092\u30d5\u30a9\u30ed\u30fc\u3057\u3066\u304f\u3060\u3055\u3044",
      footer_copyright_prefix: "Copyright",
      footer_copyright_suffix: "All Rights Reserved."
    }
  };

  function applyTranslations(lang) {
    var dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-msg]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-msg");
      if (dict[key]) {
        el.setAttribute("data-msg", dict[key]);
      }
    });

    document.documentElement.setAttribute("lang", lang);

    var select = document.getElementById("langSelect");
    if (select && select.value !== lang) {
      select.value = lang;
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable, ignore */
    }
  }

  function detectInitialLanguage() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* ignore */
    }
    if (stored && SUPPORTED.indexOf(stored) !== -1) {
      return stored;
    }

    var browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (SUPPORTED.indexOf(browserLang) !== -1) {
      return browserLang;
    }
    return "en";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var select = document.getElementById("langSelect");
    var initialLang = detectInitialLanguage();
    applyTranslations(initialLang);

    if (select) {
      select.addEventListener("change", function () {
        applyTranslations(select.value);
      });
    }
  });
})();