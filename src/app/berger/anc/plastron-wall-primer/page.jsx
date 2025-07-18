import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/23.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/anc/plastron-wall-primer';

export const metadata = {
  title: "Berger Plastron Wall Primer",
  description: "High-quality wall primer sealer for new plaster, holding back alkali and moisture with excellent coverage.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Plastron Wall Primer",
    description: "Ready-to-use primer with 1-3 hour drying time and 10-12 m²/liter coverage for plaster and cement surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Plastron Wall Primer Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Plastron Wall Primer | Alwaqas Paint",
    description: "Effective wall primer sealer for new plaster, ensuring a smooth base with fast drying and high coverage.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Plastron Wall Primer Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Plastron Wall Primer",
    image: "/berger/products/23.webp",
    description: "Plastron Wall Primer Sealer holds back alkali and moisture in new plaster. It is ready for use; however, if required, mineral turpentine may be mixed with it but should not exceed 1 litre (1000 c.c.) per 4 litres.",
    application: "Apply two coats on plaster or rough cement render under 3 months old. Apply second coat without thinning.",
    DryingTime: "1 - 3 hours",
    Coverage: "10 to 12 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;