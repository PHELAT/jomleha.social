![readmeyouwillregretitifyoudonotreadmeyouwillalsoregretit](https://raw.githubusercontent.com/PHELAT/jomleha.social/main/readmeyouwillregretitifyoudonotreadmeyouwillalsoregretit/jomleha.webp)
### Jomleha
Developed with Next.js and deployed on Vercel. Uses Firebase Firestore as its backing database. That's all. Oh, and you can find the [Admin Panel's source code here](https://github.com/PHELAT/panel.jomleha.social).
### Run Locally
1. Download your firebase cert file into project's root directory, and name it `firebasekey.json`.
2. Create a `.env` file(`.env.development.local` is recommended), and define a `FIREBASE_URL` environment variable pointing to your firestore database url.
3. Run:
```sh
npm install
npm run dev
```
This will run the app locally, usually at `http://localhost:3000`.
