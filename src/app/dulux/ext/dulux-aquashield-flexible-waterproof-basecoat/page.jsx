import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/12.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-aquashield-flexible-waterproof-basecoat';

export const metadata = {
  title: "Dulux Aquashield Flexible Waterproof Basecoat",
  description: "Premium basecoat with Hydroshield Technology, offering waterproof protection and flexibility for exterior walls.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Aquashield Flexible Waterproof Basecoat",
    description: "High-quality basecoat with Hydroshield Technology, providing crack-bridging, water-repellent, and algae-resistant protection for exterior walls.",
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
    description: "Flexible waterproof basecoat with Hydroshield Technology, ensuring durability and protection against water, algae, and alkali for exterior walls.",
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

const DuluxAquashieldFlexibleWaterproofBasecoat = () => {
  const product = {
    id: 12,
    title: "Dulux Aquashield Flexible Waterproof Basecoat",
    image: "/dulux/exterior/12.png",
    description: "Aquashield Flexible Waterproof Basecoat is a high quality premium basecoat that provides waterproof protection to exterior walls. Its revolutionary Hydroshield technology bridges cracks and covers the wall surface with a flexible film, preventing water seepage. It also protects the surface against alkali, algae, and fungus attacks.",
    keyInformation: {
      finish: "Matt",
      coverage: "14-16 m²/litre",
      dryingTime: "4-6 Hours",
      coats: "3"
    },
    features: [
      "Hydroshield Technology",
      "Water Repellant",
      "Algae and Fungus Resistant",
      "Alkali Guard",
      "Extended Durability",
      "Crack Bridging"
    ],
    applicationDescription: "Apply 2-3 coats of Dulux Aquashield Flexible Waterproof Basecoat with 4-6 hours interval between coats.",
    downloads: {
      sds: null,
      tds: null,
      warranty: null
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxAquashieldFlexibleWaterproofBasecoat;