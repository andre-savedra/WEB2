from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin

class AdminUsuarioCustomizado(UserAdmin):
    model=UsuarioCustomizado
    list_display = ['id', 'email', 'cpf']
    list_display_links = ('id', 'email', 'cpf',)
    fieldsets = (
        (None,{'fields': ('email','password')}),
        ('Permissions', {'fields': ('is_staff','is_active','groups','user_permissions',)}),
        ('Management', {'fields': ('last_login',)}),
        ('Custom fields', {'fields': ('cpf','telefone','endereco',)}),
    )
    filter_horizontal = ('groups','user_permissions',)
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email','password1','password2', 'is_staff','is_active','groups','user_permissions',)
        }),
    )    
    search_fields = ['email',]
    ordering = ['email']

admin.site.register(UsuarioCustomizado,AdminUsuarioCustomizado)


class AdminCategoria(admin.ModelAdmin):
    list_display = ['id', 'nome']
    list_display_links = ('id', 'nome',)
    search_fields = ('nome',)
    list_per_page = 10

admin.site.register(Categoria,AdminCategoria)

class AdminLivros(admin.ModelAdmin):
    list_display = ['id', 'titulo', 'formato']
    list_display_links = ('id', 'titulo', 'formato',)
    search_fields = ('titulo',)

admin.site.register(Livros,AdminLivros)

class AdminEmprestimos(admin.ModelAdmin):
    list_display = ['id', 'usuarioFK']
    list_display_links = ('id',  'usuarioFK',)
    search_fields = ('usuarioFK',)

admin.site.register(Emprestimos,AdminEmprestimos)