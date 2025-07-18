import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/8.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/top-super-emulsion';

export const metadata = {
  title: "Berger Top Super Emulsion",
  description: "High-quality economical distemper paint offering superior coverage for interior surfaces with quick drying time.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Top Super Emulsion",
    description: "Premium distemper paint that provides excellent coverage and economical solution for interior walls.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Top Super Emulsion Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Top Super Emulsion | Alwaqas Paint",
    description: "Cost-effective interior paint solution with superior coverage of 12-16 m² per litre per coat.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Top Super Emulsion Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Top Super Emulsion",
    image: "/berger/products/8.webp", 
    description: "Berger Top Super Emulsion is a top quality distemper. It covers more wall area than any other distempers and is therefore very economical.",
    application: "For thinning, mix equal volumes of Berger Top Super Emulsion and water. For porous surfaces, additional quantity of water may be necessary for the first coat in order to satisfy surface porosity. All equipment and brushes, etc. must always be cleaned with soap and water immediately after use.",
    DryingTime: "1 hour",
    Coverage: "12-16 m² per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;