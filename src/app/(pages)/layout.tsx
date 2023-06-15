import { Container } from "@/components/layout";
import { Header } from "@/partials";
import ReduxProvider from "@/redux/provider";

import "@/styles/globals.css";
import "@/styles/tailwind.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Virtual list",
  description: "This is Samples",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReduxProvider>
          <Container>
            <Header />
            {children}
          </Container>
        </ReduxProvider>
      </body>
    </html>
  );
}
