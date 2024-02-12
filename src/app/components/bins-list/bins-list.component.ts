import { Component, OnInit } from '@angular/core';
import { Bin } from '../../models/bin.model';
import { BinService } from '../../services/bin.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bins-list',
  templateUrl: './bins-list.component.html',
  styleUrls: ['./bins-list.component.css']
})
export class BinsListComponent implements OnInit {
  bins?: Bin[];
  currentBin?: Bin;
  currentIndex = -1;
  type = '';

  constructor(private binService: BinService) { }

  ngOnInit(): void {
    this.retrieveBins();
  }

  refreshList(): void {
    this.currentBin = undefined;
    this.currentIndex = -1;
    this.retrieveBins();
  }

  retrieveBins(): void {
    this.binService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.bins = data;
    });
  }

  setActiveBin(bin: Bin, index: number): void {
    this.currentBin = bin;
    this.currentIndex = index;
  }

  removeAllBins(): void {
    this.binService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
}