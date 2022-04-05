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