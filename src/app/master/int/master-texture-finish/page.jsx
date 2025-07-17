import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/5.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/int/master-texture-finish';

export const metadata = {
  title: "Master Texture Finish",
  description: "Premium sensory paint with a soft, velvet texture for stylish, durable walls in any space.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Texture Finish",
    description: "High-quality texture paint with a velvet finish, perfect for accent walls and high-traffic areas.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Texture Finish Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Texture Finish | Alwaqas Paint",
    description: "Durable, eco-friendly texture paint with a soft, velvet finish for elegant, long-lasting walls.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Texture Finish Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Master Texture Finish",
    image: "/master/5.webp",
    description: "Introducing Master Texture Finish, the perfect choice for adding depth and style to your walls with a soft and velvet texture. This premium sensory paint creates a unique, textured look that instantly enhances any room. Whether you want to create a soft accent wall or add a subtle pattern to your living space, Master Texture Finish delivers flawless results with a soft velvet texture for a royal touch. Designed for durability, this texture paint is resistant to wear and tear, making it perfect for high-traffic areas like hallways, living rooms, and offices. Its easy application ensures smooth, professional-looking results that last. You can buy Master Texture Finish paint online and give your walls the artistic flair they deserve. Looking for quality and convenience? Buy Master Texture Paint online today and texturize your space with style and elegance!",
    features: [
      "Durable",
      "Smooth Finish",
      "Best For Masonary Surface",
      "Envoinmental Friendly",
    ],
    downloads: {
      ds: "/pdf/master/MASTER TEXTURE FINISH_compressed.pdf",
      sc: "/pdf/master/Texture-Finish_compressed_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;