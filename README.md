
# avance-vsa-site

Landing Page" de "Avance - Villas de San Andrés" migrada desde WordPress a Vue.js V3 con Composition API.
# Proyecto Vue.js con Composition API y Vite

Este proyecto utiliza Vue.js V3 con Composition API y Vite para un desarrollo rápido y eficiente. A continuación, se detallan los pasos para configurar el proyecto y algunos comandos útiles para su gestión.

## Configuración del Proyecto

### Instalación de Dependencias

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```sh
npm install

```
## Comandos del Proyecto

A continuación, se detallan los comandos disponibles para la gestión del proyecto:

### Desarrollo Local:
Inicia el servidor de desarrollo con Vite.
```sh
npm run dev
```

### Tailwind CSS:

Compila los estilos de Tailwind CSS a partir de input.css y genera tailwind.css.

```sh
npm run tailwind
```

### Construcción del Proyecto:

Realiza la construcción del proyecto para producción.

```sh
npm run build
```

### Vista Previa del Proyecto:

Inicia una vista previa del proyecto construido.

```sh
npm run preview
```
### Formateo con Prettier:

Utiliza Prettier para formatear el código en el directorio src/.

```sh
npm run format
```

### Linter

Ejecuta ESLint para analizar y corregir problemas de estilo de código.

```sh
npm run lint
```
# Estructura del Proyecto Vue.js

```javascript
avance-vsa-site
├─ public
│  └─ pdf
└─ src
   ├─ assets
   │  ├─ fonts
   │  └─ image
   │     ├─ images-amenidades
   │     ├─ images-buganvilia-a
   │     └─ images-veranera-a
   ├─ components
   │  ├─ common
   │  └─ ComponentsBuganvilia
   ├─ ComponentsHome
   └─ ComponentsVeranera
├─ router
├─ stores
├─ utils
├─ views
├─ App.vue
└─ main.js

```


## Directorio: `avance-vsa-site`

### Subdirectorio: `public`

- Contiene archivos estáticos accesibles directamente desde el navegador.
  - Subdirectorio: `pdf`
    - Almacena archivos PDF accesibles desde la aplicación.

### Subdirectorio: `src`

- Directorio principal de código fuente.

  #### Subdirectorio: `assets`

  - Recursos estáticos como fuentes e imágenes.
  
    - Subdirectorio: `fonts`
      - Contiene las fuentes utilizadas en el proyecto.
    
    - Subdirectorio: `image`
      - Subdirectorios específicos para conjuntos de imágenes.
        - `images-amenidades`
        - `images-buganvilia-a`
        - `images-veranera-a`

  #### Subdirectorio: `components`

  - Almacena componentes reutilizables.

    - Subdirectorio: `common`
      - Componentes comunes utilizados en diferentes partes de la aplicación.
    
    - Subdirectorio: `ComponentsBuganvilia`
      - Componentes específicos de Buganvilia.

    - Subdirectorio: `ComponentsHome`
      - Componentes relacionados con la vista principal.

    - Subdirectorio: `ComponentsVeranera`
      - Componentes específicos de Veranera.

  #### Otros Subdirectorios

  - Pueden incluir `router`, `stores`, `utils`, `views`, etc. según la necesidad.

- Archivos principales:

  - `App.vue`: Componente principal de la aplicación.
  
  - `main.js`: Punto de entrada principal, donde se inicializa la aplicación Vue y se configuran plugins.


