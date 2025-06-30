import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
    selector: 'app-header',
    imports: [NzIconModule, CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent {
}
