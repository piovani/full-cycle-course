# API Gateway com Kong e Kubernetes

## Kong API Gateway

- Elementos: Rotas, services, plugins, consumers, upstreams e targets
- kubernetes ingtess - é a maneira de realizar a exposição de rotas HTTP e HTTPS para fora do cluster, Este roteamento de tráfego é controlado por regras definidas dentro do recurso Ingress do Kubernets
- o Kong fica cmo mais uma camada na entreda ou saida de dados, antes de entrar no service.
<img src="./img/Screenshot 2022-12-05 at 21.01.17.png">
- é criado um objeto ingress, que o kong irá traduzir para uma rota, com suas regras
<img src="./img/Screenshot 2022-12-05 at 21.05.06.png">
- o Kong tem o controle de usuarios, mas nao é recomendado que esse contrele seja feito pela API Gateway,
o ideial é delegar para para um serviço, como o Keyclock
- Link do repositorio: https://github.com/devfullcycle/FC3-kong-automation

## Kong e Kobernetes
- Kong custom resource definitions, são objetos do kong em formato k8s
- temos varios parametros que o k8s reconhece, que deve repassar isso para o serviço do kong
- Ingress e kongInglres, são configurações de rotas, ou endereços de repasse para um determinado serviço
- o Load Balance do Kong é mais aplimorado que o do k8s


## Keyclock
- temos os helms que são os ambientes
- temos os flows que são os contextos
- temos os usuarios
- então podemos ter um usuario autenticado para um determinado contexto, mas não para o outro
- rest limit por usuário -> limit de requests por tempo e por usuário, eveitando ataques de negação de serviço

## APIops
- é um conceito que aplica os solidos e testados principios de DevOps e GitOps para o ciclo de vida das API's e micrisserviços
- serve principalmente que gerencie os elementos de maneira automatica e com qualidade nas entregas
- ciclo:
<img src="./img/Screenshot 2022-12-07 at 08.47.21.png">
- 