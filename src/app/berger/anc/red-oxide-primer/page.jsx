import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/24.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/anc/red-oxide-primer';

export const metadata = {
  title: "Berger Red Oxide Primer",
  description: "Anti-corrosive primer for prepared metal surfaces, offering durable protection and easy application.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Red Oxide Primer",
    description: "High-quality red oxide primer with 1-3 hour drying time and 10-12 m²/liter coverage for metal surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Red Oxide Primer Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Red Oxide Primer | Alwaqas Paint",
    description: "Easy-to-apply anti-corrosive primer for smooth, rust-free metal surfaces with excellent coverage.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Red Oxide Primer Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Red Oxide Primer",
    image: "/berger/products/24.webp",
    description: "Red Oxide Primer is an anti-corrosive primer for prepared surfaces. Surface must be clean from scales, rust, oil and grease.",
    application: "Apply with brush directly from the can. If necessary, mineral turpentine may be added for thinning. At Berger Paints, we understand that preparing your surface properly is crucial for a flawless result. Our red oxide paint is easy to apply with a brush, straight from the can, offering professional-grade protection with minimal effort. In cases where thinning is needed, mineral turpentine can be added to achieve the desired consistency. Designed for a smooth, non-absorbent surface, one liter of our primer covers approximately 10 to 12 square meters per coat, ensuring cost-effective application without compromising on quality.",
    DryingTime: "1 - 3 hours",
    Coverage: "10 to 12 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;