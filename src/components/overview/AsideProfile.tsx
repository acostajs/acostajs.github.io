import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { profile_email, profile_github_url, profile_linkedin, profile_linkedin_url } from "../../../api";
import type { GithubUserProfile } from "../../pages/types";

type AsideProfileProps = {
  profile?: GithubUserProfile;
};

export function AsideProfile({ profile }: AsideProfileProps): ReactElement {
  if (!profile) return <h1>Profile not found ...</h1>;

  return (
    <aside>
      <div className="profile-img flex-center">
        <figure>
          <img src={profile.avatar_url} alt="" />
        </figure>
      </div>
      <div className="profile-text">
        <ul className="profile-list flex-column flex gap-md">
          <li>
            <h1>{profile.name}</h1>
          </li>

          <li className="profile-bio">{profile.bio}</li>

          <li className="flex-left gap-md">
            <FaLocationDot size={20} />
            <a href={`https://www.google.com/maps?q=${profile.location}`}>
              {profile.location}
            </a>
          </li>

          <li className="flex-left gap-md">
            <MdEmail size={20} />
            <a href={"mailto:" + profile_email}>{profile_email}</a>
          </li>

          <li className="flex-left gap-md">
            <ImLinkedin size={20} />
            <a href={profile_linkedin_url}>{profile_linkedin}</a>
          </li>

          <li className="flex-left gap-md">
            <FaGithub size={20} />
            <a href={profile_github_url}>{profile.login}</a>
          </li>

          <li className="flex-left gap-md">
            <span className="profile-item">Availability:</span>
            {profile.hireable ? "Open to work" : "Not available"}
          </li>
        </ul>
      </div>
    </aside>
  );
}
