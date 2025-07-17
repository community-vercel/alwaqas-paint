import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/26.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/paintex-star-semi-plastic-emulsion';

export const metadata = {
  title: "Paintex Star Semi-Plastic Emulsion",
  description: "Economical emulsion with improved hiding power and a smooth matt finish for interior masonry surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Paintex Star Semi-Plastic Emulsion",
    description: "High-quality interior emulsion with enhanced hiding power and a smooth matt finish, ideal for brick, plaster, and cement surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Paintex Star Semi-Plastic Emulsion Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paintex Star Semi-Plastic Emulsion | Alwaqas Paint",
    description: "Economical interior emulsion with improved hiding power and a smooth matt finish for various masonry surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Paintex Star Semi-Plastic Emulsion Product",
  }
};

const PaintexStarSemiPlasticEmulsion = () => {
  const product = {
    id: 17,
    title: "Paintex Star Semi-Plastic Emulsion",
    image: "/dulux/26.png",
    description:
      "ICI Paintex Star Emulsion is an economical emulsion with improved hiding power and a smooth matt finish. It is suitable for all normal interior masonry surfaces including brick work, plaster & cement etc.",
    keyInformation: {
      finish: "Matt",
      coverage: "12-14 m2/L",
      dryingTime: "2-3 Hours between coats",
      coats: "4",
    },
    features: [
      "Improved Hiding Power",
      "Smooth Matt Finish",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply 3-4 coats of Paintex Star Emulsion and leave for 2-3 hours between coats",
    downloads: {
      // sds: "/pdf/dulux/msds_dvt_color_motion.pdf",
      // tds: "/pdf/dulux/msds_dvt_color_motion.pdf",
      // warranty: "/pdf/dulux/warranty_woodcare_sealer.pdf",
    },
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default PaintexStarSemiPlasticEmulsion;