import Button from "@/app/global/components/Button";






export default function Mycar() {
    return(
        <>
            <p>I am my Car!</p>
            <Button buttonName="test" size="lg" isSecondary={false} isTertiary={true} iconName="circleplus" iconFlexPos="order-last"/>
        </>
    );
}