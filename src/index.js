export default function (Alpine) {
  Alpine.directive("tash", (el, {}, { evaluate, effect }) => {
    const componentExpressions = el
      .getAttribute("x-tash")
      .split(",")
      .map((expression) => expression.trim());
    const templateEl = document.createElement("template");
    const findExpression = (expression) => new RegExp(`{{\\s*${expression}\\s*}}`, "g");

    templateEl.innerHTML = el.innerHTML;

    let componentHtml = `${componentHtml.innerHTML}`;

    effect(() => {
      componentExpressions.forEach((expression) => {
        const evaluatedValue = evaluate(expression);
        const finderRegex = findExpression(expression);

        componentHtml = componentHtml.replace(finderRegex, evaluatedValue);
      });

      el.innerHTML = componentHtml;
      componentHtml = template.innerHTML;
    });
  });
}
