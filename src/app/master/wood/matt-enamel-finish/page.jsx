import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/30.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/wood/matt-enamel-finish';

export const metadata = {
  title: "Master Matt Enamel Finish | Premium Matte Wood Paint",
  description: "Alkyd-based matt enamel for wood with moisture resistance, easy cleaning, and elegant matte finish - perfect for kitchens and bathrooms.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Matt Enamel Finish | Wood Protection Paint",
    description: "Anti-fungal matte finish paint for wood surfaces, resistant to water and scratches with excellent coverage for high-use areas.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Matt Enamel Finish Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Matt Enamel Finish | Matte Wood Protection",
    description: "Durable alkyd-based enamel with matte finish that resists moisture, stains and daily wear on wood surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Matt Enamel Finish Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Matt Enamel Finish",
    image: "/master/30.webp", 
    description: "If you're looking for long-lasting paint that protects your wood surfaces, master matt enamel finish paint is a great option. Buy master matt enamel finish paint online to get a smooth and elegant finish without shine. Its alkyd-based formula makes it resistant to moisture and stains. Cleaning the best matt enamel finish paint is easy! Perfect for wood, this paint adds a protective layer against water, scratches, and daily wear. Its Akali resistance makes it perfect for high-use areas like kitchens and bathrooms. Available in a variety of shades, it enhances both interior and exterior wood surfaces with excellent coverage. Contact us to find out the master matt enamel finish paint price in Pakistan.",
    features: [
      "Top-rated matt enamel finish",
      "Anti-fungal protection",
      "Easy to clean surface",
      "Works well on wood, metal, and walls",
      "Suitable for high-use areas",
      "Elegant matte finish without shine"
    ],
    downloads: {
      ds: "/pdf/master/Matt Enamel12_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;