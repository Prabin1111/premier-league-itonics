import { FormGroup } from "@angular/forms";

export function isSameClub(formGroup: FormGroup, homeClubKey: string, awayClubKey: string): FormGroup {
        const awayClubValue = formGroup.controls[awayClubKey].value;
        if (awayClubValue) {
            const homeClubValue = formGroup.controls[homeClubKey].value;
            
            if (homeClubValue === awayClubValue) {
                formGroup.controls[awayClubKey]
                    .setErrors({sameClub: true});
            } else {
                formGroup.controls[awayClubKey]
                    .setErrors(null);
            }
        }
        return formGroup;
}