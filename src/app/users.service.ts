import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
    activeUsers=['Max', 'Anna'];
    inactiveUsers=['Chris', 'Manuel'];

    countUpdated = new EventEmitter<string>();

    constructor(private counterService: CounterService) {}

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.onActiveToInactive();
        this.countUpdated.emit('User status changed to inactive! There have been ' + this.counterService.activeToInactive + ' changes from inactive to active!');
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.onInactiveToActive();
        this.countUpdated.emit('User status changed to active! There have been ' + this.counterService.inactiveToActive + ' changes from inactive to active!');
    }
}