import type { ReactNode } from "react";
import { AsideProfile } from "./components/layout/AsideProfile";
import { ErrorMessage } from "./components/layout/ErrorMessage";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Loading } from "./components/layout/Loading";
import { GitHubProvider } from "./context/GitHubContext";
import { useGitHubData } from "./hooks/useGitHubData";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  const { profile, repos, readme, fadeOut, error, showLoader, loadingMessage } = useGitHubData();

  return (
    <div className="app-root">
      <div className={`app-content ${showLoader ? "hidden" : ""}`}>
        <Header
          github_user_url={profile?.html_url || ""}
          github_username={profile?.login || ""}
          github_img_profile_url={profile?.avatar_url || ""}
        />
        <main className="main container">
          <ErrorMessage error_message={error} />
          <GitHubProvider github={profile} repos={repos} readme={readme}>
            <div className="page-grid">
              <AsideProfile profile={profile} />

              <div className="main-content">{children}</div>
            </div>
          </GitHubProvider>
        </main>
        <Footer github_user_name={profile?.name || ""} />
      </div>
      {showLoader && <Loading loading_message={loadingMessage} fadeOut={fadeOut} />}
    </div>
  );
}
