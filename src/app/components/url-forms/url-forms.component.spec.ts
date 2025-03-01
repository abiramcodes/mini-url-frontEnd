import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlFormsComponent } from './url-forms.component';

describe('UrlFormsComponent', () => {
  let component: UrlFormsComponent;
  let fixture: ComponentFixture<UrlFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
