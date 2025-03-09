import { Component, inject, OnInit, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Subject, takeUntil } from 'rxjs';

import { ToolbarComponent } from '../toolbar/toolbar.component';
import { minifiedUrl } from '../../models/url.model';
import { MinifiedUrlService } from '../../services/minified-url.service';

@Component({
  selector: 'app-url-table-list',
  imports: [
    MatTableModule,
    ToolbarComponent,
    MatIconModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './url-table-list.component.html',
  styleUrl: './url-table-list.component.scss',
})
export class UrlTableListComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly minifiedUrlService = inject(MinifiedUrlService);

  private readonly unsubscribe$ = new Subject();

  displayedColumns: string[] = ['index', 'url', 'miniUrl', 'action'];

  dataSource = signal<minifiedUrl[]>([]);

  ngOnInit(): void {
    this.minifiedUrlService
      .getMinifiedUrls()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((minifiedUrls: minifiedUrl[]) => {
        this.dataSource.set(minifiedUrls);
      });
  }

  public navigateHome(): void {
    this.router.navigate(['/']);
  }

  public deleteMiniUrl(element: minifiedUrl): void {
    this.minifiedUrlService.deleteMinifiedUrl(element._id).subscribe(() => {
      this.dataSource.set(
        this.dataSource().filter((item) => item.key !== element.key)
      );
    });
  }
}
