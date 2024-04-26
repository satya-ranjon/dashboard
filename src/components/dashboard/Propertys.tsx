import React from "react";
import { FaRegStar, FaBath } from "react-icons/fa";
import Image from "next/image";
import { PiSquareHalf, PiSquareHalfBold } from "react-icons/pi";

const Propertys = () => {
  return (
    <div className=" mt-3">
      <div className="grid grid-cols-4 gap-4">
        {propertys.map((property, index) => (
          <div key={index} className=" overflow-hidden bg-neutral-200">
            <div className=" relative">
              <Image
                src={property.image}
                width={400}
                height={400}
                alt="Property"
              />
              <div className=" absolute top-2 left-2 text-xl text-yellow-500">
                <FaRegStar />
              </div>
              <div className=" flex justify-start items-center gap-2 absolute top-0 right-0 text-white bg-[#00000042] text-lg px-2">
                {property.referenceNumber}
                <span className=" w-4 h-4 block bg-white"></span>
              </div>
            </div>
            <div className="text-neutral-700 px-2 py-1">
              <h1 className=" text-lg font-semibold text-neutral-700">
                {property.area}
              </h1>
              <div className=" flex justify-between items-center">
                <span>{property.price}</span>
              </div>

              <div className=" flex justify-start items-center gap-2">
                <span className=" flex justify-start items-center gap-2">
                  <FaBath /> {property.details.bathrooms}
                </span>
                <span className=" flex justify-start items-center gap-1">
                  <PiSquareHalf className=" text-2xl " />
                  {property.details.areaTotal.value}
                  {property.details.areaTotal.unit}
                </span>
                <span className=" flex justify-start items-center gap-1">
                  <PiSquareHalfBold className=" text-2xl " />
                  {property.details.areaInterior.value}
                  {property.details.areaInterior.unit}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Propertys;
const propertys = [
  {
    image: "/demo.jpg",
    referenceNumber: "RE0015",
    area: "Villa Nueva Andalucia, Marbella",
    price: "35,000 $ / Month",
    details: {
      bathrooms: 5,
      areaTotal: {
        value: 854,
        unit: "m²",
      },
      areaInterior: {
        value: 1254,
        unit: "m²",
      },
    },
  },
  {
    image: "/one.jpeg",
    referenceNumber: "RE0015",
    area: "Apartment Nueva Andalucia, Marbella",
    price: "35,000 $ / Month",
    details: {
      bathrooms: 5,
      areaTotal: {
        value: 854,
        unit: "m²",
      },
      areaInterior: {
        value: 1254,
        unit: "m²",
      },
    },
  },
  {
    image: "/two.jpg",
    referenceNumber: "RE0015",
    area: "Ground Floor Nueva Andalucia, Marbella",
    price: "35,000 $ / Month",
    details: {
      bathrooms: 5,
      areaTotal: {
        value: 854,
        unit: "m²",
      },
      areaInterior: {
        value: 1254,
        unit: "m²",
      },
    },
  },
  {
    image: "/three.jpeg",
    referenceNumber: "RE0015",
    area: "Ground Floor Nueva Andalucia, Marbella",
    price: "35,000 $ / Month",
    details: {
      bathrooms: 5,
      areaTotal: {
        value: 854,
        unit: "m²",
      },
      areaInterior: {
        value: 1254,
        unit: "m²",
      },
    },
  },
  {
    image: "/four.jpg",
    referenceNumber: "RE0015",
    area: "Villa Mijas Costa",
    price: "35,000 $ / Month",
    details: {
      bathrooms: 5,
      areaTotal: {
        value: 854,
        unit: "m²",
      },
      areaInterior: {
        value: 1254,
        unit: "m²",
      },
    },
  },
  {
    image: "/images.jpeg",
    referenceNumber: "RE0015",
    area: "Apartment Senorio de Marbella, Marbella",
    price: "35,000 $ / Month",
    details: {
      bathrooms: 5,
      areaTotal: {
        value: 854,
        unit: "m²",
      },
      areaInterior: {
        value: 1254,
        unit: "m²",
      },
    },
  },
  {
    image: "/six.webp",
    referenceNumber: "RE0015",
    area: "Apartment Marbella East, Marbella",
    price: "35,000 $ / Month",
    details: {
      bathrooms: 5,
      areaTotal: {
        value: 854,
        unit: "m²",
      },
      areaInterior: {
        value: 1254,
        unit: "m²",
      },
    },
  },
  {
    image: "/seven.jpg",
    referenceNumber: "RE0015",
    area: "Duplex Penthouse Estepona East, Estepona",
    price: "35,000 $ / Month",
    details: {
      bathrooms: 5,
      areaTotal: {
        value: 854,
        unit: "m²",
      },
      areaInterior: {
        value: 1254,
        unit: "m²",
      },
    },
  },
  {
    image: "/images.jpeg",
    referenceNumber: "RE0015",
    area: "Villa Nueva Andalucia, Marbella",
    price: "35,000 $ / Month",
    details: {
      bathrooms: 5,
      areaTotal: {
        value: 854,
        unit: "m²",
      },
      areaInterior: {
        value: 1254,
        unit: "m²",
      },
    },
  },
];
