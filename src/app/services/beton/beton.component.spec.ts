import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetonComponent } from './beton.component';

describe('BetonComponent', () => {
  let component: BetonComponent;
  let fixture: ComponentFixture<BetonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
