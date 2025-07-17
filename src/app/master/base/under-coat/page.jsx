import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/18.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/base/under-coat';

export const metadata = {
  title: "Master Under Coat",
  description: "High-quality base preparation paint that creates the perfect foundation for flawless topcoats on various surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Under Coat",
    description: "Top-rated base preparation paint that eliminates imperfections and provides superior adhesion for topcoats.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Under Coat Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Under Coat | Alwaqas Paint",
    description: "Quick-drying base preparation paint for smooth finishes on wood, drywall and metal surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Under Coat Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Under Coat",
    image: "/master/18.webp",
    description: "Start all of your painting projects with our top-rated base preparation paints. These high-quality paints give your surfaces the perfect foundation for a long-lasting and flawless topcoat. By improving stickiness, they create a strong foundation for your topcoat. Buy the best base preparation paints in Pakistan and never see porous areas or imperfections like cracks or bumps! Lay down a smooth foundation for the interior and exterior areas.Our best base preparation paints online are perfect for walls, furniture, and more. With superior durability and quick-drying properties, you can apply topcoat and end projects quickly. Buy Master Paint's base preparation paints to prep your painting area!",
    features: [
      "Helps the topcoat stick better",
      "Long-lasting",
      "Smoother finishing",
      "Dries quickly",
      "Versatile for wood, drywall, and metal",
    ],
    downloads: {
      ds: "",
      sc: ""
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;