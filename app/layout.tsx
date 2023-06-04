import "./globals.css";

export const metadata = {
  title: "Timer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-base-100 text-neutral font-mono">
        <main className="flex-grow flex flex-col items-center justify-center relative px-8 py-2 w-full max-w-[1000px] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
