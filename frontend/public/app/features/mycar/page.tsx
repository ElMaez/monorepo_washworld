import PrimaryButton from "@/public/app/global/components/PrimaryButton";
import SecondaryButton from "@/public/app/global/components/SecondaryButton";
import TertiaryButton from "@/public/app/global/components/TertiaryButton";






export default function Mycar() {
    return(
        <>
            <p>I am my Car!</p>
            <PrimaryButton buttonName="test" size="lg"/>
            <SecondaryButton buttonName="test" size="lg"/>
            <TertiaryButton buttonName="test" size="lg"/>
        </>
    );
}