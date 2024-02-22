import { JomlehEntity } from "@/entity/jomlehEntity";
import Link from "next/link";

export default function Jomleh({ content, link }: JomlehProps) {
  const jomleh = () => {
    const hoverUnderline = link ? "hover:underline" : "";
    return <p className={`zer ${hoverUnderline}`}>{content.jomleh}</p>;
  };
  if (link) {
    return <Link href={link}>{jomleh()}</Link>;
  }
  return jomleh();
}

export type JomlehProps = {
  content: JomlehEntity;
  link?: string;
};
