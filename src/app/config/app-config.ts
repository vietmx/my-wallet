import { AppConfig } from '@airgap/angular-core'

export const appConfig: AppConfig = {
  app: {
    name: 'AirGap Wallet',
    urlScheme: 'airgap-wallet',
    universalLink: 'wallet.airgap.it'
  },
  otherApp: {
    name: 'AirGap Vault',
    urlScheme: 'airgap-vault',
    universalLink: 'vault.airgap.it'
  }
}
