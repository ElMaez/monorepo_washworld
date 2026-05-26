"use client";

import type { User } from "@/app/global/types/global";
import { useUploadAvatar } from "@/app/(features)/profile/hooks/useUploadAvatar";

type Props = { user: User };

export default function PersonalOverview({ user }: Props) {
  const memberSince = new Date(user.user_created_at * 1000).toLocaleDateString();
  const uploadMutation = useUploadAvatar();

  return (
    <article>
      <header>
        <h2>{user.user_fullname}</h2>
        <p>
          Medlem siden{" "}
          <time dateTime={new Date(user.user_created_at * 1000).toDateString()}>
            {memberSince}
          </time>
        </p>
      </header>
      <figure>
        <img
          src={`http://localhost/static/uploads/${user.user_img_key}`}
          alt={user.user_fullname}
        />
        <input
          type="file"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) uploadMutation.mutate(f);
          }}
        />
      </figure>
    </article>
  );
}