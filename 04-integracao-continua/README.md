# Integração Contínua

## Status Check

garante que um Pull Request(PR) não será mergeado ao reposit'orio sem antes ter passado pelo processo de CI ou msm 
um processo de Code Review

## Ferramentas Populares

* Jenkins
* Github Actions
* Circle CI
* AWS Code Build
* Azure DevOps
* Google Cloud Build
* GitLab Pipelines / CI

## Github Actions

Temos um workflow, são conjunto s de processos definidos para serem executados.

É possivel ter mais de um workflow no mesmo repositorio, cada um para um cenarios expecifico

Os workflows são definidos com aquivos `.yml`

Jobs são os processos dentro do workflow, o workflow pode possuir um ou mais jobs

Os workflows podem ser iniciados atraves de eventos do Github ou atraves de agendamentos

## Evento 
Temos os eventos do Github onde podemos colocar alguns filtros, ambiente, ações que as actions irão executar. 

<img src="./imgs/Screen Shot 2022-07-25 at 21.25.45.png"/>

## Action

É a ação que de fato será executada em um dos Steps de um Job em um Workflow, pode ser criada do zero ou ser reutilizada 
de actions pre-existentes.

gm

## Project usado

https://github.com/piovani/workflow

## LINK DESAFIO

https://github.com/piovani/node-sonar-cloud
