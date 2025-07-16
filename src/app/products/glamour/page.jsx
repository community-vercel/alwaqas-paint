import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Glamour-min-1.webp",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/glamour';

export const metadata = {
  title: "Nippon Glamour ",
  description: "Premium water-based matt emulsion with a luxurious silky finish, high washability, and fresh lemon fragrance for interior walls.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Glamour ",
    description: "High-quality interior paint with silicone additives, fungus resistance, and long-lasting colors for a smooth, durable finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Glamour Product",
        type: "image/webp",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Glamour | Alwaqas Paint",
    description: "Luxurious matt emulsion with low VOC, excellent washability, and a fresh lemon fragrance for interior surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/webp",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Glamour Product",
  }
};

const NipponGlamour = () => {
  const productName = "Nippon Glamour";
  const productDescription = "Nippon Glamour is a premium quality water based matt formulated on specialized Acrylic binder modified with silicone additives and specially designed to give a luxurious smooth silky finish to interior masonry surfaces, brickworks & wallboards. It is a highly washable emulsion with added fresh lemon fragrance. Its fungus resistance properties, smooth silky finish and long lasting colors make it a flawless choice for interiors.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Glamour-min-1.webp"
      category="Water Based Matt Emulsion"
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            {productDescription}
          </p>
          <div className="flex flex-row gap-4 justify-center items-center my-4">
            <div className="w-10 h-16">
              <Image 
                src="/good_washibility.png"
                alt="Good Washability Icon"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
                priority
              />
            </div>
            <div className="w-10 h-16">
              <Image 
                src="/low_odour.png"
                alt="Low Odour Icon"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
                priority
              />
            </div>
            <div className="w-10 h-16">
              <Image 
                src="/low_voc.png"
                alt="Low VOC Icon"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
                priority
              />
            </div>
            <div className="w-10 h-16">
              <Image 
                src="/good_leveling_coverage.png"
                alt="Good Leveling Coverage Icon"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      }
      features={
        [
          "Silicone-modified acrylic binder",
          "High washability",
          "Fungus resistance",
          "Fresh lemon fragrance"
        ]
      }
      highlights={
        [
          "Good levelling",
          "Good coverage",
          "Good washability",
          "Excellent hiding",
          "Low odour & low VOC"
        ]
      }
      specifications={
        [
          { name: "Coverage", value: "12-14 sqm/litre" },
          { name: "Drying Time", value: "1-2 hours" },
          { name: "Recoat Time", value: "4-6 hours" },
          { name: "Finish", value: "Matt" }
        ]
      }
      technicalDataSheetUrl="/pdf/NPPK-Glamour-TDS.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1.pdf"
    />
  );
};

export default NipponGlamour;