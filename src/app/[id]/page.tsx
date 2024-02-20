import { Jomleh } from "@/components/jomleha";
import Link from "next/link";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { getJomleh } from "@/datasource/jomleha";

export default async function Jomleh({ params }: DetailProps) {
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
              {renderContext(data)}
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

function renderContext(jomleh: Jomleh) {
  if (jomleh.context === undefined) {
    return <></>;
  }
  const isUrl = jomleh.context.url !== undefined;
  const contextTitle = (
    <p className={`manbaZer ${isUrl ? "hover:underline" : "pt-8"}`}>
      {jomleh.context.title}
    </p>
  );
  return (
    <>
      {isUrl ? (
        <Link href={jomleh.context.url!} className="mt-8" target="blank">
          {contextTitle}
        </Link>
      ) : (
        contextTitle
      )}
    </>
  );
}

export type DetailProps = {
  params: {
    id: string;
  };
};
