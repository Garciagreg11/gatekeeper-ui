import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Gatekeeper UI",
  description: "Gas sponsorship dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
