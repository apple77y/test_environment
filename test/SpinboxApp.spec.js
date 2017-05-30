import SpinboxController from '../src/SpinboxController';

describe('Spinbox >', () => {
    let input, increaseButton, decreaseButton;

    let oSpinboxController;
    let oSpinboxModel;
    let oSpinboxView;
    let beforeValue;

    const DEFAULT_VALUE = 100;

    beforeAll(() => {
        input = document.createElement("input");
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'result');
        document.body.appendChild(input);

        increaseButton = document.createElement("button");
        increaseButton.setAttribute('class', 'increase');
        document.body.appendChild(increaseButton);

        decreaseButton = document.createElement("button");
        decreaseButton.setAttribute('class', 'decrease');
        document.body.appendChild(decreaseButton);
    });

    beforeEach(() => {
        oSpinboxController = new SpinboxController();
        oSpinboxModel = oSpinboxController.oSpinboxModel;
        oSpinboxView = oSpinboxController.oSpinboxView;
    });

    describe('최초 인스턴스를 생성할 때,', () => {
        it('모델의 기본 값은 100이다.', () => {
            // given
            // when
            // then
            expect(oSpinboxModel.data).toBe(DEFAULT_VALUE);
        });

        it('뷰의 인풋에 기본 값 100이 반영 되어있다.', () => {
            // given
            // when
            // then
            expect(Number(oSpinboxView.elResult.value)).toBe(DEFAULT_VALUE);
        });
    });

    describe('+ 버튼을 누르면,', () => {
        it("모델의 데이터 값이 1 증가한다.", () => {
            // given
            beforeValue = oSpinboxModel.getData();
            // when
            oSpinboxController.onClickIncrease();
            // then
            expect(oSpinboxModel.getData()).toBe(beforeValue + 1);
        });

        it("뷰의 인풋 값이 1 증가한다.", () => {
            // given
            beforeValue = Number(oSpinboxView.elResult.value);
            // when
            oSpinboxController.onClickIncrease();
            // then
            expect(Number(oSpinboxView.elResult.value)).toBe(beforeValue + 1);
        });
    });

    describe('- 버튼을 누르면,', () => {
        it("모델의 데이터 값이 1 감소한다.", () => {
            // given
            beforeValue = oSpinboxModel.getData();
            // when
            oSpinboxController.onClickDecrease();
            // then
            expect(oSpinboxModel.getData()).toBe(beforeValue - 1);
        });

        it("뷰의 인풋 값이 1 감소한다.", () => {
            // given
            beforeValue = Number(oSpinboxView.elResult.value);
            // when
            oSpinboxController.onClickDecrease();
            // then
            expect(Number(oSpinboxView.elResult.value)).toBe(beforeValue - 1);
        });
    });

    afterEach(() => {
        oSpinboxController = undefined;
        oSpinboxModel = undefined;
        oSpinboxView = undefined;
    });

    afterAll(() => {
        input.remove();
        increaseButton.remove();
        decreaseButton.remove();
    });
});
