import * as muse from './device.utils'

export const device =  {
    // Generic 
    label: 'muse', 
    device: muse.device,
    onconnect: muse.onconnect,
    protocols: ['bluetooth'],
}

export default device