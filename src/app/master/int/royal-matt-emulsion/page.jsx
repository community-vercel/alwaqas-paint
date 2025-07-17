import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/2.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/int/royal-matt-emulsion';

export const metadata = {
  title: "Master Royal Matt Emulsion",
  description: "High-quality water-based paint with a smooth, non-reflective matt finish for interior walls and ceilings.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Royal Matt Emulsion",
    description: "Premium matt emulsion paint with excellent coverage, low VOC, and a refined, durable finish for interiors.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Royal Matt Emulsion Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Royal Matt Emulsion | Alwaqas Paint",
    description: "Eco-friendly, odorless matt emulsion paint with exceptional coverage for homes and offices.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Royal Matt Emulsion Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Royal Matt Emulsion",
    image: "/master/2.webp",
    description: "Royal Matt Emulsion is a high-quality water-based paint that provides you with a smooth, non-reflective finish for interior walls and ceilings. Its rich, matte appearance adds a touch of decency, creating a refined backdrop for any space. We recommend it as an Ideal choice for various surfaces like plaster, brickwork, and wallboards. Royal Matt Emulsion offers excellent coverage and durability, ensuring long-lasting beauty. With its low VOC and odorless formula, it's perfect for homes, offices, or commercial environments where air quality is essential. To check, the Royal Matt Emulsion paint price in Pakistan, you can either inquire online or call us for the most suitable products you need. Buy royal matt emulsion paint today and beautify your homes, offices, or industrial spaces.",
    features: [
      "Rich matt finish",
      "Roller Application",
      "Rich Matt Finish",
      "Exceptional Coverage",
      "Close to Zero VOC",
      "Long Lasting Film",
      "Environment Friendly",
    ],
    downloads: {
      ds: "/pdf/master/Royal Matt Emulsion_compressed.pdf",
      sc: "/pdf/master/Royal-Matt-Emulsion_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;