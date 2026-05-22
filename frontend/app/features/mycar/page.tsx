import Button from "@/app/global/components/Button";






export default function Mycar() {
    return(
        <>
            <p>I am my Car!</p>
            <Button buttonName="test" size="lg" iconName="img" type="tertiary" status="success" iconFlexPos="order-last" isPage="" maxPage="" iconStyle=""/>
            <Button buttonName="test" size="lg" iconName="img" type="tertiary" status="danger" iconFlexPos="order-last" isPage="" maxPage="" iconStyle=""/>
            <Button buttonName="test" size="lg" iconName="img" type="tertiary" status="normal" iconFlexPos="order-last" isPage="" maxPage="" iconStyle=""/>
        </>
    );
}