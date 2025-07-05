import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinScreenComponent } from './win-screen.component';

describe('WinScreenComponent', () => {
  let component: WinScreenComponent;
  let fixture: ComponentFixture<WinScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
