# Terraform

    É um ferramenta opensource, ele é desenvolvido em Golang, ele é para facilitar na hora de montar a infraestrutura da 
aplicação, sendo em plataformas PASS ou cloud provider.

## Idempotêmcoa

    Idempotêmco é forma de realizar uma tarefa mais de uma vez, e evitando assim prejudicar o primeiro evento, algumas 
vezes.

## Terraform vs Ansible

    O terraform faz de melhor é provisonar infrastructura
    O que o Ansible faz de melhor, gerenciamento e automação de configurações.

    Não signica que um não consegue fazer o que o outro faz, mas sim que tem ferrametas melhores para determinada tarefa.

    Em ambiente real é comum vc subir as VM's com o Terraform e para configurar essas VM's seria realizada pelo Ansible.

## Gerenciamento de Estado

    Tudo que o terraform fizer ele vai anotar em arquivo e isso se torna os estados da aplicação, se for modificar 
alguma coisa, o terraform irá comparar o que é para ser feito com que é ele já tem feito, algumas vezes para ele alterar 
alguma coisa ele precisará destrouir o que ele já tem feito, para fazer tudo denovo, e por isso as anotaçõees das ações 
dele são tão importante.

    Ele é escrito em Go, que torna ele em um binario para a instação nas maquinas.


## Commandos
iniciar o terraform, e instala na pasta local onde ele foi executado provider que ele precisa para executar
```
terraform init
```

plano de execução da tarefa que está programada para ser executada, e cria um arquivo look com o hash de alteração dele
```
terraform plan
```

aplica a funcionalidade programada, mas precisa de confirmação antes da excução
```
terraform apply
```


## Variaveis
pode ser declardo dentro do aruivo com `varible` para indicar que é uma variavel, podendo deixar ate um valor default.
pode criar um arquivo com o nome `terraform.tfvars` e todas as variaveis ficarem ali.
Pode tambem pegar as variaveis de ambiente da propria maquina que está executando.
tambme é possivel passar as variaveis atraves de linha de comando iniciando com `-var` seguido com o nome da variavel
e o valor entre chaves

## output
tambem podemos validar a saida da execução do terraform

## datasource
serve para ler alguma coisa que já existe, ou seja apos a criação de um arquivou ou até mesmo output, podemos validar
a saida do mesmo.