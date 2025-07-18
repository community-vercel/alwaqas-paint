import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/12.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/super-primer-plus';

export const metadata = {
  title: "Berger Super Primer Plus",
  description: "High-performance primer that resists alkali and moisture, creating a protective barrier for interior surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Super Primer Plus",
    description: "Specialized interior primer that prevents moisture passage and ensures superior paint adhesion on plaster surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Super Primer Plus Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Super Primer Plus | Alwaqas Paint",
    description: "Tough, flexible primer film that blocks substrate moisture for perfect paint application on interior walls.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Super Primer Plus Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Super Primer Plus",
    image: "/berger/products/12.webp", 
    description: "Berger Super Primer is formulated to resist alkali and moisture present in the new plaster surfaces. It forms a tough and flexible film which prevents passage of moisture from the substrate through the paint film. Before the application of Berger Super Primer, it is essential that the surface to be painted should be dry and free from grease, oil and dust. It is for interior use only.",
    application: "Berger Super Primer can be applied by thinning (1:1) with water by volume for brush application (depends on surface absorbency). For better results apply two coats of Berger Super Primer. For previously painted old surfaces, remove all defective or poorly adhering material by rubbing with a suitable abrasive paper or stiff brush. To smoothen the surface, Berger Wall Putty can be applied after the application of Berger Super Primer.",
    DryingTime: "2-3 hours",
    Coverage: "12-14 m² per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;