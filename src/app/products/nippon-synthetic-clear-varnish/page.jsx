import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

// WhatsApp-optimized configuration
const whatsappConfig = {
  imageVersion: "1.0",
  baseImageUrl: "https://www.alwaqaspaint.com/Synthetic-Clear-Varnish-3L.png",
  imageWidth: 1200,
  imageHeight: 630,
};

const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
const pageUrl = 'https://www.alwaqaspaint.com/products/nippon-synthetic-clear-varnish';

export const metadata = {
  title: "Nippon Synthetic Clear Varnish | Alwaqas Paint",
  description: "Superior alkyd varnish designed for wood and metal. Offers high gloss, durability, and protection.",
  metadataBase: new URL('https://www.alwaqaspaint.com'),
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Nippon Synthetic Clear Varnish | Alwaqas Paint",
    description: "Premium alkyd-based clear varnish providing superior gloss and durable finish for wood and metal.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: productImageUrl,
        width: whatsappConfig.imageWidth,
        height: whatsappConfig.imageHeight,
        alt: "Nippon Synthetic Clear Varnish Product",
        type: "image/png",
      },
    ],
    siteName: "Alwaqas Paint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nippon Synthetic Clear Varnish | Alwaqas Paint",
    description: "Protective and decorative finish for wood and metal surfaces with high gloss and durability.",
    images: [productImageUrl],
  },
  other: {
    "og:image:secure_url": productImageUrl,
    "og:image:type": "image/png",
    "og:image:width": whatsappConfig.imageWidth.toString(),
    "og:image:height": whatsappConfig.imageHeight.toString(),
    "og:image:alt": "Nippon Synthetic Clear Varnish Product",
  }
};

const Nippontilelac = () => {
  return (
    <BaseProductDetail
      productName="Nippon Synthetic Clear Varnish"
      productImage="/Synthetic-Clear-Varnish-3L.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            Nippon Synthetic Clear Varnish is a superior quality alkyd varnish specially formulated for wood and metal surfaces. Not only does it decorate, but it also protects these surfaces.
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
        "High build (with better hiding properties)",
        "Superior gloss",
        "Durable finish"
      ]}
      technicalDataSheetUrl="/pdf/NPPK-Wood-Range-NPPK-Synthetic-Clear-Varnish_compressed.pdf"
      shadeCardsUrl=""
    />
  );
};

export default Nippontilelac;
