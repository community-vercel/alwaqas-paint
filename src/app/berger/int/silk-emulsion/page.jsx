import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/1.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/silk-emulsion';

export const metadata = {
  title: "Berger Silk Emulsion",
  description: "Premium acrylic emulsion with silk luster finish, offering superior stain resistance, anti-fungal properties and quick drying time.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Silk Emulsion",
    description: "High-quality interior emulsion with excellent washability, water resistance and environment-friendly formulation.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Silk Emulsion Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Silk Emulsion | Alwaqas Paint",
    description: "Premium decorative paint with silk luster that allows room reoccupation within 2-3 hours after painting.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Silk Emulsion Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Silk Emulsion",
    image: "/berger/products/1.webp", 
    description: "Berger Silk Emulsion is a high quality acrylic emulsion. It has hiding power and color retention properties. It is a low odor emulsion with high stain resistance, outstanding water resistance, anti-fungal properties, excellent coverage and outstanding washability. It is a premium quality decorative paint which gives an attractive silk luster. Freshly painted room with Berger Silk Emulsion can be reoccupied in 2-3 hours after painting. It has low maintenance coating and stain beading effect formulation. It is an environment friendly paint.",
    application: "Berger Silk Emulsion is used on interior surfaces, such as plaster, concrete, gypsum, brick work, asbestos, chip board and hard board etc. Stir well before use. It is recommended to apply Berger Silk Emulsion by roller or spray only. For roller application dilute 20-30% with clean tap water by volume. For spray application dilute 30-40% with clean tap water by volume. Diluted paint must be mixed well before use. Do not leave the diluted paint for more than one day.",
    DryingTime: "1-3 hours",
    Coverage: "12-16 m² per liter per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;