'use client'
import { SignIn, UserButton, useUser } from '@clerk/nextjs'

export default function Home() {
    const { user } = useUser()

    if (!user) {
        return (
            <div className='flex justify-center h-screen items-center'>
                <SignIn />
            </div>
        )
    }

    return (
        <div className='head-text'>
            <UserButton />
        </div>
    )
}