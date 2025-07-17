
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp / social sharing config
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/10.png",
  imageWidth: 1200,
  imageHeight: 630
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-synthetic-undercoat-wood';

export const metadata = {
  title: "Dulux Synthetic Undercoat | Wood & Metal Primer | Alwaqas Paint",
  description: "High-quality solvent-based primer for wood and metal. Seals, protects, and improves adhesion for topcoats. No added lead or mercury.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Synthetic Undercoat | Wood & Metal Surface Primer",
    description: "Solvent-based undercoat for interior & exterior wood and metal. Prevents rust, seals surfaces, and ensures topcoat performance.",
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
    description: "Premium undercoat for wood and metal. Great adhesion and anti-rust protection.",
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
    id: 1,
    title: "Dulux Synthetic Undercoat Wood and Metal Primer",
    image: "/dulux/10.png",
    description:
      "Dulux Synthetic Undercoat is a high-quality solvent-based primer for all kinds of interior and exterior wood and metal surfaces. It protects metal from rust and acts as a sealant for wood, ensuring uniform appearance and strong adhesion for topcoats.",
    keyInformation: {
      finish: "Matt",
      coverage: "11–13 m²/L",
      dryingTime: "16 hours between coats",
      coats: "1",
    },
    features: [
      "Seals Wood",
      "Improves Adhesion with Top Coat",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply 2–3 coats of Dulux Synthetic Undercoat and leave for 16 hours between coats.",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_synthetic_undercoatf54286404383324.pdf",
      tds: "/pdf/dulux/tds_dulux_synthetic_undercoat_pk.pdf",
      warranty: "/pdf/dulux/pentalite_classic_tc.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxSyntheticUndercoat;
