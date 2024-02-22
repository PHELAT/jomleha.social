export default function Dabire({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="border-s-2 border-stone-500 rounded border-dotted ps-4 min-h-12 flex items-center"
      dir="auto"
    >
      {children}
    </div>
  );
}
