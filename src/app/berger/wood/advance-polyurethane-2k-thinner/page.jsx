import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/41.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/wood/advance-polyurethane-2k-thinner';

export const metadata = {
  title: "Berger Advance Polyurethane 2K Thinner",
  description: "Specialized thinner for wood polyurethane products, suitable for all weather conditions and seasons.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Advance Polyurethane 2K Thinner",
    description: "Professional-grade thinner for 2K polyurethane wood coatings, ensuring optimal application in all conditions.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Advance Polyurethane 2K Thinner Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Advance Polyurethane 2K Thinner | Alwaqas Paint",
    description: "High-performance thinner formulated specifically for wood polyurethane products in all seasons.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Advance Polyurethane 2K Thinner Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Advance Polyurethane 2k Thinner",
    image: "/berger/products/41.webp", 
    description: "WOODPRO POLYURETHANE 2K THINNER is a unique formula formulated for wood-related polyurethane products 2K paint application in all types of weather conditions and seasons for interior and exterior use.",
    application: [`
      "• Use protective equipment during application (apron, gloves, protective glasses, and dust mask)",
      "• Highly flammable material - keep away from heat sources",
      "• Ensure adequate ventilation during application",
      "• Avoid contact with eyes and skin",
      "• In case of eye contact, rinse immediately and seek medical advice",
      "• Do not swallow - if ingested, consult a physician immediately",
      "• Store below 40°C and avoid direct sunlight for extended periods",
      "• Keep out of reach of children"
      `
    ],
    DryingTime: "1-3 hours (depending on environmental conditions)",
    Coverage: "N/A (Thinner product)",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;