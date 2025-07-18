import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/11.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/elegance-interior-putty';

export const metadata = {
  title: "Berger Elegance Interior Putty",
  description: "High-quality acrylic-based putty for interior surfaces, providing a smooth base for water-based paints.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Elegance Interior Putty",
    description: "Ready-to-use interior putty with 2-hour drying time and 5-7 m²/kg coverage per coat.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Elegance Interior Putty Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Elegance Interior Putty | Alwaqas Paint",
    description: "Acrylic putty for smooth interior finishes, ideal for use with water-based paints after priming.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Elegance Interior Putty Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Elegance Interior Putty",
    image: "/berger/products/11.webp",
    description: "ELEGANCE INTERIOR ACRYLIC PUTTY is a high-quality acrylic based ready-to-use putty for interior use. It forms the ideal base to give a smooth finish for water-based paints.",
    application: "ELEGANCE INTERIOR ACRYLIC PUTTY is used after the application of ELEGANCE ULTRASEAL-INTERIOR PRIMER. A coat of Primer is advised after the application of Putty. Remove all defective or poorly adhering material by rubbing with a suitable abrasive paper or stiff brush.",
    DryingTime: "2 Hours, Over coating with finishing paint after 16 hours",
    Coverage: "5-7m2 Per Kg Per Coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;