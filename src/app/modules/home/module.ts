import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@modules/home/app';
import { HomeRooutesModule } from '@modules/home/routes';
import { MemberService } from '@app/services';

@NgModule({
  imports: [CommonModule, HomeRooutesModule],
  providers: [MemberService],
  declarations: [HomeComponent],
})
export class HomeModule {}
