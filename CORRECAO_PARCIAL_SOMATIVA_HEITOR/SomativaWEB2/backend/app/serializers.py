from rest_framework import serializers
from .models import * 

class UsuarioCustomizadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsuarioCustomizado
        fields = '__all__'
        many = True

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'
        many = True

class LivrosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Livros
        fields = '__all__'
        many = True        

class EmprestimosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emprestimos
        fields = '__all__'
        many = True        