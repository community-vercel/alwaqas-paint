import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/38.jpg",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-woodcare-pu-lacquer';

export const metadata = {
  title: "Dulux Woodcare PU Lacquer | Premium Polyurethane Finish | Alwaqas Paint",
  description: "High-gloss polyurethane lacquer with UV protection and exceptional durability for wood surfaces. Solvent-based formula for professional-grade results.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Woodcare PU Lacquer | Protective Gloss Finish",
    description: "One-pack solvent-based polyurethane lacquer offering superior protection against wear and UV damage with high-gloss finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Woodcare PU Lacquer Product",
        type: "image/jpg",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Woodcare PU Lacquer | Alwaqas Paint",
    description: "Professional-grade polyurethane lacquer with 16-hour drying time between coats for optimal wood protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/jpg",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Woodcare PU Lacquer Product",
  }
};

const DuluxWoodcarePULacquer = () => {
  const product = {
    id: 38,
    title: "Dulux Woodcare PU Lacquer",
    image: "/dulux/38.jpg",
    description: "Dulux PU (Polyurethane) Lacquer is an easy to use, one pack solvent based gloss lacquer with high quality and excellent durability. Formulated to provide superior protection against UV light and daily wear, it enhances wood surfaces while maintaining their natural beauty with a brilliant gloss finish.",
    keyInformation: {
      finish: "Gloss",
      coverage: "11-13 m²/L",
      dryingTime: "16 Hours between coats",
      coats: "4"
    },
    features: [
      "High Quality and Excellent Durability",
      "Provides Protection from UV Light",
      "No Added Lead or Mercury",
      "Enhanced Wood Grain Appearance",
      "Resistant to Wear and Scratches"
    ],
    applicationDescription: "1. Prepare wood surface by sanding and cleaning thoroughly\n2. Apply 3-4 coats of Dulux Woodcare PU Lacquer\n3. Allow full 16 hours drying time between coats\n4. Maintain proper ventilation during application",
    downloads: {
      sds: "/pdf/dulux/pk_khatoa01_n2110007_0383108a2_english_gb_20221205_dulux_pu_lacquer.pdf",
      tds: "/pdf/dulux/tds_pu_lacquer_pk.pdf",
      warranty: "/pdf/dulux/pk_khatoa01_n2110007_0383108a2_english_gb_20221205_dulux_pu_lacquer.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxWoodcarePULacquer;