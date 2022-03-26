// Library
import { useRouter } from 'next/router'
import { useEffect } from "react";
// functions
import { token_refresh } from "src/states/APIs"

export const useLoginCheak = () => {
    const router = useRouter()
    useEffect(() => {
        if (localStorage.JWT) {
            token_refresh().then(res => localStorage.setItem("JWT", res.access)).catch(() =>router.push("/"))
        } else {
            router.push("/")
        }
    }, [])
}