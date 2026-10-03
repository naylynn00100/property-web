# Property Portal Web

The web app is the browser experience for finding properties in Yangon and Mandalay and for managing listings.

## Requirements

- Node.js 20 or newer.
- npm.
- A running [Property Portal API](../property-api/README.md).

## Install and run locally

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal, normally `http://localhost:5173`.

To point the app at a different API, create `.env.local`:

```dotenv
VITE_API_BASE_URL=http://localhost:4000/api/v1
```

If this variable is omitted, the app uses the local API URL above.

## What you can do

- Browse the latest published listings.
- Search by keyword, city, transaction type, and property type.
- Filter by bedrooms and sort by newest or price.
- Open listing details and reveal the contact phone number.
- Create an account, sign in, and manage your listings.
- Submit a listing with an image for review.
- Sign in as an admin to approve, reject, or hide listings.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check and create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |

## API dependency

The web app sends requests to the API's `/api/v1` base path and stores the local sign-in session in the browser. Start the API first and seed its demo data if the home page has no listings.
