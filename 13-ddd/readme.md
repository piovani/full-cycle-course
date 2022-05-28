# DDD (Domian Driven Design)

## Introdução

- O nome mesmo já diz, como pode-se desejar o software guiado ao dominio

- o dominio é o coração do software, e desenvolver em DDD é colocar esse coração em foto principal do sistema

- "É uma forma de desenvolver software com o foco no coração da aplicação - o que chamos de domínio - tendo o objetivo 
de entender suas regras, processos e complexidades, separando-as de outros pontos coplexo que normalmente são adicionados
durante o processo de desenvolvimento"

- ele deve ser aplicado em casos de softwares complexos

- quando se tem contextos de negocios diferentes são negocios difentes

- muitas vezes o motivo pelo software vem a falhar, é a complexidade de negocio que não foi muito bem transcrita para
o software

- peças melhores que fazem parte do sistema que s encaixão para torna-lo como um todo

- linguagem ubiqua ou linguagem universal onde todos os envolvidos poderão se comunicar

- In short,DDD is primarilly about modeling a Ubiquitous Language in an explicitly Bounded Context. 
"Em suma, o DDD é principalmente sobre a modelagem de uma linguagem ubíqua em um contexto explicitamente delimitado"


## Domínios, Subdomínios e contextos

- Core Domain -> sem ele não tem sentido a aplicação existir, coração do negocio,também pode ser o diferencial 
competitivo da empresa
- Support Subdomain -> subdomain de suporte, ele irá apoiar o domain no dia a dia, ele irá ajudar com a operação do 
domain, tornando-a possível
- Generic Subdomain -> genericos subdomain, ele não tem tanto diferencial competitivo para a empresa
- O objetivo da aplicação é resolver o problema, entao dentro da aplicação temos problema e solução
- Problema - visão geral do domínio e suas complexidades -> subdominios
- Solução - analise e modelagem do domínio -> contexto delimitados

<img src="./img/Captura de Tela 2022-04-03 às 13.02.09.png">

- O que DDD trás:
    1 - Veja o Problema que temos
    2 - Começe a modelar esse problema
    3 - Começe a separar esse problema em problemas menores
    4 - Delimite esses problemas em pontos, onde irá se organizar para resolver esses problemas
    5 - Assim cria-se o contexto para cada solução de problema
- Contextos delimitados (Bounded Contexts): 
"A Bounded Context is an explicit boundary within wihich a domain model exists. Inside the boundary all terms and 
phrases o the Ubiquitous Language have specific meaning, and the model reflects the Language With exactness." - 
"Um Contexto Limitado é um limite explícito dentro do qual existe um modelo de domínio. Dentro do limite todos os termos 
e as frases da Língua Ubíqua têm significado específico, e o modelo reflete a Língua com exatidão."
- Uma observação, um dos limitadores mais forte é a linguagem, onde todos estão falando a mesma linguagem é porque todos
estao no mesmo contexto.
- Contexto é rei, ele vai determiar que area estamos tabalhando, que problema iremos resolver
- Se temos duas palavras iguais, mas estao representando duas coias diferentes. Ticket -> vendas de ingressos. 
Ticket -> Suporte ao cliente
- Temos modelos que estão de todos os lados, com pespectiva diferentes. 
    * Client -> vendas de ingressos, evento, ticket, local, vendedor.
    * Client -> suporte ao cliente, ticket, duvida, departamento, responsavel

## Visão Estratégica

- Padroes de context Mapping
    * Partnership -> padrao de parceria
    * Shared Kernel -> mantem uma biblioteca compartilha entre contextos
    * Customr-Supplier Development -> cliente fornecedor, onde um fornece e outro consome esse serviço
    * Conformist -> conformista relação de conformidade
    * ACL (Anticorrpiption-Layer) -> uma camada de adaptação de interfaces
    * Open Host Service -> Onde é fornecido um serviço  outro(s) poderam acessar a qualquer momento
    * Published Language -> onde a linguagem irá determinar o contexto
    * Separete ways -> separação de vias
    * Big Ball of Mud -> sistemão onde ele vai lidar com todos os contextos no dia a dia, ou conhecido mo monolito as vezes