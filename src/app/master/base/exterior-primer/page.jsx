import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/21.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/base/exterior-primer';

export const metadata = {
  title: "Master Exterior Primer",
  description: "Water-based acrylic exterior primer that seals and protects against alkali, salts and moisture for perfect paint adhesion.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Exterior Primer",
    description: "Reliable solution for preparing exterior walls before painting, ensuring proper adhesion on brick, plaster and cement surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Exterior Primer Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Exterior Primer | Alwaqas Paint",
    description: "High-quality exterior primer that prevents fungus, algae and extends topcoat life at affordable prices.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Exterior Primer Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Exterior Primer",
    image: "/master/21.webp",
    description: "When you're changing the color of your exterior walls, using an exterior primer can make a durability difference. Master Exterior Primer Paint is a reliable solution for preparing exterior walls before painting. It ensures that the paint sticks properly to various surfaces like brick, plaster, and cement. Our water-based acrylic exterior primer seals and protects against damage from alkali and salts outdoors. It prevents moisture from damaging your walls. If you're looking to buy Master exterior primer paint online, this product is among the best exterior primer paints to consider for a perfect finish and long-term protection. The high-quality exterior primer paint price in Pakistan can be too much, so we offer affordable rates.",
    features: [
      "Improves paint adhesion",
      "Protects against moisture",
      "Prevents fungus and algae",
      "Seals and prep surfaces",
      "Extends topcoat life",
    ],
    downloads: {
      ds: "/pdf/master/Master Wall Primer ( water based )-_compressed.pdf",
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;