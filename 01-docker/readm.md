# Docker

## Comandos Uteis

1 - 
```docker run -d -v "$(pwd)"/html/x:/usr/share/nginx/html nginx```

2 - 
```docker run --name ac -p 8080:80 -d nginx -v "$(pwd)"/html:/usr/share/html/```

## Imagens

Para baixar a imagem no seu computador
```docker pull ubuntu```

Para ver todas as imagens
```docker images```
