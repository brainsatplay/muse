// Derived from https://github.com/urish/muse-js
// Garrett Flynn, November 13 2021
import * as musejs from 'muse-js';

export const contentHints = ["TP9", "AF7",  "AF8", "TP10"]

// Pre-Declared Device Class
export const device = musejs.MuseClient

// After Device Connect
export const onconnect = async (dataDevice: any) => {

    let device = dataDevice.device
    await device.start()

    device.eegReadings.subscribe((o:any) => {
        let latest: {[x:string]:any} = {}
        latest[contentHints[o.electrode]] = o.samples
        dataDevice.ondata(latest, o.timestamp)
    })
}
