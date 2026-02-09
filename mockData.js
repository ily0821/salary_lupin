// Mock Data for Millie's AI Search Service (Enhanced Version)

// Case B: RAG 분석 단계별 로딩 메시지
export const RAG_LOADING_STAGES = [
  { stage: 'emotion', message: '사용자의 감정을 분석하고 있어요...', duration: 1000 },
  { stage: 'intent', message: '에세이 서가를 탐색하는 중...', duration: 1000 },
  { stage: 'matching', message: '최적의 구절을 매칭하고 있어요...', duration: 1200 }
];

// Case C: Failover 단계별 로딩 메시지
export const FAILOVER_LOADING_STAGES = [
  { stage: 'internal', message: '밀리 서재 내부 데이터베이스 검색 중...', duration: 3000 },
  { stage: 'transition', message: '앗! 밀리 서재에는 없네요. 외부 도서관을 찾아볼게요!', duration: 3000 },
  { stage: 'external', message: '전세계 도서 데이터베이스를 탐색하는 중...', duration: 2000 }
];

export const LOADING_MESSAGES = [
  "작은 AI 요정들이 도서관을 헤집는 중...",
  "질문의 행간을 읽고 있어요...",
  "당신을 위한 완벽한 책을 찾고 있어요...",
  "수천 권의 책을 빠르게 훑어보는 중...",
  "문학의 숲을 탐험하고 있어요...",
  "작가들의 지혜를 모으고 있어요..."
];

// Case A: BM25 검색 결과 (키워드 기반)
export const SEARCH_RESULTS = {
  "트렌드 코리아": [
    {
      id: 1,
      title: "트렌드 코리아 2025",
      author: "김난도 외",
      coverColor: "#FFD700",
      summary: "2025년 대한민국 트렌드를 예측하는 필독서",
      year: 2024
    },
    {
      id: 2,
      title: "트렌드 코리아 2024",
      author: "김난도 외",
      coverColor: "#FF6B6B",
      summary: "밀레니얼과 Z세대의 소비 트렌드 분석",
      year: 2023
    },
    {
      id: 3,
      title: "90년생이 온다",
      author: "임홍택",
      coverColor: "#4ECDC4",
      summary: "90년대생의 사고방식과 라이프스타일",
      year: 2018
    },
    {
      id: 4,
      title: "요즘 어른들의 사회",
      author: "김선우",
      coverColor: "#95E1D3",
      summary: "현대 사회의 트렌드와 문화 현상 분석",
      year: 2023
    }
  ],
  "자기계발": [
    {
      id: 5,
      title: "아주 작은 습관의 힘",
      author: "제임스 클리어",
      coverColor: "#A8E6CF",
      summary: "1%의 변화가 만드는 극적인 성장",
      year: 2019
    },
    {
      id: 6,
      title: "데일 카네기 인간관계론",
      author: "데일 카네기",
      coverColor: "#FFD3B6",
      summary: "사람의 마음을 얻는 30가지 방법",
      year: 1936
    },
    {
      id: 7,
      title: "습관의 재발견",
      author: "찰스 두히그",
      coverColor: "#FFAAA5",
      summary: "습관이 어떻게 형성되고 변화하는지",
      year: 2012
    }
  ]
};

