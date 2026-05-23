import Button from "@/app/global/components/Button";
import Header from "@/app/global/components/Header";



export default function Mycar() {
    return(
        <> 
            <Header
    title="my car"
    leftButton={{
    elementType: "link",
    goBack: true,
    size: "",
    type: "none",
    status: "normal",
    iconName: "back"
  }}
    rightButton={{
    elementType: "button",
    buttonName: "save",
    size: "",
    type: "secondary",
    status: "success"
  }}
/>
            <p>I am my Car!</p>
            <Button elementType="button" buttonName="tilføj bil" size="lg" type="secondary" status="normal" iconName="circleplus" iconFlexPos="order-first"/>
        </>
    );
}