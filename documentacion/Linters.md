# Linters

## [ESLint]

```bash
npm install --save-dev eslint eslint-plugin-vue
npm init @eslint/config
```

* [ESLint VS Code extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## [Stylelint]

```bash
npm install --save-dev stylelint stylelint-config-standard
```

Crea un archivo ```.stylelintrc.json``` con el siguiente contenido:

```json
{
  "extends": "stylelint-config-standard"
}
```

O desde la consola:

```bash
echo "{\n\"extends\": \"stylelint-config-standard\"\n}" > .stylelintrc.json
```

```bash
npx stylelint "**/*.css"
```

[Stylelint VS Code extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Añadir la extensión ```.vue``` a los settings: ```stylelint.validate```.

[stylelint-config-recommended-vue](https://github.com/ota-meshi/stylelint-config-recommended-vue).

```bash
npm install --save-dev postcss-html stylelint-config-recommended-vue
```

Modificar la configuración:

```bash
echo "{\n\"extends\": [\"stylelint-config-standard\", \"stylelint-config-recommended-vue\"]\n}" > .stylelintrc.json
```

## [commitlint]

**¡Ojo!** en la documentación oficial está indicada la instalación con el parámetro ```-g``` para hacer una instalación global, cosa que desaconsejo enormemente. En mi caso yo siempre hago una instalación local al proyecto como dependencia de desarrollo.

```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

Crea un archivo ```commitlint.config.js``` con el siguiente contenido:

```javascript
module.exports = {extends: ['@commitlint/config-conventional']}
```

O desde la consola:

```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

[Commitlint VS Code extension](https://marketplace.visualstudio.com/items?itemName=joshbolduc.commitlint)

## [markdownlint]

Archivo ```.markdownlint.json```, para desactivar el warning por HTML entro de un .md (MD033) y el máximo de 80 caracteres por línea (MD013):

```json
{
  "MD033": false,
  "MD013": false
}
```

[markdownlint VS Code extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

## [remark]

Lint and format markdown code with remark and [remark-lint](https://github.com/remarkjs/remark-lint)

[remark VS Code extension](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-remark)

## [lint-staged]

## [Standard](https://github.com/standard/standard)

[ESLint]: https://eslint.org/
[Stylelint]: https://stylelint.io/
[commitlint]: https://commitlint.js.org/
[markdownlint]: https://github.com/DavidAnson/markdownlint
[remark]: https://remark.js.org/
[lint-staged]: https://www.npmjs.com/package/lint-staged
