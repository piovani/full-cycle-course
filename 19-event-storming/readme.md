# Event Storming

- é uma tecnica cria por Alberto Brandolini p q possamos entender de forma mais clara o dominio das aplicações através
dos eventos gerados por elas. Normalmente acontece em um formato de wekshop, é uma dinmica de groupo envolvendo 
"domain experts" e a area tecnica
- ele geralemnte trabalha muito com postites, o ideal é que senha uma souça ou uma parede onde se possa apresentar
para todos os partcipantes e eles possam passar entre cada item de forma independente.


## Eventos e Comandos
- Mapeamento dos eventos, com isso identificar todos os ventos gerados pelo sistema
- Se coneseguir entender todos os eventos, conseguentimente entende-se todos os processos do sistema
- Os eventos sao marcados por postiti laranja, é apenas um exemplo trazido pelo autor
- podemos ter varios eventos pequenos e no final do percurso um evento maior representado por um postiti maior 
conseguentimente
- os comando são representado por postitis azuis, onde podemos nos baser nos comandos passados p o sistema, e com base
nesses comandos e seus parametros teremos a suas saidas
- atires sao representados por postitis amarelos, são todos que interagem diretamente com o sistema
- 

## Pontos de decisão e policies
- para tomar um decisão precisamos de dados, que podem está em vários lugares, banco de daods, outros sistemas e etc, 
os modelos de dados são representados pela cor verde
- policy/politica: quando algo aconecer, faça, é uma reação do sistema, basicamente um gatilho, ela é representada pela 
cor roxa, podendo ser de maneira automatica ou manual
- 