# PROJECT 03 (작업중)
![20240930_144805](https://github.com/user-attachments/assets/5b17dce4-2039-4ccc-b998-a0a3a66702fc)<br/>
https://rawcdn.githack.com/tjsdud2671/PROJECT04/5dd81f399ca4199dcdb2db2b42aa4a57297009b6/index.html


+ ### 사이트명 : 애플뮤직
+ ### 사용언어 : HTML5, CSS, JS, jquery




<br/>
<br/>
<br/>



## sticky 속성

![bandicam2024-09-3015-48-12-428-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/0af7db64-7ea7-4b49-a168-6d48599af46f)<br/><br/>

nav 일부 영역이 스크롤 시에도 계속 고정되도록 sticky 속성을 사용하였다.<br/>
화면을 고정하는 방법에는 Fixed 속성과 Sticky 속성이 있는데 간략한 차이는 아래와 같다.<br/>


position: fixed  최상위 브라우저 창을 기준으로 절대 위치를 지정<br/>
position: sticky 부모 태그의 크기를 기준으로 절대 위치를 지정


선언한 영역의 위치 값을 고정시켜주는 역할을 하며 top, left와 같은 위치값을 반드시 작성해줘야 sticky 속성을 적용할 수 있다.<br/>
또한 sticky 를 적용할 HTML 태그의 부모 태그에 무조건 height이 있어야 하며 상위 부모태그에 height 를 준 만큼만 고정된다.

<br/>
<br/>
<br/>

## 비디오 재생

![bandicam2024-09-3015-12-30-109-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/2b542b08-30de-4290-aec0-633a921ed2a0)<br/><br/>
![video btn](https://github.com/user-attachments/assets/4a05f985-a0e5-4094-bbc9-2bda61875b00)<br/><br/>
비디오 중지 버튼을 누르면 비디오가 중지됨과 동시에 아이콘이 재생 버튼으로 변경되게 하였다.<br/>
다시 재생 아이콘을 누르면 비디오가 재생이 된다.

<br/>
<br/>
<br/>

## 슬라이드



![bandicam2024-09-3015-48-37-036-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/3b6cf20c-dfdb-4451-9891-67da51f72c79)<br/><br/>
![슬라이드](https://github.com/user-attachments/assets/503db158-ac6c-4de2-b8c7-f1daefca252e)<br/>
![슬라이드 btn](https://github.com/user-attachments/assets/e73b2bbe-93d3-4553-b4f6-e5945a073a0f)<br/>
제이쿼리를 사용하여 슬라이드가 열렸다 닫혔다 반복하도록 하였다.<br/>
슬라이드 아이콘을 누르면 슬라이드가 펼쳐짐과 동시에 아이콘이 위로 향하게 바뀌고<br/>
다시 아이콘을 누르면 아이콘이 아래 방향으로 변경되게 하였다.

<br/>
<br/>
<br/>

## 카드 버튼 회전 효과
![bandicam2024-09-3015-14-50-143-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/2a350706-c5f5-442d-905e-84e62d052552)<br/><br/>
![re20241001_025212](https://github.com/user-attachments/assets/eb5c1467-5deb-434a-96ee-83d0c12a279d)<br/>
![20241001_025557](https://github.com/user-attachments/assets/704d006b-c15c-43e6-9891-8b600e753f61)<br/>

버튼을 클릭했을 때 카드의 상태가 변화하는 애니메이션을 구현하였다.<br/>
클릭을 통해 카드의 상태를 변경하고 다시 원상태로 돌릴 수 있도록 구성되었다.<br/>

+ card1 : 카드의 첫 번째 상태를 나타냄
+ card1-overset : 카드가 뒤집힌 상태
+ card-btn : 카드를 변경하는 버튼
+ card-btn-overset : 카드가 뒤집힌 상태에서 카드를 원상태로 돌리는 버튼

#### change()함수
card-btn을 클릭했을 때 호출되는 함수. 카드와 버튼의 상태를 바꾸는 동작을 함<br/>

+ isRotated 변수 : 버튼이 회전했는지를 저장하는 변수이다.

<br/>
<br/>
