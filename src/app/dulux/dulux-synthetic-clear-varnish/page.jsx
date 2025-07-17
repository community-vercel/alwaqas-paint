
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp / social sharing config
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/41.jpg",
  imageWidth: 1200,
  imageHeight: 630
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-synthetic-clear-varnish';

export const metadata = {
  title: "Dulux Synthetic Clear Varnish | High Gloss Wood & Metal Finish | Alwaqas Paint",
  description: "Solvent-based clear varnish for wood and metal surfaces. High gloss finish, fast drying, and excellent abrasion resistance.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Synthetic Clear Varnish | Clear Finish for Wood & Metal",
    description: "Solvent-based high gloss varnish suitable for cane furniture, paneling, and more. Durable and fast drying.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Synthetic Clear Varnish Product",
        type: "image/avif",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Synthetic Clear Varnish | Alwaqas Paint",
    description: "Durable solvent-based varnish for wood and metal. Glossy finish with great abrasion resistance.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/avif",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Synthetic Clear Varnish Product",
  }
};

const DuluxSyntheticClearVarnish = () => {
  const product = {
    id: 41,
    title: "Dulux Synthetic Clear Varnish",
    image: "/dulux/41.jpg",
    description:
      "Dulux Synthetic Clear Varnish is a solvent-based varnish suitable for all types of new or previously treated wood and metal. It provides a high gloss finish, excellent abrasion resistance, and is fast drying. Ideal for use on paneling, cane or wood furniture, windows, doors, and partitions.",
    keyInformation: {
      finish: "Gloss",
      coverage: "12–14 m²/L",
      dryingTime: "16 hours between coats",
      coats: "3",
    },
    features: [
      "High Gloss Finish",
      "Excellent Abrasion Resistance",
      "Fast Drying",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply 2–3 coats of Dulux Varnish and leave for 16 hours between coats.",
    downloads: {
      sds: "/pdf/dulux/pk_khatoa01_n2110004_0383107a2_english_gb_20221205_dulux_varnish.pdf",
      tds: "/pdf/dulux/tds_synthetic_clear_varnish_pk.pdf",
      warranty: "/pdf/dulux/pk_khatoa01_n2110004_0383107a2_english_gb_20221205_dulux_varnish.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxSyntheticClearVarnish;
