import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlTableListComponent } from './url-table-list.component';

describe('UrlTableListComponent', () => {
  let component: UrlTableListComponent;
  let fixture: ComponentFixture<UrlTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlTableListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
