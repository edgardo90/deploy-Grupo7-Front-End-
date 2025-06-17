import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Masinfo } from './masinfo';

describe('Masinfo', () => {
  let component: Masinfo;
  let fixture: ComponentFixture<Masinfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Masinfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Masinfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
