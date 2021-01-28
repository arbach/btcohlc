export class CandleResponse {
    data: Candle[];
    timestamp: number;
}

export class Candle {
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    period: number;
}