import Router from 'next/router'
import { useEffect } from "react";

export const useLoginCheak = () => {
    useEffect(() => {
        if (!localStorage.JWT) {
            Router.push("/")
        }
    },[])

};