'use client'
import Button from "@/app/global/components/Button";
import Dialog from "@/app/global/components/Dialog";
import Header from "@/app/global/components/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// custom hook
import { useDeleteUser } from "./hooks/useDeleteUser";

export default function Profile() {
    const deleteMutation = useDeleteUser();
    const router = useRouter();

    useEffect(() => {
      if (deleteMutation.isSuccess) {
        router.push("/");
      }
    }, [deleteMutation.isSuccess]);


  return (
    <>
      <Header title="Min Profil"
      backButton={{ elementType: "link", goBack: true, size: "sm", type: "none", iconName: "back", }}
      />
    <main>
      <section>
        <h2>Username</h2>
        <h3>Membership</h3>
        <p>date of membershipt</p>
        <img alt="profile-picture" src={"#"} />
        <button type="button">Edit</button>
      </section>
      <section>
        <Link href={"mine-kvitteringer"} />
        <Link href={"mine-sager"} />
      </section>
      <section>
        <h2>Mine Oplysninger</h2>
        <section>
          <div>
            <h3>Email</h3>
            <p>email@email.com</p>
          </div>
          <div>
            <h3>Telefonnummer</h3>
            <p>12346578</p>
          </div>
          <div>
            <h3>Adresse</h3>
            <p>Din Adresse 57, 4th, 2300 N</p>
          </div>
        </section>
      </section>
      <section>
        <h2>Mine Betalingskort</h2>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </section>
      <section>
        <Button
          elementType="button"
          linkHref=""
          buttonName="Opdater Profil"
          size="lg"
          iconFlexPos=""
          isPage=""
          maxPage=""
        />
        <Button
          elementType="button"
          linkHref=""
          buttonName="Slet Profil"
          size="lg"
          iconFlexPos=""
          isPage=""
          maxPage=""
          dialogId="delete-profile-dialog"
        />
      </section>
      <Dialog
        id="delete-profile-dialog"
        title="Er du sikker på du vil slette din profil?"
        buttonTwo={{
          elementType: "button",
          buttonName: "Annullér",
          size: "sm",
          type: "secondary",
          status: "normal",
        }}
        buttonThree={{
          elementType: "button",
          buttonName: "Slet",
          size: "sm",
          type: "primary",
          status: "danger",
          onClick: () => deleteMutation.mutate(),
        }}
      />
    </main>
    </>
  );
}
