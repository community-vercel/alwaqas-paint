import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/10.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/ext/roof-master';

export const metadata = {
  title: "Master Roof Master",
  description: "Protective coat paint that cools masonry, reflects heat, and shields against wind, leakages, and seepages.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Roof Master",
    description: "Premium roof paint with heat-reflective technology, offering durability and energy-saving benefits.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Roof Master Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Roof Master | Alwaqas Paint",
    description: "Advanced roof coating with heat reflection and weather resistance for long-lasting protection.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Roof Master Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Roof Master",
    image: "/master/10.webp",
    description: "Roof Master is a protective coat paint product of Master paints that protects and cools masonry work from any wind, leakages and seepages, while reflecting back the heat. It is specially formulated to reflect heat and shield your roof from the elements, Roof Master ensures your home stays cooler during hot months. Looking for the best roof paint price in Pakistan, get in touch with us. Roof Master offers exceptional value, combining durability with advanced heat-reflective technology. Whether you're comparing roof coating paint prices or searching for affordable roof cooling solutions, Roof Master is your go-to choice. Buy Roof Master paint in Pakistan today and enjoy premium protection at a competitive price. Keep your roof strong and your home cool with Roof Master.",
    features: [
      "Heat Reflective Properties",
      "Weather Resistant",
      "Energy Saving",
      "Durable",
      "Full Coverage",
      "Easy Application",
    ],
    downloads: {
      ds: "/pdf/master/Roof Master_compressed.pdf",
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;