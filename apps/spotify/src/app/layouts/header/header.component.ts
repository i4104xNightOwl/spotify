import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
    selector: 'app-header',
    imports: [NzIconModule, CommonModule, NzFlexModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent {
}
