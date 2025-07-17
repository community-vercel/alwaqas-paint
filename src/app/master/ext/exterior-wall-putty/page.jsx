import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/12.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/ext/exterior-wall-putty';

export const metadata = {
  title: "Master Exterior Wall Putty",
  description: "High-quality exterior wall putty that fills cracks and imperfections while providing waterproof protection.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Exterior Wall Putty",
    description: "Weather-resistant putty designed to prepare exterior walls for painting with superior durability.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Exterior Wall Putty Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Exterior Wall Putty | Alwaqas Paint",
    description: "Waterproof exterior putty that protects walls from moisture and weather damage.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Exterior Wall Putty Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Exterior Wall Putty",
    image: "/master/12.webp",
    description: "Master Paints Exterior Wall Putties are the best medium for filling up the cracks, leveling uneven surfaces, and covering any surface flaws. You can achieve a smooth and flawless finish with Master Paints' Exterior Wall Putty. Designed to prepare your walls for painting, this high-quality putty fills cracks and imperfections, providing a perfect surface for your exterior paint. If you're looking to buy Exterior Wall Putty paint, Master Paints offers a superior product at a competitive price. Our waterproof formula ensures long-lasting durability, protecting your walls from moisture and weather damage. Buy Master Exterior Wall Putty paint today and enjoy a professional-grade finish that stands the test of time. Get the best exterior wall putty price in Pakistan and protect your home's exterior.",
    features: [
      "Improved Paint Adhesion",
      "Waterproof Protection",
      "Highest Durability",
      "Easy to Apply",
      "Weather Resistant",
    ],
    downloads: {
      ds: "/pdf/master/Master Exterior Wall Putty TDS 2020_compressed.pdf",
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;