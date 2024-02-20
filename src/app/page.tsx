import Jomleha from "@/components/jomleha";
import Footer from "@/components/footer";
import { getJomleha } from "@/datasource/jomleha";

export default async function Home() {
  const jomleha = await getJomleha();
  return (
    <div className="flex flex-col h-screen justify-between">
      <Jomleha content={jomleha} />
      <Footer link="/about" showIcons={false} />
    </div>
  );
}
