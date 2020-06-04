# photon
A Minimalistic Lightning Wallet

:warning: This is pre-alpha software. Please use as your own risk.

### Installation
1. Generate the Lndmobile.aar file (lnd v0.9).
    - Option 1 - Generate it locally:
        - To generate this file, please follow the instructions detailed in the README of Lightning Lab's Lightning App [here.](https://github.com/lightninglabs/lightning-app/tree/master/mobile)
    - Option 2 - Download the pre-generated file:
        - If you do not wish to generate the file locally you can download it [here](https://github.com/coreyphillips/photon/releases/tag/v0.0.1) instead. However, I highly recommend you opt for option 1.
2. Clone react-native-lightning and Install Dependencies:
   ```
    git clone https://github.com/coreyphillips/photon
    cd photon
    yarn install
    ```
3. Add the Lndmobile.aar & Lndmobile.framework files to the project:
    - Add the Lndmobile.aar file to `react-native-lightning/android/Lndmobile`

4. Start the project:
    - iOS: `react-native run-ios`
    - Android: `react-native run-android`
