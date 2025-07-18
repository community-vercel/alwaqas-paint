import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/30.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/anc/chlorinated-rubber';

export const metadata = {
  title: "Berger Chlorinated Rubber Base Paint",
  description: "Anti-corrosive chlorinated rubber paint for metal surfaces, highly impermeable to water and vapors.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Chlorinated Rubber Base Paint",
    description: "Fast-drying, one-pack paint with 8-10 m²/liter coverage, ideal for corrosion-resistant metal coatings.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Chlorinated Rubber Base Paint Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Chlorinated Rubber Base Paint | Alwaqas Paint",
    description: "Durable, water-impermeable paint for metal surfaces, suitable for low-temperature application.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Chlorinated Rubber Base Paint Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Chlorinated Rubber Base Paint",
    image: "/berger/products/30.webp",
    description: "Chlorinated Rubber Base Paint is compounded from plasticised, chlorinated rubber and specially selected pigments. It is far more impermeable to water and water vapours than any oil or varnish-based paint. Therefore, it makes metal surfaces corrosion resistant.",
    application: "Chlorinated Rubber Base Paint is a one-pack product, which is suitable for application throughout the year. Pre-treatment of surfaces prior to painting is necessary. It dries by evaporation and can be applied at low temperatures (35˚ to 40˚F) without damage to the film, provided the surface is dry at the time of painting.",
    DryingTime: "an hour and is recoatabale after 16 hours.",
    Coverage: "8 to 10 meter square per litre per coat.",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;