import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/3.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/elegance-desire';

export const metadata = {
  title: "Berger Elegance Desire",
  description: "High-quality, stain-resistant interior emulsion with a smooth silk finish and antifungal properties.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Elegance Desire",
    description: "Washable interior paint with 1-3 hour drying time and 13-16 m²/liter coverage for elegant walls.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Elegance Desire Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Elegance Desire | Alwaqas Paint",
    description: "Antifungal, stain-resistant interior emulsion with a smooth silk finish for durable, elegant walls.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Elegance Desire Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Elegance Desire",
    image: "/berger/products/3.webp",
    description: "Elegance Desire is a high-quality stain-resistant interior emulsion specially formulated to give a smooth elegant silk finish. Its unique antifungal properties protect the walls from fungus and algae. It is highly washable and has excellent dirt streak resistance to protect your walls.",
    application: "Elegance Desire can be applied with brush, roller or spray. It is applied by thinning water. For roller application 25% of water has to be used and for brush application 55-80% water has to be used. Before application, a coat of Berger interior water based primer is recommended. Clean all equipment and brushes with water soon after use.",
    DryingTime: "1 - 3 hours",
    Coverage: "13 to 16 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;