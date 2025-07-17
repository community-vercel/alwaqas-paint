import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/14.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/ext/synthetic-enamel';

export const metadata = {
  title: "Master Synthetic Enamel",
  description: "High-performance synthetic enamel paint with a durable, glossy finish for interior and exterior surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Synthetic Enamel",
    description: "Premium synthetic enamel paint offering a tough, glossy finish with excellent durability and weather resistance.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Synthetic Enamel Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Synthetic Enamel | Alwaqas Paint",
    description: "Glossy, durable synthetic enamel paint for long-lasting beauty and protection at competitive prices.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Synthetic Enamel Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Synthetic Enamel",
    image: "/master/14.webp",
    description: "Master Paints' Synthetic Enamel is a perfect top coat choice that provides you a durable and glossy finish for both interior and exterior surfaces. This high-performance paint is a great option for those who need the best Synthetic Enamel paint in Pakistan within affordable prices. If you want to enhance your projects with a tough, glossy, oil based paints for a long-lasting coat, use Synthetic Enamel! You can conveniently buy Synthetic Enamel paint online, making it easy to access premium quality glossy finish. Master Synthetic Enamel paint is also competitively priced, ensuring you get top-rated performance without breaking the bank. Ready to beautify your spaces? Buy online Master Synthetic Enamel paint today and enjoy lasting beauty and protection",
    features: [
      "Glossy finish",
      "Durable",
      "Easy to Apply",
      "Instant Dry",
      "Weather resistant",
    ],
    downloads: {
      ds: "/pdf/master/Synthetic Enamel1_compressed.pdf",
      sc: "/pdf/master/Synthetic-Enamel1_compressed.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;