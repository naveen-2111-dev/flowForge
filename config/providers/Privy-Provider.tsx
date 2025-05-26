"use client";

import { PrivyProvider } from '@privy-io/react-auth';

export const Privyprovider = ({ children }: { children: React.ReactNode }) => {
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