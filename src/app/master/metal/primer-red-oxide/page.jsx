import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/40.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/metal/primer-red-oxide';

export const metadata = {
  title: "Master Primer Red Oxide",
  description: "Solvent-based red oxide primer paint with anti-corrosive properties for iron and steel surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Primer Red Oxide",
    description: "Top-rated primer paint with weather resistance and strong adhesion for durable metal protection.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Primer Red Oxide Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Primer Red Oxide | Alwaqas Paint",
    description: "Anti-corrosive red oxide primer paint for long-lasting protection on ferrous metals, indoors and outdoors.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Primer Red Oxide Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Primer Red Oxide",
    image: "/master/40.webp",
    description: "Master Red Oxide Primer metal paint is a solvent-based coating formulated to protect iron and steel surfaces from rust. Our top-rated primer red oxide metal paint has anti-corrosive properties for long-lasting protection. Its alkyd resin base provides strong protection which makes it ideal for gates, railings, and outdoor equipment. Buy primer red oxide metal paint online and apply it directly onto rusty surfaces. Primer red oxide metal paint price in Pakistan provides a stable base for topcoats once dry. Designed for exterior use, it holds up well against sunlight and harsh weather. Use the best primer red oxide metal paint on ferrous metals both indoors and outdoors.",
    features: [
      "Heat reflective",
      "Weather resistant",
      "Long-lasting",
      "Anti-corrosive",
      "Ideal for exteriors",
      "Full coverage",
      "Easy application",
    ],
    downloads: {
      ds: "",
      sc: "/pdf/master/Master Primer Red oxide3_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;