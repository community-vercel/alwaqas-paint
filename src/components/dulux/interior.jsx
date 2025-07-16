"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import BaseProductDetail from "./../../../components/interior/BaseProductDetail";

// Reusable Dulux Product Detail Component
const DuluxProductDetail = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappConfig = {
    imageVersion: "1.0",
    baseImageUrl: `https://www.alwaqaspaint.com${product.image}`,
    imageWidth: 1200,
    imageHeight: 630
  };

  const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
  const pageUrl = `https://www.alwaqaspaint.com/dulux/interior#${product.id}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <BaseProductDetail
          productName={product.title}
          productImage={product.image}
          category={product.category}
          productDescription={
            <div className="prose max-w-none">
              <p className="mb-4">{product.description}</p>
              <div className="flex flex-row gap-4 justify-center items-center my-4">
                {product.icons.map((icon, index) => (
                  <div key={index} className="w-10 h-16">
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={64}
                      height={64}
                      className="rounded-lg object-contain w-full h-full"
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          }
          features={product.features}
          highlights={product.highlights}
          specifications={product.specifications}
          technicalDataSheetUrl={product.technicalDataSheetUrl}
          shadeCardsUrl={product.shadeCardsUrl}
        />
        <a href="tel:+923335093223" className="mt-4 block">
          <button className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors">
            Call Now
          </button>
        </a>
      </div>
    </div>
  );
};

// Metadata generation function
export const generateMetadata = ({ product }) => {
  if (!product) return {};

  const whatsappConfig = {
    imageVersion: "1.0",
    baseImageUrl: `https://www.alwaqaspaint.com${product.image}`,
    imageWidth: 1200,
    imageHeight: 630
  };

  const productImageUrl = `${whatsappConfig.baseImageUrl}?v=${whatsappConfig.imageVersion}`;
  const pageUrl = `https://www.alwaqaspaint.com/dulux/interior#${product.id}`;

  return {
    title: `${product.title} | Alwaqas Paint`,
    description: product.description.split('.')[0] + '.',
    metadataBase: new URL('https://www.alwaqaspaint.com'),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${product.title} | Alwaqas Paint`,
      description: product.description.split('.')[0] + '.',
      url: pageUrl,
      type: "website",
      images: [
        {
          url: productImageUrl,
          width: whatsappConfig.imageWidth,
          height: whatsappConfig.imageHeight,
          alt: `${product.title} Product`,
          type: product.image.endsWith('.webp') ? "image/webp" : "image/jpeg",
        },
      ],
      siteName: "Alwaqas Paint",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Alwaqas Paint`,
      description: product.description.split('.')[0] + '.',
      images: [productImageUrl],
    },
    other: {
      "og:image:secure_url": productImageUrl,
      "og:image:type": product.image.endsWith('.webp') ? "image/webp" : "image/jpeg",
      "og:image:width": whatsappConfig.imageWidth.toString(),
      "og:image:height": whatsappConfig.imageHeight.toString(),
      "og:image:alt": `${product.title} Product`,
    }
  };
};

