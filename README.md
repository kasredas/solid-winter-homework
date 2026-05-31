# Homework in playwright

## Pre-requisite
1. Open `.env` file ir project root and set value for BASE_URL
BASE_URL="<http://wwww.your_url>"

2. Install pnpm

3. run `pnpm i`

## Running tests

#### Run all tests in parallel

```
 pnpm test:all
```

#### Run all tests in headed mode

```
 pnpm test:all:headed
```

#### Run all tests sequentially 

```
 pnpm test:inline
```

#### Run all tests sequentially in headed mode

```
 pnpm test:inline:headed
```

#### Run single test in headed mode

```
 pnpm test:single:headed tests/path_to_test.spec.ts
```

<hr>

#### Other notes
Most default configs was suitable for homework tasks, however in fully functioning testing project - would need to tweak default timeouts.

