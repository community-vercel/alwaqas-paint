import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/water-pro/4.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/water-pro/dulux-aquashield-waterproof-roofcoat';

export const metadata = {
  title: "Dulux Aquashield Waterproof Roofcoat",
  description: "Super durable elastomeric roof coating with Hydro Resist Technology, providing ultimate water barrier and flexibility.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Aquashield Waterproof Roofcoat",
    description: "High-performance roof coating with Hydro Resist Technology, offering 8 years of waterproofing, crack bridging, and multi-surface adhesion.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Aquashield Waterproof Roofcoat Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Aquashield Waterproof Roofcoat | Alwaqas Paint",
    description: "Elastomeric roof coating with Hydro Resist Technology, ensuring durable waterproofing and flexibility for various surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Aquashield Waterproof Roofcoat Product",
  }
};

const DuluxAquashieldWaterproofRoofcoat = () => {
  const product = {
    id: 4,
    title: "Dulux Aquashield Waterproof Roofcoat",
    image: "/water-pro/4.png",
    description: "Dulux Aquashield Waterproof Roofcoat is a super durable, easy to apply, elastomeric roof coating with Hydro Resist Technology. It is made with fine pigments and an extremely durable high bond polymer that provides ultimate water barrier membrane on roofs combined with good dirt pick up resistance and flexibility to keep the surface cool.",
    keyInformation: {
      finish: "Matt",
      coverage: "0.7-0.9 m²/L/3 coats",
      dryingTime: "5-6 hours",
      coats: "3"
    },
    features: [
      "8 Years Waterproofing Performance",
      "HydroResist",
      "Crack Bridging",
      "Multi-Surface Adhesion",
      "Foot Trafficable",
    ],
    applicationDescription: "Apply 1 coat of Dulux Aquashield Pre Treatment Coat and allow 4-6 hours drying time.",
    downloads: {
      sds: "/pdf/roofcoat.pdf",
      tds: "/pdf/tds_dulux_aquashield_waterproof_coat_pk.pdf",
      warranty: "/pdf/aquashield_roofcoat_tc.pdf"
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxAquashieldWaterproofRoofcoat;