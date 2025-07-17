import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/25.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-aquashield-interior-waterproof-basecoat';

export const metadata = {
  title: "Dulux Aquashield Interior Waterproof Basecoat | Alwaqas Paint",
  description: "Premium waterproof basecoat with DampProtect Technology for interior walls, providing protection against dampness and alkali salt deposits.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Aquashield Interior Waterproof Basecoat",
    description: "High-quality waterproof basecoat that guards interior walls against dampness, enhances top coat life and prevents alkali salt deposits.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Aquashield Interior Waterproof Basecoat Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Aquashield Interior Waterproof Basecoat | Alwaqas Paint",
    description: "Premium waterproof basecoat with crack bridging and alkali resistance properties for superior interior protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Aquashield Interior Waterproof Basecoat Product",
  }
};

const AquashieldInteriorWaterproofBasecoat = () => {
  const product = {
    id: 16,
    title: "Dulux Aquashield Interior Waterproof Basecoat",
    image: "/dulux/25.png",
    description:
      "Dulux Aquashield Interior Waterproof Basecoat is a high quality premium basecoat that provides waterproof protection to interior walls. Its revolutionary DampProtect Technology guards interior walls against dampness, enhances top coat life and prevents alkali salt deposits.",
    keyInformation: {
      finish: "Matt",
      coverage: "7-9 m2/L",
      dryingTime: "3-4 Hours",
      coats: "1",
    },
    features: [
      "Alkali Guard",
      "Crack Bridging",
      "Enhances Topcoat Opacity",
      "DampProtect Technology",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply one coat of Dulux Aquashield Interior Waterproof Basecoat using a brush, roller, or spray after thorough surface preparation. Ensure surfaces are clean, dry, and free from dirt, grease, and loose material. Allow 3-4 hours for drying before applying the topcoat. For optimal results, refer to the product brochure or visit our website for detailed application instructions.",
    downloads: {
      sds: "/pdf/dulux/interior_basecoat.pdf",
      tds: "/pdf/dulux/tds_dulux_aquashield_interior_waterproof_basecoat.pdf",
      warranty: "/pdf/dulux/interior_basecoat.pdf",
    },
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default AquashieldInteriorWaterproofBasecoat;