// Case B: RAG 추천 결과 (감정/의도 기반) - 풍성한 답변
export const RAG_RECOMMENDATIONS = {
  "우울": {
    intent: "감정 치유",
    analysis: "우울한 감정을 느끼고 계시는군요. 혼자가 아니라는 걸 알려드리고 싶어요. 지금부터 추천해드릴 세 권의 책은 각각 다른 방식으로 당신의 마음을 어루만져줄 거예요. 첫 번째 '미드나잇 라이브러리'는 절망의 순간에서도 삶의 가능성을 발견하게 해주는 판타지 소설이에요. 두 번째 '달러구트 꿈 백화점'은 일상의 피로를 잊게 하는 따뜻한 이야기로, 마치 꿈속을 여행하듯 당신을 안전한 공간으로 데려갈 거예요. 마지막으로 '언어의 온도'는 짧은 문장들이 주는 위로의 힘을 보여줘요. 각 문장이 당신의 마음에 작은 빛이 되어줄 거라 확신해요.",
    books: [
      {
        id: 10,
        title: "미드나잇 라이브러리",
        author: "매트 헤이그",
        coverColor: "#6C5CE7",
        summary: "삶의 여러 가능성을 보여주는 판타지 소설. 후회와 선택에 대한 깊은 통찰",
        reason: "절망의 순간에서 희망을 발견하는 이야기. 다른 선택을 했다면 어땠을까 하는 질문에 대한 따뜻한 답변을 제시합니다.",
        detailedDescription: "주인공 노라는 삶을 포기하려는 순간, 무한한 책들이 있는 미드나잇 라이브러리에 도착합니다. 각 책은 그녀가 다른 선택을 했을 때의 삶을 보여주죠. 록스타가 된 삶, 빙하학자가 된 삶, 사랑했던 사람과 결혼한 삶... 하지만 그 어떤 삶도 완벽하지 않았어요. 결국 노라는 깨닫습니다. 가장 중요한 것은 '완벽한 삶'이 아니라, '살아있다는 것 자체'라는 사실을요."
      },
      {
        id: 11,
        title: "달러구트 꿈 백화점",
        author: "이미예",
        coverColor: "#FD79A8",
        summary: "꿈을 사고파는 신비한 백화점의 이야기",
        reason: "일상의 피로를 잊게 하는 따뜻한 판타지. 현실에서 잠시 벗어나 안전한 공간에서 휴식을 취할 수 있게 해줍니다.",
        detailedDescription: "잠들어야만 입장할 수 있는 신비로운 백화점, 달러구트. 이곳에서는 온갖 종류의 꿈을 판매합니다. 단골 고객들은 자신이 원하는 꿈을 골라 잠들고, 꿈 제작자들은 최고의 꿈을 만들기 위해 노력하죠. 신입 직원 페니의 시선으로 펼쳐지는 이 이야기는, 우리가 잊고 살았던 '꿈꾸는 것의 소중함'을 다시 일깨워줍니다."
      },
      {
        id: 12,
        title: "언어의 온도",
        author: "이기주",
        coverColor: "#FDCB6E",
        summary: "말과 글이 전하는 따뜻한 위로",
        reason: "마음을 어루만지는 문장들의 힘. 짧지만 강렬한 울림을 주는 글들이 당신의 감정을 대변해줄 거예요.",
        detailedDescription: "우리가 일상에서 무심코 지나치는 단어와 문장들. 하지만 그 속에는 놀라운 온기가 숨어있습니다. 저자는 '격려', '위로', '공감' 같은 단어들이 어떻게 사람의 마음을 움직이는지, 실제 경험과 이야기를 통해 들려줍니다. 한 문장 한 문장이 작은 선물처럼 다가와, 읽고 나면 세상이 조금 더 따뜻해 보일 거예요."
      }
    ],
    followUpQuestions: [
      "더 위로가 되는 책 추천해줘",
      "이 작가의 다른 책은?",
      "감동적인 소설 알려줘"
    ]
  },
  "힐링": {
    intent: "심리적 안정",
    analysis: "휴식과 치유가 필요한 시간이네요. 때로는 멈추고, 숨 쉬고, 나 자신을 돌아보는 것이 가장 중요합니다. 제가 추천하는 세 권의 책은 당신에게 그런 여유를 선물할 거예요. '나는 나로 살기로 했다'는 타인의 시선에서 벗어나 자신의 삶을 되찾는 이야기를, '보노보노처럼 살다니 다행이야'는 작은 것에서 행복을 찾는 지혜를, '죽고 싶지만 떡볶이는 먹고 싶어'는 힘든 감정과 함께 살아가는 용기를 보여줍니다. 이 책들은 당신이 스스로에게 더 친절해질 수 있도록 도와줄 거예요.",
    books: [
      {
        id: 13,
        title: "나는 나로 살기로 했다",
        author: "김수현",
        coverColor: "#74B9FF",
        summary: "타인의 시선에서 벗어나 나답게 사는 법",
        reason: "자존감 회복에 도움이 되는 에세이. 다른 사람의 기대가 아닌, 내가 원하는 삶을 살아도 괜찮다는 용기를 줍니다.",
        detailedDescription: "심리상담사인 저자가 실제 상담 사례와 자신의 경험을 바탕으로 쓴 에세이입니다. '착한 사람 콤플렉스', '타인의 평가에 대한 두려움', '완벽주의' 등 우리를 힘들게 하는 심리적 굴레들을 하나씩 풀어냅니다. 가장 중요한 메시지는 명확해요. '나답게 사는 것이 이기적인 게 아니다. 그것이야말로 진정한 행복의 시작이다.'"
      },
      {
        id: 14,
        title: "보노보노처럼 살다니 다행이야",
        author: "김신회",
        coverColor: "#A29BFE",
        summary: "보노보노의 철학으로 배우는 삶의 지혜",
        reason: "일상 속 작은 행복을 발견하게 해줘요. 복잡한 세상에서 단순함의 아름다움을 일깨워줍니다.",
        detailedDescription: "해달 보노보노는 매일 바다를 바라보고, 친구들과 놀고, 조개를 줍습니다. 대단한 일을 하지 않아도, 특별한 성취가 없어도, 보노보노는 행복해요. 이 책은 만화 '보노보노'의 명장면들을 통해 '느리게 살기', '비교하지 않기', '지금 이 순간에 집중하기'의 가치를 전합니다. 바쁜 일상에 지친 당신에게 꼭 필요한 책이에요."
      },
      {
        id: 15,
        title: "죽고 싶지만 떡볶이는 먹고 싶어",
        author: "백세희",
        coverColor: "#FF7675",
        summary: "우울증과 함께 살아가는 법",
        reason: "공감과 위로가 가득한 심리 에세이. 힘든 감정을 부정하지 않고, 그것과 함께 살아가는 방법을 알려줍니다.",
        detailedDescription: "정신과 전문의와 우울증 환자의 12주간의 상담 기록입니다. '죽고 싶을 만큼 힘들지만, 그래도 떡볶이는 먹고 싶다'는 문장처럼, 이 책은 절망과 희망이 공존하는 인간의 복잡한 마음을 있는 그대로 보여줍니다. 완벽하게 회복되지 않아도 괜찮다는 것, 작은 기쁨들을 찾으며 하루하루 살아가는 것이 얼마나 용감한 일인지를 깨닫게 해줘요."
      }
    ],
    followUpQuestions: [
      "명상에 도움되는 책은?",
      "자연에 관한 에세이 추천해줘",
      "마음이 편안해지는 시집 찾아줘"
    ]
  }
};

