"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/6.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final image URL
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-pentalite-emulsion';

export const metadata = {
  title: "Dulux Pentalite Emulsion | Premium Interior Wall Paint | Alwaqas Paint",
  description: "Premium plastic emulsion with smooth matt finish, high coverage, anti-fungal and easy-to-clean properties for long-lasting interior protection.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Pentalite Emulsion | Interior Wall Paint",
    description: "Acrylic-based emulsion with anti-bacterial, anti-viral, and anti-fungal technology. Ideal for durable and hygienic interior surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Pentalite Emulsion Paint Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Pentalite Emulsion | Alwaqas Paint",
    description: "Smooth matt finish, high coverage, anti-mould and easy to clean — a premium emulsion for every interior wall.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Pentalite Emulsion Paint Product",
  }
};

const AmbianceDiamondGlo = () => {
  const product = {
    id: 1,
    title: "Dulux Pentalite Emulsion",
    image: "/dulux/6.png",
    description:
      "Dulux Pentalite Special Plastic Emulsion (Acrylic Based) is a premium quality emulsion with a smooth matt finish.",
    keyInformation: {
      finish: "Matt",
      coverage: "14-16 m²/L",
      dryingTime: "2-3 Hours",
      coats: "3",
    },
    features: [
      "High Coverage",
      "Durable",
      "Anti-Mould & Anti-Fungus",
      "Anti-Viral",
      "Easy To Clean & Washable",
      "Anti-Bacterial",
      "Peel Guard",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "Apply 3-4 coats of Dulux Pentalite Emulsion and leave for 3 hours between coats.",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_pentalite_classic_brilliant_white.pdf",
      tds: "/pdf/dulux/tds_pentaliteclassic_pk.pdf",
      warranty: "/pdf/dulux/pentalite_classic_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default AmbianceDiamondGlo;
