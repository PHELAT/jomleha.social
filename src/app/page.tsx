import Jomleha, { Jomleh } from "@/components/jomleha";
import Footer from "@/components/footer";
import { getFirestore } from "firebase-admin/firestore";
import initFirebase from "@/firebase";

export default async function Home() {
  const jomleha = await fetchJomleha();
  return (
    <div className="flex flex-col h-screen justify-between">
      <Jomleha content={jomleha} />
      <Footer link="/about" showIcons={false} />
    </div>
  );
}

async function fetchJomleha(): Promise<Jomleh[]> {
  await initFirebase();
  const db = getFirestore();
  const snapshot = await db
    .collection("jomleha")
    .orderBy("added", "desc")
    .get();
  const jomleha: Jomleh[] = [];
  snapshot.forEach((doc: any) => {
    jomleha.push({ id: doc.id, ...JSON.parse(JSON.stringify(doc.data())) });
  });
  return jomleha;
}
