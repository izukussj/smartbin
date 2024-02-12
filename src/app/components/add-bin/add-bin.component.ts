import { Component } from '@angular/core';
import { Bin } from '../../models/bin.model';
import { BinService } from '../../services/bin.service';

@Component({
  selector: 'app-add-bin',
  templateUrl: './add-bin.component.html',
  styleUrls: ['./add-bin.component.css']
})
export class AddBinComponent {

  bin: Bin = new Bin();
  submitted = false;
  ngOnInit(): void {};
  constructor(private binService: BinService) { }

  saveBin(): void {
    this.binService.create(this.bin).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newBin(): void {
    this.submitted = false;
    this.bin = new Bin();
  }
}