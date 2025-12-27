import { AsideProfile } from "../components/overview/AsideProfile";
import { MainContent } from "../components/overview/MainContent";

export function Overview() {
  return (
    <section>
      <div className="container">
        <div className="overview-main grid">
          <AsideProfile />
          <MainContent />
        </div>
      </div>
    </section>
  );
}
