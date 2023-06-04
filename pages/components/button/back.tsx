import { useRouter } from "next/router";
export default function Back() {
    const router = useRouter();
    return (
        <div className={`back ${router.pathname === "/" ? "back--hidden" : ""}`} onClick={() => router.back()} >
            <img src="/assets/arrow-back.svg" alt="arrow-back"/>
            <span>go back</span>
        </div>
    )
}