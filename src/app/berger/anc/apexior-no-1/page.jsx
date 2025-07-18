import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/28.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/anc/apexior-no-1';

export const metadata = {
  title: "Berger Apexior No. 1",
  description: "Anti-corrosive coating for internal boiler surfaces, providing durable protection without a separate primer.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Apexior No. 1",
    description: "High-performance coating for boiler drums and tubes, with 6-8 hour drying time and 8-10 m²/liter coverage.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Apexior No. 1 Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Apexior No. 1 | Alwaqas Paint",
    description: "Anti-corrosive paint for internal boiler surfaces, ensuring a water-resistant, durable finish after curing.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Apexior No. 1 Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Apexior No. 1",
    image: "/berger/products/28.webp",
    description: "Apexior No. 1 is an anti-corrosive coating for internal surfaces of boiler drums, tubes, water walls, economisers, steam accumulators, etc.",
    application: "No separate primer is necessary. One coat of Apexior No. 1 should be applied with brush directly to clean steel. Work well into the surface and ensure all corners, edges, welded nuts/bolts are covered. Allow approximately 6 to 8 hours at 20˚C before overcoating. Apply further 2 coats of Apexior No. 1 with brush or roller, allowing 6 to 8 hours between coats. After applying the last coat, allow 12 to 16 hours for drying to permit solvent evaporation from the system. At this point, the coating will be dry but not cured or water-resistant. It is essential for coating performance that tank or boiler should be filled with water, and water temperature raised to above 100˚C (212˚F) for a minimum 5 hours period. This has the effect of baking the Apexior, thus producing an inert, insoluble and impermeable film.",
    DryingTime: "6 to 8 hours",
    Coverage: "8 to 10 meter square per litre at 38 microns",
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;