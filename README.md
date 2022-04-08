# Tourepedia website

Marketing website for tourepedia: https://tourepedia.com

## Getting started

**Prerequisite** - `node^14.0.0`

```bash
git clone git@github.com:tourepedia/www www && cd www
cp .env.example .env #update the environment variables accordingly
npm install
npm run dev
```

## Scripts

```bash
npm run dev # start the development server
npm run build_test # create the test build
npm run build # create the production build
npx netilfy dev # to run the netlify functions
```

## Contributions

### Sembark API Keys

Get the api keys from Sembark Dashboard and update your .env file to interact with Sembark APIs.

### Recaptcha

For testing purpose, we are using [Google Recaptcha Keys for Testing Environment](https://developers.google.com/recaptcha/docs/faq#id-like-to-run-automated-tests-with-recaptcha.-what-should-i-do)
