# UniqueVision ESLint Configuration

## Maintenance Suspension Notice

- We have discontinued this maintenance, please use eslint-config-recommended or a similar configuration.
- 私たちはこのメンテナンスを中止しました。代わりに eslint-config-recommended または類似の設定をご利用ください。

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
