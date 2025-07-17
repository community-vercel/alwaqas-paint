import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/41.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/metal/knifing-filler';

export const metadata = {
  title: "Master Knifing Filler",
  description: "High-performance oil-based knifing filler paste for smoothing dents and scratches on metal and wood surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Knifing Filler",
    description: "Fast-drying, easy-to-apply knifing filler paint for a smooth, durable finish on interior and exterior surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Knifing Filler Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Knifing Filler | Alwaqas Paint",
    description: "Reliable knifing filler paint with strong adhesion and smooth finish for metal and wood applications.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Knifing Filler Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Knifing Filler",
    image: "/master/41.webp",
    description: "Use top-rated knifing filler paint on items made of mild steel or cast iron to have an aesthetic finish. Master Knifing Filler Paste is a high-performance oil-based filler that is perfect for filling dents, scratches, and minor imperfections. It’s designed for both interior and exterior use. Buy knifing filler paint online in Pakistan to create a smooth base for top paint. This filler comes in ready-to-use form, providing a butter-like consistency for easy application. Check out Knifing filler paint prices in Pakistan on our site. It dries within 15-20 minutes, so you can finish motor vehicles, metal, and wood furniture projects quickly. Buy master knifing filler paint online and see its adhesion properties in real time!",
    features: [
      "Fast Drying",
      "Strong Adhesion",
      "Smooth Finish",
      "Easy Application",
      "Indoor/Outdoor Use",
      "No Dilution Needed",
      "Reliable Durability",
    ],
    downloads: {
      ds: "/pdf/master/knifing filler_compressed.pdf",
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;