import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighscoresComponentComponent } from './highscores-component.component';

describe('HighscoresComponentComponent', () => {
  let component: HighscoresComponentComponent;
  let fixture: ComponentFixture<HighscoresComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighscoresComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighscoresComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
