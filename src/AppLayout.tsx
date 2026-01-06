import { AsideProfile, ErrorMessage, Footer, Header } from "@/components/layout";
import { Loading } from "@/components/ui/Loading";
import { GitHubProvider } from "@/context";
import { useGitHubData } from "@/hooks";
import type { ReactElement, ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps): ReactElement {
  const {
    profile,
    repos,
    readme,
    aboutJson,
    images,
    fadeOut,
    error,
    loadingMessage,
  } = useGitHubData();

  return (
    <>
      <Loading loading_message={loadingMessage} fadeOut={fadeOut} />
      <Header
        github_user_url={profile?.html_url || ""}
        github_username={profile?.login || ""}
        github_img_profile_url={profile?.avatar_url || ""}
      />
      <main className="container">
        <ErrorMessage error_message={error} />
        <GitHubProvider
          github={profile}
          repos={repos}
          readme={readme}
          aboutJson={aboutJson}
          images={images}
        >
          <div className="page-grid">
            <AsideProfile profile={profile} />

            <div className="main-content">{children}</div>
          </div>
        </GitHubProvider>
      </main>
      <Footer github_user_name={profile?.name || ""} />
    </>
  );
}
