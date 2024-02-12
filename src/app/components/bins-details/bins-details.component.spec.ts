import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinsDetailsComponent } from './bins-details.component';

describe('BinsDetailsComponent', () => {
  let component: BinsDetailsComponent;
  let fixture: ComponentFixture<BinsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BinsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BinsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
