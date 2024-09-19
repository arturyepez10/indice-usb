# Indice USB

#### Autor
- Arturo Yepez

#### Language

All of the documentation is initially set to be written in *Spanish*, but all code will be written using English best practices.

## Descripción

El actual paquete tiene como objetivo el ofrecer una herramienta con la que poder hacer cálculo del **Indice Academico** de forma online para los estudiantes de la Universidad Simón Bolívar en Caracas, Venezuela.

Este se define como una medida cuantitativa que refleja el rendimiento académico de un estudiante. Este índice se calcula en función de las calificaciones obtenidas en las asignaturas cursadas y los créditos asociados a cada una.

Una de las características del **Indice Academico** es que ofrece una visión clara del desempeño académico del estudiante a lo largo de su carrera universitaria.

## Calculo del Indice Academico

Para más información de como se realiza el cálculo, se puede consultar el siguiente repositorio que contiene el paquete de **npm**: [Indice USB (NodeJS)](https://github.com/arturyepez10/indice-usb-node/).

## ¿Cómo utilizar?

1. Si es la primera vez que entras al sitio, te saldrá el aviso sobre la Política de Uso de Datos, tienes la opción de aceptarla o no.
1. Para agregar un nuevo período académico, darle al botón que dice "Agregar Trimestre"
1. Llena los datos del trimestre, incluyendo todos los cursos vistos
  * Puedes marcar si el curso tiene alguna de las siguientes características: "con efecto" o "retirado"
  * El comportamiento de estas coincide con el comportamiento que se exhibe en la página oficial del expediente académico.
1. ¡Agrega cuantos períodos académicos consideres necesarios!
1. Si necesitas cambiar alguno o cometiste un error en algunos de los cursos que viste, no te preocupes: presiona el icono del lapiz y podrás editar toda la información relacionada.
1. Si introdujiste por error un trimestre, tienes la opción de eliminarlo presionando el icono de la papelera de basura. ¡Asi de sencillo!

Todas las acciones disponibles, actualizarán en tiempo real el indice academico y lo mostrarán en el panel lateral (si es versión web) o en cajón de información (si es versión móvil).

## Funcionalidades

### UI Interactiva

Mediante la Interfaz de Usuario interactiva de este proyecto está diseñada para ofrecer una experiencia intuitiva y eficiente. A continuación, se describen las principales características y funcionalidades:

1. **Panel Lateral**
1. **Área de Contenido Adicional**: La mayor parte de la interfaz está dedicada a un área de contenido dinámico, donde se visualizan los datos de los períodos académicos ingresados al sistema. Dependiendo de la acción seleccionada, este área y las estadísticas relacionadas se actualiza nen tiempo real sin necesidad de recargar la página o de acciones adicionales.
1. **Actualización en Tiempo Real**: Para todos los períodos académicos, en caso de cualquier error, se pueden actualizar los cursos específicos sin necesidad de remover y agregar todos los demás cursos en ese período.
1. **Temas**: Se incluye soporte para varios temas (claro/oscuro) que se pueden cambiar desde el panel de configuración.

## Vistas Responsives para Web y Mobile

Desde el inicio, la plataforma fue diseñada para poder ser utilizada ya sea en computador de escritorio o en telefono/dispositivo móvil.

Todas las funcionalidades pueden ser accedidas en ambas versiones del sitio. Inclusive, en la versión móvil el panel lateral fue adaptado para tener un comportamiento más propio de dispositivos moviles, siendo reemplazado por un "cajón" vertical.

## Persistencia de la Información

A nivel de operabilidad, los cambios o posibles registros de nuevos períodos académicos no son tan recurrentes por lo que a veces guardar el estado de los datos introducidos puede ser más eficiente a largo plazo, y es por ello que este proyecto puede utilizar el `localStorage` del navegador para mantener la persistencia de ciertos datos clave en el lado del cliente.

En caso de que el usuario acepte la política de uso de datos, la información de los períodos académicos se va a almacenar `localStorage` esto permite que la información se guarde de manera local en el dispositivo del usuario, incluso después de cerrar el navegador o recargar la página.

### Exportación / Importanción de Data (Por Implementar)

A su vez, para mayor usabilidad, también se ofrece la posibilidad de poder descargar la información para almacenarla donde el usuario considere que sea más comodo.
* El archivo que se puede exportar descargable tiene formato `JSON`.
* El archivo que se puede importar debe ser `JSON`.
  * Una serie de validaciones se es realizada sobre el archivo cargado para evitar errores de consistencia en la información.

## ¿Como utilizarla de forma local?

Para más información referirse al archivo secundariod de documentación: `development.md`.

## Sugerencias

Si tienen alguna sugerencia, sientanse libres de contactarme o crear un *issue* al respecto :)