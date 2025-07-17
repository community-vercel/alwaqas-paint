import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/38.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/metal/nc-duco-master';

export const metadata = {
  title: "Master N.C Duco Master",
  description: "Premium nitrocellulose lacquer paint for quick-drying, waterproof finishes on vehicles and furniture.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master N.C Duco Master",
    description: "High-quality automotive paint with glossy or matte finish, ideal for metal and wood surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master N.C Duco Master Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master N.C Duco Master | Alwaqas Paint",
    description: "Quick-drying, water-resistant nitrocellulose paint for durable, polished finishes on multiple surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master N.C Duco Master Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "N.C Duco Master",
    image: "/master/38.webp",
    description: "N.C. Duco Master is an excellent choice for quick and effective refinishing, especially for automobiles. The Top-rated N.C. Duco master metal paint, also known as automotive paint, Duco is a Nitrocellulose (NC) Lacquer that is waterproof. Aside from vehicle refining, this paint can breathe new life into wooden furniture and other surfaces, providing a high-quality finish. Buy master NC Duco metal paint in Pakistan and get polished appearances on cabinets, vehicles, and more! N.C. Duco Master dries quickly, retains its color well, and has self-leveling properties. Its premium finish can be glossy or matte, depending on your taste. See the NC Duco master metal paint price list after picking out a color.",
    features: [
      "Quick-drying",
      "Water-resistant",
      "Multi-surface use",
      "Available in many colors",
      "Long-lasting color",
    ],
    downloads: {
      ds: "/pdf/master/n.c duco master1_compressed.pdf",
      sc: "/pdf/master/Duco-Master_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;