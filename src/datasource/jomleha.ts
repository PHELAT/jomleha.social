import { unstable_cache } from "next/cache";
import { getFirestore } from "firebase-admin/firestore";
import { Jomleh } from "@/components/jomleha";
import initFirebase from "@/firebase";

const JOMLEHA_COLLECTION = "jomleha";

export const getJomleh = async (id: string) => {
  return await unstable_cache(async (id) => fetchJomleh(id), [id], {
    revalidate: 86400,
  })(id);
};

async function fetchJomleh(id: string): Promise<Jomleh> {
  await initFirebase();
  const db = getFirestore();
  const snapshot = await db.collection(JOMLEHA_COLLECTION).doc(id).get();
  if (!snapshot.exists) {
    return Promise.reject();
  }
  return {
    id: snapshot.id,
    ...JSON.parse(JSON.stringify(snapshot.data())),
  };
}
