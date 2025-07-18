import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/10.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/nu-enamel';

export const metadata = {
  title: "Berger NU Enamel",
  description: "High quality enamel for interior and exterior use, providing protection and decoration with high gloss finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger NU Enamel",
    description: "Durable enamel paint suitable for both interior and exterior surfaces with 1-hour drying time.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger NU Enamel Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger NU Enamel | Alwaqas Paint",
    description: "High gloss enamel paint for wood, metal and other surfaces with excellent durability.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger NU Enamel Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "NU ENAMEL",
    image: "/berger/products/10.webp", 
    description: "Berger NU Enamel is a good quality enamel for interior and exterior use. It provides protection and decoration to the surface under all conditions. It is a high gloss, highly durable enamel with ease of application.",
    application: "Berger NU Enamel is suitable for both interior and exterior surfaces. It can be applied on prepared, primed surfaces such as wood, metal, cement plaster, asbestos, hardboard, etc.",
    DryingTime: "1 hour",
    Coverage: "Berger NU Emulsion dries out in half an hour and can be recoated in 1 hour.",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;