// 둘이서만 레벨업 - v5 시험판 (1화 전면 개정: 세계관·개연성·인물 한계·기도의 의미)
window.SERIES = {
  title: "둘이서만 레벨업",
  tagline: "평생 지켜지기만 했던 아이가, 처음으로 누군가를 지켰다.",
  genres: ["현대 판타지", "가족", "성장", "남매", "신앙"],
  synopsis: "게이트가 화재처럼 열리는 세상. 미숙아로 태어나 오래 걷는 것도 힘든 중2 박시온은 각성 검사에서 '해당 없음'을 받았다. 엄마는 게이트관리청 회의, 아빠는 지방 촬영으로 집을 비운 밤, 외할머니와 동생 샤론만 있는 아파트 거실에 E급 게이트가 열린다. 시온의 방패는 10초밖에 버티지 못한다. 그리고 남매의 파티원 목록 맨 끝에는, 관리청도 측정하지 못한 이름 하나 '???'.",
  characters: [
    {img:"ch_sion.jpg", name:"박시온", tag:"중2 · 수호자", desc:"미숙아로 태어나 하루 3,000보가 숙제인 아이. 방패는 체력만큼만 버틴다."},
    {img:"ch_sharon.jpg", name:"박샤론", tag:"초3 · 소리 술사", desc:"콩쿠르를 앞둔 완벽주의자. 무대에서 손이 굳는다."},
    {img:"ch_mom.jpg", name:"엄마", tag:"도시계획 박사", desc:"게이트관리청 자문위원. 게이트 발생 지도를 연구한다."},
    {img:"ch_dad.jpg", name:"아빠", tag:"기독교 방송 PD", desc:"게이트 피해 마을을 다시 일으키는 교회들을 취재한다."},
    {img:"ch_grandma_m.jpg", name:"외할머니", tag:"기도의 사람", desc:"부모가 늦는 날 남매를 돌본다. 신생아실 앞에서 매일 기도했다."},
    {img:"ch_grandpa.jpg", name:"할아버지", tag:"손주 응원단장", desc:"\"농사는 기다림이다.\" 느린 손주를 가장 먼저 믿어 준 사람."},
    {img:"ch_grandma.jpg", name:"할머니", tag:"손주 바보", desc:"반찬 보따리와 기도로 손주들을 키운다."},
    {img:"ch_pastor.jpg", name:"큰아빠 박대성 목사", tag:"미국 메릴랜드", desc:"베다니 한인교회 담임목사. 답보다 질문을 들어 주는 어른."},
    {img:"ch_aunt.jpg", name:"큰엄마 황유정 목사", tag:"미국 교회 목사", desc:"웃음소리가 제일 큰 목사님."},
    {img:"ch_hannah.jpg", name:"사촌누나 박해나", tag:"듀크대 재학", desc:"미국에 열리기 시작한 게이트를 연구하는 학부 연구원."},
    {img:"ch_doyoon.jpg", name:"한도윤", tag:"중2 · 관리청 S급", desc:"열두 살에 각성한 특별관리 미성년 각성자. 친구가 없다."}
  ],
  credit: "기획 시온·샤론네 · 작화 AI 도구 활용"
};
const N=(who)=>`<span class='n'>${who}</span>`;
window.EPISODES = [
{
  no: 1, title: "보호받던 아이", date: "2026.11.08", thumb: "thumb_ep1.jpg",
  next: "미등록", teaser: "\"미등록 각성자는 7일 안에 등록 심사를 받아야 합니다.\"<br>엄마: \"안 돼.\" 아빠: \"…시온이 생각부터 들어 보자.\"",
  card: { verse: "두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라", ref: "이사야 41:10 (개역개정)" },
  panels: [
    { img: "v00.jpg", title: true },
    { gap: "l" },
    { img: "v01.jpg", els: [["sys c", "bottom:6%;white-space:nowrap", "오늘 걸음 <b>1,240</b> / 3,000"]] },
    { gap: "s" },
    { img: "v02.jpg", els: [["cap", "top:4%;left:4%;max-width:70%", "게이트가 처음 열린 지 7년.<br>세상은 금방 익숙해졌다."], ["mono", "bottom:5%;right:4%", "나만 빼고."]] },
    { img: "v03.jpg", els: [["mono", "top:5%;right:4%;max-width:50%", "한 칸. 숨. 또 한 칸."]] },
    { img: "v04.jpg", lay: "inset" },
    { img: "v05.jpg", els: [["mono", "bottom:6%;right:4%", "…익숙하다."]] },
    { gap: "l" },
    { row: [
      { img: "v06.jpg", els: [["cap", "top:5%;left:5%;max-width:84%", "체육 시간은 늘 견학."]] },
      { img: "v07.jpg", els: [["cap", "bottom:5%;right:5%;max-width:84%", "1년 전 각성 검사 결과:<br><span class='hl'>해당 없음</span>"]] }
    ]},
    { gap: "" },
    { img: "v08.jpg", els: [
      ["b", "top:5%;left:3%;max-width:46%", N('엄마 · 문자')+"관리청 회의 길어져. 외할머니 가셔 ♥"],
      ["b", "bottom:6%;right:3%;max-width:46%", N('아빠 · 문자')+"강원도 촬영 1박. 내일 봐! 🙏"]
    ]},
    { gap: "s" },
    { img: "v09.jpg", els: [["b tu tl", "bottom:5%;left:3%;max-width:44%", N('외할머니')+"우리 강아지 왔네. 육교 또 걸어왔지?"]] },
    { gap: "l" },
    { img: "v10.jpg", els: [["sfx", "top:8%;right:6%;--fs:40", "쾅!"], ["cap", "bottom:5%;left:4%", "같은 마디, 열 번째."]] },
    { img: "v11.jpg", lay: "inset", els: [
      ["b td tl", "top:3%;left:26%;max-width:40%", N('외할머니')+"틀려도 이쁜데."],
      ["b tu tr", "bottom:5%;right:4%;max-width:56%", N('샤론')+"콩쿠르는 안 이뻐."]
    ]},
    { gap: "" },
    { img: "v12.jpg", els: [["sys c", "top:5%;white-space:nowrap;--fs:15", "오늘의 게이트 지수: <b>보통</b>"]] },
    { img: "v13.jpg", els: [["b td tl", "top:4%;left:3%;max-width:44%", N('샤론')+"오빠… 나 여기서 자도 돼?"]] },
    { gap: "l" },
    { img: "v14.jpg" },
    { img: "v16.jpg", lay: "right", els: [["b tu tl", "bottom:5%;left:5%;max-width:84%", N('샤론')+"나 무대에서 손 굳으면 어떡해?"]] },
    { img: "v15.jpg", lay: "left", els: [["b tu tr", "bottom:5%;right:5%;max-width:80%", N('시온')+"나는 무대 근처도 못 가 봤어. 계단이 무서워서."]] },
    { strip: 120, els: [["b c", "top:16%;left:50%;transform:translateX(-50%);white-space:nowrap", N('샤론')+"…오빠는 맨날 괜찮다고만 해."]] },
    { gap: "l" },
    { img: "v17.jpg", els: [["cap", "top:5%;left:4%;max-width:66%", "샤론이 엄마 서랍에서 몰래 꺼내 온 앨범."]] },
    { img: "v18.jpg", els: [
      ["b td tl", "top:4%;left:3%;max-width:42%", N('샤론')+"이거 오빠야? 이렇게 작았어?"],
      ["b tu tr", "bottom:5%;right:3%;max-width:40%", N('시온')+"…기억 안 나."]
    ]},
    { img: "v19.jpg", lay: "inset", els: [["mono", "bottom:6%;left:5%", "뒷면에… 뭐가 쓰여 있었다."]] },
    { img: "v20.jpg" },
    { gap: "l" },
    { img: "v21.jpg", els: [["mono", "bottom:6%;left:4%", "그날 밤, 놀이터 가로등이 깜빡였다."]] },
    { beat: "" },
    { img: "v22.jpg", els: [["sys red c", "bottom:6%;width:86%;text-align:center", "<b>[게이트 경보]</b> 하늘동 일대 E급 게이트 발생.<br>실내에 머물러 주십시오."]] },
    { img: "v23.jpg", els: [["sfx", "top:8%;left:6%;--fs:30", "팟—"], ["mono", "bottom:6%;right:4%", "정전. 그리고 거실 쪽에서…"]] },
    { gap: "s" },
    { img: "v24.jpg", els: [["sfx", "top:10%;right:6%;--fs:44", "쩌저적…"]] },
    { img: "v25.jpg", els: [["cap", "bottom:5%;left:4%;max-width:70%", "닿는 것마다 색이 빠져나갔다."]] },
    { img: "v26.jpg", lay: "inset" },
    { gap: "" },
    { img: "v27.jpg", els: [["b tu tl", "bottom:5%;left:3%;max-width:42%", N('시온')+"쉿. 움직이지 마. 할머니 방까지는 못 가."]] },
    { img: "v28.jpg", lay: "right", els: [["sh", "top:44%;left:3%;--fs:34", "할머니!!"]] },
    { img: "v29.jpg", els: [["sh", "top:5%;right:4%;--fs:28", "샤론아!!"]] },
    { img: "v30.jpg", els: [["sfx", "top:6%;left:6%;--fs:36", "쾅쾅쾅!"], ["cap", "bottom:5%;right:4%;max-width:66%", "보청기를 빼 두고 잠든 외할머니는 듣지 못했다."]] },
    { gap: "s" },
    { img: "v31.jpg", els: [["mono", "bottom:5%;left:4%", "다리가… 안 움직인다."]] },
    { row: [
      { img: "v32.jpg", els: [["b td tl", "top:5%;left:5%;max-width:84%", N('샤론')+"예수님, 도와주세요…"]] },
      { img: "v33.jpg", els: [["b td tr", "top:5%;right:5%;max-width:84%", N('시온')+"제발… 도와주세요."]] }
    ]},
    { gap: "l" },
    { img: "v34.jpg" },
    { beat: "아무 일도 일어나지 않았다.", size: "xl" },
    { img: "v35.jpg", els: [["mono", "bottom:6%;right:4%", "아무도 안 오면—"]] },
    { img: "v36.jpg", els: [["mono", "top:5%;left:4%", "내가 가면 되잖아."], ["cap", "bottom:5%;right:4%", "태어나서 처음, 뛰었다."]] },
    { gap: "s" },
    { img: "v37.jpg", els: [["sfx", "top:6%;right:6%;--fs:50", "콰직!"]] },
    { img: "v38.jpg", els: [["sys", "top:8%;right:3%;max-width:56%;--fs:16", "<b>[수호자]</b> 각성<br><span class='sub'>지킬 대상 확인<br>지속 시간: 10초</span>"]] },
    { img: "v39.jpg", lay: "inset", els: [["sys red", "top:6%;left:5%;--fs:20", "<b>7…</b> 6…"]] },
    { img: "v40.jpg", els: [["mono", "top:5%;left:4%;max-width:60%", "샤론이 콩쿠르 곡을 흥얼거렸다. 떨리는 목소리로."]] },
    { gap: "l" },
    { img: "v41.jpg", els: [["sfx", "top:8%;left:6%;--fs:56", "번쩍—"]] },
    { img: "v42.jpg", els: [["b td tr", "top:5%;right:3%;max-width:40%", N('샤론')+"오빠! 오빠!! 할머니!!!"]] },
    { img: "v43.jpg", lay: "right", els: [["b td tl", "top:5%;left:5%;max-width:80%", N('외할머니')+"아이고, 주여…!"]] },
    { gap: "" },
    { img: "v44.jpg", els: [["cap", "top:5%;left:4%", "새벽 0시 41분. 게이트관리청 출동."]] },
    { img: "v45.jpg", els: [["b td tl", "top:4%;left:3%;max-width:40%", N('엄마')+"시온아… 시온아."]] },
    { img: "v46.jpg", els: [
      ["sys red", "top:5%;left:4%;--fs:16", "<b>미등록 각성 반응</b> 2건"],
      ["b", "bottom:5%;right:3%;max-width:44%", N('관리청 대원')+"…이 집에서 나왔습니다."]
    ]},
    { gap: "l" },
    { text: "새벽 5시, 응급실", h: 220 },
    { img: "v47.jpg", els: [["cap", "top:5%;left:4%;max-width:62%", "샤론은 밤새 그 사진을 놓지 않았다."]] },
    { img: "v48.jpg", els: [["note", "top:30%;left:52%;width:40%;--fs:24", "두려워하지 말라<br>내가 너와 함께 함이라<br><span style='font-size:.7em'>(사 41:10)<br>우리 시온이 태어난 날</span>"]] },
    { img: "v49.jpg", lay: "inset" },
    { gap: "l" },
    { img: "v50.jpg", els: [["sys c", "bottom:6%;white-space:nowrap", "오늘 걸음 <b>3,112</b> / 3,000 ✓"]] },
    { strip: 140, els: [["mono c", "top:14%;width:88%;text-align:center", "처음으로 다 채웠다.<br>거실을 달린 걸음으로."]] },
    { gap: "l" },
    { img: "v51.jpg", els: [["sys c", "top:20%;width:80%;text-align:center", "<b>파티원</b><br>박시온 · 박샤론 · <span style='color:#ffd98a'>??? (측정 불가)</span>"]] }
  ]
}
];
