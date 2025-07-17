import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/28.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/wood/thinner-wood-master';

export const metadata = {
  title: "Thinner Wood Master | Professional Lacquer Thinner for Wood Finishing",
  description: "High-quality paint thinner specially formulated for wood lacquers and sealers, improving flow and consistency for flawless paint application.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Thinner Wood Master | Paint Thinner for Wood Finishes",
    description: "Professional-grade thinner that removes coatings and improves paint flow for perfect application on wood surfaces with Master Paints products.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Thinner Wood Master Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thinner Wood Master | Professional Paint Thinner",
    description: "Essential thinner for wood lacquers and sealers that ensures smooth application and helps remove unwanted coatings from wood surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Thinner Wood Master Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Thinner Wood Master",
    image: "/master/28.webp", 
    description: "Thinner Wood Master from Master Paints is a professional-grade solvent specially formulated for wood finishing applications. This high-performance thinner is designed to work optimally with Master Paints wood lacquers and sealers, improving their flow and consistency for flawless application. It effectively thins coatings to the perfect working viscosity while also serving as a powerful cleaner for removing unwanted polish or old coatings from wood surfaces. Essential for both DIY enthusiasts and professional finishers, our thinner ensures smooth, even results with every use. Available for convenient online purchase, Thinner Wood Master helps achieve showroom-quality finishes by eliminating brush marks and ensuring proper leveling of wood finishes.",
    features: [
      "Optimizes paint flow and consistency",
      "Perfect viscosity for wood lacquers and sealers",
      "Effectively removes old polish and coatings",
      "Ensures smooth, flawless finish application",
      "Professional-grade results for DIY and pros",
      "Compatible with Master Paints wood products",
      "Improves paint leveling and brush mark reduction",
      "Accelerates cleaning of tools and surfaces"
    ],
    downloads: {
      ds: "/pdf/master/Wood Master NC Thinner.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;