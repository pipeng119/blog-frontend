import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'htmlFilter'
})
export class HtmlFilterPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(input: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(input);
  }

}
