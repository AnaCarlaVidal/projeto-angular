import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePijamaComponent } from './detalhe-pijama.component';

describe('DetalhePijamaComponent', () => {
  let component: DetalhePijamaComponent;
  let fixture: ComponentFixture<DetalhePijamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhePijamaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhePijamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
