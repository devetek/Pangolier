import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: '@modules/settings/module#SettingsModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      /**
       * References from github.com, need to improve peformances
       * implement a custom preloading strategy for just some
       * of the modules
       */
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesModule {}
