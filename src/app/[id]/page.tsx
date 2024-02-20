import Link from "next/link";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { getJomleh } from "@/datasource/jomleha-datasource";
import { Context } from "@/entity/jomleh";

export default async function DetailPage({ params }: DetailProps) {
  const data = await getJomleh(params.id);
  return (
    <div className="flex flex-col h-screen justify-between">
      <main className="w-full h-full flex items-center justify-center px-8">
        <div className="max-w-md">
          <div
            className="border-s-2 border-stone-500 rounded border-dotted ps-4"
            dir="auto"
          >
            <div className="flex flex-col overflow-y-auto zarfeZer">
              <p className="zer">{data.jomleh}</p>
              <JomlehContext context={data.context} />
            </div>
          </div>
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

function JomlehContext({ context }: { context?: Context }) {
  if (!context) {
    return null;
  }
  const contextTitle = () => {
    return <JomlehContextTitle context={context} />;
  };
  if (context.url) {
    return (
      <Link href={context.url!} className="mt-8" target="blank">
        {contextTitle()}
      </Link>
    );
  }
  return contextTitle();
}

function JomlehContextTitle({ context }: { context: Context }) {
  return (
    <p className={`manbaZer ${context.url ? "hover:underline" : "pt-8"}`}>
      {context.title}
    </p>
  );
}

export type DetailProps = {
  params: {
    id: string;
  };
};
