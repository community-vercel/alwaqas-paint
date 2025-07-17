import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/water-pro/2.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/water-pro/dulux-aquashield-flexible-waterproof-basecoat';

export const metadata = {
  title: "Dulux Aquashield Flexible Waterproof Basecoat",
  description: "High-performance flexible waterproof basecoat with Hydroshield Technology, offering ultimate water defense and durability.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Aquashield Flexible Waterproof Basecoat",
    description: "Flexible waterproof basecoat with Hydroshield Technology, resistant to water penetration, algae, and fungus, with crack-bridging properties.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Aquashield Flexible Waterproof Basecoat Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Aquashield Flexible Waterproof Basecoat | Alwaqas Paint",
    description: "Flexible basecoat with Hydroshield Technology for superior water resistance, durability, and protection against algae and fungus.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Aquashield Flexible Waterproof Basecoat Product",
  }
};

const DuluxAquashieldFlexibleBasecoat = () => {
  const product = {
    id: 2,
    title: "Dulux Aquashield Flexible Waterproof Basecoat",
    image: "/water-pro/2.png",
    description: "Dulux Aquashield Flexible Waterproof Basecoat provides ultimate water defense with advanced Hydroshield Technology. This flexible coating forms a protective barrier that resists water penetration while allowing surface movement.",
    keyInformation: {
      finish: "Matt",
      coverage: "14-16 m² per litre",
      dryingTime: "4-6 hours between coats",
      coats: "3 coats recommended",
    },
    features: [
      "Hydroshield Technology",
      "Water Repellant",
      "Algae and Fungus Resistant",
      "Alkali Guard",
      "Extended Durability",
      "Crack Bridging"
    ],
    applicationDescription: "Apply 2-3 coats of Dulux Aquashield Flexible Waterproof Basecoat with 4-6 hours interval between coats",
    downloads: {
      tds: "",
      datasheet: "",
      guide: ""
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxAquashieldFlexibleBasecoat;