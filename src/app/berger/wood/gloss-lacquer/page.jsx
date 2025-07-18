import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/32.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/wood/gloss-lacquer';

export const metadata = {
  title: "Berger Gloss Lacquer",
  description: "Premium polyurethane-based wood coating system that provides brilliant top coat finish without separate staining.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Gloss Lacquer",
    description: "Advanced wood coating system combining stain and top coat in one product for superior gloss finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Gloss Lacquer Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Gloss Lacquer | Alwaqas Paint",
    description: "State-of-the-art polyurethane wood coating with 10-12m² coverage per litre and 1-3 hour drying time.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Gloss Lacquer Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "GLOSS LACQUER",
    image: "/berger/products/32.webp", 
    description: "Color Varnish is the state of the art wood coating system based on Polyurethane Resin for use as color top coat. It eliminates conventional wood stain application and gives brilliant top coat finish.",
    application: [ `• Apply on clean, dry wood surfaces free from dust and grease, • Stir thoroughly before use
      • Apply using brush, roller or spray equipment,
      • For best results, apply 2-3 thin coats rather than one thick coat,
      • Allow 1-3 hours drying time between coats,
      • Clean tools immediately after use with appropriate thinner`
    ],
    DryingTime: "1-3 hours",
    Coverage: "10-12 m² per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;