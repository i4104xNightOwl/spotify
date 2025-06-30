import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';

@Component({
    imports: [RouterModule, NzLayoutModule, HeaderComponent, FooterComponent, SidebarComponent],
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
})

export class App {
    protected title = 'spotify';
}

