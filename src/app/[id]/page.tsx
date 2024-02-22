import Footer from "@/components/Footer";
import { Metadata } from "next";
import { getJomleh } from "@/datasource/jomleha-datasource";
import Dabire from "@/components/Dabire";
import Jomleh from "@/components/Jomleh";
import JomlehContext from "@/components/JomlehContext";

export default async function DetailPage({ params }: DetailProps) {
  const data = await getJomleh(params.id);
  return (
    <div className="flex flex-col h-screen justify-between">
      <main className="w-full h-full flex items-center justify-center px-8">
        <div className="max-w-md">
          <Dabire>
            <div className="flex flex-col overflow-y-auto no-scrollbar">
              <Jomleh content={data} />
              <JomlehContext context={data.context} />
            </div>
          </Dabire>
        </div>
      </main>
      <Footer link="/" showIcons={false} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: DetailProps): Promise<Metadata> {
  const data = await getJomleh(params.id);
  return {
    description: data.jomleh,
  };
}

export type DetailProps = {
  params: {
    id: string;
  };
};
