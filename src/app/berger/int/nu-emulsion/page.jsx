import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/9.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/nu-emulsion';

export const metadata = {
  title: "Berger NU Emulsion",
  description: "Top-quality distemper paint for interior surfaces, offering economical coverage and a smooth finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger NU Emulsion",
    description: "Economical distemper paint with 1-hour drying time, ideal for interior walls with high coverage.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger NU Emulsion Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger NU Emulsion | Alwaqas Paint",
    description: "Cost-effective interior distemper paint, quick-drying in 1 hour for smooth, durable wall finishes.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger NU Emulsion Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "NU Emulsion",
    image: "/berger/products/9.webp",
    description: "Berger NU Emulsion is a top quality distemper. It covers more wall area than other distempers and is therefore very economical.",
    application: "For thinning, mix equal volume of Berger NU Emulsion and water. For porous surfaces additional quantity of water may be necessary for the first coat in order to satisfy surface porosity. All equipment and brushes, etc. must always be cleaned with soap and water immediately after use.",
    DryingTime: "1 hour",
    Coverage: "Berger NU Emulsion dries out in half an hour and can be recoated in 1 hour.",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;