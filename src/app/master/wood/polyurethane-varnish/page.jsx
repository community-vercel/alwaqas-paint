import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/34.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/wood/polyurethane-varnish';

export const metadata = {
  title: "Polyurethane Varnish | Premium Wood Protection Finish",
  description: "Oil-based polyurethane varnish for interior/exterior wood surfaces with UV resistance, scratch protection, and natural grain enhancement.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Polyurethane Varnish | Wood Surface Protection",
    description: "Durable oil-based varnish that shields wood from water, scratches and UV damage while enhancing natural grain with warm amber tones.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Polyurethane Varnish Wood Finish",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polyurethane Varnish | Indoor/Outdoor Wood Protection",
    description: "Heat-resistant varnish for floors, furniture and doors that maintains wood's natural beauty while providing durable protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Polyurethane Varnish Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Polyurethane Varnish",
    image: "/master/34.webp", 
    description: "Master Polyurethane Varnish is the ultimate oil-based wood finish, offering superior protection for both interior and exterior wooden surfaces. This professional-grade varnish creates a strong protective shield against scratches, stains, water damage, and other environmental elements. Available for purchase online throughout Pakistan, our polyurethane varnish enhances and preserves the natural wood grain while maintaining the warm, amber tones that highlight wood's natural beauty. The specially formulated varnish is exceptionally easy to apply, making it perfect for protecting floors, furniture, doors, cabinetry, and other wood surfaces. Its durable finish withstands daily wear while showcasing the wood's authentic character.",
    features: [
      "Superior protection against water and scratches",
      "Enhances and highlights natural wood grain",
      "Suitable for both interior and exterior applications",
      "Available in multiple finishes (gloss, semi-gloss, satin)",
      "UV-resistant to prevent fading and discoloration",
      "Heat-resistant for added durability",
      "Maintains wood's warm amber tones over time",
      "Easy application with smooth finish"
    ],
    downloads: {
      ds: "", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;