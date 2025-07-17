import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/24.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/base/roof-master';

export const metadata = {
  title: "Roof Master",
  description: "High-build, water-based roof coating paint that protects against harsh weather while providing thermal insulation.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Roof Master",
    description: "Durable roof paint that creates a waterproof layer for concrete, plaster and wooden roof tiles with fast drying formula.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Roof Master Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roof Master | Alwaqas Paint",
    description: "Weather-resistant roof coating that lowers indoor heat and provides long-lasting waterproof protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Roof Master Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Roof Master",
    image: "/master/24.webp",
    description: "Roof Master Paint is a durable solution designed to coat roofs and masonry surfaces. Our best roof coating paint offers impressive protection against harsh weather. This high-build, water-based paint ensures your roof is safe from wind, rain, and extreme temperatures. Buy roof master paint online in Pakistan for long-lasting results. With proper application, it can create a waterproof layer that helps keep the inside cooler in the summer and warmer during winter. The roof master paint provides a smooth matte finish for different surfaces like concrete, plaster, and wooden roof tiles. If you're looking for a reliable option to protect your roof, check out the roof master paint price in Pakistan.",
    features: [
      "Weather-resistant",
      "Lowers indoor heat",
      "Multi-surface use",
      "Long-lasting waterproof",
      "Fast drying with low VOCs",
    ],
    downloads: {
      ds: "/pdf/master/Roof Master1_compressed.pdf",
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;