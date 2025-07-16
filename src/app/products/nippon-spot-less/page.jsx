import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/spot-less-2.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-spot-less';

export const metadata = {
  title: "Nippon Spot-Less Matt Emulsion ",
  description: "Ultra-low VOC interior paint with high resistance to household stains and excellent washability.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Spot-Less Matt Emulsion ",
    description: "Premium interior paint with hydrophilic stain repellence, anti-bacterial properties, and low odor for a clean, durable finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Spot-Less Matt Emulsion Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Spot-Less Matt Emulsion | Alwaqas Paint",
    description: "Stain-resistant interior paint with ultra-low VOC, anti-fungus, and excellent coverage for lasting results.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Spot-Less Matt Emulsion Product",
  }
};

const NipponSpotLessMattEmulsion = () => {
  const productName = "Nippon Spot-Less Matt Emulsion";
  const productDescription = "Spot-less is a specifically designed ultra-low VOC interior premium paint with very high resistance to household stains such as tea, wine, coffee, inks, hand marks, lipstick, juice and etc. It has excellent hydrophilic stain repellence combined with good hydrophobic stain removal making it an excellent choice for high quality interior stain resistant paint.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/spot-less-2.png"
      category="Water Based Matt Emulsion"
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            {productDescription}
          </p>
          <div className="flex flex-row gap-4 justify-center items-center my-4">
            <div className="w-10 h-16">
              <Image 
                src="/green_choice.png"
                alt="Formaldehyde Absorption Icon"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
                priority
              />
            </div>
            <div className="w-10 h-16">
              <Image 
                src="/anti_bacterial.png"
                alt="Anti-Bacterial Icon"
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
          </div>
        </div>
      }
      features={
        [
          "Hydrophilic stain repellence",
          "Ultra-low VOC formulation",
          "Anti-bacterial and anti-fungus properties",
          "Excellent stain washability"
        ]
      }
      highlights={
        [
          "Excellent stain washability",
          "Excellent water resistance",
          "Low odour during application and drying",
          "Non-toxic, does not contain lead, mercury and heavy metals",
          "Anti-fungus property",
          "Long lasting colours",
          "Resists fading and chalking",
          "Easy application",
          "Less splattering",
          "Easy touch-up",
          "Excellent coverage and hiding power"
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
      technicalDataSheetUrl="/pdf/NIPPON-SPOT-LESS_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1.pdf"
    />
  );
};

export default NipponSpotLessMattEmulsion;