import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/6.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/int/synthetic-enamel';

export const metadata = {
  title: "Master Synthetic Enamel",
  description: "Premium synthetic enamel paint with a glossy, durable finish for wood, metal, and masonry surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Synthetic Enamel",
    description: "High-quality, low-VOC synthetic enamel paint with a glossy finish, resistant to chipping and fading.",
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
    description: "Durable, glossy synthetic enamel paint with smooth flow and stain resistance for lasting beauty.",
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
    image: "/master/6.webp",
    description: "Master Synthetic Enamel is a top-of-the-line paint for glossy and shiny surfaces. it gives a strong and shiny finish to all the dull, boring surfaces to bring them to new life! Synthetic Enamel is the best synthetic enamel paint that provides you with a tough, long-lasting coat that resists chipping, fading, and peeling. You can use it for a variety of surfaces such as wood, metal, and masonry, for a smooth and beautiful look for all your personal and professional projects. One of the greatest benefits of using synthetic enamel is its durability with gloss and shine. You can use it for the most in-use areas, like doors and furniture, ensuring your surfaces stay looking great over time. Plus, it dries quickly, allowing you to finish your painting faster without waiting around. It is based on a low VOC formula, and it’s also a safer option for your home, making it better for you and the environment. You can easily buy synthetic enamel paint online. Simply Buy Master Synthetic Enamel Paint Online today and enjoy a professional finish that will last for years to come!",
    features: [
      "Smooth Flow",
      "Improved Coverage",
      "Stain Resistant",
      "Glossy Finish",
      "Non Yellow",
    ],
    downloads: {
      ds: "/pdf/master/Synthetic Enamel_compressed.pdf",
      sc: "/pdf/master/Synthetic-Enamel_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;