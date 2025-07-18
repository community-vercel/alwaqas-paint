import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/26.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/anc/duxbak';

export const metadata = {
  title: "Berger Duxbak",
  description: "Clear water repellent for unpainted masonry surfaces, offering deep penetration and moisture resistance.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Duxbak",
    description: "Water-repellent coating with 1-3 hour drying time and 2-4 m²/liter coverage for masonry surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Duxbak Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Duxbak | Alwaqas Paint",
    description: "Clear, breathable water repellent for masonry, ensuring long-lasting protection against moisture.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Duxbak Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Duxbak",
    image: "/berger/products/26.webp",
    description: "Duxbak Water Repellent is a clear repellent for unpainted masonry surfaces. It penetrates deeply but permits the surface to breathe. Do not apply over glossy finish. It is impervious to moisture penetration.",
    application: "Apply DUXBAK in dry weather as approximately 16 hours are required for curing. If the surface becomes wet during this period, effectiveness of the treatment may be impaired. Apply by flooding the surface using a wide brush to cause run down of about 12 inches. This will ensure good impregnation. Duxbak may also be applied by conventional spray at lowest possible pressure.",
    DryingTime: "1 - 3 hours",
    Coverage: "2 to 4 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;