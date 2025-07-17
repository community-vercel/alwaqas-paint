import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/16.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/ext/aluminium-silver';

export const metadata = {
  title: "Master Aluminium Silver",
  description: "Premium metallic paint with glossy finish for interior and exterior applications, offering exceptional durability and sleek appearance.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Aluminium Silver",
    description: "High-quality aluminum silver paint that provides striking metallic sheen and protection for all surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Aluminium Silver Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Aluminium Silver | Alwaqas Paint",
    description: "Glossy metallic paint with easy application and durable finish for both interior and exterior use.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Aluminium Silver Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Aluminium Silver",
    image: "/master/16.webp",
    description: "Introducing Master Paints' Aluminium Silver, a premium paint designed to deliver a sleek and modern finish with glossy look. Aluminum Silver is perfect for both interior and exterior applications, this high-quality paint provides a striking metallic sheen that enhances the look of any surface. You can buy Master Aluminium Silver paint online, offering you exceptional durability and coverage. With competitive aluminum silver paint prices in Pakistan, achieving a stunning finish is easy, quick and perfect. Don't miss out—buy Master Aluminium paint online in Pakistan today and give a metallic glossy touch to your surroundings.",
    features: [
      "Sleek Metallic Finish",
      "Protection",
      "Durability",
      "Inexpensive",
      "Easy Application",
    ],
    downloads: {
      ds: "/pdf/master/mixing Silver_compressed.pdf",
      sc: ""
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;