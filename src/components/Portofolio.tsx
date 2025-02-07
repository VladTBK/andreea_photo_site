import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import main_nunta from "/src/assets/nunta/main_nunta.jpg";
import main_botez from "/src/assets/botez/main_botez.jpg";
import main_cununie from "/src/assets/cununie/main_cununie.jpg";
import main_majorat from "/src/assets/majorat/main_majorat.jpg";
import main_petrecere_aniversara from "/src/assets/petrecere_aniversara/main_petrecere_aniversara.jpg";
import main_maternitate from "/src/assets/maternitate/main_maternitate.jpg";
import main_newborn from "/src/assets/newborn/main_newborn.jpg";
import main_smash_the_cake from "/src/assets/smash_the_cake/main_smash_the_cake.jpg";
import main_save_the_date from "/src/assets/save_the_date/main_save_the_date.jpg";
import main_businesss from "/src/assets/business/main_business.jpg";
import main_imobiliar from "/src/assets/imobiliar/main_imobiliar.jpg";
interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  path: string;
}

const portfolioItems: GalleryItem[] = [
  {
    id: 1,
    image: main_nunta,
    title: "Nuntă",
    description: "Povestea voastră, spusă prin fiecare fotografie",
    path: "/nunta",
  },
  {
    id: 2,
    image: main_botez,
    title: "Botez",
    description: "Un nou început, plin de zâmbete și emoție",
    path: "/botez",
  },
  {
    id: 3,
    image: main_cununie,
    title: "Cununie civilă",
    description: "O poveste de iubire scrisă în imagini",
    path: "/cununie",
  },
  {
    id: 4,
    image: main_majorat,
    title: "Majorat",
    description: "Portrete care surprind esența personalității",
    path: "/majorat",
  },
  {
    id: 5,
    image: main_petrecere_aniversara,
    title: "Petrecere aniversară",
    description: "Petrecerea copilului, captată în momente de veselie",
    path: "/petrecere_aniversara",
  },
  {
    id: 6,
    image: main_maternitate,
    title: "Maternitate",
    description: "Primii pași ai unei vieți noi, surprinși în imagini",
    path: "/maternitate",
  },
  {
    id: 7,
    image: main_newborn,
    title: "Newborn",
    description: "Primile momente din viața copilasului tau",
    path: "/newborn",
  },
  {
    id: 8,
    image: main_smash_the_cake,
    title: "Smash the Cake",
    description: "Fotografii de familie care durează o viață",
    path: "/smash_the_cake",
  },
  {
    id: 9,
    image: main_save_the_date,
    title: "Save the Date",
    description: "Marchează ziua, pentru că va fi începutul unei povești",
    path: "/save_the_date",
  },
  {
    id: 10,
    image: main_businesss,
    title: "Business",
    description: "Imaginea de brand, un element cheie în marketing",
    path: "/business",
  },
  {
    id: 11,
    image: main_imobiliar,
    title: "Fotografie imobiliară",
    description: "Captează interesul potențialilor cumpărători",
    path: "/imobiliar",
  },
];
const Portfolio: React.FC = () => {
  return (
    <section
      id="portofolio"
      className="min-h-screen flex items-center justify-center py-24 md:py-12"
    >
      <div className="portfolio-carousel-container w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20 md:mb-24 max-w-3xl mx-auto relative">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 tracking-tight">
            Pasiune și Artă
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 italic font-serif leading-relaxed max-w-2xl mx-auto">
            "Fotografia este o poveste fără cuvinte."
          </p>
          <p className="text-base md:text-lg text-gray-500 font-medium">
            – Ansel Adams
          </p>
        </div>

        <div className="relative overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                centeredSlides: true, // This helps ensure the first slide is partially visible
                initialSlide: 0,
              },
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            loop={true}
            className="portfolio-swiper !overflow-hidden"
          >
            {portfolioItems.map((item) => (
              <SwiperSlide key={item.id}>
                <a href={item.path} className="block group">
                  <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl aspect-[2/3]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 p-6 text-white flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-100">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm mb-4">{item.description}</p>
                      <button className="self-start bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-colors duration-300">
                        Vezi Galeria
                      </button>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 transform -translate-x-4 md:translate-x-0">
            <ArrowLeftCircle className="w-8 h-8 md:w-10 md:h-10 text-pink-500 hover:text-pink-600 transition-colors duration-300" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 transform translate-x-4 md:translate-x-0">
            <ArrowRightCircle className="w-8 h-8 md:w-10 md:h-10 text-pink-500 hover:text-pink-600 transition-colors duration-300" />
          </button>

          <div className="swiper-pagination mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
