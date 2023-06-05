import { useRouter } from "next/router";
export default function Back() {
    const router = useRouter();
    return (
        <div className={`back container ${router.pathname === "/refer-&-earn" ? "back--hidden" : ""}`} onClick={() => router.back()} aria-label="go back">
            <img src="/assets/arrow-back.svg" alt="arrow-back"/>
            <span>go back</span>
        </div>
    )
}