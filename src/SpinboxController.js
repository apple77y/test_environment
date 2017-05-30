import SpinboxModel from './SpinboxModel';
import SpinboxView from './SpinboxView';

class SpinboxController {
    constructor() {
        this.oSpinboxView = new SpinboxView();
        this.oSpinboxModel = new SpinboxModel();

        this.oSpinboxView.render(this.oSpinboxModel.getData());
        this.oSpinboxView.elIncrease.addEventListener('click', this.onClickIncrease.bind(this));
        this.oSpinboxView.elDecrease.addEventListener('click', this.onClickDecrease.bind(this));
    }

    onClickIncrease() {
        this.oSpinboxModel.increase();
        this.oSpinboxView.render(this.oSpinboxModel.getData());
    }

    onClickDecrease() {
        this.oSpinboxModel.decrease();
        this.oSpinboxView.render(this.oSpinboxModel.getData());
    }
}

export default SpinboxController;
