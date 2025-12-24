import { Router } from "./lib/router";
import { Route } from "./lib/router";
import { Overview } from "./pages/Overview";

export default function App() {
  return (
    <Router>
      <Route path="/" element={<Overview />} />
    </Router>
  );
}
