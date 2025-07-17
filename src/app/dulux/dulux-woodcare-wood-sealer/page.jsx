import BaseDetailPage from "../../../components/dulux/BaseDetailPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/dulux/12.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/dulux/dulux-woodcare-wood-sealer';

export const metadata = {
  title: "Dulux Woodcare Wood Sealer",
  description: "High-quality wood sealer that penetrates wood pores to prevent topcoat sinkage and ensure excellent hold out.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dulux Woodcare Wood Sealer",
    description: "Effective wood sealer for interior and exterior use, preventing topcoat sinkage and offering a slight sheen finish with no added lead or mercury.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Dulux Woodcare Wood Sealer Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulux Woodcare Wood Sealer | Alwaqas Paint",
    description: "Wood sealer that ensures excellent hold out and prevents topcoat sinkage, ideal for woodcare applications.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Dulux Woodcare Wood Sealer Product",
  }
};

const WoodcareSealer = () => {
  const product = {
    id: 3,
    title: "Dulux Woodcare Wood Sealer",
    image: "/dulux/12.png",
    description:
      "An excellent sealer which penetrates the pores of wood and prevents sinkage of topcoat to allow good hold out.",
    keyInformation: {
      finish: "Slight sheen",
      coverage: "11-13 m2/L",
      dryingTime: "2-3 Hours between coats",
      coats: "3",
    },
    features: [
      "Prevents Sinkage of Top Coat",
      "Allows Good Hold Out",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply 2-3 coats of Dulux Woodcare Sealer and leave for 2-3 hours between coats",
    downloads: {
      sds: "/pdf/dulux/pk_khatoa01_n2170010_0383104a2_english_gb_20221205_dulux_wc_sealer.pdf",
      tds: "/pdf/dulux/tds_woodcare_sealer_pk.pdf",
      warranty: "/pdf/dulux/warranty_woodcare_sealer.pdf",
    },
  };

  return (
    <BaseDetailPage
      product={product}
    />
  );
};

export default WoodcareSealer;