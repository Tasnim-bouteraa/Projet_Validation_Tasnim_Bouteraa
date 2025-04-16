import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StageService } from '../services/stage.service';
import { Stage } from '../models/stage.model';

@Component({
  selector: 'app-tasnim-bouteraa-stage-detail',
  templateUrl: './tasnim-bouteraa-stage-detail.component.html',
  styleUrls: ['./tasnim-bouteraa-stage-detail.component.css']
})
export class TasnimBouteraaStageDetailComponent implements OnInit {
  stage!: Stage;
  constructor(private route: ActivatedRoute, private stageService: StageService) { }
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log(idParam)
    if (idParam !== null) {
      const id = +idParam;
    this.stageService.getStage(id).subscribe(data => {
      this.stage = data;
    });

    }
  }
}

