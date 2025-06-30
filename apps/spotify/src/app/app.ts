import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from './layouts/header/header.component';

@Component({
    imports: [RouterModule, NzLayoutModule, HeaderComponent],
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
})

export class App {
    protected title = 'spotify';
}

