import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent { 
  constructor(
    private usersService: UsersService) {
        this.usersService.countUpdated.subscribe(
          (message: string) => alert(message)
        );
    }
}
