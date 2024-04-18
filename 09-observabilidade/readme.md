# Observabilidade

na teoria de controle, a obsrvabilidade é definida como uma medida de
quão bem os estados internos de um sistema podem ser inferidos a partir do conhecimento das saidas externas desse 
sistema. Simplificando, observablidade é quão bem você pode entender seu sistema compexo

- resumindo, sabendo que está entrada e o que está saindo do sistema sabemos extamente o que está acontecendo dentro 
dele, e consequentimente sabemos o estado do sistema
- observablidade vs monitoramento, o monitoramento irá mostrar que há algo de errado
- monitoramento se baseia em sabe com antecedencia quais sinais você dejse monitorar, ou seja, saber que é clitico e o 
que não é
- observablidade nos permite perguntar o porque alguma coisa está dando errado
- os 3 pilares da observablidade:
    - metricas - são os numeros do sistema
    - Logs - são eventos que são gerados para que fique claro que aconteceu em determinado momento
    - Tracing - é rastreabilidade, o erro de forma isolada não ajuda na maioria das vezes, mas o trajeto que o erro 
    tomou sim pode ajudar
- repositorio referencia:
    https://github.com/codeedu/fc2-observabilidade-elastic
- Usuarios Linux ou Mac
```
docker network create observability 
```

```
mkdir elasticsearch_data
```

```
sudo chown root beats/metric/metricbeat.yml
```


