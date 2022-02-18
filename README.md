# SetUp

`yarn init -y`

`yarn add mocha nyc nodemon sinon chai run-func chalk@4.1.2`

## Scripts

`"dev": "run-func \"./app/src/index\" main"`

`"test": "mocha"`

`"test:cov": "nyc mocha"`

`"test:w": "nodemon --watch \"app/**\" --ext \"js\" --exec \"yarn mocha\""`

## NYC File

`.nycrc.yaml`

```
all: true
check-coverage: true
extension:
  - '.js'
include:
  - 'app/src/**/*.js'
exclude:
  - '**/*.spec.js'
settings:
  lines: 95
  branches: 95
  functions: 100
  statements: 95
```

## Mocha

`.mocharc.yaml`

```
exit: true
bail: true
slow: 1000
recursive: true
spec:
  - './app/tests/**/*.spec.js'
```