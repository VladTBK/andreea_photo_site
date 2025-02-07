import React from "react";
import PricingCard from "./PricingCard";

interface PricingPackage {
  title: string;
  price: number;
  color: string;
  features: {
    icon: "clock" | "image" | "gift" | "users" | "pencil";
    text: string;
  }[];
}

const PricingSection: React.FC = () => {
  const packages: PricingPackage[] = [
    {
      title: "Nuntă standard",
      price: 3500,
      color: "blue",
      features: [
        {
          icon: "image",
          text: "Minim 500 fotografii editate + video eveniment & best moments",
        },
        {
          icon: "pencil",
          text: "Prezența fotografului și a videografului pe tot parcursul evenimentului (pregătirile mirilor, biserică, ședința foto, restaurant)",
        },
        {
          icon: "gift",
          text: "Predarea materialelor pe link de descarcare + stick",
        },
        { icon: "users", text: "1 fotograf + 1 videograf" },
      ],
    },
    {
      title: "Botez",
      price: 2000,
      color: "amber",
      features: [
        {
          icon: "image",
          text: "Minim 400 fotografii editate + video eveniment & best moments",
        },
        {
          icon: "pencil",
          text: "Prezența fotografului și a videografului pe tot parcursul evenimentului (pregătirea bebelușului acasă, biserică, restaurant)",
        },
        {
          icon: "gift",
          text: "Predarea materialelor pe link de descarcare + stick",
        },
        { icon: "users", text: "1 fotograf + 1 videograf" },
      ],
    },
    {
      title: "Cununie civilă",
      price: 1800,
      color: "rose",
      features: [
        {
          icon: "image",
          text: "Minim 300 fotografii editate + video eveniment & best moments",
        },
        {
          icon: "pencil",
          text: "Prezența fotografului și a videografului pe tot parcursul evenimentului (primarie, ședința foto, restaurant)",
        },
        {
          icon: "gift",
          text: "Predarea materialelor pe link de descarcare + stick",
        },
        { icon: "users", text: "1 fotograf + 1 videograf" },
      ],
    },
    {
      title: "Majorat",
      price: 700,
      color: "emerald",
      features: [
        { icon: "clock", text: "7 ore de fotografiere" },
        { icon: "image", text: "Minim 300 fotografii editate" },
        {
          icon: "gift",
          text: "Predarea materialelor pe link de descarcare",
        },
        { icon: "users", text: "1 fotograf profesionist" },
      ],
    },
    {
      title: "Petrecere privată",
      price: 250,
      color: "slate",
      features: [
        { icon: "clock", text: "1 oră de fotografiere*" },
        { icon: "image", text: "Minim 100 fotografii editate" },
        {
          icon: "gift",
          text: "Predarea materialelor pe link de descarcare",
        },
        { icon: "users", text: "1 fotograf profesionist" },
      ],
    },
    {
      title: "Smash the Cake",
      price: 300,
      color: "purple",
      features: [
        { icon: "clock", text: "1 oră de fotografiere" },
        { icon: "image", text: "Minim 30 fotografii editate" },
        { icon: "gift", text: "Predarea materialelor pe link de descarcare" },
        { icon: "users", text: "1 fotograf profesionist" },
      ],
    },
    {
      title: "Newborn",
      price: 350,
      color: "blue",
      features: [
        { icon: "clock", text: "2-3 ore de fotografiere" },
        { icon: "image", text: "Minim 30 fotografii editate" },
        { icon: "gift", text: "Predarea materialelor pe link de descarcare" },
        { icon: "users", text: "1 fotograf profesionist" },
      ],
    },
    {
      title: "Maternitate",
      price: 350,
      color: "amber",
      features: [
        { icon: "clock", text: "1 oră de fotografiere" },
        { icon: "image", text: "Minim 30 fotografii editate" },
        { icon: "gift", text: "Predarea materialelor pe link de descarcare" },
        { icon: "users", text: "1 fotograf profesionist" },
      ],
    },
    {
      title: "Save the Date",
      price: 350,
      color: "rose",
      features: [
        { icon: "clock", text: "1 oră de fotografiere" },
        { icon: "image", text: "Minim 30 fotografii editate + 1 reel" },
        { icon: "gift", text: "Predarea materialelor pe link de descarcare" },
        { icon: "users", text: "1 fotograf profesionist" },
      ],
    },
    {
      title: "Business",
      price: 300,
      color: "emerald",
      features: [
        { icon: "clock", text: "1 oră de fotografiere" },
        { icon: "image", text: "Minim 30 fotografii editate" },
        { icon: "gift", text: "Predarea materialelor pe link de descarcare" },
        { icon: "users", text: "1 fotograf profesionist" },
      ],
    },
    {
      title: "Fotografie imobiliară",
      price: 200,
      color: "slate",
      features: [
        { icon: "clock", text: "30 de minute de fotografiere*" },
        { icon: "image", text: "Minim 30 fotografii de prezentare" },
        { icon: "gift", text: "Predarea materialelor pe link de descarcare" },
        { icon: "users", text: "1 fotograf profesionist" },
      ],
    },
    {
      title: "Sedință foto individuală",
      price: 200,
      color: "purple",
      features: [
        { icon: "clock", text: "1 oră de fotografiere*" },
        { icon: "image", text: "Minim 30 fotografii editate" },
        { icon: "gift", text: "Predarea materialelor pe link de descarcare" },
        { icon: "users", text: "1 fotograf profesionist" },
      ],
    },
  ];

  const renderPackageCard = (pkg: PricingPackage) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <PricingCard {...pkg} />
    </div>
  );

  return (
    <section
      id="pricings"
      className="min-h-screen flex items-center justify-center py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Pachete & Prețuri
          </h2>
          <p className="text-lg text-gray-600">
            Alegeți pachetul perfect pentru momentele voastre speciale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index}>{renderPackageCard(pkg)}</div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 text-m">
            * Prețurile pot varia în funcție de cerințele specifice ale
            evenimentului *
          </p>
          <p className="text-gray-600 text-m">
            * Pentru rezervări și detalii suplimentare, vă rog să mă contactați
            *
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
