resource "local_file" "exemplo" {
    filename = "exemplo.exe"
    content = var.conteudo
}

variable conteudo {
    type = string
    default = "hello world"
}

