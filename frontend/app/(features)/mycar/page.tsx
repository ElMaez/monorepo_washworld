"use client";

import Button from "@/app/global/components/Button";
import Dialog from "@/app/global/components/Dialog";
import Header from "@/app/global/components/Header";
import Label from "@/app/global/components/Label";

export default function Mycar() {

  return (
    <>
    <Header title="my car" backButton={{ elementType: "link", goBack: true, size: "sm", type: "none", status: "normal", iconName: "back", }}/>
    <main>

      <Label
      title="Title"
      subText="Subtext"
      labelAmount="one"
      angle="reverse"
      iconNameOne="vacuum"
      iconNameTwo="circlecheck"
      iconNameThree="check"
      iconSize="sm"
      style="bg-primary-100 text-bg-dark" />
      
      <Button 
        elementType="button"
        buttonName="tilføj bil"
        size="lg"
        type="secondary"
        status="normal"
        iconName="circleplus"
        iconFlexPos="order-first"
        dialogId ="my-car-dialog"/>

      <Dialog id="my-car-dialog"
      buttonTwo={{ elementType: "button", buttonName:"Back", size: "sm", type: "primary", status: "normal" }}
      buttonThree={{ elementType: "button", buttonName:"Delete", size: "sm", type: "primary", status: "danger" }}/>
    </main>
    </>
  );
}