import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/23.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/paintex-star-synthetic-enamel';

export const metadata = {
  title: "Paintex Star Synthetic Enamel",
  description: "Superior quality solvent-based gloss enamel for interior and exterior wood and metal surfaces, offering a smooth, long-lasting shine.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Paintex Star Synthetic Enamel",
    description: "High-quality gloss enamel for wood and metal, providing a smooth finish with long-lasting shine and improved drying time.",
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
    description: "Solvent-based enamel with a glossy finish, ideal for interior and exterior wood and metal surfaces with lasting durability.",
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
    id: 14,
    title: "Paintex Star Synthetic Enamel",
    image: "/dulux/23.png",
    description:
      "Paintex Star Synthetic Enamel is a superior quality, solvent-based gloss enamel recommended for use on all types of interior and exterior wood and metal surfaces. It delivers a smooth finish with long-lasting shine and improved drying time, making it ideal for both aesthetic appeal and durability.",
    keyInformation: {
      finish: "Gloss",
      coverage: "13-15 m2/L",
      dryingTime: "12 Hours",
      coats: "3",
    },
    features: [
      "Smooth Finish with Long-Lasting Shine",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply 2-3 coats of Paintex Star Synthetic Enamel and leave for 12 hours between coats. Ensure surfaces are clean, dry, and free from dirt, grease, and wax. For new or bare surfaces, prime with an appropriate primer and dry overnight. For previously painted surfaces, rub down with abrasive paper and dust off before applying the enamel.",
    downloads: {
      // sds: "/pdf/dulux/sds_paintex_star_synthetic_enamel.pdf",
      // tds: "/pdf/dulux/tds_paintex_star_synthetic_enamel.pdf",
      // warranty: "/pdf/dulux/warranty_paintex_star_synthetic_enamel.pdf",
    },
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default PaintexStarSyntheticEnamel;