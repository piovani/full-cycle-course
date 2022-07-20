# Padrões e Técnicas avançadas com Git e Github

## Git Flow
É uma extensão e uma metedologia, é interessante utilzar alguns se deus padrões, porém algumas coisas da sua extenssão
podem ser muito evazivas, deixando o trabalho em equipe em segundo plano, como por exemplo commit diretamente na branch
develop e na master não tendo o devide Code Review feito no PR pela equipe

## Assinatura de commits
É uma garantia de quem está realizando aqueles commit realmente é você, já que o git permite configurar email e nome
de qualquer pessoa, mesmo que essa pessoa não seja você, para isso usamos chaves publicas e chaves privadas, e um projeto
gpc que alem de muitas coisas ele assina os commit para nós.

### List de chaves
```
gpg --list-secret-key --keyid-form LONG
```

### Gerar Chave
```
gpg --full-generate-key
```

### Get Chave
```
gpg --armor --export {{id_chave}}
```

### Set on Project use assinatura
```
git config --global user.signingkey {{id_chave}}
```

### Add variavel de ambiente na maquina (sem isso não funciona)
```
export GPG_TTY=$(tty)
```

### Para assinar por padrão os commits do respositorio
```
git config commit.gpgsing true
```

### Para assinar por padrão os commir de todos os repositorios
```
git config --global commit.gpgsing true 
```