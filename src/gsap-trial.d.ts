declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: string | Element | (string | Element)[], vars?: any);
    split(vars?: any): void;
    revert(): void;
    chars: Element[];
    lines: Element[];
    words: Element[];
    // Add other properties as needed
  }
}