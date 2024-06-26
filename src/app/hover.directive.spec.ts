import { HoverDirective } from './hover.directive';
import { ElementRef } from '@angular/core';

describe('HoverDirective', () => {
  it('should create an instance', () => {
    //const element: ElementRef;
    let mockElementRef: ElementRef;
    mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new HoverDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
