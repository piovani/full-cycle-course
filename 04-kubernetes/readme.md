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
contra o o replicats onde ele mata dos os pods anrigos e levanta outros no lugar e renomeando o replicaset para identificação

## service (svc) => ClusterIP
basicamente usamos o nome do serviço como host, e assim ele redireciona para algum dos pods que tem a determinada relação dele,
essa relação é feita por uma flag chamda "selector" que olha para todos os pods que que batem com aquilo. Dessa forma
mesmo que os pods ainda seja do deploy antigo ele recebe requisições se assim o service achar que deve faze-lo

## service => NodePort
esse é mais antigo, ajuda bastante quando queremos acessar de fora o service. Basicamente ele libera uma porta em todos os
node no cluster e se souber o IP desse note e acessar porta, ele sera redirecionado para o service. Isso é pouco usado,
mais com senso de demonstração, mas basicamente ele expoem uma porta para os outros clusters

## service => LoadBalancer
Gera um ip para acesso externo para acessar o servidor, ele é a soma dos outros dois servidores, fazendo a poste externa
entre os nodes e acesso externo

## Objetos de configuração
servi basicamente para aplicação de variaveis de ambiente que contem dados sensiveis dentro do kubernets, isso possivel
atraves do configMap, é um mapa de configuração onde consegue utilizado de varias forma na aplicação. Na mudança do configMap
é necessario atualizar o deployment para depois realizar a troca nos pods, 

