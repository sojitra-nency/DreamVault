'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi'
import React from 'react'

const SignUp = () => {
    const {address}=useAccount()
    console.log(address);
    return (
        <>
        <h1>sign Up</h1>
    <ConnectButton />
    {address}
        </>
    );
}

export default SignUp