import { Component, OnInit } from '@angular/core';
import { StageService } from '../services/stage.service';
import { Stage } from '../models/stage.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasnim-bouteraa-stages-ing',
  templateUrl: './tasnim-bouteraa-stages-ing.component.html',
  styleUrls: ['./tasnim-bouteraa-stages-ing.component.css']
})
export class TasnimBouteraaStagesIngComponent implements OnInit {
  stages!: Stage[] ;
  constructor(private stageService: StageService, private router: Router) { }
  ngOnInit(): void {
    this.getStages();
  }
  getStages() {
    this.stageService.getStages().subscribe(data => {
      this.stages = data;
    });
  }
  deleteStage(id: number) {
    this.stageService.deleteStage(id).subscribe(() => {
      this.getStages();
    });
  }
}
