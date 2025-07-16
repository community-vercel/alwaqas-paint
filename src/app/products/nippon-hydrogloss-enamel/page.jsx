import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Hydro-gloss-1.png",
  imageWidth: 1200,
  imageHeight: 630
};

// Construct final URL with cache control
const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-hydrogloss-enamel';

export const metadata = {
  title: "Nippon Hydrogloss Enamel | Alwaqas Paint",
  description: "Eco-friendly, low-VOC enamel paint for interior wood and metal surfaces with excellent coverage and smooth finish.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Hydrogloss Enamel | Alwaqas Paint",
    description: "Low-odor, solvent-free enamel paint ideal for eco-sensitive areas like hospitals and schools, with durable, smooth finish.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Hydrogloss Enamel Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Hydrogloss Enamel | Alwaqas Paint",
    description: "Environmentally friendly enamel paint with low VOC and excellent coverage for interior use.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Hydrogloss Enamel Product",
  }
};

const NipponHydroglossEnamel = () => {
  const productName = "Nippon Hydrogloss Enamel";
  const productDescription = "Hydro-Gloss is an environmental friendly green product with low VOC (Volatile Organic Compound) for interior use. It is formulated with a solvent-free resin to limit air pollutants and has an extremely low odour during application and drying. Being a green product, it is ideal for use in eco-sensitive commercial and residential areas such as hospitals, schools, residential buildings and hotels. It is easy to apply and forms a tough paint film with durability and smooth finishing.";

  return (
    <BaseProductDetail
      productName={productName}
      productImage="/Hydro-gloss-1.png"
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
          </div>
        </div>
      }
      features={[
        "Low VOC formulation",
        "Solvent-free resin",
        "Excellent coverage and durability",
        "Easy application and smooth finish"
        ]}
      highlights={[
        "Environmentally friendly green paint for wood and metal substrate",
        "Low VOC",
        "Easy application",
        "Fungus resistance",
        "Excellent coverage and hiding power"
      ]}
      specifications={[
        { name: "Coverage", value: "12-14 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Gloss" }
        ]}
      technicalDataSheetUrl="/pdf/Hydro-Gloss-NPPK-20-May-21_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (9).pdf"
    />
  );
};

export default NipponHydroglossEnamel;