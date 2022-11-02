const progress = (selector) => {
    const progressSelector = document.querySelectorAll(selector);
    progressSelector.forEach( item => {
        const percent = item.dataset.value;
        const circle = item.querySelector(`${selector}__bar-value`);

        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference - percent / 100 * circumference;;
    })
}

export default progress;