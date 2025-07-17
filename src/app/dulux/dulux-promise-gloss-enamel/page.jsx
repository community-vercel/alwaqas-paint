
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp / social share configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/33.png",
  imageWidth: 1200,
  imageHeight: 630
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-promise-gloss-enamel';

export const metadata = {
  title: "Dulux Promise Gloss Enamel | Bright Gloss Finish for Wood & Metal | Alwaqas Paint",
  description: "High-quality enamel with Chromabrite technology for a durable, glossy finish. Ideal for wood, metal, and trim surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Promise Gloss Enamel | Gloss Paint for Wood & Metal",
    description: "Enamel paint with high gloss retention and quick drying time. Perfect for enhancing wood and metal surfaces with lasting color.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Promise Gloss Enamel Paint Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Promise Gloss Enamel | Alwaqas Paint",
    description: "Beautiful gloss enamel with Chromabrite technology, perfect for wood, metal, and trims. Long-lasting and lead-free.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Promise Gloss Enamel Paint Product",
  }
};

const DuluxPromiseGlossEnamel = () => {
  const product = {
    id: 33,
    title: "Dulux Promise Gloss Enamel",
    image: "/dulux/33.png",
    description:
      "Dulux Promise Gloss Enamel is a high quality enamel paint recommended for Wood, Metal and Trim Surfaces. It is specially formulated with Chromabrite technology to give a smooth finish with excellent colours. This enamel paint has excellent drying and gives the surface a beautiful glossy finish.",
    keyInformation: {
      finish: "Gloss",
      coverage: "13-15 m²/L/coat",
      dryingTime: "12 Hours between coats",
      coats: "3"
    },
    features: [
      "Chromabrite Technology - For Long Lasting Beautiful Bright Color",
      "High Gloss Retention",
      "Improved Drying",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "Apply 2-3 coats of Dulux Promise Enamel and leave for 12 hours between coats",
    downloads: {
      sds: "/pdf/dulux/promise_gloss_enamel_tc.pdf",
      tds: "/pdf/dulux/promise_gloss_enamel_tc.pdf",
      warranty: "/pdf/dulux/promise_gloss_enamel_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPromiseGlossEnamel;
