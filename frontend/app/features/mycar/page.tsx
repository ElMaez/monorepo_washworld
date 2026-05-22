import Button from "@/app/global/components/Button";






export default function Mycar() {
    return(
        <>
            <p>I am my Car!</p>
            <Button buttonName="test" size="" isSecondary={false} isTertiary={false} iconName="img" iconFlexPos="order-last" isPage="1" maxPage="3" iconStyle="text-primary-800"/>
        </>
    );
}