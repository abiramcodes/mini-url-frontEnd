import { Component } from '@angular/core';
import { UrlTableListComponent } from '../url-table-list/url-table-list.component';

@Component({
  selector: 'app-url-forms',
  imports: [UrlTableListComponent],
  templateUrl: './url-forms.component.html',
  styleUrl: './url-forms.component.scss',
})
export class UrlFormsComponent {}
