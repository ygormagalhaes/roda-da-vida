import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    private alertSubject = new Subject<string>();

    getAlerts(): Observable<string> {
        return this.alertSubject.asObservable();
    }

    setAlert(message: string): void {
        this.alertSubject.next(message);
    }

    clearAlert(): void {
        this.alertSubject.next(null);
    }
}
