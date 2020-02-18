import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhThoiGianSongComponent } from './tinh-thoi-gian-song.component';

describe('TinhThoiGianSongComponent', () => {
  let component: TinhThoiGianSongComponent;
  let fixture: ComponentFixture<TinhThoiGianSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinhThoiGianSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhThoiGianSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
