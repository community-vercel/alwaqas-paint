import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/easy-wash.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/easywash';

export const metadata = {
  title: "Nippon EasyWash ",
  description: "Modified acrylic emulsion paint for interior walls with low VOC, good stain washability, and smooth matt finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon EasyWash ",
    description: "Affordable premium paint with excellent leveling, coverage, and washability for interior surfaces.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon EasyWash Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon EasyWash | Alwaqas Paint",
    description: "Low VOC interior paint with good washability, excellent hiding, and durable matt finish.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon EasyWash Product",
  }
};

const NipponEasyWash = () => {
  const productName = "Nippon EasyWash";
  const productDescription = "EasyWash is a modified acrylic emulsion paint with non-added lead and mercury which gives a very smooth classical matt finishing for internal walls. It is specially formulated with Low VOC and Alkyd Phenol Ethoxylate free for interior walls. This affordable medium premium range paint has good stain washability, good hiding power, easy application and durable functions.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/easy-wash.png"
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
          "Low VOC and Alkyd Phenol Ethoxylate free",
          "Good stain washability",
          "Excellent hiding power",
          "Easy application and durable finish"
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
      technicalDataSheetUrl="/pdf/NIPPON-Easy-Wash_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1.pdf"
    />
  );
};

export default NipponEasyWash;