import { Component, OnInit } from '@angular/core';
import { ChartService } from '@app-core';
import { StockChart } from 'angular-highcharts';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    btcChart: StockChart;
    constructor(private chartService: ChartService) {

    }

    ngOnInit() {
        this.getData();
    }

    private getData() {
        const endDate = new Date();
        let startDate = new Date()
        startDate.setFullYear(startDate.getFullYear() - 1)
        const params = {
            symbol: "BTC-USD",
            start: startDate.getTime(),
            end: endDate.getTime(),
            granularity: 86400
        }
        this.chartService.getData(params).subscribe((result: any) => {
            console.log(result);

            this.btcChart = new StockChart({
                rangeSelector: {
                    selected: 2
                },

                title: {
                    text: 'BTC-USD'
                },
                plotOptions: {
                    candlestick: {
                        color: 'green',
                        upColor: 'red'
                    }
                },
                series: [{
                    type: 'candlestick',
                    name: 'BTC-USD',
                    data: result.prices,
                    // dataGrouping: {
                    //     units: [[
                    //         'week', // unit name
                    //         [1] // allowed multiples
                    //     ], [
                    //         'month',
                    //         [1, 2, 3, 4, 6]
                    //     ]]
                    // }
                }]
            })
        })
    }
}
