import { GitHubIcon, LinkedInIcon, MailIcon, MapIcon } from "@/components/icons";
import { ErrorMessage } from "@/components/layout";
import { Avatar, DownloadResume } from "@/components/ui";
import { PROFILE } from "@/lib/api";
import type { User } from "@/types";
import type { ReactElement } from "react";

type AsideProfileProps = {
  profile: User | null;
};

export function AsideProfile({ profile }: AsideProfileProps): ReactElement {
  if (!profile) return <ErrorMessage error_message={"profile not found..."} />;

  return (
    <aside>
      <div className="profile-img flex-center">
        <Avatar
          size={250}
          className="avatar"
          url={profile.avatar_url}
          alt="Profile Avatar"
        />
        <DownloadResume />
      </div>

      <div className="profile-text">
        <ul className="profile-list flex-column flex gap-md">
          <li>
            <h1>{profile.name}</h1>
          </li>

          <li className="profile-bio">{profile.bio}</li>

          <li className="flex-left gap-md">
            <MapIcon size={20} />
            <a href={`https://www.google.com/maps?q=${profile.location}`}>
              {profile.location}
            </a>
          </li>

          <li className="flex-left gap-md">
            <MailIcon size={20} />
            <a href={"mailto:" + PROFILE.email}>{PROFILE.email}</a>
          </li>

          <li className="flex-left gap-md">
            <LinkedInIcon size={20} />
            <a href={PROFILE.linkedin.url}>{PROFILE.linkedin.username}</a>
          </li>

          <li className="flex-left gap-md">
            <GitHubIcon size={20} />
            <a href={PROFILE.github.username}>{profile.login}</a>
          </li>

          <li className="flex-left gap-md">
            <span className="profile-item">Availability:</span>
            {profile.hireable
              ? "Open to internship opportunities"
              : "Not available"}
          </li>
        </ul>
      </div>
    </aside>
  );
}
