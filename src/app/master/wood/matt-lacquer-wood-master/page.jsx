import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/26.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/wood/matt-lacquer-wood-master';

export const metadata = {
  title: "Matt Lacquer Wood Master | Premium Matte Wood Finish",
  description: "Nitrocellulose-based matte lacquer for wood with scratch-proof protection, enhancing natural wood texture for furniture and doors.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Matt Lacquer Wood Master | Matte Wood Protection",
    description: "Durable nitrocellulose lacquer providing non-reflective matte finish with excellent wear resistance for interior woodwork and furniture.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Matt Lacquer Wood Master Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Lacquer Wood Master | Modern Matte Wood Finish",
    description: "Scratch-proof matte lacquer that enhances wood's natural texture while providing durable protection for interior surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Matt Lacquer Wood Master Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Matt Lacquer Wood Master",
    image: "/master/26.webp", 
    description: "Matt Lacquer Wood Master from Master Paints offers a hard and scratch-proof surface, with a smooth and transparent matt finish. The formula is nitrocellulose-based lacquer which gives a smooth, non-reflective matte finish while improving the natural texture of your wood and delivering excellent protection. You can use it for furniture, doors, and interior woodwork, to give your wood a modern, and subtle appearance. Get the top-rated Matt Lacquer Wood Master paint either online, or visit the store for a scratch-resistant and long-lasting finish that resists wear and tear. Whether you're upgrading home decor or completing a professional project, Matt Lacquer Wood Master paint is the ideal choice for a flawless finish. Get in touch to know matt lacquer wood master paint prices in Pakistan.",
    features: [
      "Smooth, non-reflective matte finish",
      "Scratch-proof and durable protection",
      "Enhances natural wood texture",
      "Suitable for furniture, doors, and interior woodwork",
      "Nitrocellulose-based formula for superior adhesion",
      "Available for online or in-store purchase"
    ],
    downloads: {
      ds: "/pdf/master/Wood Master Matt_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;