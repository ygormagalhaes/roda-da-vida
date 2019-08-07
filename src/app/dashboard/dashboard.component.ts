import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as VariablePie from 'highcharts/modules/variable-pie';

(VariablePie as any)(Highcharts);

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    ngOnInit(): void {

        Highcharts.chart('variable-pie', {
            title: {
                text: 'Resultados'
            },
            chart: {
                type: 'variablepie',
                backgroundColor: 'rgba(1, 1, 1, 0)'
            },
            series: [{
                type: 'variablepie',
                minPointSize: 10,
                innerSize: '20%',
                zMin: 0,
                name: 'countries',
                data: [{
                    name: 'Poland',
                    y: 20,
                    z: 124.6
                }, {
                    name: 'Czech Republic',
                    y: 20,
                    z: 137.5
                }, {
                    name: 'Italy',
                    y: 20,
                    z: 201.8
                }, {
                    name: 'Switzerland',
                    y: 20,
                    z: 214.5
                }, {
                    name: 'Germany',
                    y: 20,
                    z: 235.6
                }]
            }]
        });

    }

}
