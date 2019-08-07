import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as VariablePie from 'highcharts/modules/variable-pie';
import { ThemeService } from '../theme/theme.service';

(VariablePie as any)(Highcharts);

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    constructor(private themeService: ThemeService) { }

    ngOnInit(): void {

        this.themeService.getThemes()
            .subscribe(themes => {
                const areaPerTheme = 100 / themes.length;
                const data = themes.map(theme => {
                    return {
                        name: `${theme.title} - ${theme.grade ? theme.grade : 0}`,
                        y: areaPerTheme,
                        z: theme.grade
                    };
                });
                this.updateChart(data);
            });
    }

    private updateChart(data: any): void {
        Highcharts.chart('variable-pie', {
            tooltip: {
                enabled: false
            },
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
                innerSize: '5%',
                zMin: 0,
                name: 'Tema',
                data
            }]
        });
    }

}
