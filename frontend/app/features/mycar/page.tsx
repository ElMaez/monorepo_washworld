"use client";

import Button from "@/app/global/components/Button";
import Dialog from "@/app/global/components/Dialog";
import Header from "@/app/global/components/Header";

export default function Mycar() {

  return (
    <>
      <Header title="my car" backButton={{ elementType: "link", goBack: true, size: "", type: "none", status: "normal", iconName: "back", }}/>
      
      <Button 
        elementType="button"
        buttonName="tilføj bil"
        size="lg"
        type="secondary"
        status="normal"
        iconName="circleplus"
        iconFlexPos="order-first"
        dialogId ="my-car-dialog"
        
      />
      <Dialog id="my-car-dialog" buttonTwo={{ elementType: "button", buttonName:"Back", size: "", type: "primary", status: "normal" }} buttonThree={{ elementType: "button", buttonName:"Delete", size: "", type: "primary", status: "danger" }}/>
      
    </>
  );
}