const DInterior = () => {
  // State for expanded menu items
  const [expandedMenus, setExpandedMenus] = useState({ interior: true });
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;
  // State for selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Interior Dulux products data
  const interiorProducts = [
    {
      id: 1,
      title: "Dulux Ambiance Velvet Touch Diamond Glo",
      category: "Interior",
      image: "/dulux/Dulux Ambiance.webp",
      description: "Dulux Ambiance Velvet Touch Diamond Glo is a premium water-based emulsion with a luxurious, silky finish for interior walls. It offers superior anti-mould and anti-fungus properties, ensuring long-lasting beauty and protection.",
      features: [
        "Luxurious silky finish",
        "Anti-mould and anti-fungus",
        "High durability",
        "Easy to clean"
      ],
      highlights: [
        "6 Year Performance Warranty",
        "Luxurious Finish",
        "Anti-Mould & Anti-Fungus"
      ],
      specifications: [
        { name: "Coverage", value: "12-14 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Silky" }
      ],
      icons: [
        { src: "/anti_bacterial.png", alt: "Anti-Bacterial Icon" },
        { src: "/fungus_resistant.png", alt: "Fungus Resistant Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Ambiance_Velvet_Touch_Diamond_Glo_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 2,
      title: "Dulux Ambiance Velvet Touch Pearl Glo",
      category: "Interior",
      image: "/dulux/2.jpg",
      description: "Dulux Ambiance Velvet Touch Pearl Glo provides a premium, pearlescent finish for interior walls, combining elegance with robust anti-mould and anti-fungus protection for a lasting luxurious look.",
      features: [
        "Pearlescent finish",
        "Anti-mould and anti-fungus",
        "High scrub resistance",
        "Smooth application"
      ],
      highlights: [
        "6 Year Performance Warranty",
        "Luxurious Finish",
        "Anti-Mould & Anti-Fungus"
      ],
      specifications: [
        { name: "Coverage", value: "12-14 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Pearlescent" }
      ],
      icons: [
        { src: "/anti_bacterial.png", alt: "Anti-Bacterial Icon" },
        { src: "/fungus_resistant.png", alt: "Fungus Resistant Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Ambiance_Velvet_Touch_Pearl_Glo_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 3,
      title: "Dulux Ambiance Velvet Touch Rich Matt",
      category: "Interior",
      image: "/dulux/3.jpg",
      description: "Dulux Ambiance Velvet Touch Rich Matt delivers a sophisticated matt finish for interior surfaces, with excellent anti-mould and anti-fungus properties for durable, elegant walls.",
      features: [
        "Rich matt finish",
        "Anti-mould and anti-fungus",
        "High durability",
        "Easy to apply"
      ],
      highlights: [
        "6 Year Performance Warranty",
        "Luxurious Finish",
        "Anti-Mould & Anti-Fungus"
      ],
      specifications: [
        { name: "Coverage", value: "12-14 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/anti_bacterial.png", alt: "Anti-Bacterial Icon" },
        { src: "/fungus_resistant.png", alt: "Fungus Resistant Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Ambiance_Velvet_Touch_Rich_Matt_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 4,
      title: "Dulux EasyCare",
      category: "Interior",
      image: "/dulux/4.avif",
      description: "Dulux EasyCare is a stain-resistant interior paint with anti-bacterial properties, designed for easy maintenance and a smooth, durable finish on interior walls.",
      features: [
        "Stain-resistant technology",
        "Anti-bacterial formulation",
        "Easy to clean",
        "Durable finish"
      ],
      highlights: [
        "5 Years Performance Warranty",
        "Stain Resistant",
        "Anti-Bacterial"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/anti_bacterial.png", alt: "Anti-Bacterial Icon" },
        { src: "/good_washibility.png", alt: "Good Washability Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_EasyCare_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 5,
      title: "Dulux Pentalite Classic",
      category: "Interior",
      image: "/dulux/5.jpg",
      description: "Dulux Pentalite Classic offers high opacity and coverage for interior walls, with anti-mould and anti-fungus properties for a long-lasting, smooth finish.",
      features: [
        "High opacity and coverage",
        "Anti-mould and anti-fungus",
        "Durable finish",
        "Easy application"
      ],
      highlights: [
        "4 Years Performance Warranty",
        "High Opacity & Coverage",
        "Anti-Mould & Anti-Fungus"
      ],
      specifications: [
        { name: "Coverage", value: "12-14 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/fungus_resistant.png", alt: "Fungus Resistant Icon" },
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Pentalite_Classic_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 6,
      title: "Dulux Pentalite Emulsion",
      category: "Interior",
      image: "/dulux/6.avif",
      description: "Dulux Pentalite Emulsion is a high-coverage interior paint with a durable finish, designed for easy application and long-lasting protection on interior surfaces.",
      features: [
        "High coverage",
        "Durable finish",
        "Easy application",
        "Smooth finish"
      ],
      highlights: [
        "High Coverage",
        "Durable",
        "Easy Application"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Pentalite_Emulsion_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 7,
      title: "Dulux Matt Enamel",
      category: "Interior",
      image: "/dulux/7.avif",
      description: "Dulux Matt Enamel provides a smooth, matt finish for interior surfaces, with excellent resistance to steam and moisture, ideal for kitchens and bathrooms.",
      features: [
        "Steam and moisture resistance",
        "Smooth matt finish",
        "Durable coating",
        "Easy to apply"
      ],
      highlights: [
        "3 Years Performance Warranty",
        "Excellent Resistance To Steam and Moisture",
        "Ideal For Use in Kitchens and Bathrooms"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_washibility.png", alt: "Good Washability Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Matt_Enamel_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 8,
      title: "Dulux Gloss Enamel",
      category: "Interior",
      image: "/dulux/8.avif",
      description: "Dulux Gloss Enamel offers a high-gloss, non-yellowing finish for interior surfaces, with excellent coverage and durability for a vibrant, lasting look.",
      features: [
        "Non-yellowing gloss finish",
        "High coverage",
        "Durable coating",
        "Easy application"
      ],
      highlights: [
        "3 Years Performance Warranty",
        "Non Yellowing",
        "High Coverage"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Gloss" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Gloss_Enamel_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 9,
      title: "Dulux Promise Interior Primer",
      category: "Interior",
      image: "/dulux/9.avif",
      description: "Dulux Promise Interior Primer is a low-odour, low-VOC primer that provides excellent adhesion for interior surfaces, ensuring a smooth base for topcoats.",
      features: [
        "Low VOC and low odour",
        "Excellent adhesion",
        "Smooth base for topcoats",
        "Quick drying"
      ],
      highlights: [
        "Excellent Adhesion",
        "Low Odour",
        "Low VOC"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/low_voc.png", alt: "Low VOC Icon" },
        { src: "/low_odour.png", alt: "Low Odour Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Promise_Interior_Primer_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 10,
      title: "Dulux Synthetic Undercoat Wood and Metal Primer",
      category: "Interior",
      image: "/dulux/10.avif",
      description: "Dulux Synthetic Undercoat Wood and Metal Primer seals wood and metal surfaces, improving adhesion with topcoats and ensuring a durable finish without added lead or mercury.",
      features: [
        "Seals wood and metal",
        "Improves topcoat adhesion",
        "No added lead or mercury",
        "Durable base"
      ],
      highlights: [
        "Seals Wood",
        "Improves Adhesion with Top Coat",
        "No Added Lead or Mercury"
      ],
      specifications: [
        { name: "Coverage", value: "8-10 sqm/litre" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "6-8 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Synthetic_Undercoat_Wood_Metal_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 11,
      title: "Dulux Promise Interior Emulsion",
      category: "Interior",
      image: "/dulux/11.avif",
      description: "Dulux Promise Interior Emulsion is an anti-bacterial paint with Chromabrite Technology, offering vibrant colors and a durable finish for interior walls.",
      features: [
        "Anti-bacterial formulation",
        "Chromabrite Technology for vibrant colors",
        "Durable finish",
        "Easy application"
      ],
      highlights: [
        "3 Years Performance Warranty",
        "Anti-Bacterial",
        "Chromabrite Technology"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/anti_bacterial.png", alt: "Anti-Bacterial Icon" },
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Promise_Interior_Emulsion_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 12,
      title: "Dulux Woodcare Wood Sealer",
      category: "Interior",
      image: "/dulux/12.png",
      description: "Dulux Woodcare Wood Sealer prevents sinkage of topcoats and ensures a smooth, durable finish on wood surfaces, free of lead and mercury.",
      features: [
        "Prevents topcoat sinkage",
        "Smooth finish",
        "No added lead or mercury",
        "High durability"
      ],
      highlights: [
        "Prevents Sinkage of Top Coat",
        "Allows Good Hold Out",
        "No Added Lead or Mercury"
      ],
      specifications: [
        { name: "Coverage", value: "8-10 sqm/litre" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "6-8 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Woodcare_Wood_Sealer_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 13,
      title: "Dulux Aluminium Paint Dual Pack",
      category: "Interior",
      image: "/dulux/13.avif",
      description: "Dulux Aluminium Paint Dual Pack provides anti-rust and anti-mold protection with high humidity resistance, ideal for interior metal surfaces.",
      features: [
        "Anti-rust and anti-mold",
        "High humidity resistance",
        "Durable coating",
        "Easy application"
      ],
      highlights: [
        "Anti-Rust",
        "Anti-Mold",
        "High Humidity Resistance"
      ],
      specifications: [
        { name: "Coverage", value: "8-10 sqm/litre" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "6-8 hours" },
        { name: "Finish", value: "Metallic" }
      ],
      icons: [
        { src: "/fungus_resistant.png", alt: "Fungus Resistant Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Aluminium_Paint_Dual_Pack_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 14,
      title: "Dulux Interior Acrylic Primer",
      category: "Interior",
      image: "/dulux/14.avif",
      description: "Dulux Interior Acrylic Primer offers superior adhesion and alkali resistance, enhancing topcoat opacity for a smooth, durable base on interior surfaces.",
      features: [
        "Superior adhesion",
        "Alkali resistant",
        "Enhances topcoat opacity",
        "Quick drying"
      ],
      highlights: [
        "Superior Adhesion",
        "Enhances Topcoat Opacity",
        "Alkali Resistant"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Interior_Acrylic_Primer_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 15,
      title: "Dulux Ambiance Velvet Touch Metallic Gold",
      category: "Interior",
      image: "/dulux/15.avif",
      description: "Dulux Ambiance Velvet Touch Metallic Gold delivers a pure metallic finish with UV resistance, providing a luxurious, long-lasting shine for interior walls.",
      features: [
        "Pure metallic finish",
        "UV resistant",
        "Long-lasting shine",
        "Smooth application"
      ],
      highlights: [
        "Pure Metallic Finish",
        "UV Resistant",
        "Long-Lasting Shine"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Metallic" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Ambiance_Velvet_Touch_Metallic_Gold_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 16,
      title: "Dulux Ambiance Velvet Touch Velvet Gold",
      category: "Interior",
      image: "/dulux/16.avif",
      description: "Dulux Ambiance Velvet Touch Velvet Gold offers a luxurious fabric-like finish with high coverage and a flawless matt appearance for interior walls.",
      features: [
        "Luxurious fabric-like finish",
        "High coverage",
        "Flawless matt finish",
        "Easy to apply"
      ],
      highlights: [
        "Delivers a Touch of Luxurious Fabrics",
        "High Coverage",
        "Flawless Matt Finish"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Ambiance_Velvet_Touch_Velvet_Gold_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 17,
      title: "Dulux Ambiance Velvet Touch Marble",
      category: "Interior",
      image: "/dulux/17.avif",
      description: "Dulux Ambiance Velvet Touch Marble provides a luscious marble-patterned finish with high scrub resistance, ideal for easy-to-clean interior surfaces.",
      features: [
        "Marble-patterned finish",
        "High scrub resistance",
        "Easy to clean",
        "Durable coating"
      ],
      highlights: [
        "Delivers a Flair of Luscious Marble Patterns",
        "High Scrub Resistance",
        "Easy to Clean"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_washibility.png", alt: "Good Washability Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Ambiance_Velvet_Touch_Marble_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 18,
      title: "Dulux Ambiance Velvet Touch Metallic Silver",
      category: "Interior",
      image: "/dulux/18.avif",
      description: "Dulux Ambiance Velvet Touch Metallic Silver offers a pure metallic finish that hides wall imperfections, providing a breathable coating for interior surfaces.",
      features: [
        "Pure metallic finish",
        "Hides wall imperfections",
        "Breathable coating",
        "Smooth application"
      ],
      highlights: [
        "Pure Metallic Finish",
        "Hides Wall Imperfections",
        "Breathable Coating"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Metallic" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Ambiance_Velvet_Touch_Metallic_Silver_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 19,
      title: "Dulux Ambiance Velvet Touch Metallic Bronze",
      category: "Interior",
      image: "/dulux/19.avif",
      description: "Dulux Ambiance Velvet Touch Metallic Bronze provides a pure metallic finish with low odour, safe for sensitive areas and ideal for interior walls.",
      features: [
        "Pure metallic finish",
        "Low odour",
        "Safe for sensitive areas",
        "Quick drying"
      ],
      highlights: [
        "Pure Metallic Finish",
        "Low Odour",
        "Safe for Sensitive Areas"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Metallic" }
      ],
      icons: [
        { src: "/low_odour.png", alt: "Low Odour Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Ambiance_Velvet_Touch_Metallic_Bronze_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 20,
      title: "Dulux Ambiance Velvet Touch Metallic Copper",
      category: "Interior",
      image: "/dulux/20.avif",
      description: "Dulux Ambiance Velvet Touch Metallic Copper offers a pure metallic finish with improved adhesion and quick-drying properties for interior surfaces.",
      features: [
        "Pure metallic finish",
        "Improved adhesion",
        "Quick drying",
        "Smooth application"
      ],
      highlights: [
        "Pure Metallic Finish",
        "Improves Adhesion",
        "Quick Drying"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Metallic" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Ambiance_Velvet_Touch_Metallic_Copper_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 21,
      title: "Dulux Ambiance Velvet Touch Colour Motion",
      category: "Interior",
      image: "/dulux/21.webp",
      description: "Dulux Ambiance Velvet Touch Colour Motion provides luminous brilliance with a unique look from every angle, offering a smooth finish for interior walls.",
      features: [
        "Luminous color brilliance",
        "Unique angle-dependent look",
        "Smooth finish",
        "High coverage"
      ],
      highlights: [
        "Provides Luminous Brilliance of Colours",
        "Giving a Unique Look Everytime form Every Angle",
        "Smooth Finish"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Ambiance_Velvet_Touch_Colour_Motion_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 22,
      title: "Dulux Ambiance Velvet Touch Velvet Silver",
      category: "Interior",
      image: "/dulux/22.avif",
      description: "Dulux Ambiance Velvet Touch Velvet Silver delivers a luxurious fabric-like finish with UV resistance and easy application for interior walls.",
      features: [
        "Luxurious fabric-like finish",
        "UV resistant",
        "Easy application",
        "Durable coating"
      ],
      highlights: [
        "Delivers a Touch of Luxurious Fabrics",
        "UV Resistant",
        "Easy Application"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Ambiance_Velvet_Touch_Velvet_Silver_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 23,
      title: "Paintex Star Synthetic Enamel",
      category: "Interior",
      image: "/dulux/23.avif",
      description: "Paintex Star Synthetic Enamel offers a smooth matt finish with high coverage, free of lead and mercury, ideal for interior surfaces.",
      features: [
        "High coverage",
        "Smooth matt finish",
        "No added lead or mercury",
        "Durable coating"
      ],
      highlights: [
        "No Added Lead or Mercury",
        "High Coverage",
        "Matt Finish"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Paintex_Star_Synthetic_Enamel_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 24,
      title: "Dulux Aquashield Pre Treatment Coat",
      category: "Interior",
      image: "/dulux/24.avif",
      description: "Dulux Aquashield Pre Treatment Coat features FungiClean Technology and an antimicrobial pack for superior surface preparation on interior walls.",
      features: [
        "FungiClean Technology",
        "Antimicrobial properties",
        "Superior surface preparation",
        "Quick drying"
      ],
      highlights: [
        "FungiClean Technology",
        "AntiMicrobial Pack",
        "Surface Prep Wash"
      ],
      specifications: [
        { name: "Coverage", value: "8-10 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/anti_bacterial.png", alt: "Anti-Bacterial Icon" },
        { src: "/fungus_resistant.png", alt: "Fungus Resistant Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Aquashield_Pre_Treatment_Coat_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 25,
      title: "Dulux Aquashield Interior Waterproof Basecoat",
      category: "Interior",
      image: "/dulux/25.avif",
      description: "Dulux Aquashield Interior Waterproof Basecoat provides alkali guard and crack-bridging properties, enhancing topcoat opacity for interior surfaces.",
      features: [
        "Alkali guard",
        "Crack bridging",
        "Enhances topcoat opacity",
        "Waterproof base"
      ],
      highlights: [
        "Alkali Guard",
        "Crack Bridging",
        "Enhances Topcoat Opacity"
      ],
      specifications: [
        { name: "Coverage", value: "8-10 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Aquashield_Interior_Waterproof_Basecoat_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 26,
      title: "Paintex Star Semi-Plastic Emulsion",
      category: "Interior",
      image: "/dulux/26.png",
      description: "Paintex Star Semi-Plastic Emulsion offers improved hiding power and a smooth matt finish, free of lead and mercury, for interior walls.",
      features: [
        "Improved hiding power",
        "Smooth matt finish",
        "No added lead or mercury",
        "Easy application"
      ],
      highlights: [
        "Improved Hiding Power",
        "Smooth Matt Finish",
        "No Added Lead or Mercury"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Paintex_Star_Semi_Plastic_Emulsion_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 27,
      title: "Dulux Woodcare Matt Lacquer",
      category: "Interior",
      image: "/dulux/27.jpg",
      description: "Dulux Woodcare Matt Lacquer provides a protective, smooth matt finish for wood surfaces, with high humidity resistance and no added lead or mercury.",
      features: [
        "Protective matt finish",
        "High humidity resistance",
        "No added lead or mercury",
        "Durable coating"
      ],
      highlights: [
        "Provides Protection and Smooth Finish",
        "No Added Lead or Mercury",
        "High Humidity Resistance"
      ],
      specifications: [
        { name: "Coverage", value: "8-10 sqm/litre" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "6-8 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Woodcare_Matt_Lacquer_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 28,
      title: "Dulux Woodcare Gloss Lacquer",
      category: "Interior",
      image: "/dulux/28.jpg",
      description: "Dulux Woodcare Gloss Lacquer offers a protective, high-gloss finish for wood surfaces, with durable coating and no added lead or mercury.",
      features: [
        "High-gloss finish",
        "Durable coating",
        "No added lead or mercury",
        "Easy maintenance"
      ],
      highlights: [
        "Provides Protection and Smooth Finish",
        "No Added Lead or Mercury",
        "Durable Coating"
      ],
      specifications: [
        { name: "Coverage", value: "8-10 sqm/litre" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "6-8 hours" },
        { name: "Finish", value: "Gloss" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Woodcare_Gloss_Lacquer_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 29,
      title: "Dulux Promise Interior Putty",
      category: "Interior",
      image: "/dulux/29.png",
      description: "Dulux Promise Interior Putty provides high coverage and comfortable application, offering a breathable coating for smooth interior surfaces.",
      features: [
        "High coverage",
        "Comfortable application",
        "Breathable coating",
        "Smooth finish"
      ],
      highlights: [
        "High Coverage",
        "Comfortable Application",
        "Breathable Coating"
      ],
      specifications: [
        { name: "Coverage", value: "1-2 sqm/kg" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Smooth" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Promise_Interior_Putty_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 31,
      title: "Dulux Prime-On",
      category: "Interior",
      image: "/dulux/31.avif",
      description: "Dulux Prime-On reinforces adhesion and durability of topcoats, offering excellent sealing properties and quick drying for interior surfaces.",
      features: [
        "Reinforces adhesion",
        "Excellent sealing properties",
        "Quick drying",
        "Durable base"
      ],
      highlights: [
        "Reinforces Adhesion and Durability of the End Coat",
        "Excellent Sealing Properties",
        "Quick Drying"
      ],
      specifications: [
        { name: "Coverage", value: "8-10 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Prime_On_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 32,
      title: "Paintex Putty",
      category: "Interior",
      image: "/dulux/32.png",
      description: "Paintex Putty is a quick-drying putty with easy application, providing a smooth matt finish for interior surfaces.",
      features: [
        "Quick drying",
        "Easy to apply",
        "Smooth matt finish",
        "High coverage"
      ],
      highlights: [
        "Quick Drying",
        "Easy To Apply",
        "Smooth Matt Finish"
      ],
      specifications: [
        { name: "Coverage", value: "1-2 sqm/kg" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Smooth" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Paintex_Putty_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 33,
      title: "Dulux Promise Gloss Enamel",
      category: "Interior",
      image: "/dulux/33.avif",
      description: "Dulux Promise Gloss Enamel features Chromabrite Technology for long-lasting, bright colors with high gloss retention and improved drying for interior surfaces.",
      features: [
        "Chromabrite Technology for vibrant colors",
        "High gloss retention",
        "Improved drying",
        "Durable finish"
      ],
      highlights: [
        "Chromabrite Technology - For Long Lasting Beautiful Bright Color",
        "High Gloss Retention",
        "Improved Drying"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Gloss" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Promise_Gloss_Enamel_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 34,
      title: "Dulux Ambiance Velvet Touch Linen",
      category: "Interior",
      image: "/dulux/34.avif",
      description: "Dulux Ambiance Velvet Touch Linen delivers a textured, fabric-like finish with a smooth matt appearance, easy to clean for interior walls.",
      features: [
        "Textured fabric-like finish",
        "Smooth matt finish",
        "Easy to clean",
        "High durability"
      ],
      highlights: [
        "Delivers a Weave of Textured Fabrics",
        "Matt Finish",
        "Easy to Clean"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_washibility.png", alt: "Good Washability Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Ambiance_Velvet_Touch_Linen_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 35,
      title: "Dulux Red Oxide Metal Primer",
      category: "Interior",
      image: "/dulux/35.avif",
      description: "Dulux Red Oxide Metal Primer provides anti-corrosive protection and improves adhesion for topcoats, ensuring a long-lasting finish on interior metal surfaces.",
      features: [
        "Anti-corrosive",
        "Improves topcoat adhesion",
        "Long-lasting finish",
        "Quick drying"
      ],
      highlights: [
        "Anti Corrosive",
        "Improves Adhesion with Top Coat",
        "Makes the Finish Long Lasting"
      ],
      specifications: [
        { name: "Coverage", value: "8-10 sqm/litre" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "6-8 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Red_Oxide_Metal_Primer_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 36,
      title: "Paintex Ultratex Vinyl Emulsion",
      category: "Interior",
      image: "/dulux/36.avif",
      description: "Paintex Ultratex Vinyl Emulsion offers excellent coverage and a smooth matt finish, free of lead and mercury, for interior walls.",
      features: [
        "Excellent coverage",
        "Smooth matt finish",
        "No added lead or mercury",
        "Easy application"
      ],
      highlights: [
        "Excellent Coverage",
        "Smooth Matt Finish",
        "No Added Lead or Mercury"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Paintex_Ultratex_Vinyl_Emulsion_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 37,
      title: "Paintex Ultraprime",
      category: "Interior",
      image: "/dulux/37.avif",
      description: "Paintex Ultraprime is a high-quality solvent-based sealer that reduces damage from alkali and salts, free of lead and mercury, for interior surfaces.",
      features: [
        "High-quality solvent-based sealer",
        "Reduces alkali and salt damage",
        "No added lead or mercury",
        "Durable base"
      ],
      highlights: [
        "High Quality Solvent Based Sealer",
        "Reduces Damage From Alkali and Salts",
        "No Added Lead or Mercury"
      ],
      specifications: [
        { name: "Coverage", value: "8-10 sqm/litre" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "6-8 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Paintex_Ultraprime_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 38,
      title: "Dulux Woodcare PU Lacquer",
      category: "Interior",
      image: "/dulux/38.jpg",
      description: "Dulux Woodcare PU Lacquer offers high-quality protection and durability for wood surfaces, with UV resistance and no added lead or mercury.",
      features: [
        "High durability",
        "UV resistance",
        "No added lead or mercury",
        "Smooth finish"
      ],
      highlights: [
        "High Quality and Excellent Durability",
        "Provides Protection from UV Light",
        "No Added Lead or Mercury"
      ],
      specifications: [
        { name: "Coverage", value: "8-10 sqm/litre" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "6-8 hours" },
        { name: "Finish", value: "Gloss" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Woodcare_PU_Lacquer_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 39,
      title: "Dulux Woodcare Special Thinner",
      category: "Interior",
      image: "/dulux/39.jpg",
      description: "Dulux Woodcare Special Thinner is a tough, durable thinner for wood coatings, with easy maintenance and no added lead or mercury.",
      features: [
        "Tough and durable",
        "Easy maintenance",
        "No added lead or mercury",
        "Quick drying"
      ],
      highlights: [
        "No Added Lead or Mercury",
        "Tough and Durable",
        "Easy Maintenance"
      ],
      specifications: [
        { name: "Coverage", value: "N/A" },
        { name: "Drying Time", value: "N/A" },
        { name: "Recoat Time", value: "N/A" },
        { name: "Finish", value: "N/A" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Woodcare_Special_Thinner_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 40,
      title: "Paintex Sheesha Putty",
      category: "Interior",
      image: "/dulux/40.png",
      description: "Paintex Sheesha Putty is a superior-quality putty that seals stains and provides a quick-drying, smooth finish for interior surfaces.",
      features: [
        "Superior quality",
        "Seals stains",
        "Quick drying",
        "Smooth finish"
      ],
      highlights: [
        "Superior Quality",
        "Seals Stains",
        "Quick Drying"
      ],
      specifications: [
        { name: "Coverage", value: "1-2 sqm/kg" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Smooth" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Paintex_Sheesha_Putty_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 41,
      title: "Dulux Synthetic Clear Varnish",
      category: "Interior",
      image: "/dulux/41.jpg",
      description: "Dulux Synthetic Clear Varnish provides a high-gloss finish with excellent abrasion resistance and fast drying for interior wood surfaces.",
      features: [
        "High-gloss finish",
        "Excellent abrasion resistance",
        "Fast drying",
        "Durable coating"
      ],
      highlights: [
        "High Gloss Finish",
        "Excellent Abrasion Resistance",
        "Fast Drying"
      ],
      specifications: [
        { name: "Coverage", value: "8-10 sqm/litre" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "6-8 hours" },
        { name: "Finish", value: "Gloss" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Synthetic_Clear_Varnish_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 42,
      title: "Dulux Interior Acrylic Putty",
      category: "Interior",
      image: "/dulux/42.png",
      description: "Dulux Interior Acrylic Putty offers high coverage and smooth application, providing a breathable coating for interior surfaces.",
      features: [
        "High coverage",
        "Smooth application",
        "Breathable coating",
        "Quick drying"
      ],
      highlights: [
        "High Coverage",
        "Comfortable Application",
        "Smooth Application"
      ],
      specifications: [
        { name: "Coverage", value: "1-2 sqm/kg" },
        { name: "Drying Time", value: "2-4 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Smooth" }
      ],
      icons: [
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Interior_Acrylic_Putty_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    },
    {
      id: 43,
      title: "Dulux Promise SmartChoice Interior",
      category: "Interior",
      image: "/dulux/43.avif",
      description: "Dulux Promise SmartChoice Interior provides high opacity and coverage with a smooth, low-odour finish for interior walls.",
      features: [
        "High opacity and coverage",
        "Low odour",
        "Smooth finish",
        "Easy application"
      ],
      highlights: [
        "High Opacity & Coverage",
        "Smooth Finish",
        "Low Odour"
      ],
      specifications: [
        { name: "Coverage", value: "10-12 sqm/litre" },
        { name: "Drying Time", value: "1-2 hours" },
        { name: "Recoat Time", value: "4-6 hours" },
        { name: "Finish", value: "Matt" }
      ],
      icons: [
        { src: "/low_odour.png", alt: "Low Odour Icon" },
        { src: "/good_leveling_coverage.png", alt: "Good Leveling Coverage Icon" }
      ],
      technicalDataSheetUrl: "/pdf/Dulux_Promise_SmartChoice_Interior_TDS.pdf",
      shadeCardsUrl: "/pdf/Dulux_Shade_Card_compressed.pdf"
    }
  ];

  // Toggle menu expansion
  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Pagination logic
  const totalPages = Math.ceil(interiorProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = interiorProducts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  // Handle closing product details
  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

 return (
  <div className="py-8 px-4 sm:px-6 lg:px-8">
    {selectedProduct && (
      <DuluxProductDetail product={selectedProduct} onClose={handleCloseDetails} />
    )}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <div className="w-full md:w-64 flex-shrink-0">
        <div className="bg-white rounded-lg shadow-md p-4 sticky top-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Interior</h3>
          <nav className="space-y-1">
            {[
              { 
                title: "Interior", 
                key: "interior", 
                items: [
                  { name: "Overview", link: "/dulux/interior" }, 
                  ...interiorProducts.map(product => ({ name: product.title, link: `#${product.id}` }))
                ] 
              }
            ].map((menu) => (
              <div key={menu.key} className="mb-2">
                <button
                  onClick={() => toggleMenu(menu.key)}
                  className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded transition-colors text-sm font-medium"
                >
                  {menu.title}
                  <svg
                    className={`w-4 h-4 transition-transform ${expandedMenus[menu.key] ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedMenus[menu.key] && (
                  <div className="ml-4 mt-1 space-y-1">
                    {menu.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="block px-3 py-1.5 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded transition-colors text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          const product = interiorProducts.find(p => `#${p.id}` === item.link);
                          if (product) handleProductSelect(product);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Breadcrumb Navigation */}
        <nav className="mb-4 text-sm text-gray-600" aria-label="Breadcrumb">
          <ol className="flex space-x-2 items-center">
            <li>
              <Link href="/" className="hover:text-blue-900 transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mx-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
              </svg>
            </li>
            <Link href="/dulux/interior" className="text-gray-900" aria-current="page">
              Dulux Interior
            </Link>
          </ol>
          <p className="mt-2 text-sm text-gray-600">
            Total Products: ({interiorProducts.length})
          </p>
        </nav>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Interior</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col min-h-[450px]"
            >
              <div
                onClick={() => handleProductSelect(product)}
                className="block cursor-pointer"
              >
                <div className="relative h-48 w-full mt-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3
                  onClick={() => handleProductSelect(product)}
                  className="text-lg font-semibold text-blue-700 mb-1 hover:text-blue-900 transition-colors line-clamp-2 cursor-pointer"
                >
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">✔ {product.category}</p>
                <ul className="text-sm text-gray-600 mb-3 list-disc pl-5 flex-grow line-clamp-3">
                  {product.features.map((feature, index) => (
                    <li key={index}>☑ {feature}</li>
                  ))}
                </ul>
                <a href="tel:+923335093223" className="mt-auto">
                  <button className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors">
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                currentPage === page
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}

export default DInterior;

// export async function generateMetadata() {
//   // Default metadata for the interior page
//   return {
//     title: 'Interior Paints - Al-Waqas Paint',
//     description: 'Explore our premium range of interior paints including wall paints, silk finishes, and washable solutions',
//     metadataBase: new URL('https://www.alwaqaspaint.com'),
//     alternates: {
//       canonical: 'https://www.alwaqaspaint.com/dulux/interior'
//     },
//     openGraph: {
//       title: 'Interior Paints - Al-Waqas Paint',
//       description: 'Explore our premium range of interior paints including wall paints, silk finishes, and washable solutions',
//       url: 'https://www.alwaqaspaint.com/dulux/interior',
//       type: 'website',
//       images: [
//         {
//           url: 'https://www.alwaqaspaint.com/dulux/Dulux Ambiance.webp?v=1.0',
//           width: 1200,
//           height: 630,
//           alt: 'Dulux Interior Paints',
//           type: 'image/webp'
//         }
//       ],
//       siteName: 'Alwaqas Paint'
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: 'Interior Paints - Al-Waqas Paint',
//       description: 'Explore our premium range of interior paints including wall paints, silk finishes, and washable solutions',
//       images: ['https://www.alwaqaspaint.com/dulux/Dulux Ambiance.webp?v=1.0']
//     },
//     other: {
//       'og:image:secure_url': 'https://www.alwaqaspaint.com/dulux/Dulux Ambiance.webp?v=1.0',
//       'og:image:type': 'image/webp',
//       'og:image:width': '1200',
//       'og:image:height': '630',
//       'og:image:alt': 'Dulux Interior Paints'
//     }
//   };
