"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Exterior = () => {
  // State for expanded menu items
  const [expandedMenus, setExpandedMenus] = useState({
    texturedSeries: true,
  });

  // Toggle menu expansion
  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Exterior products data
  const exteriorProducts = [
    {
      id: 1,
      title: "Nippon Weatherbond",
      category: "Exterior",
      image: "/weather-bond.png",
      detailsLink: "/products/nippon-weatherbond",
      titleLink: "/products/exterior/premium-wall-paint-details",
    },
    {
      id: 2,
      title: "Nippon Weatherbond Advance",
      category: "Exterior",
      image: "/wheathr-bond-advance.png",
      detailsLink: "/products/nippon-weatherbond-advance",
      titleLink: "/products/exterior/silk-finish-paint-details",
    },
    {
      id: 3,
      title: "Nippon Quality Exterior Emulsion",
      category: "Exterior",
      image: "/Group-12965.png",
      detailsLink: "/products/nippon-quality-exterior-emulsion",
      titleLink: "/products/exterior/matte-finish-paint-details",
    },
    {
      id: 4,
      title: "Nippon Tilelac (Textured)",
      category: "Exterior",
      image: "/tilelac-1.png",
      detailsLink: "/products/nippon-tilelac",
      titleLink: "/products/exterior/textured-paint-details",
    },
  ];

  // Sidebar menu structure
  const sidebarMenus = [
    {
      title: "Textured Series",
      items: [
        { name: "Overview", link: "/products/exterior" },
        ...exteriorProducts.map((product) => ({
          name: product.title,
          link: product.detailsLink,
        })),
      ],
      key: "texturedSeries",
    },
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-6 bg-gray-100 p-3 rounded-lg max-w-7xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <svg
              className="w-4 h-4 mx-1 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products/exterior" className="hover:text-blue-600 transition-colors font-medium">
              Exterior
            </Link>
          </li>
          <li className="flex items-center">
            <svg
              className="w-4 h-4 mx-1 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-700 font-medium">Textured Series</span>
          </li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Exterior</h3>
            <nav className="space-y-1">
              {sidebarMenus.map((menu) => (
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Textured Series</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exteriorProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product Image - Links to details page */}
                <Link href={product.detailsLink} className="block">
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </Link>

                <div className="p-2">
                  {/* Product Title - Links to separate page */}
                  <Link href={product.detailsLink}>
                    <h3 className="text-lg font-semibold text-blue-700 mb-1 hover:text-blue-700 transition-colors">
                      {product.title}
                    </h3>
                  </Link>

                  {/* Product Category */}
                  <p className="text-sm text-gray-500 mb-2">✔ {product.category}</p>

                  {/* Buy Now Button */}
                  <a href="tel:+923335093223">
                    <button className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors">
                      Call Now
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exterior;