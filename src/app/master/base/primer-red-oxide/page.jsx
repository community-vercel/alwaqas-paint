import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/20.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/base/primer-red-oxide';

export const metadata = {
  title: "Master Primer Red Oxide",
  description: "High-quality metal primer that protects iron and steel surfaces from rust and corrosion in both interior and exterior environments.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Primer Red Oxide",
    description: "Protective primer for gates, railings and outdoor equipment that creates a durable layer against rust and wear.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Primer Red Oxide Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Primer Red Oxide | Alwaqas Paint",
    description: "Rust-protective primer with strong adhesion for industrial settings and long-lasting metal protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Primer Red Oxide Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Primer Red Oxide",
    image: "/master/20.webp",
    description: "Master Red Oxide Primer is a high-quality metal primer designed to protect iron and steel surfaces from rust and corrosion. For ideal use, you can apply it on gates, railings, and outdoor equipment. This is the best Red Oxide primer and creates a strong, protective layer that ensures long-lasting durability. Whether you're looking to protect new or pre-treated metal surfaces, this primer works well in both interior and exterior environments. Buy primer red oxide paint online at a reasonable price and increase the life span of your metal projects. We provide the best primer red oxide paint in Pakistan at a competitive price that doesn't fade quickly.",
    features: [
      "Great rust protection",
      "Effective on new and rusty metal",
      "Strong adhesion",
      "Resists wear in industrial settings",
      "Durable and long-lasting",
    ],
    downloads: {
      ds: "/pdf/master/Master Primer Red oxide_compressed.pdf",
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;