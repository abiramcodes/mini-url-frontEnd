import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifiedUrlComponent } from './minified-url.component';

describe('MinifiedUrlComponent', () => {
  let component: MinifiedUrlComponent;
  let fixture: ComponentFixture<MinifiedUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinifiedUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinifiedUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
