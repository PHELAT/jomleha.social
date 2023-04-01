import { get } from '@vercel/edge-config';

export default async function initFirebase() {
    const { initializeApp, cert, getApps, getApp } = require('firebase-admin/app');

    const credentials = await get('GOOGLE_APPLICATION_CREDENTIALS');
    const config = {
        credential: cert(credentials),
        databaseURL: process.env.FIREBASE_URL
    };
    const app = !getApps().length ? initializeApp(config) : getApp()
}
