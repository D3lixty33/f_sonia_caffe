import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
//import { TsPdfViewer, TsPdfViewerOptions } from 'ts-pdf';
import MenuGiorno from '../assets/Menù giorno Caffè Sonia stampa.pdf'
import MenuSera from '../assets/Menù drink Caffè Sonia stampa.pdf'

function SideBarLink({ routes }) {
  const navigate = useNavigate()

  return (
    <ul className="flex flex-col gap-6 mt-10">
      {routes.map(({ name, path }) => (
        <li
          key={name}
          onClick={() => navigate(path)}
          className="relative cursor-pointer text-2xl font-semibold w-fit group transition-all duration-200 hover:scale-105 hover:text-foreground/70"
        >
          {name}

          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  )
}

// Example usage
const routes = [
  { name: 'Prenota', path: '/prenotazioni' },
  { name: 'Carrello', path: '/' },
  { name: 'Aiuto', path: '/' }
];

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function openPdf(url : string) {
    window.open(url, '_blank');
  }

  return (
    <div className="min-h-screen gap-4 bg-background text-foreground leading-tight">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-3">
        <div className="w-8 h-8 rounded-full bg-foreground" />
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex flex-col gap-[5px]"
        >
          <Menu className="w-8 h-8" />
        </button>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-foreground/30 z-40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-background z-50 p-6">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4"
            >
              <X className="w-6 h-6" />
            </button>
            <SideBarLink routes={routes} />
          </div>
        </>
      )}

      {/* Hero Section */}
      <section className="w-full mt-8 flex flex-col items-center justify-center gap-5">
        <span className="font-bold text-[48px] text-center block px-6">
          Benvenuti da Sonia Caffè – il bar storico nel cuore di Castelfranco
          Veneto!
        </span>
        <span className="text-center px-6">
          Colazioni, aperitivi, cocktail e momenti di relax in un ambiente
          accogliente e familiare.
        </span>
      </section>

      {/* Buttons */}
      <section className="flex flex-col items-center mt-4 gap-4 mt-2">
        <button className="bg-foreground text-background font-medium py-3 px-10 rounded-md text-sm tracking-wide"
          onClick={()=> openPdf(MenuGiorno)}
        >
          Menù Giorno
        </button>
        <button className="bg-foreground text-background font-medium py-3 px-10 rounded-md text-sm tracking-wide"
          onClick={()=> openPdf(MenuSera)}
        >
          Menù Sera
        </button>
      </section>

      {/* Grey Background Section */}
      <section className="flex flex-col w-full h-[700px] bg-muted rounded-t-full mt-12 justify-center items-center md:h-[800px] p-12 gap-5 md:justify-end">
        <p className="text-[45px] font-bold md:text-center">
          Gusta i nostri sapori autentici!
        </p>
        <div className="flex w-full h-auto flex-col items-center justify-center gap-10">
          <p className="text-center">
            Dai cappuccini mattutini agli aperitivi serali, scopri cosa offre <strong>Sonia Caffè</strong>.
          </p>
          <button className="bg-foreground text-background font-medium py-3 px-10 rounded-md text-sm tracking-wide">
            Scopri i menu
          </button>
        </div>
      </section>

      {/* Text Content */}
      <section className="flex w-full h-auto items-center justify-center p-14">
        <p className="text-center">
          Sonia Caffè è un bar e caffetteria situato in Piazza Giorgione 29,
          Castelfranco Veneto. Offriamo colazioni italiane, cappuccini, brioches
          fresche, aperitivi e cocktail in un ambiente rilassante con
          possibilità di sedersi all’aperto.
        </p>
      </section>

      {/* Socials */}
      <section className="flex w-full flex-col items-center justify-center gap-2">
        <p className="text-center font-semibold text-lg">Social</p>

        <div className="flex flex-col gap-2">
          {/* Facebook */}
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-foreground"
              fill="currentColor"
              viewBox="-5.5 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.188 5.594h18.438c0.625 0 1.188 0.563 1.188 1.188v18.438c0 0.625-0.563 1.188-1.188 1.188h-18.438c-0.625 0-1.188-0.563-1.188-1.188v-18.438c0-0.625 0.563-1.188 1.188-1.188zM14.781 17.281h2.875l0.125-2.75h-3v-2.031c0-0.781 0.156-1.219 1.156-1.219h1.75l0.063-2.563s-0.781-0.125-1.906-0.125c-2.75 0-3.969 1.719-3.969 3.563v2.375h-2.031v2.75h2.031v7.625h2.906v-7.625z" />
            </svg>
            <p className="font-medium">Facebook</p>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-foreground"
              fill="currentColor"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z" />
              <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z" />
              <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z" />
            </svg>
            <p className="font-medium">Instagram</p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center gap-2 flex flex-col mb-8">
          <p className="text-center font-semibold text-lg">Contact</p>
          <div>
            <p>Piazza Giorgione 29, 31033</p>
            <p>Castelfranco Veneto (TV), Italia</p>
            <p>+39 0000000000</p>
            <p>info@soniacaffe.it</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
