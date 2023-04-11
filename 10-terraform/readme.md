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
