import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/27.jpg",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-woodcare-matt-lacquer';

export const metadata = {
  title: "Dulux Woodcare Matt Lacquer | Protective Wood Finish | Alwaqas Paint",
  description: "Premium matt lacquer for wood surfaces providing durable protection and smooth finish. Ideal for interior wood finishing with quick drying formula.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Woodcare Matt Lacquer | Wood Surface Protection",
    description: "Professional-grade matt lacquer that enhances and protects wood surfaces with a smooth, natural finish. Safe formula with no added lead or mercury.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Woodcare Matt Lacquer Product",
        type: "image/jpg",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Woodcare Matt Lacquer | Alwaqas Paint",
    description: "Protective top coat lacquer for sealed wood surfaces with 3-4 hour drying time between coats.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/jpg",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Woodcare Matt Lacquer Product",
  }
};

const WoodcareMattLacquer = () => {
  const product = {
    id: 20,
    title: "Dulux Woodcare Matt Lacquer",
    image: "/dulux/27.jpg",
    description:
      "Dulux Woodcare Matt Lacquer is a premium protective top coat designed for sealed wood surfaces. It provides durable protection while maintaining the natural appearance of wood with a smooth matt finish. The formula is specially designed to enhance wood grain while offering resistance to everyday wear.",
    keyInformation: {
      finish: "Matt",
      coverage: "10-11 m²/L",
      dryingTime: "3-4 Hours between coats",
      coats: "2-3",
    },
    features: [
      "Enhances Natural Wood Grain",
      "Durable Protective Finish",
      "Quick-Drying Formula",
      "Smooth Matt Appearance",
      "No Added Lead or Mercury",
      "Easy Application"
    ],
    applicationDescription:
      "1. Ensure wood surface is properly sealed and prepared\n2. Stir lacquer thoroughly before use\n3. Apply 2-3 thin coats using a brush or spray\n4. Maintain 3-4 hours drying time between coats\n5. Work in well-ventilated area\n6. Clean tools with recommended thinner immediately after use",
    downloads: {
      sds: "/pdf/dulux/sds_woodcare_matt_lacquer.pdf",
      tds: "/pdf/dulux/tds_woodcare_matt_lacquer.pdf",
      warranty: "/pdf/dulux/warranty_woodcare_matt_lacquer.pdf"
    },
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default WoodcareMattLacquer;