# Service Mesh com Istio

- o istio é basiamente um gerenciador de regras
- Service Mesh ou malha de serviço é uma caada extra adicionada junto ao seu cluster visando monitorar e modificar em 
tempo real o trafego das aplicações, bem como elevar o nível de segurança e onfiabilidade de todos ecossistema.
- o istio é um projeto open-source que implementa service mesh, visando diminuir a complexidade no gerenciamento de
aplicações distruiidas independente de qual linguagem ou tecnologia as elas foram desenvolvidas.
- O que istio tem:
    - gerenciamento de trafgo (gateways - entrada e saida)
    - Load Balancing - com mais opções do que o K8S
    - Timout - caso demore muito para responder podemos da um exception
    - Politicas de retry - podendo controlar a quantidade de retentativas
    - Circuit Breaker - Colocando um limite de requests, para novas requests já receberem um erro de caro e essa 
requests nem chegarem à aplicação
    - Fault injection - simular erros para a aplicação entar se curar e assim validar tratamentos de erros
    - Observabilidade
        - Metricas
        - Traces distruibidos
        - Logs
    - Segurança 
        - Man-in-the-middle - criptografar as chamadas entre os MS's para caso seja interceptadas essas chamas não haja 
    problema
        - mTLS - multuo TLS que é tipo de cripgrafia
        - AAA (authentication, authorization e audit)
    
## Dinâmica e Sidecar Proxy

- Diferente da aquitetura normal do k8s, os POD's com istio tem 2 containers um deles trabalhando como um Proxy
- Temos a camada Mash que tem o istio que irá configurar toda essa estutura de POD's é chamada de Control Plane
- São os containers Proxy's que se comunicam com a camada de istio que obtemos todos os estados das aplicações
- 