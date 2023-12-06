import { Component, OnInit } from '@angular/core';
import { AutobahnService } from '../../services/autobahn.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  roadworks: any[] = [];
  displayedColumns: string[] = ['title', 'description'];

  constructor(private autobahnService: AutobahnService) { }

  ngOnInit() {
    this.autobahnService.getRoadworks().subscribe({
      next: (data: any) => {
        this.roadworks = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données', error);
      }
    });
  }
}
