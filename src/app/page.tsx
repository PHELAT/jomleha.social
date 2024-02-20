import Footer from "@/components/footer";
import { getJomleha } from "@/datasource/jomleha-datasource";
import Link from "next/link";
import { Jomleh } from "@/entity/jomleh";

export default async function Home() {
  const jomleha = await getJomleha();
  return (
    <div className="flex flex-col h-screen justify-between">
      <main className="w-full h-full overflow-y-auto px-8 md:px-24 lg:px-48 pt-16 pb-16">
        <div className="flex flex-col gap-4">
          {jomleha.map((value) => {
            return <JomlehContent key={value.id} jomleh={value} />;
          })}
        </div>
      </main>
      <Footer link="/about" showIcons={false} />
    </div>
  );
}

function JomlehContent({ jomleh }: { jomleh: Jomleh }) {
  return (
    <div
      className="border-s-2 border-stone-500 rounded border-dotted ps-4"
      dir="auto"
    >
      <Link href={`/${jomleh.id}`}>
        <p className="zer hover:underline">{jomleh.jomleh}</p>
      </Link>
    </div>
  );
}
