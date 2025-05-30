import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermekComponent } from './termek.component';

describe('TermekComponent', () => {
  let component: TermekComponent;
  let fixture: ComponentFixture<TermekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
