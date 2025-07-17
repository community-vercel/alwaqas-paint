import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/32.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/wood/nc-duco-master';

export const metadata = {
  title: "N.C Duco Master | Automotive & Wood Nitrocellulose Lacquer",
  description: "Professional-grade nitrocellulose lacquer for vehicles and wood with quick-drying, water-resistant formula available in multiple finishes.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "N.C Duco Master | Multi-Surface Automotive Paint",
    description: "Quick-drying NC lacquer for vehicles and furniture with self-leveling properties, available in glossy or matte finishes with excellent color retention.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "N.C Duco Master Automotive Paint",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "N.C Duco Master | Professional Automotive Lacquer",
    description: "Water-resistant nitrocellulose paint for vehicles and wood with quick-drying formula and long-lasting color options.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "N.C Duco Master Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "N.C Duco Master",
    image: "/master/32.webp", 
    description: "N.C. Duco Master is an excellent choice for quick and effective refinishing, especially for automobiles. The top-rated N.C. Duco master metal paint, also known as automotive paint, is a Nitrocellulose (NC) Lacquer that is waterproof. Aside from vehicle refinishing, this paint can breathe new life into wooden furniture and other surfaces, providing a high-quality finish. Buy master NC Duco metal paint in Pakistan and get polished appearances on cabinets, vehicles, and more! N.C. Duco Master dries quickly, retains its color well, and has self-leveling properties. Its premium finish can be glossy or matte, depending on your preference. See the NC Duco master metal paint price list after selecting your desired color.",
    features: [
      "Quick-drying nitrocellulose formula",
      "Water-resistant protective finish",
      "Multi-surface use (vehicles, wood, metal)",
      "Available in wide color selection",
      "Long-lasting color retention",
      "Self-leveling application properties"
    ],
    downloads: {
      ds: "/pdf/master/n.c duco master_compressed.pdf", 
      sc: "/pdf/master/Duco-Master (1)_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;