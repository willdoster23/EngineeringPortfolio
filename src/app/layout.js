import "./globals.css";

export const metadata = {
  title: "Will Doster",
  description: "Engineering Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-zinc-900">
        <main>{children}</main>
      </body>
    </html>
  );
}
