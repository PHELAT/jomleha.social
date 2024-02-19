import { get } from "@vercel/edge-config";
import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";

export default async function initFirebase() {
  let credentials;
  if (process.env.FIREBASE_CONFIG === undefined) {
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
