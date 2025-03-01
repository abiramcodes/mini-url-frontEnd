import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from '../toolbar/toolbar.component';

export interface PeriodicElement {
  url: string;
  position: number;
  miniUrl: number;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, url: 'Hydrogen', miniUrl: 1.0079, action: 'H' },
  { position: 2, url: 'Helium', miniUrl: 4.0026, action: 'He' },
  { position: 3, url: 'Lithium', miniUrl: 6.941, action: 'Li' },
  { position: 4, url: 'Beryllium', miniUrl: 9.0122, action: 'Be' },
  { position: 5, url: 'Boron', miniUrl: 10.811, action: 'B' },
  { position: 6, url: 'Carbon', miniUrl: 12.0107, action: 'C' },
  { position: 7, url: 'Nitrogen', miniUrl: 14.0067, action: 'N' },
  { position: 8, url: 'Oxygen', miniUrl: 15.9994, action: 'O' },
  { position: 9, url: 'Fluorine', miniUrl: 18.9984, action: 'F' },
  { position: 10, url: 'Neon', miniUrl: 20.1797, action: 'Ne' },
];

@Component({
  selector: 'app-url-table-list',
  imports: [MatTableModule, ToolbarComponent, MatIconModule, MatButtonModule],
  templateUrl: './url-table-list.component.html',
  styleUrl: './url-table-list.component.scss',
})
export class UrlTableListComponent {
  displayedColumns: string[] = ['position', 'url', 'miniUrl', 'action'];
  dataSource = ELEMENT_DATA;

  private readonly router = inject(Router);

  public navigateHome(): void {
    this.router.navigate(['/']);
  }
}
