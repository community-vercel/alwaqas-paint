"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp / social share configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/31.png",
  imageWidth: 1200,
  imageHeight: 630
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-prime-on';

export const metadata = {
  title: "Dulux Prime-On | Solvent-Based Sealer | Alwaqas Paint",
  description: "Dulux Prime-On is a solvent-based sealer ideal for interior and exterior masonry. Ensures strong adhesion and enhances topcoat durability.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Prime-On | Interior & Exterior Masonry Sealer",
    description: "Solvent-based sealer with excellent adhesion and sealing properties for brickwork, plaster, and cement surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Prime-On Paint Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Prime-On | Alwaqas Paint",
    description: "Reinforces adhesion and durability of topcoats with excellent sealing performance. Ideal for new or previously painted masonry.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Prime-On Paint Product",
  }
};

const DuluxPrimeOn = () => {
  const product = {
    id: 21,
    title: "Dulux Prime-On",
    image: "/dulux/31.png",
    description:
      "Dulux Prime-On is a solvent based sealer for interior and exterior masonry surface both new and previously decorated, such as brickwork, plaster and cement.",
    keyInformation: {
      finish: "Matt",
      coverage: "14-16 m²/L",
      dryingTime: "2-4 Hours (Dependant on temperature and humidity)\nRecoat after 16 hours",
      coats: "1"
    },
    features: [
      "Reinforces Adhesion and Durability of the End Coat",
      "Excellent Sealing Properties"
    ],
    applicationDescription:
      "Apply one coat of Dulux Prime-On and leave for 16 hours to dry.",
    downloads: {
      sds: "/pdf/dulux/tds_dulux_prime_on_pk.pdf",
      tds: "/pdf/dulux/tds_dulux_prime_on_pk.pdf",
      warranty: "/pdf/dulux/tds_dulux_prime_on_pk.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPrimeOn;
