class SpinboxModel {
    constructor(value = 100) {
        this.data = value;
    }

    increase(value = 1) {
        this.data += value;

        return this.data;
    }

    decrease(value = 1) {
        this.data -= value;

        return this.data;
    }

    getData() {
        return this.data;
    }
}

export default SpinboxModel;
