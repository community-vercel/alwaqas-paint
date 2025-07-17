import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/13.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/ext/matt-enamel-finish';

export const metadata = {
  title: "Master Matt Enamel Finish",
  description: "High-quality synthetic enamel with long-lasting matte finish for both interior and exterior surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Matt Enamel Finish",
    description: "Premium paint offering strong matte appearance with exceptional durability and stain resistance.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Matt Enamel Finish Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Matt Enamel Finish | Alwaqas Paint",
    description: "Smooth application enamel that provides a flawless, modern look with easy cleaning properties.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Matt Enamel Finish Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Matt Enamel Finish",
    image: "/master/13.webp",
    description: "Master Matt Enamel Finish is a high-quality synthetic enamel that has no comparison because of its long-lasting matte finish and durability. You can improve your interior and exterior projects with Master Paints' Matt Enamel Finish. This premium paint offers a strong matte appearance that adds elegance to any surface while providing exceptional durability. If you're looking to buy Matt Enamel Finish paint, Master Paints delivers a top-quality solution that resists stains and is easy to clean. With its smooth application and beautiful finish, it's the best Matt Enamel Finish paint in Pakistan. Ready to transform your spaces? Buy Master Matt Enamel Finish paint today and enjoy a flawless, modern look that stands the test of time, enhancing the beauty of your home.",
    features: [
      "Long Lasting Finish",
      "Easy to clean",
      "Elegant Aesthetics",
      "Instant Drying",
      "Smooth Application",
    ],
    downloads: {
      ds: "/pdf/master/Matt Enamel-_compressed.pdf",
      sc: "/pdf/master/Matt Enamel - _compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;