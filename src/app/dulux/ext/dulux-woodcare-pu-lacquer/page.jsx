import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/17.jpg",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-woodcare-pu-lacquer';

export const metadata = {
  title: "Dulux Woodcare PU Lacquer",
  description: "One-pack solvent-based gloss lacquer with high quality and excellent durability for wood protection.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Woodcare PU Lacquer",
    description: "Polyurethane lacquer that provides UV protection and durable gloss finish for wood surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Woodcare PU Lacquer Product",
        type: "image/jpg",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Woodcare PU Lacquer | Alwaqas Paint",
    description: "High-quality polyurethane lacquer for wood protection with excellent durability.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/jpg",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Woodcare PU Lacquer Product",
  }
};

const PaintexStarSyntheticEnamel = () => {
  const product = {
    id: 10,
    title: "Dulux Woodcare PU Lacquer",
    image: "/dulux/exterior/17.jpg",
    description: "Dulux PU (Polyurethane) Lacquer is an easy to use, one pack solvent based gloss lacquer with high quality and excellent durability.",
    keyInformation: {
      finish: "Gloss",
      coverage: "11-13 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "4"
    },
    features: [
      "High Quality and Excellent Durability",
      "Provides Protection from UV Light",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 3-4 coats of Dulux Woodcare PU Lacquer and leave for 16 hours between coats",
    downloads: {
      sds: '/pdf/dulux/exterior/pk_khatoa01_n2110007_0383108a2_english_gb_20221205_dulux_pu_lacquer.pdf',
      tds: '/pdf/dulux/exterior/tds_pu_lacquer_pk.pdf',
      warranty: null
    }
  };

  return <BaseDetailPage product={product} />;
};

export default PaintexStarSyntheticEnamel;