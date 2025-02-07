import React from "react";
import FloatingCard from "./FloatingCard.tsx";
import profileImage from "/src/assets/profile.jpg";

const About: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-14  min-h-[70vh] flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 sm:px-6 lg:px-8">
        {/* Left side content */}
        <div className="lg:w-1/2 space-y-8 max-w-xl">
          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-gray-800">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:andreea.nistor2011@yahoo.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  andreea.nistor2011@yahoo.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+40740240455"
                  className="hover:text-blue-600 transition-colors"
                >
                  +40740240455
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <a className="hover:text-blue-600 transition-colors">
                  Studio în Ștefănești, Argeș
                </a>
              </div>{" "}
            </div>
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+40740240455"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 bg-[#25D366] hover:bg-[#20bd59] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Trimite Mesaj
            </a>
            {/* About Me Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Despre mine</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mă numesc Andreea, fotograf de evenimente și de studio. Fiecare
                sesiune foto reprezintă pentru mine o oportunitate de a spune
                povești prin obiectivul aparatului foto. Cu o abordare caldă și
                atentă, îmi doresc să surprind fiecare moment unic și
                emoționant, creând amintiri prețioase.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fie că este vorba despre magia unei nunți, inocența unui botez
                sau frumusețea unei sesiuni foto de studio, fiecare fotografie
                reflectă pasiunea și dedicația mea pentru arta fotografică. Cu o
                viziune creativă și tehnică desăvârșită, captez momentele cele
                mai autentice și emoționante ale vieții tale, pentru ca tu să ai
                amintiri pe care le vei prețui mereu.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="lg:w-1/2 flex justify-center pb-8 lg:pb-0">
          <FloatingCard imageSrc={profileImage} imageAlt="Andreea" />
        </div>
      </div>
    </section>
  );
};

export default About;
