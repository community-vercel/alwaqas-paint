

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/5.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-gloss-enamel';

export const metadata = {
  title: "Dulux Gloss Enamel",
  description: "Dulux Gloss enamel is a high quality solvent-based super gloss finish, suitable for use on all types of interior and exterior wood and metal surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Gloss Enamel",
    description: "Dulux Gloss Enamel gives a non-yellowing, smooth mirror-like finish with excellent durability, better flow, and superior coverage.",
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
    description: "High quality solvent-based super gloss finish for wood and metal surfaces.",
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

const DuluxGlossEnamel = () => {
  const product = {
    id: 5,
    title: "Dulux Gloss Enamel",
    image: "/dulux/exterior/5.png",
    description: "Dulux Gloss enamel is a high quality solvent-based super gloss finish, suitable for use on all types of interior and exterior wood and metal surfaces. Dulux Gloss Enamel gives a non-yellowing, smooth mirror-like finish with excellent durability, better flow, and superior coverage.",
    keyInformation: {
      finish: "Gloss",
      coverage: "13-15 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "3"
    },
    features: [
      "3 Years Performance Warranty",
      "Non Yellowing",
      "High Coverage",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 2-3 coats of Dulux Gloss Enamel with 16 hours interval between coats",
    downloads: {
      // sds: "/pdf/dulux/enamel/xx_pk_en_dulux_gloss_enamel_white__f33201014383228.pdf",
      // tds: "/pdf/dulux/enamel/tds_gloss_enamel_pk.pdf",
      // warranty: "/pdf/dulux/enamel/gloss_enamel_tc.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxGlossEnamel;