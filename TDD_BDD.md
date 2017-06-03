원론적인 질문부터 시작하자. TDD와 BDD는 어떻게 다른가?

- TDD가 먼저 나왔고, 그 개념을 승계해서 탄생한 게 BDD다.


그렇다면 TDD는 왜 탄생했나?

- 테스트 코드 없이 그냥 개발하던 시절이 있었고 kent beck이라는 사람이 테스트로 검증된 코드로 실제 코드를 작성하자는 의견 아래에 TDD 발전하기 시작했다.


그럼 TDD가 개발 전에 테스트 코드를 먼저 쓰자는 의미인가?

- 꼭 그렇진 않다. 문제를 정의하고 해답을 찾아가는 과정이라는 게 TDD의 기본 취지이기 때문이다.
- 다시 말하면, 내가 뭘 개발 해야되는지를 확실히 알고 개발하자는 게 TDD의 취지이다.
- 테스트 코드는 그 철학을 이행하는 도구일 뿐이다. 오해하지말자.


TDD는 그럼 어떻게 테스트 코드를 짜는 건가?

- 유닛을 위한 테스트 셋을 정의한다.
- 개발 코드로 유닛을 구현한다.
- 마지막으로 유닛에 대한 구현이 테스트를 통과하는지 검증한다.


TDD의 기본 인터페이스는 어떤 형식인가?

``` javascript
suite('TDD Style', function() {
  suiteSetup(function() {
    // excuted before test suite 
  });

  suiteTeardown(function() {
    // excuted after test suite 
  });

  setup(function() {
    // excuted before every test 
  });

  teardown(function() {
    // excuted before every test 
  });

  suite('#example', function() {
    test('this is a test', function() {
      // write test logic
    });
  });
});
```


어쨌든 테스트 코드를 먼저 짜고, 그 다음에 개발 코드를 짜는 건 맞지 않는가?

- 맞다. Red - Green - Refactor 방식으로 진행된다고 보면 된다.
- 하지만 원론적인 문제로 다시 돌아가서, 테스트 코드로 개발을 먼저 시작하자는 게 TDD의 기본 철학은 아니다.


그럼 TDD만 있어도 될 것 같은데 왜 BDD라는 개념이 또 나오게 되었나?

- TDD 개념으로 다른 개발자들에게 코치를 하던 Dan north라는 사람이 있었는데 어느날 TDD에서의 빈틈을 느끼기 시작했다.


어떤 빈틈인가?

- 프로세스의 어디서 부터 시작해야 하는가
- 무엇을 테스트하고 또 무엇을 하지 말아야 하는가
- 한번에 얼마만큼 테스트해야 하는가
- 테스트를 어떻게 명명해야 하는가
- 왜 테스트가 실패 하는 지에 대해 어떻게 이해해야 하는가


TDD의 한계를 느꼈다는 말인 것 같은데, 그럼 그 빈틈을 어떻게 해결하고자 했는가?

- 특정 값이 주어지고 (Given)
- 어떤 이벤트가 발생했을 때 (When)
- 그에 대한 결과를 보장해야한다 (Then)
- 의 형식을 만들어서 테스트 코드를 짜기 시작했다.


그럼 3개의 형식을 쓰는 것만으로도 BDD라고 볼 수 있는 건가?

- Dan north는 애초에 Test라는 단어를 쓰지 않는 게 TDD의 원리를 더 파악하기 쉽다고 생각했다.
- Test라는 단어보다는 Behavior 이라는 표현을 쓰는 게 더 낫다고 판단했다.


기존의 TDD 인터페이스에는 suit - test라는 형식이 있었는데 그럼 바뀐다는 말인가?

``` javascript
describe('BDD style', function() {
  before(function() {
    // excuted before test suite
  });

  after(function() {
    // excuted after test suite
  });

  beforeEach(function() {
    // excuted before every test
  });

  afterEach(function() {
    // excuted after every test
  });
  
  describe('#example', function() {
    it('this is a test.', function() {
      // write test logic
    });
  });
});
```

- 이런 인터페이스를 쓰게 되면서 test라는 단어를 없애고 describe - it - should라는 패턴으로 가게 되었다.


test라는 단어만 없고 결국 TDD 인터페이스랑 비슷한 것 같은데 기분탓인가?

- 그렇다. 둘다 별 차이가 없다. 단지 BDD는 조금 더 기술 언어가 아닌 자연어에 가깝게 테스트 스펙을 기술한다는 것이 포인트다.
- TDD와 BDD가 뭐가 낫고 별로냐는 논쟁은 소모적인 논쟁이다.


결국 TDD와 BDD는 테스트 코드 인터페이스만 다를 거 아닌가?

- 그렇다. 둘 다 Red - Green - Refactor 흐름으로 진행되고,
- given - when - then 패턴으로 테스트 코드가 작성된다고 보면 된다.
