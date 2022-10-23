import { useContext } from 'react'
import { AppContext, AppUpdateContext } from '../context/AppContext'


export default function useSeo() {
    const context = useContext(AppContext)
    return context.seo
}


export function useUpdateSeo() {
    const update = useContext(AppUpdateContext)
    return (payload) => update('seo', payload)
}