// Case C: Failover 대체 큐레이션 (상세 설명 추가)
export const FAILOVER_RESPONSES = {
  // 한강 작가 검색 시: 노벨상 수상 작가 연결 큐레이션
  "han_kang": {
    message: "한강 작가님의 책은 아쉽게도 밀리의 서재에 없어요. 하지만 노벨문학상 수상 작가를 찾으셨으니, 같은 영광을 안은 또 다른 거장을 소개해드릴게요. 헝가리의 라슬로 크라스나호르카이 작가는 한강 작가님과 함께 노벨문학상 후보로 여러 차례 거론된 세계적인 작가예요. 그의 작품들은 인간 존재의 근원적 질문을 던지며, 독특한 문체로 현대 문학의 새로운 지평을 열었습니다.",
    alternative: "노벨문학상 수상 작가 추천",
    books: [
      {
        id: 30,
        title: "사탄 탱고",
        author: "라슬로 크라스나호르카이",
        coverColor: "#2C3E50",
        summary: "헝가리 시골 마을의 몰락과 희망을 그린 대서사시",
        reason: "노벨문학상 수상 작가의 대표작. 한강 작가님의 서정적이면서도 철학적인 문체를 좋아하신다면 강력 추천합니다.",
        detailedDescription: "무너져가는 헝가리의 한 농장 공동체를 배경으로, 사기꾼 이리미아쉬가 돌아오면서 벌어지는 이야기입니다. 크라스나호르카이 특유의 긴 문장과 반복적 리듬은 마치 탱고를 추듯 독자를 몰입시키죠. 사회주의 체제 붕괴 이후의 절망과 희망, 인간의 나약함과 위대함이 교차하는 이 소설은 읽는 내내 강렬한 카타르시스를 선사합니다. 벨라 타르 감독이 7시간짜리 영화로 만든 것으로도 유명해요."
      },
      {
        id: 31,
        title: "저항의 멜랑콜리아",
        author: "라슬로 크라스나호르카이",
        coverColor: "#34495E",
        summary: "문명의 종말과 인간 본성에 대한 묵시록적 우화",
        reason: "철학적 깊이가 있는 문학을 원하신다면 이 책입니다. 세계의 붕괴 속에서도 빛나는 인간성을 탐구합니다.",
        detailedDescription: "한 작은 마을에 거대한 고래 사체가 도착하면서 시작되는 혼란과 폭력의 이야기입니다. 고래는 문명의 붕괴를 상징하고, 사람들은 원초적 야만성을 드러내기 시작하죠. 하지만 그 속에서도 음악가 발라스카는 질서와 아름다움을 지키려 애씁니다. 이 소설은 단순한 디스토피아가 아니라, 예술과 지성이 어떻게 인간을 구원할 수 있는지를 보여주는 철학적 명상입니다."
      },
      {
        id: 32,
        title: "전쟁과 전쟁",
        author: "라슬로 크라스나호르카이",
        coverColor: "#5D6D7E",
        summary: "한 남자의 집념과 광기가 빚어낸 문학적 걸작",
        reason: "인간의 집착과 순수함을 동시에 그린 작품. 문학이 무엇인지, 진정한 예술이 무엇인지 질문을 던집니다.",
        detailedDescription: "작은 도시의 아카이브 담당자 코린은 자신이 발견한 원고가 세계를 구할 것이라 믿습니다. 그는 이 원고를 지키기 위해 뉴욕까지 여행하며, 그의 여정은 점점 더 기이하고 강박적으로 변해가죠. 이 소설은 예술에 대한 순수한 믿음과 현실의 무관심 사이의 간극을 코믹하면서도 비극적으로 그려냅니다. 돈키호테의 현대판이라 불릴 만큼, 이상주의와 현실주의의 충돌을 예리하게 포착한 작품입니다."
      }
    ],
    followUpQuestions: [
      "노벨문학상 수상작 더 추천해줘",
      "동유럽 문학 알려줘",
      "철학적인 소설 찾아줘"
    ]
  },
  // 희귀본/절판 검색 시
  default: {
    message: "이 책은 밀리의 서재에 아직 없어요. 하지만 걱정 마세요! 전세계 도서 데이터베이스를 뒤져서 비슷한 주제와 감성의 책들을 찾아왔어요.",
    alternative: "비슷한 주제의 추천 도서",
    books: [
      {
        id: 20,
        title: "이처럼 사소한 것들",
        author: "클레어 키건",
        coverColor: "#DFE6E9",
        summary: "소박하지만 깊은 울림을 주는 단편집",
        reason: "희귀본 대신 추천하는 문학 작품. 짧지만 강렬한 감동을 주는 이야기들로 가득합니다.",
        detailedDescription: "아일랜드의 작은 마을을 배경으로 한 단편 소설들입니다. 평범한 사람들의 일상 속에 숨겨진 비밀, 말하지 못한 감정들이 섬세하게 그려져 있어요. 특히 표제작 '이처럼 사소한 것들'은 한 소녀가 여름 방학 동안 친척 집에 머물며 겪는 작은 변화를 담고 있는데, 읽고 나면 가슴이 먹먹해집니다. 많은 말을 하지 않아도 깊은 울림을 주는, 진짜 문학의 힘을 느낄 수 있는 책이에요."
      },
      {
        id: 21,
        title: "불편한 편의점",
        author: "김호연",
        coverColor: "#FAB1A0",
        summary: "편의점에서 펼쳐지는 따뜻한 인간 드라마",
        reason: "한국 독자들이 사랑한 베스트셀러. 사회 소외 계층의 이야기를 따뜻하게 담아냈습니다.",
        detailedDescription: "서울 변두리 편의점에서 일하게 된 독거노인과 청년의 이야기입니다. 사회에서 밀려난 두 사람이 편의점이라는 작은 공간에서 만나 서로의 상처를 어루만지며 성장해가는 과정이 감동적이에요. '불편한 편의점'이라는 제목처럼, 이 사회의 불편한 진실들을 직시하면서도, 그 안에서 피어나는 희망과 연대의 메시지를 전합니다. 웃음과 눈물을 동시에 안겨주는 책이에요."
      },
      {
        id: 22,
        title: "작별하지 않는다",
        author: "한강",
        coverColor: "#74B9FF",
        summary: "생과 죽음, 이별에 대한 서정적 산문",
        reason: "문학적 깊이가 있는 대체 추천. 노벨문학상 수상 작가의 철학적 성찰이 담긴 에세이입니다.",
        detailedDescription: "소설가 한강이 먼저 떠난 이들을 떠올리며 쓴 산문집입니다. 죽음이라는 절대적 이별 앞에서도, 우리는 정말로 '작별'할 수 있을까요? 저자는 사라진 이들이 여전히 우리 안에 살아있다고, 그래서 진정한 작별은 없다고 말합니다. 시적인 문장들로 가득한 이 책은, 상실의 아픔을 겪고 있는 모든 이들에게 깊은 위로를 전해요. 한 문장 한 문장이 마음에 오래 남는, 아름다운 책입니다."
      }
    ],
    followUpQuestions: [
      "최근 화제의 책 보여줘",
      "밀리 베스트셀러는?",
      "문학상 수상작 추천해줘"
    ]
  }
};

