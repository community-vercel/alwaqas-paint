import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/7.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-synthetic-undercoat-wood-and-metal-primer';

export const metadata = {
  title: "Dulux Synthetic Undercoat Wood and Metal Primer",
  description: "High quality solvent-based primer for interior & exterior wood & metal surfaces that protects against rust and ensures topcoat adhesion.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Synthetic Undercoat Wood and Metal Primer",
    description: "Protective primer that seals wood surfaces and prevents metal rusting while improving topcoat adhesion.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Synthetic Undercoat Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Synthetic Undercoat | Alwaqas Paint",
    description: "Solvent-based primer for wood and metal that ensures proper sealing and topcoat adhesion.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Synthetic Undercoat Product",
  }
};

const DuluxSyntheticUndercoat = () => {
  const product = {
    id: 7,
    title: "Dulux Synthetic Undercoat Wood and Metal Primer",
    image: "/dulux/exterior/7.png",
    description: "Dulux Synthetic Undercoat is a high quality solvent based primer for all kinds of interior & exterior wood & metal surfaces. It protects the metal surface from rust & gives uniform appearance to topcoat; acts as a sealant for wood surfaces to provide uniform appearance & adhesion with topcoat.",
    keyInformation: {
      finish: "Matt",
      coverage: "11-13 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "1"
    },
    features: [
      "Seals Wood",
      "Improves Adhesion with Top Coat",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 2-3 coats of Dulux Synthetic Undercoat and leave for 16 hours between coats",
    downloads: {
      sds: "/pdf/dulux/exterior/xx_pk_en_dulux_synthetic_undercoatf54286404383324.pdf",
      tds: "/pdf/dulux/exterior/tds_dulux_synthetic_undercoat_pk.pdf",
      warranty: "/pdf/dulux/exterior/xx_pk_en_dulux_synthetic_undercoatf54286404383324.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxSyntheticUndercoat;