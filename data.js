// 둘이서만 레벨업 - 회차 데이터
// 요소: [종류, 위치 스타일, 내용]  종류: b(말풍선) sh(외침) cap(내레이션) mono(속마음) sys(시스템창) sfx(효과음) verse(금빛 말씀) note(손글씨) wh(속삭임/기도)
window.SERIES = {
  title: "둘이서만 레벨업",
  tagline: "혼자서는 경험치 0. 그런데 우리 파티엔… 한 명이 더 있다?",
  genres: ["판타지", "헌터물", "남매", "성장", "신앙"],
  synopsis: "평범한 금요일 밤, 잠옷 바람의 남매 앞에 파란 시스템 창이 뜬다. 세상에서 가장 약한 E급 헌터 박시온(중2)과 박샤론(초3). 이 남매의 시스템은 이상하다. 혼자 하면 경험치가 0, 함께 해낸 일만 레벨이 오른다. 그리고 파티원 목록 맨 끝에는, 시스템조차 측정하지 못하는 이름 하나 '???'.",
  credit: "기획 시온·샤론네 · 작화 AI 도구 활용"
};
window.EPISODES = [
{
  no: 1, title: "파자마 각성", date: "2026.11.07", thumb: "thumb_ep1.jpg",
  panels: [
    { img: "ep1_cover.jpg" },
    { gap: "l" },
    { img: "ep1_c1.jpg", els: [
      ["sys red c", "top:4%;white-space:nowrap", "<b>[긴급]</b> S급 게이트 출현"],
      ["cap", "top:62%;left:4%;max-width:55%", "그날, 서울 하늘이 찢어졌다."],
      ["mono", "bottom:4%;right:4%;max-width:60%", "괜찮아. 우리 뒤에만 있어."]
    ]},
    { text: "3개월 전", h: 300 },
    { img: "ep1_p01.jpg", els: [["cap", "top:7%;left:4%", "금요일 밤 10시."]] },
    { gap: "" },
    { img: "ep1_c3.jpg", els: [
      ["cap", "top:5%;left:3%;max-width:56%", "박시온, 중2.<br>각성 검사 결과: <span class='hl'>해당 없음</span>"],
      ["mono", "bottom:5%;right:3%;max-width:46%", "게임에선 만렙.<br>현실은… 레벨 없음."]
    ]},
    { gap: "" },
    { img: "ep1_c4.jpg", els: [
      ["cap", "top:5%;left:3%;max-width:52%", "박샤론, 초3.<br>교회학교 암송왕. <span class='sm'>(목표: 사탕 두 개)</span>"],
      ["b td tr", "bottom:7%;left:3%;max-width:44%", "<span class='n'>샤론</span>두려워하지 말라… 내가 너와… 함께… 뭐였더라?"]
    ]},
    { gap: "" },
    { img: "ep1_p02.jpg", els: [
      ["b td tl", "top:6%;right:3%;max-width:42%", "<span class='n'>샤론</span>오빠, 그거 내 푸딩이야."],
      ["b tu tr", "top:36%;left:2%;max-width:36%", "<span class='n'>시온</span>이름 안 써 있는데?"],
      ["b tu tl", "bottom:5%;right:2%;max-width:40%", "<span class='n'>샤론</span>내가 마음속으로 썼어!"]
    ]},
    { gap: "" },
    { img: "ep1_p03.jpg", els: [
      ["note", "top:27%;left:14.5%;width:32%", "두려워하지 말라<br>내가 너와<br>함께 함이라<br><span style='font-size:.73em'>(사 41:10) 사랑해, 엄마</span>"]
    ]},
    { gap: "" },
    { img: "ep1_p04.jpg", els: [["sfx", "top:13%;right:5%", "지지직…"]] },
    { gap: "" },
    { img: "ep1_p05.jpg", els: [
      ["sys c", "bottom:5%;white-space:nowrap", "<b>[시스템]</b> 남매 연계 퀘스트가 도착했습니다."],
      ["b td tl", "top:47%;right:1.5%;max-width:30%", "<span class='n'>샤론</span>…오빠, 이거 게임이야?"]
    ]},
    { gap: "" },
    { img: "ep1_p06.jpg", els: [["sys red c", "top:19%;white-space:nowrap", "<b>[경고]</b> E급 게이트가 열렸습니다."]] },
    { gap: "" },
    { img: "ep1_p07.jpg", els: [
      ["b td tl", "top:3%;left:34%;max-width:40%", "<span class='n'>샤론</span>저거… 소파 밑에 있던 거 아니야?"],
      ["b tu tl", "bottom:5%;left:2%;max-width:32%", "<span class='n'>시온</span>…청소 좀 할걸."]
    ]},
    { gap: "" },
    { img: "ep1_p08.jpg", els: [["mono", "top:7%;left:5%", "몸이 먼저 움직였다."]] },
    { gap: "" },
    { img: "ep1_p09.jpg", els: [
      ["sh", "top:4%;left:3%;max-width:52%", "예수님<br>도와주세요!!"],
      ["cap", "bottom:5%;left:3%;max-width:60%", "교회학교에서 배워서, 무서울 때마다 습관처럼 하던 말."]
    ]},
    { gap: "" },
    { img: "ep1_p10.jpg", els: [["sys err c", "bottom:4%;width:86%;text-align:center", "<b>[오류]</b> 측정할 수 없는 힘이 감지되었습니다."]] },
    { gap: "" },
    { img: "ep1_p11.jpg", els: [
      ["verse c", "top:9%;width:80%", "두려워하지 말라<br>내가 너와 함께 함이라"],
      ["b td tr", "top:44%;left:3%;max-width:34%", "<span class='n'>시온</span>이 말… 어디서 봤는데?"],
      ["b tu tr", "bottom:4%;right:2%;max-width:36%", "<span class='n'>샤론</span>어? 이거 내가 외우던 거잖아!"]
    ]},
    { gap: "" },
    { img: "ep1_p12.jpg", els: [
      ["sys", "top:5%;right:4%", "<b>[수호자]</b> 각성"],
      ["sys", "bottom:5%;left:4%", "<b>[빛 술사]</b> 각성"]
    ]},
    { gap: "" },
    { img: "ep1_p13.jpg", els: [
      ["sys c", "top:3%;width:88%;text-align:center", "<b>[퀘스트 완료]</b> 경험치 +100<br><span class='sm sub'>단, 함께한 행동에만 경험치가 지급됩니다.</span>"]
    ]},
    { strip: 150, els: [
      ["b tu tr", "top:13%;right:6%;max-width:60%", "<span class='n'>샤론</span>오빠, 우리 방금 뭐 한 거야?"],
      ["b tu tl", "top:60%;left:6%;max-width:50%", "<span class='n'>시온</span>…버그겠지."]
    ]},
    { img: "ep1_p14.jpg", els: [
      ["b td tl dash", "top:3%;left:2%;max-width:34%", "<span class='n'>엄마 (안방)</span>너희 아직 안 자?"],
      ["sh", "bottom:6%;right:3%;--fs:34", "자요!!"]
    ]},
    { gap: "l" },
    { img: "ep1_p15.jpg", els: [
      ["sys c", "top:62%;width:72%;line-height:1.7;--fs:19", "<b>[파티원]</b><br>박시온 Lv.1<br>박샤론 Lv.1<br><span class='g'>??? Lv.측정 불가</span>"],
      ["cap c", "bottom:4%;white-space:nowrap", "숨겨진 파티원이 확인되었습니다."]
    ]}
  ],
  card: { verse: "두려워하지 말라 내가 너와 함께 함이라<br>놀라지 말라 나는 네 하나님이 됨이라<br>내가 너를 굳세게 하리라<br>참으로 너를 도와 주리라<br>참으로 나의 의로운 오른손으로<br>너를 붙들리라", ref: "이사야 41:10" },
  next: "혼자서는 경험치 0"
},
{
  no: 2, title: "혼자서는 경험치 0", date: "2026.11.07", thumb: "thumb_ep2.jpg",
  panels: [
    { img: "ep2_cover.jpg", title: true },
    { gap: "l" },
    { img: "ep2_01.jpg", els: [
      ["sfx", "top:8%;right:6%;--fs:40", "띠링♪"],
      ["sys c", "bottom:6%;width:88%;text-align:center", "<b>[일일 퀘스트]</b> 팔굽혀펴기 100회 · 스쿼트 100회 · 달리기 10km"]
    ]},
    { gap: "" },
    { img: "ep2_02.jpg", els: [["b td tl", "top:5%;left:3%;max-width:40%", "<span class='n'>시온</span>…이거 어디서 많이 본 건데."]] },
    { gap: "" },
    { img: "ep2_03.jpg", els: [
      ["cap", "top:5%;left:3%", "그래도 했다. 100개."],
      ["sys", "bottom:6%;left:4%", "<b>[알림]</b> 경험치 +0"]
    ]},
    { gap: "s" },
    { img: "ep2_04.jpg", els: [
      ["sh", "top:4%;right:3%;--fs:30", "왜 0이야?!"],
      ["sys c", "bottom:4%;width:90%;text-align:center;--fs:16", "<b>[안내]</b> 혼자 수행한 퀘스트는 경험치가 지급되지 않습니다."]
    ]},
    { gap: "" },
    { img: "ep2_05.jpg", els: [["b td tr", "top:3%;left:22%;max-width:36%", "<span class='n'>샤론</span>오빠! 나도 창 떴어!"]] },
    { gap: "s" },
    { img: "ep2_06.jpg", els: [
      ["sys", "top:3%;right:2%;max-width:50%;--fs:17", "<b>[샤론의 일일 퀘스트]</b><br>오빠 깨우기 → 완료!"],
      ["b tu tl", "top:64%;left:2%;max-width:34%;--fs:18", "<span class='n'>샤론</span>아싸, 경험치!"],
      ["sys", "bottom:3%;right:2%;max-width:50%;--fs:16", "<b>[알림]</b> 경험치 +0<br>(혼자 했기 때문입니다)"]
    ]},
    { gap: "" },
    { img: "ep2_07.jpg", els: [
      ["sys c", "top:4%;white-space:nowrap;--fs:16", "<b>[돌발 퀘스트]</b> 함께 분리수거하기 → 경험치 <span class='g'>+30!</span>"],
      ["b c tu", "bottom:5%;max-width:60%", "<span class='n'>시온 · 샤론</span>…같이 하면 되는 거야?"]
    ]},
    { gap: "l" },
    { img: "ep2_08.jpg", els: [
      ["b td tl", "top:44%;left:24%;max-width:34%", "<span class='n'>반 친구</span>와, 미쳤다… 우리랑 동갑이래."],
      ["news", "bottom:0;left:0;right:0", "<b>속보</b> 중학생 S급 헌터 한도윤, A급 게이트 단독 클리어"]
    ]},
    { gap: "" },
    { strip: 150, els: [
      ["b td tl", "top:8%;left:3%;max-width:46%", "<span class='n'>반 친구</span>박시온, 넌 각성 검사 '해당 없음'이었지?"],
      ["b td tr", "top:8%;right:3%;max-width:44%", "<span class='n'>반 친구</span>얘는 게임에서만 S급이잖아 ㅋㅋ"]
    ]},
    { img: "ep2_09.jpg", els: [
      ["mono", "bottom:5%;left:3%", "…웃자. 늘 하던 대로."]
    ]},
    { gap: "" },
    { img: "ep2_10.jpg", els: [
      ["mono", "top:5%;left:4%", "혼자서는 0이라고?"],
      ["mono", "bottom:5%;right:4%;max-width:60%", "그럼, 혼자서 증명하면 되잖아."]
    ]},
    { gap: "l" },
    { img: "ep2_11.jpg", els: [
      ["cap", "top:5%;left:3%", "밤 11시."],
      ["mono", "bottom:6%;left:3%;max-width:46%", "넌 자. 괜히 다치면 안 되니까."]
    ]},
    { gap: "" },
    { img: "ep2_12.jpg", els: [
      ["sys red c", "top:5%;white-space:nowrap", "<b>[F급 게이트]</b> 놀이터"],
      ["b tu tr", "bottom:5%;right:4%;max-width:46%", "<span class='n'>시온</span>…우산이면 되겠지?"]
    ]},
    { gap: "" },
    { img: "ep2_13.jpg", els: [
      ["sys", "top:4%;left:3%;--fs:16", "<b>[처치]</b> 그림자 쥐 ×3<br>경험치 +0 +0 +0"],
      ["sh", "bottom:5%;right:3%;--fs:28", "아 쫌!!"]
    ]},
    { gap: "" },
    { img: "ep2_14.jpg", els: [
      ["sys red", "top:4%;left:3%;max-width:62%;--fs:16", "<b>[수호자]</b> 지킬 대상이 없습니다.<br>스킬을 사용할 수 없습니다."],
      ["b tu tl", "bottom:5%;left:4%;max-width:26%", "<span class='n'>시온</span>뭐…?"]
    ]},
    { gap: "" },
    { img: "ep2_15.jpg", els: [["mono", "bottom:5%;left:4%;max-width:70%", "…역시. 난 혼자선 아무것도 아니구나."]] },
    { gap: "l" },
    { img: "ep2_16.jpg", els: [
      ["sys red", "bottom:6%;right:3%", "<b>[파티원 박시온]</b> 위험"],
      ["wh", "top:6%;left:3%", "…오빠?"]
    ]},
    { gap: "" },
    { img: "ep2_17.jpg", els: [["wh", "top:5%;left:4%;max-width:56%", "예수님… 저 무서워요."]] },
    { gap: "" },
    { img: "ep2_18.jpg", els: [["wh", "top:5%;left:3%;max-width:46%", "그래도… 오빠한테 갈래요.<br>같이 가 주세요."]] },
    { gap: "" },
    { img: "ep2_19.jpg", els: [["sh", "top:4%;left:3%;--fs:30", "샤론아, 오지 마!!"]] },
    { gap: "s" },
    { img: "ep2_20.jpg", els: [
      ["sfx", "top:30%;left:5%;--fs:56", "쾅!!"],
      ["sys c", "bottom:4%;white-space:nowrap", "<b>[수호자]</b> 지킬 대상 확인 — 스킬 발동"]
    ]},
    { gap: "" },
    { img: "ep2_21.jpg", els: [
      ["wh", "top:5%;left:3%;max-width:40%", "예수님, 도와주세요…"],
      ["mono", "bottom:5%;right:3%;max-width:48%", "샤론이가… 기도하고 있었다."]
    ]},
    { gap: "" },
    { img: "ep2_22.jpg", els: [
      ["sys c", "top:4%;white-space:nowrap", "<b>[연계 스킬]</b> 빛의 방패"],
      ["sfx", "bottom:12%;right:5%;--fs:46", "촤아아—"]
    ]},
    { gap: "s" },
    { img: "ep2_23.jpg", els: [
      ["sys err c", "top:4%;width:84%;text-align:center", "<b>[레벨 업!]</b><br>박시온 Lv.1 → 3 · 박샤론 Lv.1 → 3"],
      ["b tu tl", "bottom:5%;left:3%;max-width:32%", "<span class='n'>샤론</span>우와아아!"]
    ]},
    { gap: "l" },
    { img: "ep2_24.jpg", els: [
      ["b td tr", "top:3%;right:2%;max-width:44%", "<span class='n'>샤론</span>짠! 아까 그 푸딩. 주머니에 넣어 왔지롱."],
      ["b tu tl", "bottom:5%;left:2%;max-width:40%", "<span class='n'>시온</span>…미안. 혼자 하려고 해서."]
    ]},
    { gap: "" },
    { img: "ep2_25.jpg", els: [
      ["b td tl", "top:3%;left:2%;max-width:36%", "<span class='n'>샤론</span>오빠 혼자 하지 마."],
      ["b tu tl", "bottom:5%;left:2%;max-width:46%", "<span class='n'>샤론</span>나도 무서웠는데… 기도하니까 이상하게 덜 무서웠어."]
    ]},
    { gap: "" },
    { img: "ep2_26.jpg", els: [["b td tl", "top:4%;left:3%;max-width:46%", "<span class='n'>시온</span>넌 그런 거… 진짜 믿어?"]] },
    { gap: "" },
    { img: "ep2_27.jpg", els: [
      ["b td tl", "top:4%;left:3%;max-width:34%", "<span class='n'>샤론</span>음… 잘 모르겠어."],
      ["b tu tr", "bottom:5%;right:3%;max-width:50%", "<span class='n'>샤론</span>근데 아까, 누가 같이 있어 주는 것처럼 따뜻했어."]
    ]},
    { gap: "l" },
    { img: "ep2_28.jpg", els: [
      ["verse c", "top:8%;width:86%;--fs:24", "세 겹 줄은<br>쉽게 끊어지지 아니하느니라"],
      ["sys", "bottom:6%;right:4%;--fs:15", "<b>[파티원 ???]</b> <span class='g'>동행 중</span>"]
    ]},
    { gap: "l" },
    { img: "ep2_29.jpg", els: [["sys red", "top:5%;left:4%;--fs:16", "<b>[알림]</b> 측정 불가 개체 발견"]] },
    { gap: "s" },
    { img: "ep2_30.jpg", els: [
      ["b td tl dark", "top:5%;left:3%;max-width:36%", "<span class='n'>???</span>E급 둘이서…?"],
      ["b tu tl dark", "bottom:6%;left:3%;max-width:28%", "<span class='n'>???</span>재밌네."]
    ]}
  ],
  card: { verse: "혹시 그들이 넘어지면<br>하나가 그 동무를 붙들어 일으키려니와 <span class='rf'>(4:10)</span><br><br>한 사람이면 패하겠거니와<br>두 사람이면 맞설 수 있나니<br>세 겹 줄은 쉽게 끊어지지 아니하느니라", ref: "전도서 4:10, 12" },
  next: "랭킹 1위"
}
];
