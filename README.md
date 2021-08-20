# UniqueVision ESLint Configuration

## Install

```sh
npm i -D eslint eslint-config-uv
```

## Usage

There are three available configurations.

| Key | Description |
| --- | ----------- |
| `uv` | TypeScript configuration. |
| `uv/vue` | Vue configuration. |
| `uv/vue3` | Vue 3 configuration. |

Write a basic `.eslintrc.js` file as follows, replacing the string with the desired configuration.

```js
module.exports = {
  extends: [
    'uv/vue',
  ],
};
```
