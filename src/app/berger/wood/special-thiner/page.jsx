import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/36.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/wood/special-thiner';

export const metadata = {
  title: "Berger Wood Pro Special Thinner",
  description: "Specialized thinner for wood coatings with optimal drying properties for furniture industry applications.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Wood Pro Special Thinner",
    description: "Professional-grade thinner designed for wood coatings with 3-6 hour drying time and excellent coverage.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Wood Pro Special Thinner Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Wood Pro Special Thinner | Alwaqas Paint",
    description: "High-performance thinner formulated specifically for wood coating systems in furniture production.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Wood Pro Special Thinner Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "SPECIAL THINNER",
    image: "/berger/products/36.webp", 
    description: "Wood Pro Special Thinner is a specialized formulation designed for optimal performance with wood coatings in furniture industry applications.",
    application: [`
      • Use for thinning compatible wood coatings to proper viscosity,
      • Follow manufacturer's recommended thinning ratios,
      • Ensure proper ventilation during application,
      • Use appropriate personal protective equipment,
      • Store in a cool, dry place away from direct sunlight,
      • Keep container tightly closed when not in use,
      • Keep out of reach of children
      `
    ],
    DryingTime: "3-6 hours (depending on environmental conditions)",
    Coverage: "13-16 m² per litre per coat (when used with compatible products)",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;