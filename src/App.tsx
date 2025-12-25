import { Router } from "./lib/router";
import { Route } from "./lib/router";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Overview } from "./pages/Overview";

export default function App() {
  return (
    <Router>
      <Route path="/" element={<Overview />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Router>
  );
}
