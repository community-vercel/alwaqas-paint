

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/13.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-aluminium-paint-dual-pack';

export const metadata = {
  title: "Dulux Aluminium Paint Dual Pack",
  description: "Silver paint with high metallic luster, offering protection against corrosion, discoloration, and heat effects.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Aluminium Paint Dual Pack",
    description: "High-quality silver paint with anti-rust properties and high metallic luster for durable surface protection.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Aluminium Paint Dual Pack Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Aluminium Paint Dual Pack | Alwaqas Paint",
    description: "Silver paint with anti-rust properties, high metallic luster, and protection against corrosion and heat.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Aluminium Paint Dual Pack Product",
  }
};

const AluminiumPaintDualPack = () => {
  const product = {
    id: 4,
    title: "Dulux Aluminium Paint Dual Pack",
    image: "/dulux/13.png",
    description:
      "Dulux Aluminium Paint Dual Pack is a silver paint with a high metallic luster, which protects the surface from corrosion, discoloration and the effects of heat.",
    keyInformation: {
      finish: "Gloss",
      coverage: "14-16 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "1",
    },
    features: [
      "Anti-Rust",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply two coats of Dulux Aluminium and leave for 16 hours between coats.",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_aluminium_paint_dual_packf33809804383299.pdf",
      // tds: "/pdf/dulux/tds_aluminium_paint_dual_pack.pdf",
      // warranty: "/pdf/dulux/warranty_aluminium_paint_dual_pack.pdf",
    },
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default AluminiumPaintDualPack;