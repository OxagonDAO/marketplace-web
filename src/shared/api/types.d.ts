export interface BankRate {
    id: string,
    name: string,
    rates: {
        buy: number,
        sell: number
    }
}