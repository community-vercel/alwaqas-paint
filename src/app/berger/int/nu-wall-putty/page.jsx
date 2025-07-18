import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/13.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/nu-wall-putty';

export const metadata = {
  title: "Berger NU Wall Putty",
  description: "Ready-to-use high quality interior wall putty that creates a smooth base for water-based paints.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger NU Wall Putty",
    description: "Premium interior wall putty for achieving perfectly smooth surfaces before painting (not for exterior use).",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger NU Wall Putty Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger NU Wall Putty | Alwaqas Paint",
    description: "Ready-to-use putty for interior surfaces that ensures flawless paint application and finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger NU Wall Putty Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "NU Wall Putty",
    image: "/berger/products/13.webp", 
    description: "Berger NU Putty is a ready-to-use high quality putty for interior use only. It forms an ideal base to give a smooth finish for water based paints. It should not be used on exterior surfaces.",
    application: "Ready-to-use Berger NU Putty is highly recommended where smooth performance is required. Berger NU Putty is designed for use on cement surfaces, concrete, chipboard, plywood, etc. NOTE: It is recommended that Berger NU Putty should be coated with a thin coat of Berger Plastron Primer if the subsequent finish to be applied is VIP Super Gloss Robbialac Enamel or All-Rounder Matt Finish Enamel.",
    DryingTime: "2 hours",
    Coverage: "5-7 m² per kg per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;