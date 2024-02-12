import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaugePoubelleComponent } from './jauge-poubelle.component';

describe('JaugePoubelleComponent', () => {
  let component: JaugePoubelleComponent;
  let fixture: ComponentFixture<JaugePoubelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JaugePoubelleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JaugePoubelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
