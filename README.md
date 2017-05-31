## 카르마 - 자스민


### 필요한 npm 리스트

- 코어
    - `karma`: 테스트를 실행만 해주는 도구
    - `jasmine-core`: assertion, spy 등 테스트 라이브러리가 있는 자스민 코어
- 카르마 플러그인
    - `karma-jasmine`: 자스민과 카르마를 연결시켜주는 도구
    - `karma-chrome-launcher`: 카르마가 크롬을 실행할 수 있도록 해주는 도구
    - `karma-webpack`: 테스트 코드를 ES6로 개발했을 때 바벨 트랜스파일을 도와주는 도구
    - `karma-sourcemap-loader`: ES5로 트랜스파일된 테스트 코드를 브라우저 상에서 ES6로 보여주는 도구 
    - `karma-spec-reporter`: 테스트 결과를 콘솔에 출력해주는 도구


### 테스트 실행 결과

- `yarn run test` or `npm run test` 


### 장점

- 브라우저를 직접 실행하지 않고, 명령어 하나면 된다. 
- 개발 코드, 테스트 코드 수정시 자동으로 테스트가 재실행 된다.
- 웹팩, 리포터, 커버리지 측정 등 카르마 플러그인이 많다. 

### 단점

- 설치 해야할 게 많아서 러닝커브가 꽤 크다.
- DOM 기반 테스트를 하려면 별도의 DOM을 생성해줘야 됨
    - SpinboxApp.spec.js의 beforeAll 부분 참고