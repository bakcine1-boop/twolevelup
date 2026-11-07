// 둘이서만 레벨업 - 2판 (기준 시트 기반 전면 재작화, 샷 다양화)
window.SERIES = {
  title: "둘이서만 레벨업",
  tagline: "혼자서는 경험치 0. 그런데 우리 파티엔… 한 명이 더 있다?",
  genres: ["판타지", "헌터물", "남매", "성장", "신앙"],
  synopsis: "평범한 금요일 밤, 잠옷 바람의 남매 앞에 파란 시스템 창이 뜬다. 세상에서 가장 약한 E급 헌터 박시온(중2)과 박샤론(초3). 이 남매의 시스템은 이상하다. 혼자 하면 경험치가 0, 함께 해낸 일만 레벨이 오른다. 그리고 파티원 목록 맨 끝에는, 시스템조차 측정하지 못하는 이름 하나 '???'.",
  characters: [
    {img:"ch_sion.jpg", name:"박시온", tag:"중2 · 수호자", desc:"느리게 자라 온 아이. 지킬 대상이 있을 때만 켜지는 방패."},
    {img:"ch_sharon.jpg", name:"박샤론", tag:"초3 · 빛 술사", desc:"피아노를 사랑하는 장난꾸러기. 흥얼거리면 빛이 난다."},
    {img:"ch_mom.jpg", name:"엄마", tag:"도시계획 박사", desc:"숲이 숨 쉬는 도시를 설계한다. 냉장고 쪽지의 주인."},
    {img:"ch_dad.jpg", name:"아빠", tag:"기독교 방송 PD", desc:"전국의 좋은 소식을 찾아다닌다. 카메라에 이상한 빛이 찍힌다."},
    {img:"ch_grandma_m.jpg", name:"외할머니", tag:"기도의 사람", desc:"신생아실 유리창 앞에서 매일 밤 기도했다."},
    {img:"ch_grandpa.jpg", name:"할아버지", tag:"손주 응원단장", desc:"말수는 적어도 웃음은 누구보다 크다."},
    {img:"ch_grandma.jpg", name:"할머니", tag:"손주 바보", desc:"반찬 보따리와 기도로 손주들을 키운다."},
    {img:"ch_pastor.jpg", name:"큰아빠 박대성 목사", tag:"미국 메릴랜드", desc:"베다니 한인교회 담임목사. 조카들의 든든한 목자."},
    {img:"ch_aunt.jpg", name:"큰엄마 황유정 목사", tag:"미국 교회 목사", desc:"웃음소리가 제일 큰 목사님."},
    {img:"ch_hannah.jpg", name:"사촌누나 박해나", tag:"듀크대 재학", desc:"똑똑하고 다정한 누나. 시스템의 비밀에 관심이 많다."},
    {img:"ch_doyoon.jpg", name:"한도윤", tag:"중2 · 랭킹 1위", desc:"혼자가 편하다는 솔로 헌터. 정말 그럴까?"}
  ],
  credit: "기획 시온·샤론네 · 작화 AI 도구 활용"
};
const N=(who)=>`<span class='n'>${who}</span>`;
window.EPISODES = [
{
  no: 1, title: "파자마 각성", date: "2026.11.07", thumb: "thumb_ep1.jpg",
  panels: [
    { img: "ep1_c02.jpg", title: true },
    { gap: "l" },
    { img: "ep1_c01.jpg", els: [
      ["sys red c", "top:4%;white-space:nowrap", "<b>[긴급]</b> S급 게이트 출현"],
      ["cap", "bottom:6%;left:4%", "그날, 서울 하늘이 찢어졌다."]
    ]},
    { gap: "s" },
    { img: "ep1_c03.jpg", lay: "inset", els: [
      ["sys", "top:7%;left:4%;--fs:15", "<b>[파티원 ???]</b> <span class='g'>동행 중</span>"],
      ["mono", "bottom:7%;right:4%", "괜찮아. 우리 뒤에만 있어."]
    ]},
    { text: "3개월 전", h: 300 },
    { img: "ep1_c04.jpg", els: [["cap", "top:6%;left:4%", "금요일 밤 10시."]] },
    { gap: "l" },
    { img: "ep1_n03.jpg", els: [["cap", "top:5%;left:4%;max-width:70%", "박시온. 태어날 때부터 몸이 약했다."]] },
    { img: "ep1_n03b.jpg", lay: "right", els: [["cap", "bottom:6%;left:5%;max-width:84%", "외할머니는 매일 밤, 그 유리창 앞에서 기도했다."]] },
    { gap: "s" },
    { row: [
      { img: "ep1_n04.jpg", els: [["mono", "bottom:6%;left:5%", "걷는 것도,"]] },
      { img: "ep1_n05.jpg", els: [["mono", "bottom:6%;right:5%", "뛰는 것도,"]] }
    ]},
    { strip: 150, els: [["mono c", "top:12%;width:88%;text-align:center", "친구를 사귀는 것도.<br>나는 늘 남들보다 느렸다."]] },
    { gap: "" },
    { img: "ep1_c05.jpg", els: [["cap", "top:5%;left:3%;max-width:56%", "박시온, 중2.<br>각성 검사 결과: <span class='hl'>해당 없음</span>"]] },
    { gap: "s" },
    { row: [
      { img: "ep1_c06.jpg", els: [["mono", "bottom:6%;left:5%", "게임에선 만렙."]] },
      { img: "ep1_c07.jpg", els: [["mono", "bottom:6%;right:5%", "현실은…<br>레벨 없음."]] }
    ]},
    { gap: "l" },
    { img: "ep1_n07.jpg", els: [["cap", "top:5%;left:3%;max-width:60%", "박샤론, 초3.<br>피아노가 세상에서 제일 좋다."]] },
    { gap: "s" },
    { img: "ep1_c08.jpg", els: [
      ["cap", "top:4%;left:3%;max-width:50%", "그리고 교회학교 암송왕."],
      ["b td tl", "bottom:30%;right:3%;max-width:40%", N('샤론')+"두려워하지 말라… 내가 너와… 함께… 뭐였더라?"]
    ]},
    { img: "ep1_c09.jpg", lay: "right", els: [["cap", "top:6%;left:5%", "(목표: 사탕 두 개)"]] },
    { gap: "l" },
    { img: "ep1_n08.jpg", els: [["cap", "top:5%;left:3%;max-width:62%", "엄마는 숲이 숨 쉬는 도시를 설계하는 박사님."]] },
    { gap: "s" },
    { img: "ep1_n09.jpg", els: [
      ["cap", "top:5%;left:3%;max-width:62%", "아빠는 전국의 좋은 소식을 찾아다니는 방송 PD."],
      ["b tu tr", "bottom:6%;right:3%;max-width:46%", N('아빠 (문자)')+"오늘도 늦어 🙏 굿뉴스 편집 중!"]
    ]},
    { gap: "l" },
    { img: "ep1_c10.jpg", els: [["sfx", "top:8%;right:30%;--fs:30", "냠."]] },
    { gap: "s" },
    { row: [
      { img: "ep1_c11.jpg", els: [["b tu tl", "bottom:5%;left:5%;max-width:80%", N('샤론')+"오빠, 그거 내 푸딩이야."]] },
      { img: "ep1_c12.jpg", els: [["b tu tr", "bottom:5%;right:5%;max-width:80%", N('시온')+"이름 안 써 있는데?"]] }
    ]},
    { gap: "s" },
    { img: "ep1_c13.jpg", els: [["b td tl", "top:5%;left:3%;max-width:40%", N('샤론')+"내가 마음속으로 썼어!"]] },
    { gap: "" },
    { img: "ep1_c14.jpg", lay: "left", els: [
      ["note", "top:27%;left:14.5%;width:32%;--fs:23", "두려워하지 말라<br>내가 너와<br>함께 함이라<br><span style='font-size:.73em'>(사 41:10) 사랑해, 엄마</span>"]
    ]},
    { strip: 130, els: [["cap c", "top:18%;width:88%;text-align:center", "시온이가 아팠던 밤마다<br>엄마가 붙여 둔 말씀."]] },
    { gap: "l" },
    { img: "ep1_c15.jpg", els: [["sfx", "top:10%;right:5%", "지지직…"]] },
    { img: "ep1_c16.jpg", lay: "inset" },
    { gap: "s" },
    { img: "ep1_c17.jpg", els: [
      ["b td tr", "top:40%;left:1%;max-width:30%", N('샤론')+"…오빠, 이거 게임이야?"],
      ["sys c", "bottom:5%;white-space:nowrap", "<b>[시스템]</b> 남매 연계 퀘스트가 도착했습니다."]
    ]},
    { gap: "l" },
    { img: "ep1_c18.jpg", els: [["sys red c", "bottom:5%;white-space:nowrap", "<b>[경고]</b> E급 게이트가 열렸습니다."]] },
    { gap: "" },
    { img: "ep1_c19.jpg", els: [["sfx", "top:8%;left:5%;--fs:36", "스르르륵…"]] },
    { gap: "s" },
    { row: [
      { img: "ep1_c20.jpg", els: [["b tu tl", "top:5%;left:5%;max-width:84%", N('샤론')+"저거… 소파 밑에 있던 거 아니야?"]] },
      { img: "ep1_c21.jpg", els: [["b tu tr", "bottom:5%;right:5%;max-width:80%", N('시온')+"…청소 좀 할걸."]] }
    ]},
    { gap: "l" },
    { img: "ep1_c22.jpg", els: [["mono", "top:5%;left:4%", "몸이 먼저 움직였다."]] },
    { img: "ep1_c23.jpg", lay: "inset", els: [["mono", "bottom:6%;right:4%", "늘 지켜지기만 했던 내가."]] },
    { gap: "s" },
    { img: "ep1_c24.jpg", els: [
      ["sh", "top:4%;left:3%;max-width:46%", "예수님<br>도와주세요!!"],
      ["cap", "bottom:5%;right:3%;max-width:58%", "교회학교에서 배워서, 무서울 때마다 습관처럼 하던 말."]
    ]},
    { beat: "", size: "xl" },
    { img: "ep1_c25.jpg", els: [["sys err c", "bottom:4%;width:86%;text-align:center", "<b>[오류]</b> 측정할 수 없는 힘이 감지되었습니다."]] },
    { gap: "" },
    { img: "ep1_c26.jpg", els: [
      ["verse c", "top:9%;width:80%", "두려워하지 말라<br>내가 너와 함께 함이라"],
      ["b tu tr", "bottom:5%;right:3%;max-width:34%", N('시온')+"이 말… 어디서 봤는데?"]
    ]},
    { gap: "s" },
    { row: [
      { img: "ep1_c27.jpg", els: [["b tu tr", "bottom:5%;right:5%;max-width:84%", N('샤론')+"어? 이거 내가 외우던 거잖아!"]] },
      { img: "ep1_c14.jpg", els: [["note", "top:28%;left:14.5%;width:33%;--fs:16", "두려워하지 말라<br>내가 너와<br>함께 함이라"]] }
    ]},
    { gap: "s" },
    { img: "ep1_c28.jpg" },
    { gap: "l" },
    { row: [
      { img: "ep1_c29.jpg", els: [["sys", "bottom:6%;left:5%", "<b>[수호자]</b> 각성"]] },
      { img: "ep1_c30.jpg", els: [["sys", "bottom:6%;right:5%", "<b>[빛 술사]</b> 각성"]] }
    ]},
    { gap: "s" },
    { img: "ep1_c31.jpg", els: [["sfx", "top:18%;left:5%;--fs:60", "콰앙!!"]] },
    { img: "ep1_c32.jpg" },
    { beat: "" },
    { img: "ep1_c33.jpg", els: [["sys c", "top:3%;width:88%;text-align:center", "<b>[퀘스트 완료]</b> 경험치 +100<br><span class='sm sub'>단, 함께한 행동에만 경험치가 지급됩니다.</span>"]] },
    { strip: 150, els: [
      ["b tu tr", "top:13%;right:6%;max-width:60%", N('샤론')+"오빠, 우리 방금 뭐 한 거야?"],
      ["b tu tl", "top:60%;left:6%;max-width:50%", N('시온')+"…버그겠지."]
    ]},
    { img: "ep1_c34.jpg", lay: "left", els: [["b td tl dash", "top:6%;left:6%;max-width:70%", N('엄마 (안방)')+"너희 아직 안 자?"]] },
    { gap: "s" },
    { img: "ep1_c35.jpg", els: [["sh", "bottom:6%;right:3%;--fs:36", "자요!!"]] },
    { gap: "" },
    { img: "ep1_n15.jpg", els: [
      ["sfx", "top:6%;left:5%;--fs:30", "삑 삑 삑 삑"],
      ["b tu tr", "bottom:6%;right:3%;max-width:44%", N('아빠')+"…우리 집이 왜 이렇게 깨끗해?"]
    ]},
    { img: "ep1_n16.jpg", els: [["wh", "top:5%;left:3%;max-width:40%", "(오빠… 아빠 폰에 뭐가 찍혔어.)"]] },
    { gap: "l" },
    { img: "ep1_c36.jpg", els: [["sys c", "bottom:6%;width:70%;line-height:1.7;--fs:19", "<b>[파티원]</b><br>박시온 Lv.1<br>박샤론 Lv.1<br><span class='g'>??? Lv.측정 불가</span>"]] },
    { img: "ep1_c37.jpg", lay: "inset", els: [["cap c", "bottom:5%;white-space:nowrap", "숨겨진 파티원이 확인되었습니다."]] }
  ],
  card: { verse: "두려워하지 말라 내가 너와 함께 함이라<br>놀라지 말라 나는 네 하나님이 됨이라<br>내가 너를 굳세게 하리라<br>참으로 너를 도와 주리라<br>참으로 나의 의로운 오른손으로<br>너를 붙들리라", ref: "이사야 41:10" },
  next: "혼자서는 경험치 0"
},
{
  no: 2, title: "혼자서는 경험치 0", date: "2026.11.07", thumb: "thumb_ep2.jpg",
  panels: [
    { img: "ep2_cover.jpg", title: true },
    { gap: "l" },
    { img: "ep2_e01.jpg", els: [["sfx", "top:8%;left:5%;--fs:40", "띠링♪"]] },
    { img: "ep2_e02.jpg", lay: "inset", els: [["sys c", "top:26%;width:62%;line-height:1.75;--fs:17", "<b>[일일 퀘스트]</b><br>팔굽혀펴기 100회<br>스쿼트 100회<br>달리기 10km"]] },
    { img: "ep2_e03.jpg", lay: "right", els: [["b td tl", "top:5%;left:5%;max-width:62%", N('시온')+"…달리기 10km?"]] },
    { img: "ep1_n05.jpg", lay: "left", els: [["mono", "bottom:6%;right:5%;max-width:80%", "달리기는… 내가 제일 못 하는 거다."]] },
    { gap: "" },
    { img: "ep2_e04.jpg", els: [["cap", "top:5%;left:3%", "그래도 했다. 100개."]] },
    { gap: "s" },
    { row: [
      { img: "ep2_e05.jpg", els: [["sys c", "bottom:6%;white-space:nowrap", "<b>[알림]</b> 경험치 +0"]] },
      { img: "ep2_e06.jpg", els: [["sh", "top:4%;right:4%;--fs:26", "왜 0이야?!"]] }
    ]},
    { strip: 110, els: [["sys c", "top:20%;width:90%;text-align:center;--fs:16", "<b>[안내]</b> 혼자 수행한 퀘스트는 경험치가 지급되지 않습니다."]] },
    { img: "ep2_e07.jpg", els: [["b td tl", "top:3%;left:30%;max-width:36%", N('샤론')+"오빠! 나도 창 떴어!"]] },
    { gap: "s" },
    { img: "ep2_e08.jpg", els: [
      ["sys", "top:3%;right:2%;max-width:44%;--fs:16", "<b>[샤론의 일일 퀘스트]</b><br>오빠 깨우기 → 완료!"],
      ["b tu tl", "top:32%;left:2%;max-width:28%", N('샤론')+"아싸, 경험치!"]
    ]},
    { img: "ep2_e09.jpg", lay: "left", els: [["sys", "bottom:4%;right:4%;max-width:70%;--fs:16", "<b>[알림]</b> 경험치 +0<br>(혼자 했기 때문입니다)"]] },
    { gap: "l" },
    { img: "ep2_e10.jpg", els: [["sys c", "top:3%;white-space:nowrap;--fs:16", "<b>[돌발 퀘스트]</b> 함께 분리수거하기 → 경험치 <span class='g'>+30!</span>"]] },
    { img: "ep2_e11.jpg", els: [["b c tu", "bottom:5%;max-width:60%", N('시온 · 샤론')+"…같이 하면 되는 거야?"]] },
    { gap: "l" },
    { img: "ep2_f04.jpg", els: [
      ["b td tl", "top:3%;left:2%;max-width:40%", N('아빠')+"오늘 굿뉴스는 강원도 작은 교회 촬영!"],
      ["b td tr", "top:3%;right:2%;max-width:34%", N('샤론')+"도레미파솔라시도~"]
    ]},
    { img: "ep2_f05.jpg", lay: "left", els: [["b tu tr", "bottom:6%;right:4%;max-width:76%", N('엄마')+"시온아, 오늘 정기검진 잊지 마."]] },
    { strip: 100, els: [["b tu tl", "top:18%;left:8%", N('시온')+"…응."]] },
    { gap: "l" },
    { img: "ep2_e12.jpg", els: [["news", "bottom:0;left:0;right:0", "<b>속보</b> 중학생 S급 헌터 한도윤, A급 게이트 단독 클리어"]] },
    { img: "ep2_e13.jpg", lay: "inset", els: [["cap", "top:6%;left:4%", "S급 헌터 한도윤. 나와 같은 중2."]] },
    { gap: "s" },
    { img: "ep2_f07.jpg", els: [
      ["cap", "top:4%;left:3%", "4교시, 체육. 오래달리기."],
      ["b td tr", "top:4%;right:3%;max-width:40%", N('반 친구')+"박시온 아직 한 바퀴 남았대 ㅋㅋ"]
    ]},
    { gap: "s" },
    { img: "ep2_e14.jpg", els: [
      ["b td tl", "top:3%;left:2%;max-width:36%", N('반 친구')+"박시온, 넌 각성 검사 '해당 없음'이었지?"],
      ["b td tl", "top:3%;left:40%;max-width:30%", N('반 친구')+"얘는 게임에서만 S급이잖아 ㅋㅋ"]
    ]},
    { img: "ep2_e15.jpg", lay: "right", els: [["mono", "bottom:5%;left:5%;max-width:80%", "…웃자. 늘 하던 대로."]] },
    { gap: "s" },
    { img: "ep2_f08.jpg", els: [
      ["b td tl", "top:4%;left:3%;max-width:30%", N('?')+"…이거 마셔."],
      ["mono", "bottom:5%;right:3%;max-width:44%", "같은 반인데… 이름이 뭐였더라."]
    ]},
    { gap: "l" },
    { img: "ep2_e16.jpg", els: [["mono", "top:5%;left:4%", "혼자서는 0이라고?"]] },
    { img: "ep2_e17.jpg", lay: "inset", els: [["mono", "bottom:6%;right:4%;max-width:60%", "그럼, 혼자서 증명하면 되잖아."]] },
    { gap: "l" },
    { img: "ep2_e18.jpg", els: [
      ["cap", "top:4%;left:3%", "밤 11시."],
      ["mono", "bottom:5%;left:3%;max-width:44%", "넌 자. 괜히 다치면 안 되니까."]
    ]},
    { img: "ep2_e19.jpg", lay: "left", els: [["sfx", "top:10%;right:6%;--fs:30", "딸깍."]] },
    { gap: "l" },
    { img: "ep2_e20.jpg", els: [["sys red c", "top:5%;white-space:nowrap", "<b>[F급 게이트]</b> 놀이터"]] },
    { gap: "s" },
    { img: "ep2_e21.jpg", els: [["b td tr", "top:4%;right:3%;max-width:36%", N('시온')+"…우산이면 되겠지?"]] },
    { img: "ep2_e22.jpg", els: [["sfx", "top:7%;left:5%;--fs:40", "스스스…"]] },
    { gap: "s" },
    { img: "ep2_e23.jpg", els: [
      ["sys", "top:4%;right:3%;--fs:16", "<b>[처치]</b> 그림자 쥐 ×3<br>경험치 +0 +0 +0"],
      ["sh", "bottom:5%;right:3%;--fs:28", "아 쫌!!"]
    ]},
    { img: "ep2_e24.jpg", lay: "right", els: [
      ["b td tl", "top:4%;left:4%;max-width:30%", N('시온')+"뭐…?"],
      ["sys red", "bottom:4%;left:4%;max-width:88%;--fs:15", "<b>[수호자]</b> 지킬 대상이 없습니다.<br>스킬을 사용할 수 없습니다."]
    ]},
    { gap: "" },
    { img: "ep2_e25.jpg", els: [["mono", "bottom:5%;left:4%", "…역시."]] },
    { img: "ep2_e26.jpg", els: [["mono", "bottom:6%;right:4%;max-width:62%", "평생 지켜지기만 했던 내가, 누굴 지키겠다고."]] },
    { beat: "", size: "xl" },
    { img: "ep2_e27.jpg", els: [
      ["wh", "top:6%;left:3%", "…오빠?"],
      ["sys red", "bottom:5%;right:3%", "<b>[파티원 박시온]</b> 위험"]
    ]},
    { img: "ep2_e28.jpg", lay: "left" },
    { gap: "s" },
    { img: "ep2_e29.jpg", els: [["wh", "top:4%;right:4%;max-width:46%", "예수님… 저 무서워요."]] },
    { gap: "" },
    { img: "ep2_e30.jpg", els: [["wh", "top:5%;right:3%;max-width:42%", "그래도… 오빠한테 갈래요.<br>같이 가 주세요."]] },
    { gap: "s" },
    { img: "ep2_e31.jpg", els: [["sh", "top:4%;left:3%;--fs:28", "샤론아, 오지 마!!"]] },
    { img: "ep2_e32.jpg", lay: "inset" },
    { img: "ep2_e33.jpg", els: [
      ["sfx", "top:12%;right:6%;--fs:60", "쾅!!"],
      ["sys c", "bottom:4%;white-space:nowrap", "<b>[수호자]</b> 지킬 대상 확인 — 스킬 발동"]
    ]},
    { img: "ep2_e34.jpg" },
    { gap: "" },
    { img: "ep2_e35.jpg", els: [
      ["wh", "top:4%;right:3%;max-width:36%", "예수님, 도와주세요…"],
      ["mono", "bottom:5%;left:3%;max-width:46%", "샤론이가… 기도하고 있었다."]
    ]},
    { gap: "s" },
    { img: "ep2_e36.jpg", els: [
      ["sys c", "top:4%;white-space:nowrap", "<b>[연계 스킬]</b> 빛의 방패"],
      ["sfx", "bottom:10%;right:5%;--fs:46", "촤아아—"]
    ]},
    { img: "ep2_e37.jpg", els: [
      ["sys err c", "top:3%;width:84%;text-align:center", "<b>[레벨 업!]</b><br>박시온 Lv.1 → 3 · 박샤론 Lv.1 → 3"],
      ["b tu tr", "bottom:5%;right:3%;max-width:30%", N('샤론')+"우와아아!"]
    ]},
    { gap: "l" },
    { img: "ep2_e38.jpg", els: [
      ["sys", "top:4%;right:3%;--fs:14", "<b>[F급 게이트]</b> 소멸까지 00:59"],
      ["b td tr", "top:22%;right:2%;max-width:40%", N('샤론')+"짠! 아까 그 푸딩. 주머니에 넣어 왔지롱."],
      ["b tu tl", "bottom:5%;left:2%;max-width:40%", N('시온')+"…미안. 혼자 하려고 해서."]
    ]},
    { img: "ep2_e39.jpg", lay: "left", els: [["b tu tr", "bottom:5%;right:4%;max-width:70%", N('샤론')+"오빠 혼자 하지 마."]] },
    { gap: "s" },
    { img: "ep2_e40.jpg", els: [["b td tr", "top:3%;right:2%;max-width:44%", N('샤론')+"나도 무서웠는데… 기도하니까 이상하게 덜 무서웠어."]] },
    { img: "ep2_e41.jpg", lay: "right", els: [["b tu tl", "bottom:5%;left:4%;max-width:72%", N('시온')+"넌 그런 거… 진짜 믿어?"]] },
    { gap: "s" },
    { img: "ep2_e42.jpg", els: [
      ["b td tl", "top:4%;left:3%;max-width:32%", N('샤론')+"음… 잘 모르겠어."],
      ["b tu tl", "bottom:5%;left:3%;max-width:46%", N('샤론')+"근데 아까, 누가 같이 있어 주는 것처럼 따뜻했어."]
    ]},
    { img: "ep2_f13.jpg", els: [["b tu tr", "bottom:5%;right:3%;max-width:46%", N('샤론')+"성탄 발표회 곡이야. 오빠가 제일 먼저 들은 거다?"]] },
    { gap: "l" },
    { img: "ep2_e43.jpg", els: [
      ["verse", "top:12%;right:5%;width:56%;--fs:24", "세 겹 줄은<br>쉽게 끊어지지<br>아니하느니라"],
      ["sys", "bottom:5%;right:4%;--fs:15", "<b>[파티원 ???]</b> <span class='g'>동행 중</span>"]
    ]},
    { gap: "l" },
    { img: "ep2_f15.jpg", els: [
      ["cap", "top:4%;left:3%", "새벽 1시."],
      ["b tu tr", "bottom:6%;right:3%;max-width:44%", N('아빠')+"…아빠도 오늘 굿뉴스 하나 찾았다."]
    ]},
    { gap: "l" },
    { img: "ep2_e44.jpg", els: [["sys red", "top:4%;left:4%;--fs:16", "<b>[알림]</b> 측정 불가 개체 발견"]] },
    { img: "ep2_e45.jpg" },
    { gap: "s" },
    { img: "ep2_e46.jpg", els: [
      ["b td tl dark", "top:5%;left:3%;max-width:34%", N('???')+"E급 둘이서…?"],
      ["b tu tl dark", "bottom:6%;left:3%;max-width:26%", N('???')+"재밌네."]
    ]}
  ],
  card: { verse: "혹시 그들이 넘어지면<br>하나가 그 동무를 붙들어 일으키려니와 <span class='rf'>(4:10)</span><br><br>한 사람이면 패하겠거니와<br>두 사람이면 맞설 수 있나니<br>세 겹 줄은 쉽게 끊어지지 아니하느니라", ref: "전도서 4:10, 12" },
  next: "10km",
  teaser: "새벽 5시. 현관에 운동화 네 켤레가 놓여 있었다.<br>\"시온아, 오늘은 아빠도 같이 뛰자.\""
}
];
