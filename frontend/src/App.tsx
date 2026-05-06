import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ScrollToTop } from "./components/site/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceDetail from "./pages/services/ServiceDetail";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import Finance from "./pages/Finance";
import International from "./pages/International";
import Career from "./pages/Career";
import Media from "./pages/Media";
import MediaDetail from "./pages/media/MediaDetail";
/* International sub-pages */
import Import from "./pages/international/Import";
import Export from "./pages/international/Export";
import ICBMRO from "./pages/international/ICBMRO";
import ECommerce from "./pages/international/ECommerce";
import OverseasLogistics from "./pages/international/OverseasLogistics";
import ContractManufacturing from "./pages/international/ContractManufacturing";
import JointVenture from "./pages/international/JointVenture";
import Collaboration from "./pages/international/Collaboration";
import Outsourcing from "./pages/international/Outsourcing";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/media/:slug" element={<MediaDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/career" element={<Career />} />
        <Route path="/media" element={<Media />} />
        {/* International Business — overview */}
        <Route path="/international-business" element={<International />} />
        {/* International Business — Template A (Pillars) */}
        <Route path="/international-business/import" element={<Import />} />
        <Route path="/international-business/export" element={<Export />} />
        <Route path="/international-business/icbmro" element={<ICBMRO />} />
        {/* International Business — Template B (Ventures) */}
        <Route path="/international-business/e-commerce" element={<ECommerce />} />
        <Route path="/international-business/overseas-logistics" element={<OverseasLogistics />} />
        <Route path="/international-business/contract-manufacturing" element={<ContractManufacturing />} />
        <Route path="/international-business/joint-venture" element={<JointVenture />} />
        <Route path="/international-business/collaboration" element={<Collaboration />} />
        <Route path="/international-business/outsourcing" element={<Outsourcing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
