import { TinhThoiGianSongComponent } from './tinh-thoi-gian-song/tinh-thoi-gian-song.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
const routes: Routes = [
  {
    path: 'tinh-thoi-gian-song',
    component: TinhThoiGianSongComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
