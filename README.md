![readmeyouwillregretitifyoudonotreadmeyouwillalsoregretit](https://raw.githubusercontent.com/PHELAT/jomleha.social/main/readmeyouwillregretitifyoudonotreadmeyouwillalsoregretit/jomleha.webp)

### Jomleha

Developed with Next.js and deployed on Vercel. Uses Firebase Firestore as its backing database. That's all for now.

### Run Locally

1. Download your firebase cert file into project's root directory, and name it `firebasekey.json`.
2. Create a `.env.local` file and define a `FIREBASE_URL` environment variable pointing to your firestore database url.
3. Run:

```sh
npm install
npm run dev
```

This will run the app locally at `http://localhost:3000`.
