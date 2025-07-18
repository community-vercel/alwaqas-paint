import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/34.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/wood/pu-lacquer';

export const metadata = {
  title: "Berger PU Lacquer",
  description: "Single-pack polyurethane lacquer providing high-gloss protection for interior and exterior wood surfaces with 10-12m² coverage per litre.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger PU Lacquer",
    description: "High-gloss wood lacquer for doors, windows and wood items with durable protection and 1-3 hour drying time.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger PU Lacquer Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger PU Lacquer | Alwaqas Paint",
    description: "Single-component polyurethane lacquer offering excellent gloss retention for wood surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger PU Lacquer Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "PU LACQUER",
    image: "/berger/products/34.webp", 
    description: "Wood Pro PU Lacquer is a single-pack product that provides high-gloss protection and decorative finish for both exterior and interior wooden surfaces including doors, windows and related items.",
    application: [`
      "• Can be sprayed or applied with pad on wood surfaces",
      "• First coat: Dilute up to 25% with Timbercoat Thinner for optimal penetration",
      "• For best results, apply 2-3 coats",
      "• Allow proper drying time between coats (1-3 hours)",
      "• Ensure surfaces are clean and dry before application",
      "• Work in well-ventilated areas",
      "• Clean tools immediately after use with appropriate thinner"
      `
    ],
    DryingTime: "1-3 hours (depending on temperature and humidity)",
    Coverage: "10-12 m² per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;