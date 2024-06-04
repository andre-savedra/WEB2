from django.shortcuts import render
from .models import *
from .serializers import *

from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status


class CustomModelViewSet(ModelViewSet):
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data, list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class UsuarioCustomizadoView(ModelViewSet):
    queryset = UsuarioCustomizado.objects.all()
    serializer_class = UsuarioCustomizadoSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        queryset = UsuarioCustomizado.objects.filter(id=user.id)        
        return queryset

class CategoriaProdutosView(ModelViewSet):
    queryset = CategoriaProdutos.objects.all() #select *from CategoriaProdutos
    serializer_class = CategoriaProdutosSerializer
    permission_classes = (IsAuthenticated,)

class ProdutosView(ModelViewSet):
    queryset = Produtos.objects.all() 
    serializer_class = ProdutosSerializer

class VendasView(ModelViewSet):
    queryset = Vendas.objects.all() 
    serializer_class = VendasSerializer

    def create(self, request, *args, **kwargs):
        #coleta os dados que vem do front
        data = request.data
        #consulta no banco para as condições previstas
        vendasDoUsuario = Vendas.objects.filter(usuarioFK=data['usuarioFK']).filter(status="P")
        print("quantidade de vendas pendentes: ", vendasDoUsuario.count())
        
        #se o limite de vendas for alçado impede a criação desta venda
        if vendasDoUsuario.count() >= 3:
            print("limite excedido")
            return Response(status=403,data='Usuário com mais de 3 vendas pendentes!')
        else:
            #se o limite ainda não foi alcançado!
            return super().create(request, *args, **kwargs)

class VendasProdutosView(CustomModelViewSet):
    queryset = VendasProdutos.objects.all() 
    serializer_class = VendaProdutosSerializer




