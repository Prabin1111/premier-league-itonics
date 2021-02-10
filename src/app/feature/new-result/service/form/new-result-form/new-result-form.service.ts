import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldKeys } from '@sharedEnum/index';

@Injectable({
  providedIn: 'root'
})
export class NewResultFormService {

  private _formGroup!: FormGroup;
  constructor(private _fb: FormBuilder) { }

  buildNewResultForm() {
    this._formGroup = this._fb.group({
      [FieldKeys.gameDayId]: [null],
      [FieldKeys.id]: [null],
      [FieldKeys.homeTeamName]: [ null, Validators.required],
      [FieldKeys.awayTeamName]: [ null, Validators.required],
      [FieldKeys.homeScore]: [ null, [Validators.required, Validators.pattern('^[0-9]\d*$')]],
      [FieldKeys.awayScore]: [ null, [Validators.required, Validators.pattern('^[0-9]\d*$')]],
      [FieldKeys.date]: [ null, Validators.required],
    },
      {
        validator: this.isSameClub(FieldKeys.homeTeamName, FieldKeys.awayTeamName),
      }
    )
  }

  get formGroup() {
   return this._formGroup;
  }

  resetForm(): void {
    this.formGroup.reset();
  }

  isValid(): boolean {
    return this.formGroup.valid; 
  }  

  isSameClub(homeClub: string, awayClub: string): (formGroup: FormGroup) => void | null {
    return (formGroup: FormGroup) => {
        const homeClubControl = formGroup.controls[homeClub];
        const awayClubControl = formGroup.controls[awayClub];
  
        if (!homeClubControl || !awayClubControl) {
          return null;
        }
  
        if (awayClubControl.errors && !awayClubControl.errors.sameClub) {
          return null;
        }
  
        if (homeClubControl.value === awayClubControl.value) {
         return awayClubControl.setErrors({ sameClub: true });
        } else {
          return awayClubControl.setErrors(null);
        }
      }
  }
}
