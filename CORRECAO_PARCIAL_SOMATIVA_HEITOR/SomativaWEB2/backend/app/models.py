from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .gerenciador import Gerenciador

class UsuarioCustomizado(AbstractBaseUser,PermissionsMixin):
     email = models.EmailField("endereço de email", unique=True)
     is_staff = models.BooleanField(default=False)
     is_active = models.BooleanField(default=True)
     telefone = models.CharField(max_length=15, null=True, blank=True)
     endereco = models.CharField(max_length=200)
     cpf = models.CharField(max_length=20)
     
     objects = Gerenciador()

     USERNAME_FIELD = "email"
     REQUIRED_FIELDS = []

     def __str__(self):
          return self.email

class Categoria(models.Model):
    nome = models.CharField(max_length=150)

    def __str__(self):
        return self.nome
    
STATUS_LIVRO = [
    ("P","PENDENTE"),
    ("A","APROVADO"),
    ("C","CANCELADO"),

] 

FORMATO_LIVRO = [
    ("E","Ebook"),
    ("F","FÍSICO"),

]  
    
class Livros(models.Model):
    titulo = models.CharField(max_length=150)
    paginas = models.IntegerField()
    descricao = models.CharField(max_length=500)
    formato = models.CharField(max_length=15, choices=FORMATO_LIVRO)
    status = models.CharField(max_length=15, choices=STATUS_LIVRO, default=STATUS_LIVRO)
    edicao = models.IntegerField()
    autor = models.CharField(max_length=150)
    anoPublicacao = models.CharField(max_length=4)
    categoriFK = models.ForeignKey(Categoria, related_name='categoriaLivro', on_delete=models.CASCADE)
    quantidade = models.IntegerField()
    valor = models.DecimalField(max_digits=6, decimal_places=2)
    fotoCapa = models.CharField(max_length=1000)
    avaliacao = models.DecimalField(max_digits=3, decimal_places=1)

    def __str__(self):
        return self.titulo
    
class Emprestimos(models.Model): 
    livroFK = models.ManyToManyField(Livros)
    usuarioFK = models.ForeignKey(UsuarioCustomizado, related_name='emprestimoUsuario', on_delete=models.CASCADE)
    dataEmprestimo = models.DateField(auto_now_add=True)
    dataPrevista = models.DateField()
    dataDevolucao = models.DateField(blank=True,null=True)
    
    def __str__(self):
        return self.usuarioFK.email