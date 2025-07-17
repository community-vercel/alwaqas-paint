"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/21.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-ambiance-velvet-touch-colour-motion';

export const metadata = {
  title: "Dulux Ambiance Velvet Touch Colour Motion",
  description: "Acrylic-based premium interior paint with luminous brilliance, offering a unique look from every angle.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Ambiance Velvet Touch Colour Motion",
    description: "Premium interior paint with special effects, providing luminous brilliance and a unique aesthetic for interior walls.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Ambiance Velvet Touch Colour Motion Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Ambiance Velvet Touch Colour Motion | Alwaqas Paint",
    description: "Acrylic-based interior paint with luminous brilliance, ideal for unique and vibrant wall finishes.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Ambiance Velvet Touch Colour Motion Product",
  }
};

const VelvetTouchColourMotion = () => {
  const product = {
    id: 12,
    title: "Dulux Ambiance Velvet Touch Colour Motion",
    image: "/dulux/21.webp",
    description:
      "Dulux Velvet Touch Colour Motion is an acrylic based interior premium quality paint. It is a part of our special effects range, inspired by the luminous brilliance of colours, giving your walls a unique look every time from every angle. It is available in White colour. It is recommended for interior use only.",
    keyInformation: {
      finish: "Featured Finishes",
      coverage: "6.5-7.5 m2/L per coat",
      dryingTime: "4-6 Hours",
      coats: "1",
    },
    features: [
      "Provides Luminous Brilliance of Colours, Giving a Unique Look Everytime from Every Angle",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "After surface preparation apply 2-3 coats of Dulux Velvet Touch base coat in the recommended colour. Ensure 3-4 hours for drying between successive coats. Then apply one coat of Velvet Touch Colour Motion with brush in a random criss cross pattern. Leave the paint to dry for four to six hours to see the final effect. Please refer to the product brochure or visit our website for the detail application procedure instructions or the demo video for the best results. It is advisable to carry out small scale trials before application over large surface area. Ensure a slight overlap of sections while working to avoid demarcations of the finish.",
    downloads: {
      // sds: "/pdf/dulux/msds_dvt_color_motion.pdf",
      tds: "/pdf/dulux/tds_vt_colourmotion.pdf",
      // warranty: "/pdf/dulux/warranty_velvet_touch_colour_motion.pdf",
    },
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default VelvetTouchColourMotion;