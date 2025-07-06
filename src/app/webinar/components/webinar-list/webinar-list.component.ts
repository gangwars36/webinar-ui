import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Webinar } from '../../models/webinar.model';

@Component({
  selector: 'app-webinar-list',
  templateUrl: './webinar-list.component.html',
  styleUrl: './webinar-list.component.scss'
})
export class WebinarListComponent implements OnInit {
registeredWebinars: any[] = [];
nextWeekWebinars: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Webinar[]>('../../../../assets/data/webinar.json').subscribe((data) => {
    this.registeredWebinars = data.filter(w => w.category === 'registered');
    this.nextWeekWebinars = data.filter(w => w.category === 'next-week');
  });
  }

  onTabChange(tab: string): void {
    console.log('Tab changed to:', tab);
    // Add filtering by tab if needed
  }
}
