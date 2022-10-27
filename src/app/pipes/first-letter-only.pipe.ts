import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'firstLetterOnly'
})
export class FirstLetterOnlyPipe implements PipeTransform {
    transform (value: string): string {
        if (!value || value.length === 0) {
            return value;
        }

        if (isNaN(Number.parseInt(value, 10))) {
            return value[ 0 ];
        }

        return value;
    }

}
