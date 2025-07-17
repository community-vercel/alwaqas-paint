import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/9.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/ext/weather-resistant';

export const metadata = {
  title: "Master Weather Resistant",
  description: "High-durability exterior paint designed to protect against harsh weather conditions, UV rays, and extreme temperatures.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Weather Resistant",
    description: "Premium weather-resistant paint with UV protection and vibrant, long-lasting finish for exterior surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Weather Resistant Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Weather Resistant | Alwaqas Paint",
    description: "Durable exterior paint with advanced weather resistance for lasting protection and vibrant finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Weather Resistant Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Weather Resistant",
    image: "/master/9.webp",
    description: "If you need an ultimate protection of your homes or commercial buildings, get Master Paints Wether Resistant today. You can protect your home with Master Paints' Weather Resistant paint, specially formulated to withstand harsh environmental conditions. This high-quality paint offers the highest durability, making it the best choice for maintaining your home’s exterior. Looking to buy Master Weather Resistant paint, get your favorite products online. The weather resistant long-lasting protection against rain, sun, and extreme temperatures. With its advanced formula, this is the best exterior weather resistant paint available in Pakistan, ensuring your surfaces remain perfectly pigmented and intact for years. Don’t compromise on quality—buy weather resistant paint in Pakistan today and experience peace of mind with every stroke! Keep your home safe and beautiful regardless of the weather.",
    features: [
      "UV protection",
      "Weather Resistance",
      "Temperature Control",
      "Easy Maintenance",
      "Vibrant finish",
      "Robust texture",
      "Versatile Application"
    ],
    downloads: {
      ds: "/pdf/master/Master Weather Resistant_compressed.pdf",
      sc: "/pdf/master/Weather-Resistant_compressed.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;