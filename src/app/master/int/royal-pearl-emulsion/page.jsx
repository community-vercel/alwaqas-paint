import BaseDetailPage from "../../../../components/master/BaseDetails";
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/master/1.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/master/int/royal-pearl-emulsion';

export const metadata = {
  title: "Master Royal Pearl Emulsion",
  description: "Premium water-based paint with a luxurious pearl finish for interior masonry surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Master Royal Pearl Emulsion",
    description: "Eco-friendly, odorless paint with a soft pearl finish, offering anti-bacterial and stain-resistant properties.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Master Royal Pearl Emulsion Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Royal Pearl Emulsion | Alwaqas Paint",
    description: "Versatile, low-VOC paint with a luxurious pearl finish for elegant and durable interiors.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Master Royal Pearl Emulsion Product",
  }
};

const MasterPlastic = () => {
  const product = {
    id: 1,
    title: "Royal Pearl Emulsion",
    image: "/master/1.webp",
    description: "Master Royal Pearl Emulsion, is a premium, water-based solution that offers a decent pearl finish for your interior surfaces. Designed for versatility, this exclusive paint is ideal for a range of interior masonry applications, including brickwork, plaster, cement rendering, and wall boards. Royal Pearl Emulsion stands out for its odorless formula, making it a perfect choice for residential, commercial, and office spaces where air quality is a priority. Additionally, its low VOC (volatile organic compound) content promises an environmentally friendly alternative, without compromising on quality and performance. The elegant, soft pearl finish helps you have a refined touch of luxury in any room. Royal Pearl Emulsion improves the aesthetics of your space and adds luxury to your walls. For those wishing to have a high-quality, versatile, and stylish interior solution, the Master Royal Pearl Emulsion is your go-to option. Decorate and protect your interiors with elegance and precision – experience the difference today.",
    features: [
      "Anti-bacterial",
      "Stain resistant",
      "Easy application",
      "Peal effect",
      "Luxury feel and texture",
    ],
    downloads: {
      ds: "/pdf/master/royal pearl emulsion_compressed.pdf",
      sc: "/pdf/master/Royal-Pearl-Card_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;