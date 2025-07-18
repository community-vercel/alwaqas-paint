import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/14.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/elegance-ultra-seal';

export const metadata = {
  title: "Berger Elegance Ultra Seal",
  description: "Water-based interior primer to resist alkali and moisture, strengthening plaster surfaces for painting.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Elegance Ultra Seal",
    description: "Tough, flexible primer with 2-3 hour drying time and 12-14 m²/liter coverage for interior plaster.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Elegance Ultra Seal Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Elegance Ultra Seal | Alwaqas Paint",
    description: "Interior water-based primer for new plaster, enhancing surface strength and paint coverage.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Elegance Ultra Seal Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Elegance Ultra Seal",
    image: "/berger/products/14.webp",
    description: "Berger Elegance Ultraseal Water Based Primer is formulated to resist alkali and moisture present in the new plaster surfaces. It is formulated to fill the pores, strengthen the surface and to increase the coverage of subsequent coats. It forms a tough and flexible paint film. It is for interior use only.",
    application: "Berger Elegance Ultraseal Water Based Primer can be applied by thinning (1:1) with water by volume for brush application (depending upon surface absorbency). For better results apply two coats of Berger Elegance Ultraseal Water Based Primer. For previously painted old surfaces, remove all defective or poorly adhering material by rubbing with a suitable abrasive paper or stiff brush. To smoothen the surface, Berger Wall Putty can be applied after the application of Berger Elegance Ultraseal Water Based Primer.",
    DryingTime: "2-3 hours.",
    Coverage: "12-14m2 per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;