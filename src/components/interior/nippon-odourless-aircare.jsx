import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Odourless-Air-Care.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-odourless-aircare';

export const metadata = {
  title: "Nippon Odour~Less AirCare ",
  description: "Advanced water-based matt emulsion with formaldehyde absorption and anti-bacterial properties for improved indoor air quality.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Odour~Less AirCare",
    description: "Innovative paint with Active Carbon Technology to absorb formaldehyde, reduce odors, and provide a safer indoor environment.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Odour~Less AirCare Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Odour~Less AirCare | Alwaqas Paint",
    description: "Eco-friendly paint with formaldehyde absorption, anti-bacterial properties, and near-zero VOC for healthier interiors.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Odour~Less AirCare Product",
  }
};

const NipponOdourlessAircare = () => {
  const productName = "Nippon Odour~Less AirCare";
  const productDescription = "Nippon Odour~less AirCare is one of the most advanced technological innovations to date that helps improve indoor air quality by absorbing formaldehyde, an indoor air pollutant. This breakthrough product has Anti-Formaldehyde with Active Carbon Technology that continuously absorbs harmful formaldehyde from the air and converts them into water vapour, creating a safer environment for everyone. The advanced formula also includes odor-neutralizing compounds that eliminate unpleasant smells while maintaining excellent air quality.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Odourless-Air-Care.png"
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
          "Formaldehyde absorption technology",
          "Low odor formulation",
          "Anti-bacterial properties",
          "Excellent coverage and durability"
        ]
      }
      highlights={
        [
          "Air-refreshing Formaldehyde absorbent",
          "Near zero VOC and odour",
          "Anti-bacterial formulation",
          "Superior washability and scrub resistance",
          "Eggshell finish",
          "Safer indoor air"
        ]
      }
      specifications={
        [
          { name: "Coverage", value: "12-14 sqm/litre" },
          { name: "Drying Time", value: "1-2 hours" },
          { name: "Recoat Time", value: "4-6 hours" },
          { name: "Finish", value: "Eggshell" }
        ]
      }
      technicalDataSheetUrl="/pdf/NIPPON-ODOUR-LESS-AirCare-_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1.pdf"
    />
  );
};

export default NipponOdourlessAircare;