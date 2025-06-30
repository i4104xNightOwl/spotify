import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
    selector: 'app-footer',
    imports: [NzIconModule, CommonModule, NzFlexModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})

export class FooterComponent {
}
