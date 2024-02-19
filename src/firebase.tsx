export default async function initFirebase() {
  const {
    initializeApp,
    cert,
    getApps,
    getApp,
  } = require("firebase-admin/app");

  let credentials = {};
  if (process.env.FIREBASE_CONFIG === undefined) {
    const { get } = require("@vercel/edge-config");
    credentials = await get("GOOGLE_APPLICATION_CREDENTIALS");
  } else {
    const fileSystem = require("fs");
    const credentialsFile = fileSystem.readFileSync(
      process.env.FIREBASE_CONFIG,
    );
    credentials = JSON.parse(credentialsFile);
  }

  const config = {
    credential: cert(credentials),
    databaseURL: process.env.FIREBASE_URL,
  };
  const app = !getApps().length ? initializeApp(config) : getApp();
}
