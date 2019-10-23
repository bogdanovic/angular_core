import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DefaultPageComponent} from './page1.component';
import {RouterTestingModule} from '@angular/router/testing';
import { ComponentsModule } from '@app/components/components.module';

describe('Page1Component', () => {
  let component: DefaultPageComponent;
  let fixture: ComponentFixture<DefaultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultPageComponent],
      imports: [RouterTestingModule, ComponentsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
