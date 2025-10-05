import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Pagination {
  private totalItems = 100;
  private imageURL = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092";

  getItems(page = 1, itemsPerPage = 32): Observable<string[]> {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    console.log("Fetching items for page:", page, " start:", startIndex, " end:", endIndex);

    const items: string[] = [];   // ✅ string instead of String

    for (let i = startIndex; i < endIndex; i++) {
      if (i < this.totalItems) {
        items.push(this.imageURL);
      }
    }

    return of(items).pipe(delay(500));
  }
}
