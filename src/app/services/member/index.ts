import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '@app/services/api';
import { Members, Member } from '@app/services/member/model';

@Injectable()
export class MemberService {
  private HOST: string = 'https://api.myjson.com';

  constructor(private apiService: ApiService, private http: HttpClient) {}

  /**
   * @description: Get all data members
   */
  getMembers(): Observable<Members> {
    return this.apiService
      .get(`${this.HOST}/bins/a1d26`)
      .pipe(map(data => data));
  }

  /**
   * @param: {string} id - Member id
   * @description: Get member by specific id
   */
  getMemberById(id: string): Observable<Member> {
    const options = id
      ? new HttpParams({ fromObject: { id } })
      : new HttpParams();

    return this.apiService
      .get(`${this.HOST}/bins/a1d27`, options)
      .pipe(map(data => data));
  }
}
