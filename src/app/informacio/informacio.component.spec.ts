import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacioComponent } from './informacio.component';

describe('InformacioComponent', () => {
  let component: InformacioComponent;
  let fixture: ComponentFixture<InformacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
