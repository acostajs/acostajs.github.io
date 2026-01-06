import { PROFILE } from "@/lib/api";
import type { ReactElement } from "react";

export function DownloadResume(): ReactElement {
  return (
    <a
      className="download-resume"
      href={PROFILE.resume.url}
      download="resume.pdf"
    >
      Download Resume
    </a>
  );
}
