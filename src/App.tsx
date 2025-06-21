import "./App.css";
import "primeicons/primeicons.css";
import "boxicons/css/boxicons.min.css";

import { AppRoutes } from "./app/routes/Routes";
import { AsideNav } from "./app/components/AsideNav";
import { NavBar } from "./app/components/NavBar";
import { Footer } from "./app/components/Footer";


function App() {
  return (
    <>
      <NavBar />
      <section className="flex flex-row flex-nowrap gap-2 grow">
        <AsideNav />
        <div className="section-content w-full flex flex-col max-w-[85%] justify-star items-star border-t-2 border-gray-200 border-b-2 gap-10">
          <AppRoutes />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
