import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAccount } from './your-account';

describe('YourAccount', () => {
  let component: YourAccount;
  let fixture: ComponentFixture<YourAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourAccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
