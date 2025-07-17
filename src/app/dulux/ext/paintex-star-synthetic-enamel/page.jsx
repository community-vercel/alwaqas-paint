import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/10.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/paintex-star-synthetic-enamel';

export const metadata = {
  title: "Paintex Star Synthetic Enamel",
  description: "Superior quality solvent-based gloss enamel for interior and exterior wood and metal surfaces with long-lasting shine.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Paintex Star Synthetic Enamel",
    description: "Gloss enamel with improved drying time that provides smooth finish and durable protection for wood and metal surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Paintex Star Synthetic Enamel Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paintex Star Synthetic Enamel | Alwaqas Paint",
    description: "High-quality synthetic enamel with no added lead or mercury for safe, durable finishes.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Paintex Star Synthetic Enamel Product",
  }
};

const PaintexStarSyntheticEnamel = () => {
  const product = {
    id: 10,
    title: "Paintex Star Synthetic Enamel",
    image: "/dulux/exterior/10.png",
    description: "Paintex Star Synthetic Enamel is a superior quality, solvent-based gloss enamel recommended for use on all types of interior and exterior wood and metal surfaces. It gives a smooth finish with long lasting shine and has improved drying time.",
    keyInformation: {
      finish: "Gloss",
      coverage: "13-15 m2/L",
      dryingTime: "12 Hours",
      coats: "3"
    },
    features: [
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 2-3 coats of Paintex Star Synthetic Enamel and leave for 12 hours between coats.",
    downloads: {
      sds: null,
      tds: null,
      warranty: null
    }
  };

  return <BaseDetailPage product={product} />;
};

export default PaintexStarSyntheticEnamel;