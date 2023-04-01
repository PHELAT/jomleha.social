import Link from "next/link";

export type Jomleh = {
    id: number,
    jomleh: string
}

export interface JomlehaProps {
    content: Jomleh[]
}

export default function Jomleha(props: JomlehaProps) {
    return (
        <>
            <main className="w-full h-full overflow-y-auto px-8 md:px-24 lg:px-48 pt-16 pb-16">
                <div className="flex flex-col gap-4">
                    {parseContent(props.content)}
                </div>
            </main>
        </>
    )
}

const parseContent = (content: Jomleh[]) => {
    let elements: JSX.Element[] = []
    content.forEach(element => {
        elements.push(
            <div className="border-r-2 border-stone-500 rounded border-dotted pr-4" key={element.id}>
                <Link href={`/jomleh/${element.id}`}>
                    <p className="zer hover:underline">{element.jomleh}</p>
                </Link>
            </div>
        );
    })
    return elements;
}
