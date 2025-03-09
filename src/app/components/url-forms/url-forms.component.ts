import { Component, inject, OnDestroy, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';

import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MinifiedUrlService } from '../../services/minified-url.service';
import { minifiedUrl } from '../../models/url.model';
import { SnackbarService } from '../../services/snackbar.service';
import { URL_SUCESS_MESSAGE } from '../../constants/url.constant';
import { MinifiedUrlComponent } from '../minified-url/minified-url.component';

@Component({
  selector: 'app-url-forms',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    ToolbarComponent,
    MinifiedUrlComponent,
  ],
  templateUrl: './url-forms.component.html',
  styleUrl: './url-forms.component.scss',
})
export class UrlFormsComponent implements OnDestroy {
  private readonly router = inject(Router);
  private readonly minifiedUrlService = inject(MinifiedUrlService);
  private readonly snackBarService = inject(SnackbarService);

  minifiedUrl = signal<minifiedUrl | null>(null);

  private readonly unsubscribe$ = new Subject();

  urlFormsGroup = new FormGroup({
    longUrl: new FormControl('', Validators.required),
  });

  public minifyUrl(): void {
    const longUrl = this.urlFormsGroup.controls.longUrl.value!;
    this.minifiedUrlService
      .minifyUrl(longUrl)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((minifiedUrl: minifiedUrl) => {
        this.minifiedUrl.set(minifiedUrl);
        this.snackBarService.openSnackBar(URL_SUCESS_MESSAGE);
      });
  }

  public navigateUrlList(): void {
    this.router.navigate(['/minified-urls']);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
