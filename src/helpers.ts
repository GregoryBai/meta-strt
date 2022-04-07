export const getShortAddress = (address: string | null) => (address ? `${address.slice(0, 5)}...${address.slice(-4)}` : '')
