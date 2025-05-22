/* eslint-env node */
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Image from "next/image";
import "../styles/globals.css";
import Link from "next/link";
import Tebex from "../icons/tebex";

export const metadata = {
  metadataBase: new URL("https://hopestudios.com"),
  title: {
    template: "%s - Hope Studios",
  },
  description: "Hope Studios: Documentation",
  applicationName: "Hope Studios",
  generator: "Next.js",
  appleWebApp: {
    title: "Hope Studios",
  },
  openGraph: {
    title: "Hope Studios",
    description: "Hope Studios: Documentation",
    url: "https://hopestudios.com",
    siteName: "Hope Studios",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Hope Studios Open Graph Image",
      },
    ],
    type: "website",
  },
  other: {
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "https://hopestudios.com",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar = (
    <Navbar
      logo={
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Hope Studios" width={32} height={32} />
          <b>Hope Studios</b>
        </div>
      }
      chatLink="https://discord.gg/85YNeDTBB9"
      children={
        <Link href="https://hopestudios.tebex.io/" target="_blank">
          <Tebex />
        </Link>
      }
    />
  );
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          navbar={navbar}
          footer={
            <Footer>MIT {new Date().getFullYear()} © Hope Studios.</Footer>
          }
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/hopestudios-fivem/documentation/blob/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
