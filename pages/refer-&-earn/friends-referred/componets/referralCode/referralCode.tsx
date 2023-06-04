import ReferralCodeBalance from "./referralCodeBalance";
import ReferralCodeCode from "./referralCodeCode";

export default function ReferralCode() {
    return (
        <div className="referralCode">
            <ReferralCodeCode />
            <ReferralCodeBalance />
        </div>
    )
}