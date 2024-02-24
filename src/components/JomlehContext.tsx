import { Context } from "@/entity/jomlehEntity";
import Link from "next/link";

export default function JomlehContext({ context }: { context?: Context }) {
  if (!context) {
    return null;
  }
  const contextTitle = () => {
    return <JomlehContextTitle context={context} />;
  };
  if (context.url) {
    return (
      <Link href={context.url} className="mt-8" target="blank">
        {contextTitle()}
      </Link>
    );
  }
  return contextTitle();
}

function JomlehContextTitle({ context }: { context: Context }) {
  return (
    <p
      className={`inline font-mono text-base text-zinc-400 ${context.url ? "hover:underline" : "pt-8"}`}
    >
      {context.title}
    </p>
  );
}
