import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
specialties = [
    'Accupuncture',
    'Allergy and Immunology',
    'Anaesthesiology',
    'Clinical Nutrition',
    'General Practitioner'
  ];
 sectionState: Record<string, boolean> = {
    specialties: true,
    topics: false,
    speakers: false,
    pharma: false
  };

  toggleSection(section: string): void {
    this.sectionState[section] = !this.sectionState[section];
  }
}
