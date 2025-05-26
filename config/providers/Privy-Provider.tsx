"use client";

import { PrivyProvider } from '@privy-io/react-auth';
import { useEffect, useState } from 'react';

export const Privyprovider = ({ children }: { children: React.ReactNode }) => {

    const [isClient, setIsClient] = useState(false);
    const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

    useEffect(() => {
        setIsClient(true);
        console.log("PrivyProvider initialized with appId:", appId);
    }, []);

    if (!isClient || !appId) return <>{children}</>;

    return (
        <PrivyProvider
            appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
            config={{
                "appearance": {
                    "accentColor": "#38CCCD",
                    "theme": "#222224",
                    "showWalletLoginFirst": false,
                    "walletChainType": "ethereum-only",
                    "walletList": [
                        "detected_ethereum_wallets",
                        "metamask",
                        "coinbase_wallet",
                        "rainbow",
                        "wallet_connect"
                    ]
                },
                "loginMethods": [
                    "wallet",
                    "email"
                ],
                "fundingMethodConfig": {
                    "moonpay": {
                        "useSandbox": true
                    }
                },
                "embeddedWallets": {
                    "requireUserPasswordOnCreate": false,
                    "showWalletUIs": true,
                    "ethereum": {
                        "createOnLogin": "users-without-wallets"
                    },
                    "solana": {
                        "createOnLogin": "off"
                    }
                },
                "mfa": {
                    "noPromptOnMfaRequired": false
                },
            }}
        >
            {children}
        </PrivyProvider>
    )
}