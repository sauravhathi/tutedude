import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import Dashboard from "../components/card/dashboard";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Work from "../components/work/work";
import Back from "../components/button/back";
import Meta from "../components/meta/meta";

interface LinkProps {
    title: string;
    link: string;
}

export default function ReferAndEarn() {

    const footerLinks: LinkProps[] = [
        {
            title: 'Friends Who Enrolled',
            link: '/refer-&-earn/friends-referred'
        },
        {
            title: "Terms & Conditions",
            link: "/terms"
        }
    ]

    return (
        <>
            <Meta title="Refer & Earn" description="Refer & Earn" />
            <div className="parent">
                <div className="sticky">
                    <Nav />
                    <Breadcrumb />
                    <Back />
                </div>
                <main className="container">
                    <Dashboard />
                    <Work />
                    <Footer links={footerLinks} />
                </main>
            </div>
        </>
    )
}