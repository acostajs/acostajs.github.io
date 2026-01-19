import { Route, Router } from "@/lib/router";
import { About, Contact, Details, Overview, Projects } from "@/pages";
import type { ReactElement } from "react";
import { AppLayout } from "./AppLayout";

export default function App(): ReactElement {
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
      <Route
        path="/projects"
        element={
          <AppLayout>
            <Projects />
          </AppLayout>
        }
      />
      <Route
        path="/projects/:repoName"
        element={
          <AppLayout>
            <Details />
          </AppLayout>
        }
      />
    </Router>
  );
}
