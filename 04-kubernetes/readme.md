# Kubernetes

"Kbernetes (K8s) é produto Open Source utilizado para automatizar a implantação, o dimensionamento e o gerenciamento de
aplicativos e contêiner".

- Ele veio do Google
- é disponibilizado através de um conjunto de API's
- normalmente acessamos a API usando a CLI: kubectl
- Tudo é baseado em estado vc configura o estado de acada objeto
- Kubernetes Master
    * Kube-apiserver
    * kube-controller-manager
    * kuber-scheduler
- Outros nodes:
    * kubelet
    * kubeproxy 

## Dinâmica superficial"

- cluster: conjunto de máquinas (nodes)
- cada máquina possui uma quantidade de vCPU e Memoória 
- Pods: 

<img src="./img/Captura de Tela 2022-04-03 às 14.46.35.png">

- deployment, provisionar os pod's, onde podemos provisionar quantas replicas desses pods, atraves do replicasets, 
geralmente nos setamos esses valores no proprio deployments.
- é atraves do deploymentes que indentificaa que o pod caiu, ou travou, ele emediatamente derruma o pod, e sobre outro 
no lugar.


## Kind e Kubernets

- é um projeto open souce para gerenciar clusters kubernet
- site:  https://kind.sigs.k8s.io/docs/user/quick-start#installation
- é necesário instalar o kubectl para funcionar
- site kubectl: https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/
- precisamos de nos atentar aos 3 comandos: create, delete e get

### Commands kind

Criado Cluster
```
kind create cluster
```

Informações do cluster
```
 kubectl cluster-info --context kind-kind
```


```

```
## replicasets
são as configurações de replica de pod da mesma aplicação

## deployment
contra o o replicats onde ele mata dos os pods anrigos e levanta outros no lugar e renomeando o replicaset para 
identificação

## service (svc) => ClusterIP
basicamente usamos o nome do serviço como host, e assim ele redireciona para algum dos pods que tem a determinada 
relação dele, essa relação é feita por uma flag chamda "selector" que olha para todos os pods que que batem com aquilo. 
Dessa forma mesmo que os pods ainda seja do deploy antigo ele recebe requisições se assim o service achar que deve 
faze-lo

## service => NodePort
esse é mais antigo, ajuda bastante quando queremos acessar de fora o service. Basicamente ele libera uma porta em todos 
os node no cluster e se souber o IP desse note e acessar porta, ele sera redirecionado para o service. Isso é pouco 
usado, mais com senso de demonstração, mas basicamente ele expoem uma porta para os outros clusters

## service => LoadBalancer
Gera um ip para acesso externo para acessar o servidor, ele é a soma dos outros dois servidores, fazendo a poste externa
entre os nodes e acesso externo

## Objetos de configuração
servi basicamente para aplicação de variaveis de ambiente que contem dados sensiveis dentro do kubernets, isso possivel
atraves do configMap, é um mapa de configuração onde consegue utilizado de varias forma na aplicação. Na mudança do 
configMap é necessario atualizar o deployment para depois realizar a troca nos pods, 

## HPA -> Horizontal Pod Autoscaler
Ele faz autoscaler da aplicação monitorando Metric Server, que é as metricas do Service, do serviço, em tempo real, de 
cada coisa, cada pod está consumindo. É muito comum usar o Prometus para salvar essa metricas em um banco de dados. 
Depois ele gera dashborad dentro do Graphana onde poderá ser monitorado em tempo quase real. Geralmente as conexões
entre os pods precisa-se de TLS, para assim o prometus se conecte e colete as informações necessárias.

## Resources
Dentro da declaração de `resources` temos o `requests` onde ficam os requisitos minimos para o pod rodar, dentro de temos
`cpu` ele é medido em milicores, 1 core é que vale a 1000m (milicores), ou seja, podemos colocar 0.5 ou 500m em sua 
declaração, ambos representão a mesma coisa. tambem temos `memory` que é medido em megas, ou seja, 20Mi é que vale a 20
megas de memoria que será alocado para cada pod. do lado de `requests` temos o `limits`que são os limites que cada pod
pode usar de recurso no cluster, ele tambem tem `memory` e `cpu`.  

```
kubectl top pod {{nome_do_pode}}
```
mostra como está o consumo do pod

## Stateless
São aplicações sem estado, é feito uma solicitação e é retornadno uma resposta, ela não precsisa guardar estado, ou 
informações

## Stateful
Ela tem que manter o dado, se não fizer isso, não tem sentido ela existir

## Volumes de persistencia
Podemos usar um tipo de node especifico para ou podemos usar serviços especificos como aws onde irão guardar o stado
da nossa aplicação, podendo gravar/ler um/mais de 1 por vez em cada node, deixando cada uma para um tipo especifico de
operaçã, ReadWriteOnce leitura e gravação apenas um, ReadWriteMany leitura e gravação de vários. Isso é definido no campo
`accessModes`
Esses volumes são compartilhados entre os clusters.
Podemos usar parte statica que sera alocado um valor especifico para o uso da aplicação, quando temos o tipo class que
é um formato mais dinamico que aloca recursos dinamicamente, dependendo da siatuação um pode ser melhor que o outro.
Sim é semelhante ao volume do docker.

```
https://kubernetes.io/docs/concepts/storage/persistent-volumes/
```

## 