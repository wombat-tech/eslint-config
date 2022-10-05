# Spielworks ESlint config

This is our configuration for linting JavaScript and TypeScript.
It's a shared config for [ESLint](https://eslint.org/). See
[here](https://eslint.org/docs/latest/developer-guide/shareable-configs)
for documentation on shared configs.

## Usage

To use the config in another project, first install the dependency (and
eslint):

```shell
npm install --save-dev eslint @spielworksdev/eslint-config
```

Then write a config file:

```yaml
# .eslintrc.yml
extends:
  - '@spielworksdev'
```

This will make the config usable in any NPM script running the linter.

## Development of the config

While working on the shared config itself it is useful to work
with `npm link`. This allows to use the local version of the config
in other projects without publishing.

First, in the directory of this project run

```shell
npm link
```

Then in another project that consumes the config, run

```shell
npm link --install-links @spielworksdev/eslint-config
```

The `--install-links` parameter is required to install the
required peer dependencies.

