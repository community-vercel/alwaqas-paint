import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/25.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/anc/synthetic-undercoat';

export const metadata = {
  title: "Berger Synthetic Undercoat",
  description: "Solvent-based undercoat for wood surfaces, providing a smooth base for interior and exterior applications.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Synthetic Undercoat",
    description: "High-quality undercoat with 1-3 hour drying time and 10-12 m²/liter coverage for wood surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Synthetic Undercoat Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Synthetic Undercoat | Alwaqas Paint",
    description: "Easy-to-apply synthetic undercoat for wood, ensuring a durable and smooth base for topcoats.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Synthetic Undercoat Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Synthetic Undercoat",
    image: "/berger/products/25.webp",
    description: "Synthetic Undercoat is a solvent based undercoating for interiors and exteriors (wood surfaces).",
    application: "Apply with brush or spray. It is ready for use for brush application. If required, mineral or genuine turpentine may be added for thinning.",
    DryingTime: "1 - 3 hours",
    Coverage: "10 to 12 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;