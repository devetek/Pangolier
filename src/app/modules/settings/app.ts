import { Component, OnInit } from '@angular/core';
import { MemberService } from '@app/services/member';
import { Members } from '@app/services/member/model';

@Component({
  selector: 'settings-module',
  templateUrl: './view.html',
  styleUrls: ['./style.css'],
})
export class SettingsComponent implements OnInit {
  loading: boolean = false;
  results: Members = { data: [], hasNext: false };
  hasNext: boolean = false;

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.loading = true;

    this.memberService.getMembers().subscribe(response => {
      this.loading = false;

      if (response.data.length > 0) {
        this.results = response;
        this.hasNext = response.hasNext || false;
      }
    });
  }
}
