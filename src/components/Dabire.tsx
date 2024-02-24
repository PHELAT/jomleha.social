export default function Dabire({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="flex min-h-12 items-center rounded border-s-2 border-dotted border-stone-500 ps-4"
      dir="auto"
    >
      {children}
    </div>
  );
}
