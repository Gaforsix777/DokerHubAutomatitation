# Publicación automática en Docker Hub

Cada push a `main` construye la aplicación React y publica una imagen en Docker Hub.

## Secretos de GitHub

En **Settings > Secrets and variables > Actions** crea estos secretos:

| Secreto | Valor |
|---|---|
| `DOCKER_USERNAME` | Usuario de Docker Hub |
| `DOCKER_PASSWORD` | Personal Access Token de Docker Hub |

No subas tokens ni claves privadas al repositorio.

## Imagen publicada

El workflow publica estas etiquetas:

```text
TU_USUARIO/mi-web-plana:latest
TU_USUARIO/mi-web-plana:SHA_DEL_COMMIT
```
