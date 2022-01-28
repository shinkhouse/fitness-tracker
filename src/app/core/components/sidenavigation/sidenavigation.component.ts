import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-sidenavigation',
    templateUrl: './sidenavigation.component.html',
    styleUrls: ['./sidenavigation.component.scss'],
})
export class SidenavigationComponent implements OnInit {
    @Output() sidenavToggle = new EventEmitter<void>();
    constructor() {}

    ngOnInit(): void {}

    onSidenavToggle() {
        this.sidenavToggle.emit();
    }
}
