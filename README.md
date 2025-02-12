![Cover](https://github.com/itbruno/site-FHMC/assets/3206543/8c747ea5-45ef-4eba-9408-6fe8941593c2)

## FHMC Media Holding

FHMC website was created with NextJS

## Requirements

- NextJS 13
- NodeJS 16+

## Setup

### Install dependencies

To install all dependencies run:

```sh
$ npm install
```

To start the project locally, run:

```sh
$ npm run dev
```

We have some scripts available
| Command | Description |
| -- | -- |
| `$ npm run dev` | To run local environment |
| `$ npm run build` | To generate bundle of files |
| `$ npm run start` | To run the project from bundle generated |
| `$ npm run postbuild` | Generate sitemaps from pages |
| `$ npm run lint` | Run ESlint on project |
| `$ npm run prettier:fix` | Format all files based on .prettierrc.js config |

### Add env variables

We have some required environment variables located on `.env.example`
To add local env duplicate `.env.example` and rewrite to `.env.local`

| Variable                      | Description                                            |
| ----------------------------- | ------------------------------------------------------ |
| `NEXT_PUBLIC_RESEND_API`      | API Key from Resend to send emails from careers form |
| `NEXT_PUBLIC_GA4_TRACKING_ID` | GA4 tracking code                                      |

## Content and i18n

All contents are located on `/public/locales/[LANGUAGE]`
Each language folder has .json files with content.

After save content changes, it's necessary re-run the dev command to reflect all content updates.

## Forms

### Contact form

For contact form, we are send emails from Google Forms
All responses available at [this sheet](https://docs.google.com/spreadsheets/d/16GmDec7IPI6D9g_iQr75ENgOJnS9YBc2SP2V82ktXMU/edit?resourcekey#gid=1764129744)
_\* the sheet access is restricted by email_

### Careers form

For careers form we are using Resend to perform emails.
Its required to have `NEXT_PUBLIC_RESEND_API` env variable filled to work.
Useful link to [create and configure Resend API KEY](https://resend.com/)

## Deploy to Google Cloud Run

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)
