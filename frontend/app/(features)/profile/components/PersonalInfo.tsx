"use client";

import { useState } from "react";
import { User } from "@/app/global/types/global";
import Form from "./Form";
import Snackbar from "@/app/global/components/Snackbar";
import Button from "@/app/global/components/Button";

type Props = { user: User };

export default function PersonalInfo({ user }: Props) {
  const [Edit, setEdit] = useState(false);
  const [saved, setSaved] = useState<number | null>(null);

  return (
    <section>
      <h2>Mine Oplysninger</h2>
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
          <dl>
            <dt>Email</dt>
            <dd>{user.user_email}</dd>

            <dt>Telefonnummer</dt>
            <dd>{user.user_phonenumber}</dd>

            <dt>Adresse</dt>
            <dd>{user.user_address}</dd>
          </dl>

          <Button
            typeAction="button"
            elementType="button"
            buttonName="Opdater Profil"
            size="lg"
            type="primary"
            onClick={() => setEdit(true)}
          />
        </>
      )}
      {saved && (
        <Snackbar key={saved} message="Profil opdateret" duration={3000} />
      )}
    </section>
  );
}
