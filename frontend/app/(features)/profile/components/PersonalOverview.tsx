"use client";

import type { User } from "@/app/global/types/global";
import { useUploadAvatar } from "@/app/(features)/profile/hooks/useUploadAvatar";
import Icon from "@/app/global/components/Icon";

type Props = { user: User };

export default function PersonalOverview({ user }: Props) {
  const memberSince = new Date(
    user.user_created_at * 1000,
  ).toLocaleDateString("da-DK");
  const uploadMutation = useUploadAvatar();

  return (
    <article className="flex flex-col gap-16 border-b border-grey-100 pb-24">
      <div className="flex items-center gap-16">
        <figure className="shrink-0">
          <label
            htmlFor="avatar-upload"
            className="block cursor-pointer rounded-full overflow-hidden w-[72px] h-[72px] bg-grey-100"
          >
            {user.user_img_key ? (
              <img
                src={`http://localhost/static/uploads/${user.user_img_key}`}
                alt={user.user_fullname}
                width={72}
                height={72}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="flex items-center justify-center w-full h-full text-xs text-grey-200">
                Intet billede
              </span>
            )}
          </label>
          <input
            id="avatar-upload"
            type="file"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) uploadMutation.mutate(f);
            }}
          />
        </figure>

        <header className="flex-1 flex flex-col">
          <h2 className="uppercase text-base text-text leading-tight">
            {user.user_fullname}
          </h2>
          <p className="text-lg font-bold text-text leading-tight">
            Premium Medlem
          </p>
          <p className="uppercase text-xs text-grey-200 mt-4">
            Medlem siden:{" "}
            <time
              dateTime={new Date(user.user_created_at * 1000).toDateString()}
            >
              {memberSince}
            </time>
          </p>
        </header>

        <label
          htmlFor="avatar-upload"
          className="cursor-pointer shrink-0 flex items-center justify-center w-[40px] h-[40px] rounded-8 border border-primary-200 bg-success-100 text-primary-800"
          aria-label="Rediger profilbillede"
        >
          <Icon iconName="pencil" />
        </label>
      </div>
    </article>
  );
}
