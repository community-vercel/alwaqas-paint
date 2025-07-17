
import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/primer/3.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/prim/dulux-prime-on';

export const metadata = {
  title: "Dulux Prime-On | Universal Masonry Sealer | Alwaqas Paint",
  description: "Solvent-based sealer for interior/exterior masonry surfaces with excellent adhesion properties. Suitable for both new and previously decorated substrates.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Prime-On | Masonry Surface Sealer",
    description: "Professional-grade sealer that prepares both new and existing masonry surfaces for topcoat application with superior adhesion.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Prime-On Sealer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Prime-On | Alwaqas Paint",
    description: "Universal solvent-based sealer for brickwork, plaster and cement surfaces with 2-4 hour drying time.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Prime-On Sealer Product",
  }
};

const DuluxPrimeOn = () => {
  const product = {
    id: 18,
    title: "Dulux Prime-On",
    image: "/dulux/primer/3.png",
    description: "Dulux Prime-On is a solvent based sealer for interior and exterior masonry surfaces, both new and previously decorated, such as brickwork, plaster and cement. It creates an ideal base for topcoats by sealing porous surfaces and improving paint adhesion.",
    keyInformation: {
      finish: "Matt",
      coverage: "14-16 m²/L",
      dryingTime: "2-4 Hours (Dependent on temperature and humidity)",
      coats: "1"
    },
    features: [
      "Universal Surface Sealer",
      "Reinforces Adhesion and Durability of the End Coat",
      "Excellent Sealing Properties",
      "For Both Interior and Exterior Use",
      "Quick-Drying Formula"
    ],
    applicationDescription: "1. Clean surface thoroughly, removing dust and loose material\n2. Apply one even coat of Dulux Prime-On\n3. Allow 2-4 hours drying time (longer in high humidity)\n4. Apply topcoat within 48 hours for optimal results",
    downloads: {
      sds: null,
      tds: "/pdf/dulux/primer/tds_dulux_prime_on_pk.pdf",
      warranty: null
    }
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default DuluxPrimeOn;