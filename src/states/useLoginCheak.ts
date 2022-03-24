import {useRouter} from 'next/router'
import { useEffect } from "react";

export const useLoginCheak = () => {
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.JWT) {
            router.push("/")
        }
    },[])

};