import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/8.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-gloss-enamel';

export const metadata = {
  title: "Dulux Gloss Enamel | High-Gloss Finish for Wood & Metal | Alwaqas Paint",
  description: "Premium solvent-based enamel paint providing non-yellowing, mirror-like gloss finish for interior/exterior wood and metal surfaces. 3-year warranty.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Gloss Enamel | Mirror-Like Finish Paint",
    description: "High-quality solvent-based enamel with excellent durability and non-yellowing properties for wood and metal surfaces. Superior flow and coverage.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Gloss Enamel Paint Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Gloss Enamel | Alwaqas Paint",
    description: "Professional-grade gloss enamel for durable, non-yellowing finishes on wood and metal surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Gloss Enamel Paint Product",
  }
};

const GlossEnamel = () => {
  const product = {
    id: 1,
    title: "Dulux Gloss Enamel",
    image: "/dulux/8.png",
    description:
      "Dulux Gloss enamel is a high quality solvent-based super gloss finish, suitable for use on all types of interior and exterior wood and metal surfaces. Dulux Gloss Enamel gives a non yellowing, smooth mirror like finish and has excellent durability. It also provides better flow and better coverage.",
    keyInformation: {
      finish: "Gloss",
      coverage: "13-15 m²/L",
      dryingTime: "16 Hours between coats",
      coats: "3",
    },
    features: [
      "3 Years Performance Warranty",
      "Non Yellowing",
      "High Coverage",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "Apply 2-3 coats of Dulux Gloss Enamel with 16 hours interval between coats.",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_gloss_enamel_white__f33201014383228.pdf",
      tds: "/pdf/dulux/tds_gloss_enamel_pk.pdf",
      warranty: "/pdf/dulux/gloss_enamel_tc.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default GlossEnamel;