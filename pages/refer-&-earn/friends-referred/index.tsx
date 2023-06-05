import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import ReferralCode from "./componets/referralCode/referralCode";
import FriendsWhoEnrolledCard from "./componets/card/friendsWhoEnrolledCard";
import Back from "@/pages/components/button/back";
import Meta from "@/pages/components/meta/meta";

interface LinkProps {
    title: string;
    link: string;
}

export default function Page() {

    const footerLinks: LinkProps[] = [
        {
            title: "Terms & Conditions",
            link: "/terms"
        }
    ]

    return (
        <>
            <Meta title="Friends Who Enrolled" description="Friends Who Enrolled" />
            <div className="parent">
                <div className="sticky">
                    <Nav />
                    <Breadcrumb />
                    <Back />
                </div>
                <main className="container">
                    <ReferralCode />
                    <FriendsWhoEnrolledCard />
                    <Footer links={footerLinks} />
                </main>
            </div>
        </>
    )
}