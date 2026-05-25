"use client";

import Button from "@/app/global/components/Button";
import Dialog from "@/app/global/components/Dialog";
import Header from "@/app/global/components/Header";

export default function Mycar() {

  return (
    <>
      <Header title="my car"
      backButton={{ elementType: "link", goBack: true, size: "sm", type: "none", status: "normal", iconName: "back", }}/>
      <main>
      <Button 
        elementType="button"
        buttonName="tilføj bil"
        size="lg"
        type="secondary"
        status="normal"
        iconName="circleplus"
        iconFlexPos="order-first"
        dialogId ="my-car-dialog" />
      </main>
    </>
  );
}