# Misha's ESLint Configuration

## Install

```sh
npm i -D eslint eslint-config-misha
```

## Usage

There are three available configurations.

| Key | Description |
| --- | ----------- |
| `misha` | TypeScript configuration. |
| `misha/vue` | Vue configuration. |
| `misha/vue3` | Vue 3 configuration. |

Write a basic `.eslintrc.js` file as follows, replacing the string with the desired configuration.

```js
module.exports = {
  extends: [
    'misha/vue',
  ],
};
```
