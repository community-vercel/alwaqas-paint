
import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/14.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-promise-gloss-enamel';

export const metadata = {
  title: "Dulux Promise Gloss Enamel",
  description: "High quality enamel paint with Chromabrite technology for wood, metal and trim surfaces, offering a beautiful glossy finish with excellent color retention.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Promise Gloss Enamel",
    description: "Specially formulated enamel paint with excellent drying properties and high gloss retention for lasting beautiful finishes.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Promise Gloss Enamel Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Promise Gloss Enamel | Alwaqas Paint",
    description: "High quality enamel paint with Chromabrite technology for superior gloss retention.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Promise Gloss Enamel Product",
  }
};

const DuluxPromiseGlossEnamel = () => {
  const product = {
    id: 14,
    title: "Dulux Promise Gloss Enamel",
    image: "/dulux/exterior/14.png",
    description: "Dulux Promise Gloss Enamel is a high quality enamel paint recommended for Wood, Metal and Trim Surfaces. It is specially formulated with Chromabrite technology to give a smooth finish with excellent colours. This enamel paint has excellent drying and gives the surface a beautiful glossy finish.",
    keyInformation: {
      finish: "Gloss",
      coverage: "13-15 m²/L/coat",
      dryingTime: "12 Hours between coats",
      coats: "3"
    },
    features: [
      "Chromabrite Technology - For Long Lasting Beautiful Bright Color",
      "High Gloss Gloss Retention",
      "Cracking Drying Improved Drying",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 2-3 coats of Dulux Promise Enamel and leave for 12 hours between coats.",
    downloads: {
      sds: null,
      tds: null,
      warranty: "/pdf/dulux/exterior/promise_gloss_enamel_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPromiseGlossEnamel;