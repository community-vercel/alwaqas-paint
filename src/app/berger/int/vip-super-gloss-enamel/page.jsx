import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/5.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/vip-super-gloss-enamel';

export const metadata = {
  title: "Berger VIP Super Gloss Enamel",
  description: "Premium synthetic enamel coating for both interior and exterior surfaces with high-gloss finish and excellent durability.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger VIP Super Gloss Enamel",
    description: "High-quality gloss enamel for wood, metal and various surfaces with 1-3 hour drying time and 13-15m² coverage per litre.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger VIP Super Gloss Enamel Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger VIP Super Gloss Enamel | Alwaqas Paint",
    description: "Top-grade synthetic enamel for interior/exterior use with superior gloss retention and protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger VIP Super Gloss Enamel Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "VIP SUPER GLOSS ENAMEL",
    image: "/berger/products/5.webp", 
    description: "VIP Super Gloss Enamel is a top quality synthetic enamel coating for interior and exterior use. It may be applied on prepared primed surfaces such as wood, metal, cement plaster, asbestos, cement sheets and hard board, etc.",
    application: "Apply with brush, roller or spray. For application, thin with approximately 10% mineral turpentine per gallon.",
    DryingTime: "1-3 hours",
    Coverage: "13-15 m² per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;