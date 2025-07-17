
import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/exterior/15.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/ext/dulux-red-oxide-metal-primer';

export const metadata = {
  title: "Dulux Red Oxide Metal Primer",
  description: "Solvent-based anti-corrosive protective primer for ferrous and non-ferrous metal work, suitable for both interior and exterior surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Red Oxide Metal Primer",
    description: "Anti-corrosive primer for metal surfaces that improves adhesion with top coats and provides long-lasting protection.",
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
    description: "Protective primer for metal surfaces with anti-corrosive properties and improved top coat adhesion.",
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
    id: 15,
    title: "Dulux Red Oxide Metal Primer",
    image: "/dulux/exterior/15.png",
    description: "Dulux Red Oxide Anti-Corrosion Metal Primer is a solvent-based sealer, anti-corrosive protective primer for interior and exterior ferrous and non-ferrous metal work including new and pre-treated zinc and galvanized iron after using pre-treatment primer.",
    keyInformation: {
      finish: "Matt",
      coverage: "11-13 m²/L",
      dryingTime: "16 Hours between coats",
      coats: "1"
    },
    features: [
      "Anti Corrosive",
      "Improves Adhesion with Top Coat",
      "Makes the Finish Long Lasting",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply one coat of Dulux Red Oxide Primer and leave for 16 hours.",
    downloads: {
      sds: null,
      tds: "/pdf/dulux/exterior/tds_dulux_red_oxide_primer_pk.pdf",
      warranty: null
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxRedOxideMetalPrimer;