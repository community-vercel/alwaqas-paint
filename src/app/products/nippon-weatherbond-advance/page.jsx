import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/wheathr-bond-advance.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-weatherbond-advance';

export const metadata = {
  title: "Nippon Weatherbond Advance | Alwaqas Paint",
  description: "Acrylic emulsion paint for exterior walls with twice the toughness and durability against harsh weather.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Weatherbond Advance | Alwaqas Paint",
    description: "Premium exterior paint with enhanced UV protection and resistance to dirt, fungus, and alkali.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Weatherbond Advance Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Weatherbond Advance ",
    description: "Durable exterior paint with 2X UV protection and resistance to harsh weather, fungus, and flaking.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Weatherbond Advance Product",
  }
};

const NipponWeatherbondAdvance = () => {
  const productName = "Nippon Weatherbond Advance";
  const productDescription = "Nippon Weatherbond Advance is an acrylic emulsion paint for exterior walls. Formulated with twice the toughness and durability, it provides supreme protection against harsh weather.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/wheathr-bond-advance.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            {productDescription}
          </p>
          <div className="flex flex-row gap-4 justify-center items-center my-4">
            <div className="w-10 h-16">
              <Image 
                src="/fungus_resistant.png"
                alt="Fungus Resistant Icon"
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
                src="/green_choice.png"
                alt="Formaldehyde Absorption Icon"
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
          "Acrylic emulsion formulation",
          "Enhanced weather resistance",
          "Low VOC and eco-friendly",
          "Superior coverage and adhesion"
        ]
      }
      highlights={
        [
          "Tough resistance against dirt, fungus, algae, flaking and alkali",
          "2X UV protection for longer-lasting colours",
          "Easy to apply with excellent coverage",
          "No added lead or mercury"
        ]
      }
      specifications={
        [
          { name: "Coverage", value: "10-12 sqm/litre" },
          { name: "Drying Time", value: "1-2 hours" },
          { name: "Recoat Time", value: "4-6 hours" },
          { name: "Finish", value: "Matte" }
        ]
      }
      technicalDataSheetUrl="/pdf/WB-Advance_compressed-1.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (2).pdf"
    />
  );
};

export default NipponWeatherbondAdvance;