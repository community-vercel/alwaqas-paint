import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/33.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/wood/matt-lacquer';

export const metadata = {
  title: "Berger Matt Lacquer",
  description: "Professional matt finish lacquer for furniture industry with durable film formation and 10-12m² coverage per litre.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Matt Lacquer",
    description: "High-quality wood lacquer providing tough, lasting matt finish for furniture production with 1-3 hour drying time.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Matt Lacquer Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Matt Lacquer | Alwaqas Paint",
    description: "Industrial-grade matt lacquer for wood surfaces with excellent build and durability for furniture applications.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Matt Lacquer Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "MATT LACQUER",
    image: "/berger/products/33.webp", 
    description: "Wood Pro Matt Lacquer provides a high-quality matt finish with good build for tough and lasting film formation. Specially designed for furniture industry applications.",
    application: [
      "• Thin 1:1 by volume with recommended thinner",
      "• Suitable for spray application or application with cloth pad",
      "• Apply on wood or wooden surfaces",
      "• Recommended application method: multiple thin coats rather than one thick coat",
      "• Ensure proper ventilation during application",
      "• Clean tools immediately after use with appropriate thinner"
    ],
    DryingTime: "1-3 hours (depending on temperature and humidity)",
    Coverage: "10-12 m² per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;