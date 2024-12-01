import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSourceService {
  private readonly titleSource = new BehaviorSubject<string>('');
  currentTitle = this.titleSource.asObservable();

  constructor() {}

  changeTitle(title: string) {
    this.titleSource.next(title);
  }

  createColumn(
    key: string | number | Array<object>,
    label: string | number | Array<object>,
    isDropdown: boolean,
    isEditable: boolean,
    action: () => void
  ) {
    return {
      key,
      label,
      isDropdown,
      isEditable,
      action,
    };
  }
}
