import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingFunctionalityComponent } from './coding-functionality.component';

describe('CodingFunctionalityComponent', () => {
  let component: CodingFunctionalityComponent;
  let fixture: ComponentFixture<CodingFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingFunctionalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