// 검색어 패턴 매칭
export function detectSearchType(query) {
  const lowerQuery = query.toLowerCase();

  // Case B: 추천형 패턴
  if (
    lowerQuery.includes('추천') ||
    lowerQuery.includes('우울') ||
    lowerQuery.includes('힐링') ||
    lowerQuery.includes('위로') ||
    lowerQuery.includes('성장') ||
    lowerQuery.includes('읽기 좋은') ||
    lowerQuery.includes('어때') ||
    lowerQuery.includes('알려줘')
  ) {
    return 'RAG';
  }

  // Case C: Failover 패턴 (한강 작가 or 희귀본, 없는 책)
  if (
    lowerQuery.includes('한강') ||
    lowerQuery.includes('희귀') ||
    lowerQuery.includes('절판') ||
    lowerQuery.includes('고서') ||
    lowerQuery.includes('찾기 힘든')
  ) {
    return 'FAILOVER';
  }

  // Case A: 기본 검색
  return 'BM25';
}

// Failover 검색어 타입 감지
export function getFailoverType(query) {
  const lowerQuery = query.toLowerCase();
  if (lowerQuery.includes('한강')) return 'han_kang';
  return 'default';
}

// 검색어에서 감정 키워드 추출
export function extractEmotion(query) {
  if (query.includes('우울') || query.includes('슬픔') || query.includes('외로')) return '우울';
  if (query.includes('힐링') || query.includes('위로') || query.includes('평화')) return '힐링';
  if (query.includes('성장') || query.includes('발전') || query.includes('동기부여')) return '성장';
  return '우울'; // default
}

// 검색어에서 키워드 추출
export function extractKeyword(query) {
  if (query.includes('트렌드')) return '트렌드 코리아';
  if (query.includes('자기계발') || query.includes('습관')) return '자기계발';
  return 'default';
}
