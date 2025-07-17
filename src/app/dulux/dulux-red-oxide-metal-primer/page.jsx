
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp / social sharing config
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/35.png",
  imageWidth: 1200,
  imageHeight: 630
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-red-oxide-metal-primer';

export const metadata = {
  title: "Dulux Red Oxide Metal Primer | Anti-Corrosion Primer for Metal | Alwaqas Paint",
  description: "Solvent-based anti-corrosive metal primer ideal for ferrous and non-ferrous surfaces. Provides long-lasting protection and improves topcoat adhesion.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Red Oxide Metal Primer | Protective Metal Primer",
    description: "Durable anti-corrosion primer for interior and exterior metal. Enhances adhesion, protects from rust, and contains no added lead or mercury.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Red Oxide Metal Primer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Red Oxide Metal Primer | Alwaqas Paint",
    description: "Solvent-based anti-corrosive primer for metal surfaces. Offers protection and enhanced paint adhesion.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Red Oxide Metal Primer Product",
  }
};

const DuluxRedOxideMetalPrimer = () => {
  const product = {
    id: 25,
    title: "Dulux Red Oxide Metal Primer",
    image: "/dulux/35.png",
    description:
      "Dulux Red Oxide Anti-Corrosion Metal Primer is a solvent-based sealer, anti-corrosive protective primer for interior and exterior ferrous and non-ferrous metal work including new and pre-treated zinc and galvanized iron after using pre-treatment primer.",
    keyInformation: {
      finish: "Matt",
      coverage: "11–13 m²/L",
      dryingTime: "16 hours between coats",
      coats: "1",
    },
    features: [
      "Anti Corrosive",
      "Improves Adhesion with Top Coat",
      "Makes the Finish Long Lasting",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply one coat of Dulux Red Oxide Primer and leave for 16 hours.",
    downloads: {
      sds: "/pdf/dulux/tds_dulux_red_oxide_primer_pk.pdf",
      tds: "/pdf/dulux/tds_dulux_red_oxide_primer_pk.pdf",
      warranty: "/pdf/dulux/tds_dulux_red_oxide_primer_pk.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxRedOxideMetalPrimer;
