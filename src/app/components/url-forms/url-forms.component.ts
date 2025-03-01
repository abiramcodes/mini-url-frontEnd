import { Component, inject } from '@angular/core';
import { UrlTableListComponent } from '../url-table-list/url-table-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { Router } from '@angular/router';

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
  ],
  templateUrl: './url-forms.component.html',
  styleUrl: './url-forms.component.scss',
})
export class UrlFormsComponent {
  private readonly router = inject(Router);

  urlFormsGroup = new FormGroup({
    longUrl: new FormControl('', Validators.required),
  });

  public minifyUrl(): void {
    console.log(this.urlFormsGroup.controls.longUrl.value);
  }

  public navigateUrlList(): void {
    this.router.navigate(['/minified-urls']);
  }
}
