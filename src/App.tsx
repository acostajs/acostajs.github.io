import { AppLayout } from "./AppLayout";
import { Router } from "./lib/router";
import { Route } from "./lib/router";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Overview } from "./pages/Overview";

export default function App() {
  return (
    <Router>
      <Route
        path="/"
        element={
          <AppLayout>
            <Overview />
          </AppLayout>
        }
      />
      <Route
        path="/about"
        element={
          <AppLayout>
            <About />
          </AppLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <AppLayout>
            <Contact />
          </AppLayout>
        }
      />
    </Router>
  );
}
