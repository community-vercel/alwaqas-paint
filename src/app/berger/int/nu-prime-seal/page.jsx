import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/16.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/nu-prime-seal';

export const metadata = {
  title: "Berger NU Prime Seal",
  description: "Alkali and moisture resistant primer for new plaster surfaces, forming a protective barrier for interior walls.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger NU Prime Seal",
    description: "Specialized primer that prevents moisture passage and resists alkali in new plaster surfaces (interior use only).",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger NU Prime Seal Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger NU Prime Seal | Alwaqas Paint",
    description: "Tough, flexible primer film that blocks substrate moisture for superior paint adhesion on interior walls.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger NU Prime Seal Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "NU Prime Seal",
    image: "/berger/products/16.webp", 
    description: "Berger NU Prime Seal is formulated to resist alkali and moisture present in the new plaster surfaces. It forms a tough and flexible film which prevents passage of moisture from the substrate through the paint film. Before the application of Berger NU Prime Seal, it is essential that the surface to be painted should by dry and free from grease and dust. It is for interior use only.",
    application: "NU Prime Seal can be applied by thinning (1:1) with water by volume for brush application (depend on surface absorbency). For better result apply two coats of NU Prime Seal. For previously painted old surfaces, remove all defective or poorly adhering material by rubbing with a suitable abrasive paper or stiff brush. To smoothen the surface, Berger wall Putty can be applied after the application.",
    DryingTime: "2-3 hours",
    Coverage: "12-14m² per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;