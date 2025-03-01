import { Routes } from '@angular/router';
import { UrlFormsComponent } from './components/url-forms/url-forms.component';
import { UrlTableListComponent } from './components/url-table-list/url-table-list.component';

export const routes: Routes = [
  {
    path: '',
    component: UrlFormsComponent,
  },
  {
    path: 'minifiedUrls',
    component: UrlTableListComponent,
  },
];
