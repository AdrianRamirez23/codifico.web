import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurstomerComponent } from './curstomer.component';

describe('CurstomerComponent', () => {
  let component: CurstomerComponent;
  let fixture: ComponentFixture<CurstomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurstomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurstomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
