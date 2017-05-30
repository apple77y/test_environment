class SpinboxView {
    constructor() {
        this.elResult = document.querySelector('.result');
        this.elIncrease = document.querySelector('.increase');
        this.elDecrease = document.querySelector('.decrease');
    }

    render(value) {
        this.elResult.value = value;
    }
}

export default SpinboxView;
