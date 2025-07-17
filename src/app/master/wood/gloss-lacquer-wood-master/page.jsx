import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/25.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/wood/gloss-lacquer-wood-master';

export const metadata = {
  title: "Gloss Lacquer Wood Master | Premium Wood Finish",
  description: "Professional-grade gloss lacquer for wood with mirror-like finish, quick-drying formula, and durable protection for furniture and cabinetry.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Gloss Lacquer Wood Master | Master Paints",
    description: "Trusted by professionals, our gloss lacquer provides a durable, high-shine finish for doors, cabinets, and wooden furniture with nationwide delivery.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Gloss Lacquer Wood Master Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gloss Lacquer Wood Master | Professional Wood Finish",
    description: "Quick-drying wood lacquer with mirror-like gloss finish, perfect for DIYers and professionals alike.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Gloss Lacquer Wood Master Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Gloss Lacquer Wood Master",
    image: "/master/25.webp", 
    description: "Gloss Lacquer Wood Master is a proud product from Master Paints, designed to give a glossy finish to your woodwork. This glossy lacquer gives a stand-out shine with a durable, protective layer, making it perfect for frequently used wooden objects like doors, cabinets, and furniture. Its quick-drying formula gives a smooth, mirror-like finish that enhances the natural beauty of your wood. Looking for the best gloss lacquer wood master paint for your project? Master Paints brings you a product that has gained the trust of professionals and DIYers over the years. With a reputation for durability and perfect performance, it is chosen as the top-rated gloss lacquer wood master paint. For busy people or contractors, you don't need to visit the store as you can buy gloss lacquer wood master paint online. We offer nationwide delivery, so you can easily buy gloss lacquer wood master paint online in Pakistan and give your wood the perfect gloss it needs.",
    features: [
      "Glossy, mirror-like finish",
      "Durable protection for frequently used wooden surfaces",
      "Quick-drying formula for fast application",
      "Trusted by professionals and DIYers for reliability",
      "Available for easy online purchase with nationwide delivery",
    ],
    downloads: {
      ds: "/pdf/master/Gloss Lacquer Wood Master_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;