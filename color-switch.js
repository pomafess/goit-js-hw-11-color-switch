const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
  startBtn: document.querySelector('[data-action=start]'),
  stopBtn: document.querySelector('[data-action=stop]'),
}
let timeColor = null;
refs.startBtn.addEventListener('click', () => {
    timeColor = setInterval(() => {
        const randomIndex = randomIntegerFromInterval(0, colors.length)
        document.body.style.backgroundColor = colors[randomIndex]
    }, 1000)
    if (timeColor) {
        refs.startBtn.disabled = true;
    }
});
refs.stopBtn.addEventListener('click', () => {
    clearInterval(timeColor);
    refs.startBtn.disabled = false;
});
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
