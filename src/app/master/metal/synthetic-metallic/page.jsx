import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/36.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/metal/synthetic-metallic';

export const metadata = {
  title: "Master Synthetic Metallic",
  description: "Premium synthetic metallic paint with high gloss finish for wood and metal surfaces, resistant to rust and fading.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Synthetic Metallic",
    description: "Durable synthetic metallic paint with alkyd resin blend for superior protection and shine on all surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Synthetic Metallic Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Synthetic Metallic | Alwaqas Paint",
    description: "High-opacity, lead-free metallic paint with abrasion resistance and glossy finish for lasting protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Synthetic Metallic Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Synthetic Metallic",
    image: "/master/36.webp", 
    description: "Synthetic Metallic paints are tougher, thicker, and often shine more than other types. Try Master Synthetic Metallic for a long-lasting finish on all wooden and metal surfaces. Our top-rated synthetic metallic metal finish paint's formula is perfect for indoors and outdoors. It features a unique alkyd resin blend with strong pigments that look shiny while protecting the surface against rust, moisture, and mild chemicals. Buy online metallic metal finish paint, and see synthetic metallic metal finish paint prices in Pakistan based on colors. It's a good investment as this type of paint is resistant to fading. Master synthetic metallic metal finish paint is available in various colors like Golden Dust, Sparkling Silver, and Ocean Blue.",
    features: [
      "High opacity",
      "Lead-free formulation",
      "High Gloss Finish",
      "Resistance to Mild Chemical Fumes",
      "Abrasion Resistance",
    ],
    downloads: {
      ds: "", 
      sc: "/pdf/master/Synthetic Metallic (2).pdf", 
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;