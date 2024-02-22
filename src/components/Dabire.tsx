export default function Dabire({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="border-s-2 border-stone-500 rounded border-dotted ps-4"
      dir="auto"
    >
      {children}
    </div>
  );
}
