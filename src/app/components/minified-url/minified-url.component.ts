import { Component, inject, input } from '@angular/core';
import { minifiedUrl } from '../../models/url.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-minified-url',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './minified-url.component.html',
  styleUrl: './minified-url.component.scss',
})
export class MinifiedUrlComponent {
  minfiedUrl = input<minifiedUrl | null>();

  private readonly clipBoard = inject(Clipboard);

  public copyUrl(): void {
    this.clipBoard.copy(this.minfiedUrl()?.miniUrl ?? '');
  }
}
