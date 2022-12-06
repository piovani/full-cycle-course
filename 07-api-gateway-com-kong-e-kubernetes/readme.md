# API Gateway com Kong e Kubernetes

## Kong API Gateway

- Elementos: Rotas, services, plugins, consumers, upstreams e targets
- kubernetes ingtess - é a maneira de realizar a exposição de rotas HTTP e HTTPS para fora do cluster, Este roteamento de tráfego é controlado por regras definidas dentro do recurso Ingress do Kubernets
- o Kong fica cmo mais uma camada na entreda ou saida de dados, antes de entrar no service.
<img src="./img/Screenshot 2022-12-05 at 21.01.17.png">
- é criado um objeto ingress, que o kong irá traduzir para uma rota, com suas regras
<img src="./img/Screenshot 2022-12-05 at 21.05.06.png">
- 