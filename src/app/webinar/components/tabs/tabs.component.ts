import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
    tabs: string[] = ['For you', 'Live', 'Upcoming'];
  selectedTab: number = 2; // Default to "Upcoming"

  @Output() tabChange = new EventEmitter<string>();

  selectTab(index: number) {
    this.selectedTab = index;
    this.tabChange.emit(this.tabs[index]);
  }
}
