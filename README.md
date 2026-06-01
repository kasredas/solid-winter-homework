# Homework in playwright

## Pre-requisite
1. Open `.env` file ir project root and set value for BASE_URL (example: `BASE_URL="<http://wwww.your_url>`)

2. Install pnpm

3. run `pnpm i`

4. run `pnpm exec playwright install`

## Running tests

#### Run all tests in parallel

```
 pnpm test:all
```

#### Run `wallpaper` test suite
```
 pnpm test:suite:wallpaper
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
