import { AsideProfile, ErrorMessage, Footer, Header } from "@/components/layout";
import { Loading } from "@/components/ui/Loading";
import { GitHubProvider } from "@/context";
import { useGitHubData } from "@/hooks";
import type { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  const { profile, repos, readme, fadeOut, error, loadingMessage } = useGitHubData();

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
        <GitHubProvider github={profile} repos={repos} readme={readme}>
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
