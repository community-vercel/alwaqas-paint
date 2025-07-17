import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/3.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/int/luxury-plastic-emulsion';

export const metadata = {
  title: "Master Luxury Plastic Emulsion",
  description: "Premium plastic emulsion paint for interior walls and ceilings with a smooth, luxurious, waterproof finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Luxury Plastic Emulsion",
    description: "Top-rated interior paint with eco-friendly, low-odor formula, offering durable, vibrant, and luxurious finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Luxury Plastic Emulsion Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Luxury Plastic Emulsion | Alwaqas Paint",
    description: "Eco-friendly, durable plastic emulsion paint with a smooth, luxurious finish for interiors.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Luxury Plastic Emulsion Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Luxury Plastic Emulsion",
    image: "/master/3.webp",
    description: "Master Luxury Plastic Emulsion, is the best plastic emulsion paint in Pakistan for interior walls and ceilings helping you get a resin-based look for waterproof coverage. This top-rated luxury plastic emulsion paint offers a smooth, luxurious finish that amplifies the aesthetics of any room, making it perfect for both homes and offices. Its formula offers superior coverage and durability, providing long-lasting protection while maintaining its rich, vibrant color over time. The Master Luxury Plastic Emulsion is a perfect choice for its low-odor and low-VOC formulation, making it an eco-friendly choice for those who need healthy air quality without any bad smell. The paint is capable to refresh your living spaces or give your workspace a modern touch. Want to buy the best plastic emulsion paint in Pakistan? Choose the top-rated luxury plastic emulsion paint from Master Paints. It combines premium quality with lasting performance, ensuring your walls look perfect for years to come. Experience the difference with Master Luxury Plastic Emulsion—your ultimate choice for interior paints.",
    features: [
      "Anti Fungal",
      "Envoinmetally safe",
      "High Scratch Resistance",
      "Improved Flow And Levelling",
      "Durable",
      "Smooth luxurious finish",
    ],
    downloads: {
      ds: "/pdf/master/Plastic Emulsion_compressed.pdf",
      sc: "/pdf/master/Luxury-Plastic_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;