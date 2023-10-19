This Repo is meant to test the implementation related to a Prismic issue.

## How tot test the link
Go to:
https://prismic-test-tau.vercel.app/test
Analyse the JSON objects received from Prismic, All `testflag` should be `true`, for the docs not published even once after including the `testflag`, the value is `null`

## How to test locally

First, run the development server:

```bash
yarn run dev
```

Open [http://localhost:3000/test](http://localhost:3000/test) with your browser to see the result.

Run or check the slice-machine models to analyze the flow:

```bash
yarn run slicemachine
```
