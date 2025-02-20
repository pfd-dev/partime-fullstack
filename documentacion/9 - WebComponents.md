# Web Components

## [Web Components nativos](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)

* [Uso de Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
  * [Ciclo de vida de un Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks)
  * [Reactividad](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes)
* [El Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
  * [Importación de CSS](https://web.dev/articles/css-module-scripts)
    1. Cambiar en `tsconfig.json` `"moduleResolution": "nodenext"`
    2. Cambiar en `tsconfig.json` `"module": "nodenext"`
    3. Usar la importación con `import css from '../css/styles.css' assert { type: 'css' }`
    4. Añadir `// @ts-expect-error TS doesn't like this` justo antes de la importación
* [Templates y Slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots)
* [Implementación de Single File Web Components](https://ckeditor.com/blog/implementing-single-file-web-components/)

### Comparativa de librerías de Componentes Web

| Librería | Facilidad de aprendizaje | Optimización y potencia | Demanda laboral | Paz mental |
|---|:---:|:---:|:---:|:---:|
| Lit Element | 1 | 4 | 2 | 1 |
| Vue JS | 2 | 3 | 3 | 2 |
| Angular | 4 | 1 | 2 | 3 |
| React JS | 3 | 1 | 1 | 4 |
| Svelte JS | 2 | 2 | 4 | 1 |

## [LitElement](https://lit.dev/)

Instalación local de Lit:

```bash
npm i --save lit
```

Importación de módulos necesarios:

```js
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
```

[Declaración](https://lit.dev/docs/components/defining/) de un componente:

```js
export class MyElement extends LitElement { /* ... */ }

customElements.define('my-element', MyElement);
```

* [Renderizado](https://lit.dev/docs/components/rendering/)
* [Propiedades](https://lit.dev/docs/components/properties/)
* [Estados](https://lit.dev/docs/components/properties/#internal-reactive-state)
* [Estilos](https://lit.dev/docs/components/styles/)
* [Ciclo de vida](https://lit.dev/docs/components/lifecycle/)
* [Shadow DOM](https://lit.dev/docs/components/shadow-dom/)
* [Eventos](https://lit.dev/docs/components/events/)
* [Templates](https://lit.dev/docs/templates/overview/)
  * Expresiones
  * Condicionales
  * Listas
  * Directivas

## [VueJS](https://vuejs.org/)

Creación de un proyecto:

```bash
npm create vue@latest
cd <your-project-name>
$ npm install
$ npm run dev
```

Construcción del código antes de subir a producción:

```bash
npm run build
```

Creación de la aplicación:

```html
<div id="app">
  <button @click="count++">{{ count }}</button>
</div>
```

```js
import { createApp } from 'vue'

const app = createApp({
  /* root component options */
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')
```

* [Templates](https://vuejs.org/guide/essentials/template-syntax.html)
* [Reactividad](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
* [Propiedades computadas](https://vuejs.org/guide/essentials/computed.html)
* [Estilos y clases CSS](https://vuejs.org/guide/essentials/class-and-style.html)
* [Condicionales](https://vuejs.org/guide/essentials/conditional.html)
* [Listas](https://vuejs.org/guide/essentials/list.html)
* [Eventos](https://vuejs.org/guide/essentials/event-handling.html)
* [Bindings y Models](https://vuejs.org/guide/essentials/forms.html)
* [Watchers](https://vuejs.org/guide/essentials/watchers.html)
* [Referencias al DOM](https://vuejs.org/guide/essentials/template-refs.html)
* [Componentes](https://vuejs.org/guide/essentials/component-basics.html)
  * [Ciclo de vida](https://vuejs.org/guide/essentials/lifecycle.html)
  * [Registro de componentes](https://vuejs.org/guide/components/registration.html)
  * [Propiedades](https://vuejs.org/guide/components/props.html)
  * [Eventos](https://vuejs.org/guide/components/events.html)
  * [Modelos](https://vuejs.org/guide/components/v-model.html)
  * [Slots](https://vuejs.org/guide/components/slots.html)

## [AngularJS](https://angularjs.dev/)

Instalación y creación de un proyecto:

```bash
npm install -g @angular/cli

ng new <project-name>
cd <project-name>
npm start
```

Estructura de un componente:

```html
<!-- user-profile.html -->
<h1>Use profile</h1>
<p>This is the user profile page</p>
```

```css
/* user-profile.css */
h1 {
  font-size: 3em;
}
```

```ts
// user-profile.ts
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html',
  styleUrl: 'user-profile.css',
})
export class UserProfile {
  // Component behavior is defined in here
}
```

* [Reactividad](https://angular.dev/guide/signals)
* [Componentes](https://angular.dev/guide/components)
* [Templates](https://angular.dev/guide/templates)
* [Events](https://angular.dev/guide/templates/event-listeners)
* [Operadores de control de flujo](https://angular.dev/guide/templates/control-flow)

## [ReactJS](https://react.dev/)

Instalación:

```bash
npm install react react-dom
```

```html
<body>
  <div id="app"></div>
</body>
```

```js
import { createRoot } from 'react-dom/client';

function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
}

// Render your React component
const root = createRoot(document.getElementById('app'));
root.render(<NavigationBar />);
```

* [Pensando a la manera de React](https://react.dev/learn/thinking-in-react)
* [Componentes](https://react.dev/learn/your-first-component)
* [JSX](https://react.dev/learn/writing-markup-with-jsx)
* [Propiedades](https://react.dev/learn/passing-props-to-a-component)
* [Condicionales](https://react.dev/learn/conditional-rendering)
* [Bucles](https://react.dev/learn/rendering-lists)
* [Eventos](https://react.dev/learn/responding-to-events)
* [Estados](https://react.dev/learn/state-a-components-memory)
  * [Gestión avanzada de los estados](https://react.dev/learn/managing-state)
* [Renderizado](https://react.dev/learn/render-and-commit)
* [Referencias](https://react.dev/learn/referencing-values-with-refs)

## [SvelteJS](https://svelte.dev/)

Instalación y uso:

```bash
npx sv create myapp
cd myapp
npm install
npm run dev
```

[Estructura de un componente](https://svelte.dev/docs/svelte/svelte-files):

```html
<script lang="ts">
function greet() {
  alert('Welcome to Svelte!');
}
</script>

<button onclick={greet}>click me</button>

<style>
button {
  font-size: 2em;
}
</style>
```

* [Runas](https://svelte.dev/docs/svelte/what-are-runes)
  * [Estados](https://svelte.dev/docs/svelte/$state)
  * [Derivadas](https://svelte.dev/docs/svelte/$derived)
  * [Efectos en el OnDomContentLoaded](https://svelte.dev/docs/svelte/$effect)
  * [Propiedades de los componentes](https://svelte.dev/docs/svelte/$props)
    * [Propiedad enlazada](https://svelte.dev/docs/svelte/$bindable)
  * [Inspección reactiva](https://svelte.dev/docs/svelte/$inspect)
  * [Elemento padre](https://svelte.dev/docs/svelte/$host)
* [Marcado](https://svelte.dev/docs/svelte/basic-markup)
  * [Condicionales](https://svelte.dev/docs/svelte/if)
  * [Iteradores](https://svelte.dev/docs/svelte/each)
  * [Promesas](https://svelte.dev/docs/svelte/await)
  * [Snippets](https://svelte.dev/docs/svelte/snippet)
* [Elementos especiales](https://svelte.dev/docs/svelte/svelte-window)
* [Ciclo de vida](https://svelte.dev/docs/svelte/lifecycle-hooks)

## [HTMX](https://htmx.org/docs/#introduction)
