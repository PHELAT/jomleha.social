import Footer from "@/components/Footer";
import { getJomleha } from "@/datasource/jomleha-datasource";
import Jomleh from "@/components/Jomleh";
import Dabire from "@/components/Dabire";

export default async function HomePage() {
  const jomleha = await getJomleha();
  return (
    <div className="flex h-screen flex-col justify-between">
      <main className="h-full w-full overflow-y-auto px-8 pb-16 pt-16 md:px-24 lg:px-48">
        <div className="flex flex-col gap-4">
          {jomleha.map((value) => {
            return (
              <Dabire key={value.id}>
                <Jomleh content={value} link={`/${value.id}`} />
              </Dabire>
            );
          })}
        </div>
      </main>
      <Footer link="/about" showIcons={false} />
    </div>
  );
}
