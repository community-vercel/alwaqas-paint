import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/29.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/anc/apexior-no-3';

export const metadata = {
  title: "Berger Apexior No. 3",
  description: "Anti-corrosive coating for external boiler surfaces, chimneys, and condensers with durable protection.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Apexior No. 3",
    description: "High-performance coating with 3-4 hour drying time and 9-12 m²/liter coverage for external surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Apexior No. 3 Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Apexior No. 3 | Alwaqas Paint",
    description: "Durable anti-corrosive paint for external boiler surfaces, ensuring long-lasting protection with easy application.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Apexior No. 3 Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Apexior No. 3",
    image: "/berger/products/29.webp",
    description: "Apexior No. 3 is an anti-corrosive coating for external surfaces of boilers, condensers, chimneys, etc.",
    application: "Normally, no separate primer is necessary. If, however, blast cleaning is carried out then holding primer of Epilux 66 Primer to 25 microns must be applied. For the finishing coat, apply 3 coats of Apexior No. 3, either with brush or roller. It is advisable to allow 24 hours between coats and a minimum of 24 hours after complete application to allow system to harden. Adequate ventilation must be provided at all times.",
    DryingTime: "3 to 4 hours",
    Coverage: "9 to 12 meter square per litre at 38 microns",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;