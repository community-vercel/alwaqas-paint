import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/17.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/int/spd-premium-putty';

export const metadata = {
  title: "Berger SPD Premium Putty - White Cement Based",
  description: "High-quality white cement based putty for superior surface preparation, ensuring perfect paint adhesion and smooth finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger SPD Premium Putty",
    description: "White cement based putty for interior and exterior surfaces with excellent drying properties and coverage.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger SPD Premium Putty Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger SPD Premium Putty | Alwaqas Paint",
    description: "Professional-grade putty formulation for perfect wall surfaces before painting application.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger SPD Premium Putty Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "SPD Premium Putty - White Cement Based",
    image: "/berger/products/17.webp", 
    description: "For the best results, new surfaces should be clean, dry, and free from oil, grease, dust and dirt. For previously painted surfaces remove all old paint which is loose and flaky and clean any oil or grease. Wet the surface before applying Berger SPD – White Cement Based Premium Putty.",
    application: "Add 1:2 ratio of water in a bucket and add Berger SPD – White Cement Based Premium Putty and mix properly. For instance, add 2 liters of water to make 4 kg & add 10 liters of water to make 20 kg and mix accordingly. Apply first coat of Berger SPD – White Cement Based Premium Putty with a putty blade directing from downside to upside. For second coat, first use a sand paper or scraper to clean the first coat, then apply the putty from right side to left side. Let it dry for 24 hours & apply paint the next day.",
    DryingTime: "Within 4 hours in summers & 8 hours in winters",
    Coverage: "5-7 m² per kg per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;