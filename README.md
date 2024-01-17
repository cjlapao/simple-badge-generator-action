# Generates simple badges for flutter projects

![coverage](https://raw.githubusercontent.com/cjlapao/simple-badge-generator-action/main/badges/coverage.svg)
[![Lint Codebase](https://github.com/cjlapao/simple-badge-generator-action/actions/workflows/linter.yml/badge.svg)](https://github.com/cjlapao/simple-badge-generator-action/actions/workflows/linter.yml)
[![CI](https://github.com/cjlapao/simple-badge-generator-action/actions/workflows/ci.yml/badge.svg)](https://github.com/cjlapao/simple-badge-generator-action/actions/workflows/ci.yml)

This action generates simple badges for flutter projects with some advanced features.
You can simple create badges with an icon and text or more elaborated ones like boolean badges, semaphores and cobertura coverage ones.

for example a simple badge could be something like this:  
![github actions](./img/github_actions.svg)  
or a more elaborated one like this:  
![coverage](./img/cobertura.svg)  
where the coverage is automatically calculated and the color is automatically selected based
on the coverage percentage based on a cobertura xml report.

## Usage

for simple badges you can use the following syntax:

```yaml
steps:
  - uses: actions/checkout@v2
  - uses: cjlapao/simple-badge-generator-action@v1
    with:
      badge-path: './license.svg'
      title: 'License'
      value: 'MIT'
      value-fill-color: '#e9aa2b'
```

for cobertura badges you can use the following syntax:

```yaml
steps:
  - uses: actions/checkout@v2
  - uses: cjlapao/setup-flutter@v1
    with:
      badge-path: './license.svg'
      title: 'Coverage'
      cobertura-path: './cobertura-coverage.xml'
```

there are a lot more possible combinations, see the reference below for more information.

## Badge Types

| Name        | Description                                                                           |
|-------------|---------------------------------------------------------------------------------------|
| `simple`    | A simple badge with a title and a value                                               |
| `cobertura` | A badge that uses the cobertura coverage report to generate the badge color and value |
| `semaphore` | A badge that uses a *semaphore* style logic to generate the badge color               |
| `boolean`   | A badge that uses a boolean value to generate the badge color                         |

### Simple

this is a simple badge that has a title and a value, it can also contain an icon or have no value at all.
You can use this to inform about the license of the project or the version of the project or even dependencies.  
Examples:  
![simple](./img/github_actions.svg)  
![simple](./img/plastic.svg)

### Cobertura

This badge takes in a cobertura xml report and calculates the coverage percentage and generates a badge with the coverage percentage and a color based on the coverage percentage. the colors will be gardient from red to yellow to green depending on the threshold values.

Examples:  
![cobertura](./img/cobertura.svg)  
![cobertura](./img/cobertura_yellow.svg)  
![cobertura](./img/cobertura_red.svg)  

### Semaphore

This badge takes in three possible values for each of the colors, red, yellow and green. then it will generate a badge with the color based on the value that is passed in, if none is matched then it renders it with the default color.
you can also personalize the values for each of the colors.

### Boolean

Very similar to the semaphore badge but it only has two possible values, true or false. The value needs to be a boolean value and it will generate a badge with the color based on the value that is passed in, if none is matched then it renders it with the default color. it will accept a range of possible true values:

- `true`
- `t`
- `1`
- `yes`
- `y`
- `on`
- `enable`
- `active`
- `success`

**Note:** the values are case insensitive

## Themes

We allow a couple of themes to be used for the badges.

| Name             | Description                                     | Example                                     |
|------------------|-------------------------------------------------|---------------------------------------------|
| `flat`           | A flat theme                                    | ![flat](./img/flat.svg)                     |
| `flat-square`    | A flat theme but with square corners            | ![flat-square](./img/flat-square.svg)       |
| `plastic`        | A plastic theme that has a volume feeling to it | ![plastic](./img/plastic.svg)               |
| `plastic-square` | A plastic theme but with square corners         | ![plastic-square](./img/plastic-square.svg) |

## Options

| Name                               | Description                                               | Default   |
|------------------------------------|-----------------------------------------------------------|-----------|
| `badge-type`                       | The type of badge to generate                             | `simple`  |
| `badge-path`                       | The path where the generated badge will be saved          |           |
| `title`                            | The title of the badge, if none is supplied it will fail  |           |
| `title-fill-color`                 | The background color of the title                         | `#555`    |
| `title-font-color`                 | The font color of the title                               | `#fff`    |
| `value`                            | The value of the badge                                    |           |
| `value-fill-color`                 | The background color of the value                         | `#576C87` |
| `value-font-color`                 | The font color of the value                               | `#fff`    |
| `badge-icon`                       | The icon of the badge                                     | `none`    |
| `cobertura-path`                   | The path to the cobertura xml report                      |           |
| `cobertura-color-yellow-threshold` | The threshold to use for the cobertura badge yellow color | `50`      |
| `cobertura-color-green-threshold`  | The threshold to use for the cobertura badge green color  | `80`      |
| `semaphore-red-value`              | The value to use for the semaphore badge red color        |           |
| `semaphore-red-color`              | The color to use for the semaphore badge red color        | `#c21d03` |
| `semaphore-yellow-value`           | The value to use for the semaphore badge yellow color     |           |
| `semaphore-yellow-color`           | The color to use for the semaphore badge yellow color     | `#e9aa2b` |
| `semaphore-green-value`            | The value to use for the semaphore badge green color      |           |
| `semaphore-green-color`            | The color to use for the semaphore badge green color      | `#2E8B57` |
| `boolean-true-color`               | The color to use for the boolean badge true color         | `#2E8B57` |
| `boolean-false-color`              | The color to use for the boolean badge false color        | `#c21d03` |

## Outputs

| Name         | Description                                      |
|--------------|--------------------------------------------------|
| `badge-path` | The path where the generated badge will be saved |
