import { unstable_cache } from "next/cache";
import { getFirestore } from "firebase-admin/firestore";
import initFirebase from "@/util/firebase";
import { JomlehEntity, Jomleha } from "@/entity/jomlehEntity";

const JOMLEHA_COLLECTION = "jomleha";

export const getJomleh = (id: string): Promise<JomlehEntity> => {
  return unstable_cache(async (id) => fetchJomleh(id), [id], {
    revalidate: 86400,
  })(id);
};

export const getJomleha = (): Promise<Jomleha> => {
  return fetchJomleha();
};

async function fetchJomleh(id: string): Promise<JomlehEntity> {
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

async function fetchJomleha(): Promise<Jomleha> {
  await initFirebase();
  const db = getFirestore();
  const snapshot = await db
    .collection(JOMLEHA_COLLECTION)
    .orderBy("added", "desc")
    .get();
  const jomleha: Jomleha = [];
  snapshot.forEach((doc: any) => {
    jomleha.push({ id: doc.id, ...JSON.parse(JSON.stringify(doc.data())) });
  });
  return jomleha;
}
