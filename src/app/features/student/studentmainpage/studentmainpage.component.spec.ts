import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmainpageComponent } from './studentmainpage.component';

describe('StudentmainpageComponent', () => {
  let component: StudentmainpageComponent;
  let fixture: ComponentFixture<StudentmainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentmainpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
