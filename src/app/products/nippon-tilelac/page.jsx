import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/tilelac-1.png",
  imageWidth: 1200,
  imageHeight: 630,
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-tilelac';

export const metadata = {
  title: "Nippon Tilelac (Textured) | Alwaqas Paint",
  description: "Acrylic emulsion textured coat with 3 patterns: fine mountainous, heavy mountainous, and head-cut. Ideal for concrete, mortar, and asbestos surfaces.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Tilelac (Textured) | Alwaqas Paint",
    description: "Textured emulsion paint with exceptional durability and resistance to fungus and alkali for masonry surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Tilelac Textured Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Tilelac (Textured) | Alwaqas Paint",
    description: "Durable textured finish with anti-fungal properties, suitable for concrete and prefabricated surfaces.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Tilelac Textured Product",
  }
};

const Nippontilelac = () => {
  return (
    <BaseProductDetail
      productName="Nippon Tilelac (Textured)"
      productImage="/tilelac-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            It is an acrylic emulsion-based coat that gives a multi-coat textured finish. Available in 3 texture patterns: fine mountainous, heavy mountainous, and head-cut. TileLac can be applied on concrete (including prefabricated concrete), mortar, and asbestos.
          </p>

          <div className="flex flex-row gap-4 justify-center items-center my-4">
            <div className="w-10 h-16">
              <Image 
                src="/fungus_resistant.png" 
                alt="Fungus resistant icon"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      }
      highlights={[
        "Excellent durability",
        "Exceptional resistance to fungus and alkali",
      ]}
      technicalDataSheetUrl="/pdf/TileLac-EMA-Base_compressed-1.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (1).pdf"
    />
  );
};

export default Nippontilelac;
