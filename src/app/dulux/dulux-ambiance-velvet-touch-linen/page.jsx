"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/34.avif",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-ambiance-velvet-touch-linen';

export const metadata = {
  title: "Dulux Ambiance Velvet Touch Linen",
  description: "Premium special effects paint delivering unique textured fabric effects with a variety of wall patterns for interior use.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Ambiance Velvet Touch Linen",
    description: "Special effects interior paint with textured fabric effects, tintable in selected Dulux colours for unique wall patterns.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Ambiance Velvet Touch Linen Product",
        type: "image/avif",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Ambiance Velvet Touch Linen | Alwaqas Paint",
    description: "Premium interior paint with textured fabric effects, ideal for creating unique and stylish wall patterns.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/avif",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Ambiance Velvet Touch Linen Product",
  }
};

const DuluxAmbianceVelvetTouchLinen = () => {
  const product = {
    id: 34,
    title: "Dulux Ambiance Velvet Touch Linen",
    image: "/dulux/34.avif",
    description: "Dulux Velvet Touch Linen is a premium special effects paint designed to deliver a wide variety of wall patterns with unique textured fabric effects on your walls. Velvet Touch Linen can be tinted in selected Dulux colours. Recommended for interior use only.",
    keyInformation: {
      finish: "Featured Finishes",
      coverage: "6-7 m2 per liter per coat",
      dryingTime: "4-5 Hours",
      coats: "1"
    },
    features: [
      "Delivers a Weave of Textured Fabrics"
    ],
    applicationDescription: "After surface preparation apply 2-3 coats of Dulux Velvet Touch base coat in the recommended colour. Ensure 3-4 hours for drying between successive coats. Then apply one coat of Velvet Touch Linen in the required colour by roller. Finally, use the Dulux Velvet Touch Texture Brush in horizontal and/or vertical direction to create the desired Linen effect when the paint film is still wet.",
    downloads: {
      sds: "/pdf/dulux/msds_dvt_linen.pdf",
      tds: "/pdf/dulux/tds_vt_linen.pdf",
      warranty: "/pdf/dulux/msds_dvt_linen.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxAmbianceVelvetTouchLinen;