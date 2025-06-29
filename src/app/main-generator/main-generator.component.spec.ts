import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGeneratorComponent } from './main-generator.component';

describe('MainGeneratorComponent', () => {
  let component: MainGeneratorComponent;
  let fixture: ComponentFixture<MainGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
