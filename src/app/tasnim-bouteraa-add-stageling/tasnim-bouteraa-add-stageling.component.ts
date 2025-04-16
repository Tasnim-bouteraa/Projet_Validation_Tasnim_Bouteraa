import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StageService } from '../services/stage.service';
import { Stage } from '../models/stage.model';

@Component({
  selector: 'app-tasnim-bouteraa-add-stageling',
  templateUrl: './tasnim-bouteraa-add-stageling.component.html',
  styleUrls: ['./tasnim-bouteraa-add-stageling.component.css']
})
export class TasnimBouteraaAddStagelingComponent implements OnInit {
  stageForm!: FormGroup;
  constructor(private fb: FormBuilder, private stageService: StageService, private router: Router) { }
  ngOnInit(): void {
    this.stageForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(3)]],
      entreprise: ['', [Validators.required, this.firstUpperCaseValidator]],
    });
  }
  firstUpperCaseValidator(control: AbstractControl) {
    const value = control.value;
    if (value && value.length > 0 && value[0] !== value[0].toUpperCase()) {
      return { firstUpperCase: true };
    }
    return null;
  }
  onSubmit() {
    if (this.stageForm !== null && this.stageForm.valid) {
      const stage: Stage = {
        titre: this.stageForm.value.titre,
        description: this.stageForm.value.description,
        entreprise: this.stageForm.value.entreprise,
        disponible: true,
        nbrInteresse: 0
      };
      this.stageService.addStage(stage).subscribe(() => {
        this.router.navigate(['/stages']);
      });
    }
  }
}
