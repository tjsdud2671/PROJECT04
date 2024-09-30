# PROJECT 03 (작업중)



+ ### 사이트명 : 애플뮤직
+ ### 사용언어 : HTML5, CSS, JS, jquery








### sticky 속성
nav 일부 영역이 스크롤 시에도 계속 고정되도록 sticky 속성을 사용하였다.
화면을 고정하는 방법에는 Fixed 속성과 Sticky 속성이 있는데 간략한 차이는 아래와 같다.


position: fixed  최상위 브라우저 창을 기준으로 절대 위치를 지정
position: sticky 부모 태그의 크기를 기준으로 절대 위치를 지정


선언한 영역의 위치 값을 고정시켜주는 역할을 하며 top, left와 같은 위치값을 반드시 작성해줘야 sticky 속성을 적용할 수 있다.
또한 sticky 를 적용할 HTML 태그의 부모 태그에 무조건 height이 있어야 하며 상위 부모태그에 height 를 준 만큼만 고정된다.


## 비디오 재생

![bandicam2024-09-3015-12-30-109-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/2b542b08-30de-4290-aec0-633a921ed2a0)<br/>
비디오 중지 버튼을 누르면 비디오가 중지됨과 동시에 아이콘이 재생 버튼으로 변경되게 하였다.
다시 재생 아이콘을 누르면 비디오가 재생이 된다.


## 슬라이드


![bandicam2024-09-3015-48-37-036-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/3b6cf20c-dfdb-4451-9891-67da51f72c79)<br/>
제이쿼리를 사용하여 슬라이드가 열렸다 닫혔다 반복하도록 하였다.
슬라이드 아이콘을 누르면 슬라이드가 펼쳐짐과 동시에 아이콘이 위로 향하게 바뀌고
다시 아이콘을 누르면 아이콘이 아래 방향으로 변경되게 하였다.



## 카드 버튼 회전 효과
![bandicam2024-09-3015-14-50-143-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/2a350706-c5f5-442d-905e-84e62d052552)<br/>
버튼을 누르면 + 모양의 버튼이 45도 회전하여 X표시가 되도록 하였고
다시 버튼을 누르면 원상복구 시키도록 하였다.
회전 애니메이션을 적용하여 부드럽게 회전하도록 했다.
