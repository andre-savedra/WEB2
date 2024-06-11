from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class CategoriaView(ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class LivrosView(ModelViewSet):
    queryset = Livros.objects.filter(status="A")
    serializer_class = LivrosSerializer

class EmprestimosView(ModelViewSet):
    queryset = Emprestimos.objects.all()
    serializer_class = EmprestimosSerializer

    # def create(self, request, *args, **kwargs):
    #     #coleta os dados que vem do front
    #     data = request.data
    #     #consulta no banco para as condições previstas
    #     emprestimoUsuario = Emprestimos.objects.filter(usuarioFK=data['usuarioFK']).filter(status="P")
    #     print("quantidade de vendas pendentes: ", vendasDoUsuario.count())
        
    #     #se o limite de vendas for alçado impede a criação desta venda
    #     if vendasDoUsuario.count() >= 3:
    #         print("limite excedido")
    #         return Response(status=403,data='Usuário com mais de 3 vendas pendentes!')
    #     else:
    #         #se o limite ainda não foi alcançado!
    #         return super().create(request, *args, **kwargs)

class UsuariosView(ModelViewSet):
    queryset = UsuarioCustomizado.objects.all()
    serializer_class = UsuarioCustomizadoSerializer

    def get_queryset(self):
        user = self.request.user
        queryset = UsuarioCustomizado.objects.filter(id=user.id)
        return queryset