

export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col items-center p-24">
        <h1 className="text-lg">Hello world</h1>
        {children}
      </main>
    </>
  );
}