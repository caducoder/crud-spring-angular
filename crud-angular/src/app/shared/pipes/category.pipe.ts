import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'front-end': return 'monitor';
      case 'back-end': return 'api';
      case 'database': return 'dns';
    }

    return 'code';
  }

}
