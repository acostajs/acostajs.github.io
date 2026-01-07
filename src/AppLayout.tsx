import { AsideProfile, Footer, Header } from "@/components/layout";
import { ErrorMessage, Loading } from "@/components/ui";
import { GitHubProvider } from "@/context";
import { useGitHubData } from "@/hooks";
import type { ReactElement, ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps): ReactElement {
  const { profile, repos, readme, aboutJson, images, error } = useGitHubData();

  return (
    <>
      <Loading />
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
