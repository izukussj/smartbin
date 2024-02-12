import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Bin } from '../../models/bin.model';
import { BinService } from '../../services/bin.service';

@Component({
  selector: 'app-bin-details',
  templateUrl: './bins-details.component.html',
  styleUrls: ['./bins-details.component.css']
})
export class BinsDetailsComponent implements OnInit {
  @Input() bin?: Bin;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentBin: Bin = {
    type: "",
    lieu: null,
    filling_rate:0,
    isFull: false
  };
  message = '';

  constructor(private binService: BinService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentBin = { ...this.bin };
  }

  updateFill(): void {
    if (this.currentBin.key) {
      this.binService.update(this.currentBin.key, { filling_rate: 0 ,isFull: false })
      .then(() => {
        this.currentBin.isFull = false;
        this.currentBin.filling_rate=0;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateBin(): void {
    const data = {
      type: this.currentBin.type,
      lieu: this.currentBin.lieu
    };

    if (this.currentBin.key) {
      this.binService.update(this.currentBin.key, data)
        .then(() => this.message = 'The bin was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteBin(): void {
    if (this.currentBin.key) {
      this.binService.delete(this.currentBin.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The bin was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}