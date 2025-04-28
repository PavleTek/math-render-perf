import { Component } from '@angular/core';
import { MathRenderSvgComponent } from '../../math-render-svg/math-render-svg.component';

declare const MathJax: any;

@Component({
  selector: 'app-medium-svg',
  standalone: true,
  imports: [MathRenderSvgComponent],
  templateUrl: './medium-svg.component.html',
  styleUrl: './medium-svg.component.css',
})
export class MediumSvgComponent {
  // Math Expressions from DLMF
  me1 = `$$\\zeta\\left(2\\right) = \\frac{\\pi^{2}}{6}$$`;
  me2 = `$$\\zeta\\left(4\\right) = \\frac{\\pi^{4}}{90}$$`;
  me3 = `$$\\zeta\\left(6\\right) = \\frac{\\pi^{6}}{945}$$`;
  me4 = `$$\\zeta\\left(2n\\right) = \\frac{(2\\pi)^{2n}}{2(2n)!}\\left|B_{2n}\\right|$$`;
  me5 = `$$\\zeta\\left(-n\\right) = -\\frac{B_{n+1}}{n+1}$$`;
  me6 = `$$\\zeta\\left(-2n\\right) = 0$$`;
  me7 = `$$\\zeta\\left(k+1\\right) = \\frac{1}{k!}\\sum_{n_{1}=1}^{\\infty}\\cdots\\sum_{n_{k}=1}^{\\infty}\\frac{1}{n_{1}\\cdots n_{k}(n_{1}+\\cdots+n_{k})}$$`;
  me8 = `$$\\zeta\\left(2k+1\\right) = \\frac{(-1)^{k+1}(2\\pi)^{2k+1}}{2(2k+1)!}\\int_{0}^{1}B_{2k+1}\\left(t\\right)\\cot\\left(\\pi t\\right)\\,\\mathrm{d}t$$`;
  me9 = `$$\\zeta\\left(2\\right) = \\int_{0}^{1}\\int_{0}^{1}\\frac{1}{1-xy}\\,\\mathrm{d}x\\,\\mathrm{d}y$$`;
  me10 = `$$\\zeta\\left(2\\right) = 3\\sum_{k=1}^{\\infty}\\frac{1}{k^{2}\\frac{(2k)!}{(k!)^{2}}}$$`;
  me11 = `$$\\zeta\\left(3\\right) = \\frac{5}{2}\\sum_{k=1}^{\\infty}\\frac{(-1)^{k-1}}{k^{3}\\frac{(2k)!}{(k!)^{2}}}$$`;
  me12 = `$$\\zeta\\left(4\\right) = \\frac{36}{17}\\sum_{k=1}^{\\infty}\\frac{1}{k^{4}\\frac{(2k)!}{(k!)^{2}}}$$`;
  me13 = `$$\\zeta'\\left(0\\right) = -\\frac{1}{2}\\ln\\left(2\\pi\\right)$$`;
  me14 = `$$\\zeta''\\left(0\\right) = -\\frac{1}{2}(\\ln\\left(2\\pi\\right))^{2} + \\frac{1}{2}{\\gamma}^{2} - \\frac{1}{24}\\pi^{2} + \\gamma_{1}$$`;
  me15 = `$$(-1)^{k}{\\zeta}^{(k)}\\left(-2n\\right) = \\frac{2(-1)^{n}}{(2\\pi)^{2n+1}}\\sum_{m=0}^{k}\\sum_{r=0}^{m}\\frac{k!}{m!(k-m)!}\\frac{m!}{r!(m-r)!} \\Im\\left(c^{k-m}\\right)\\Gamma^{(r)}\\left(2n+1\\right){\\zeta}^{(m-r)}\\left(2n+1\\right)$$`;
  me16 = `$$(-1)^{k}{\\zeta}^{(k)}\\left(1-2n\\right) = \\frac{2(-1)^{n}}{(2\\pi)^{2n}}\\sum_{m=0}^{k}\\sum_{r=0}^{m}\\frac{k!}{m!(k-m)!}\\frac{m!}{r!(m-r)!} \\Re\\left(c^{k-m}\\right)\\Gamma^{(r)}\\left(2n\\right){\\zeta}^{(m-r)}\\left(2n\\right)$$`;
  me17 = `$$\\zeta'\\left(2n\\right) = \\frac{(-1)^{n+1}(2\\pi)^{2n}}{2(2n)!}\\left(2n\\zeta'\\left(1-2n\\right) - (\\psi\\left(2n\\right) - \\ln\\left(2\\pi\\right))B_{2n}\\right)$$`;
  me18 = `$$\\left(n + \\frac{1}{2}\\right)\\zeta\\left(2n\\right) = \\sum_{k=1}^{n-1}\\zeta\\left(2k\\right)\\zeta\\left(2n-2k\\right)$$`;
  me19 = `$$\\left(n + \\frac{3}{4}\\right)\\zeta\\left(4n+2\\right) = \\sum_{k=1}^{n}\\zeta\\left(2k\\right)\\zeta\\left(4n+2-2k\\right)$$`;
  me20 = `$$\\left(n + \\frac{1}{4}\\right)\\zeta\\left(4n\\right) + \\frac{1}{2}(\\zeta\\left(2n\\right))^{2} = \\sum_{k=1}^{n}\\zeta\\left(2k\\right)\\zeta\\left(4n-2k\\right)$$`;
  me21 = `$$\\left(m + n + \\frac{3}{2}\\right)\\zeta\\left(2m+2n+2\\right) = \\left(\\sum_{k=1}^{m} + \\sum_{k=1}^{n}\\right)\\zeta\\left(2k\\right)\\zeta\\left(2m+2n+2-2k\\right)$$`;
  me22 = `$$\\frac{1}{2}(2^{2n} - 1)\\zeta\\left(2n\\right) = \\sum_{k=1}^{n-1}(2^{2n-2k} - 1)\\zeta\\left(2n-2k\\right)\\zeta\\left(2k\\right)$$`;

  ngAfterViewInit(): void {
    this.renderMath();
  }

  renderMath(): void {
    if(MathJax.typesetPromise) MathJax.typesetPromise();
  }
}
