"use client";

import { useState, useEffect } from "react";
import { User } from "@/app/global/types/global";
import Form from "./Form";
import Snackbar from "@/app/global/components/Snackbar";
import Button from "@/app/global/components/Button";
import { useLogout } from "../hooks/useLogout";
import { useRouter } from "next/navigation";

type Props = { user: User };

export default function PersonalInfo({ user }: Props) {
  const [Edit, setEdit] = useState(false);
  const [saved, setSaved] = useState<number | null>(null);
  const logoutMutation = useLogout();
  const router = useRouter();

  // Bruges efter man har logget ud
  useEffect(() => {
    if (logoutMutation.isSuccess) router.push("/");
  }, [logoutMutation.isSuccess, router]);


  return (
    <section className="flex flex-col gap-16">
      <h2 className="text-lg font-bold text-text">Mine Oplysninger</h2>
      {Edit ? (
        <Form
          user={user}
          onSave={() => {
            setEdit(false);
            setSaved(Date.now());
          }}
          onCancel={() => setEdit(false)}
        />
      ) : (
        <>
          <dl className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 border-b border-grey-200 pb-8">
              <dt className="text-sm text-grey-200">Email</dt>
              <dd className="text-base text-text">{user.user_email}</dd>
            </div>
            <div className="flex flex-col gap-4 border-b border-grey-200 pb-8">
              <dt className="text-sm text-grey-200">Telefonnummer</dt>
              <dd className="text-base text-text">{user.user_phonenumber}</dd>
            </div>
            <div className="flex flex-col gap-4 border-b border-grey-200 pb-8">
              <dt className="text-sm text-grey-200">Adresse</dt>
              <dd className="text-base text-text">{user.user_address}</dd>
            </div>
          </dl>

          <Button
            typeAction="button"
            elementType="button"
            buttonName="Opdater Profil"
            size="lg"
            type="primary"
            onClick={() => setEdit(true)}
          />
          <Button
            elementType="button"
            buttonName="Log ud"
            size="lg"
            type="secondary"
            status="normal"
            onClick={() => logoutMutation.mutate()}
          />
        </>
      )}
      {saved && (
        <Snackbar key={saved} message="Profil opdateret" duration={3000} />
      )}
    </section>
  );
}
