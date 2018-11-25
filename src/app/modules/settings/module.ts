import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from '@modules/settings/app';
import { SettingsRooutesModule } from '@modules/settings/routes';
import { MemberService } from '@app/services';

@NgModule({
  imports: [CommonModule, SettingsRooutesModule],
  providers: [MemberService],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
