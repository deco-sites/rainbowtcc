
interface Props {
  /**
  * @description The description of title.
  */
  title?: string;
  /**
  * @description The description of description.
  */
  paragraphs?: string[];
}

export default function Section({ title = "Big Title", paragraphs }: Props) {
  return (
    <div class="flex flex-col py-[60px] pl-[150px] pr-[100px] gap-10">
      <h1 class="text-4xl font-bold">{title}</h1>
      <div class="flex flex-col gap-5">
        {
          paragraphs.map((paragraph) => 
            <p class="text-lg">{paragraph}</p>
          )
        }
      </div>
    </div>
  )
  
  // <div class="flex flex-col">
  //   <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  //   <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script> 
  //   <div class="px-10 py-5">
  //     <h1 class="text-4xl font-bold">{title}</h1>
  //   </div>
  //   <div class="px-10">
  //     <p class="text-lg">{description}</p>
  //   </div>
  //   <p>Here is an inline equation: \( E = mc^2 \)</p>

  //   <p>Here is a block equation:</p>

  //   <script type="text/javascript">
  //       window.MathJax = {
  //           tex: {
  //               inlineMath: [['$', '$'], ['\\(', '\\)']]
  //           },
  //           svg: {
  //               fontCache: 'global'
  //           }
  //       };
  //   </script>

  //   <script type="text/javascript" id="MathJax-script" async
  //       src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
  //   </script>

  //   <script type="math/tex; mode=display">
  //       f(x) = \int_{-\infty}^{\infty} e^{-x^2} \, dx
  //   </script>
  // </div>
}