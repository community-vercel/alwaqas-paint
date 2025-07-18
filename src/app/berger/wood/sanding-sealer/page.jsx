import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/berger/products/31.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/berger/wood/sanding-sealer';

export const metadata = {
  title: "Berger Wood Pro Sanding Sealer",
  description: "High-build semi-gloss sealer for furniture production that seals fine wood pores with 10-12m² coverage per litre.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Berger Wood Pro Sanding Sealer",
    description: "Professional wood sealer for furniture industry with 1-3 hour drying time, compatible with various topcoats.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Berger Wood Pro Sanding Sealer Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berger Wood Pro Sanding Sealer | Alwaqas Paint",
    description: "Transparent high-build sealer that prepares wood surfaces for lacquer finishes in furniture production.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Berger Wood Pro Sanding Sealer Product",
  }
};

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Sanding Sealer",
    image: "/berger/products/31.webp", 
    description: "Wood Pro Sanding Sealer is a semi-gloss transparent high-build sealer that effectively seals small fine wood pores. Specially formulated for furniture industry production applications.",
    application: [`
      "• Thin 1:1 by volume with recommended thinner",
      "• Apply multiple thin coats rather than one thick coat",
      "• Ensure proper surface preparation before application",
      "• Can be over-coated with:",
      "   - Wood Lacquer",
      "   - Acid Catalysed Matt Lacquer", 
      "   - Polyurethane Lacquer",
      "• Allow proper drying time between coats (1-3 hours)",
      "• Sand lightly between coats for optimal results"
      `
    ],
    DryingTime: "1-3 hours (depending on environmental conditions)",
    Coverage: "10-12 m² per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;