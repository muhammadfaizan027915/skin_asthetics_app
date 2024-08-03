import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home";
import Academy from "./pages/academy";
import Careers from "./pages/careers";
import LaserHairRemoval from "./pages/services/laserHairRemoval";
import SemiPermanentMakeup from "./pages/services/sermiPermanentMakeup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="/careers" element={<Careers />} />
      <Route
        path="/services/sermi-permanent-makeup"
        element={<SemiPermanentMakeup />}
      />
      <Route
        path="/services/laser-hair-removal"
        element={<LaserHairRemoval />}
      />

      {/* Todo: Add a fallback page for errors. */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
