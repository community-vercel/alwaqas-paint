
import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/primer/4.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/prim/dulux-red-oxide-metal-primer';

export const metadata = {
  title: "Dulux Red Oxide Metal Primer | Anti-Corrosive Primer | Alwaqas Paint",
  description: "Solvent-based anti-corrosive primer for ferrous and non-ferrous metals. Provides long-lasting protection for both interior and exterior metal surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Red Oxide Metal Primer",
    description: "Professional-grade metal primer with anti-corrosive properties for galvanized iron and other metal surfaces. Ensures superior topcoat adhesion.",
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
    description: "Anti-corrosive metal primer suitable for both ferrous and non-ferrous surfaces with 16-hour drying time between coats.",
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
    image: "/dulux/primer/4.png",
    description: "Dulux Red Oxide Anti-Corrosion Metal Primer is a solvent-based sealer and protective primer for interior and exterior ferrous and non-ferrous metal work, including new and pre-treated zinc and galvanized iron (after using pre-treatment primer). Its specialized formulation provides long-lasting corrosion resistance and improves topcoat adhesion.",
    keyInformation: {
      finish: "Matt",
      coverage: "11-13 m²/L",
      dryingTime: "16 Hours between coats",
      coats: "1"
    },
    features: [
      "Advanced Anti-Corrosive Protection",
      "Enhanced Topcoat Adhesion",
      "Long-Lasting Finish",
      "For Ferrous and Non-Ferrous Metals",
      "Suitable for Galvanized Surfaces",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "1. Clean metal surface thoroughly, removing rust and contaminants\n2. Apply one even coat of Dulux Red Oxide Primer\n3. Allow full 16 hours drying time before topcoat application\n4. For galvanized surfaces, use appropriate pre-treatment primer first\n5. Apply in well-ventilated areas",
    downloads: {
      sds: null,
      tds: "/pdf/dulux/primer/tds_dulux_red_oxide_primer_pk.pdf",
      warranty: null
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxRedOxideMetalPrimer;