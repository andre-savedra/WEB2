from .views import *
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()

router.register(r'categoria', CategoriaView)
router.register(r'livros', LivrosView)
router.register(r'emprestimos', EmprestimosView)
router.register(r'usuarios', UsuariosView)


urlpatterns = router.urls