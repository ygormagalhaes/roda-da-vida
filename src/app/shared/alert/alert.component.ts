import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
    templateUrl: './alert.component.html',
    selector: 'app-alert'
})
export class AlertComponent implements OnInit {
    alert: string;
    timeToView = 3000;

    constructor(private alertService: AlertService) { }

    ngOnInit(): void {
        this.alertService.getAlerts().subscribe(alert => {
            this.alert = alert;
            setTimeout(() => {
                this.alertService.clearAlert();
            }, this.timeToView);
        });
    }
}
