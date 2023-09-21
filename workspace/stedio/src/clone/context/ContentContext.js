import { createContext } from 'react';

const ContentContext = createContext({
  users: [],
});

const value = {
  users: [
    {
      id: 1,
      nickname: '임금손',
      category: '예술',
      intro: '🧪뜨개 연구원 임금손입니다🧫',
      image: 'limgumson.webp',
    },
    {
      id: 2,
      nickname: '똘망똘망 다람이',
      category: '일러스트',
      intro: '다람이 소굴에 오셨다람!',
      image: 'daram.webp',
    },
    {
      id: 3,
      nickname: '유유당',
      category: '글 · 저널리즘',
      intro: '독자의 공부를 돕는 책을 만듭니다',
      image: 'uyudang.webp',
    },
    {
      id: 4,
      nickname: '김다정',
      category: '일러스트',
      intro: '고양이 그림을 주로 그리는 김다정입니다.',
      image: 'kimdajung.webp',
    },
    {
      id: 5,
      nickname: '취미만화인',
      category: '웹툰 · 만화',
      intro: '취미가 아닌데 취미활동마냥 사는 두 만화가😇   취미만화인은 만화얘기를 한다. 계속...',
      image: 'manhwain.webp',
    },
    {
      id: 6,
      nickname: '들개이빨',
      category: '웹툰 · 만화',
      intro: '글 쓰고 그림을 그립니다.',
      image: 'duelggae.webp',
    },
    {
      id: 7,
      nickname: '쩡찌',
      category: '웹툰 · 만화',
      intro: '작가, 일러스트레이터 쩡찌입니다.',
      image: 'jjeongjji.webp',
    },
    {
      id: 8,
      nickname: '권운',
      category: '웹툰 · 만화',
      intro: '리추얼 라이프 집착 광공, 권운툰 그리는 권운입니다',
      image: 'qwanwoon.webp',
    },
    {
      id: 9,
      nickname: '오배고',
      category: '웹툰 · 만화',
      intro: '만화재활을 시작한 작가의 일기',
      image: 'obaego.webp',
    },
    {
      id: 10,
      nickname: '문지기',
      category: '글 · 저널리즘',
      intro: '문학과지성사와 함께하는 신간시집 읽기 북클럽 \'문지기\'🚪',
      image: 'munhak.webp',
    },
    {
      id: 11,
      nickname: '재수의 창작실',
      category: '글 · 저널리즘',
      intro: '만화가 재수입니다. 이곳은 저의 글과 그림이 모이는 곳입니다.',
      image: 'jaesu.webp',
    },
    {
      id: 12,
      nickname: '심완선',
      category: '글 · 저널리즘',
      intro: 'SF 평론가. 책에 관해 여러 가지 글을 씁니다.',
      image: 'shimwansun.webp',
    },
    {
      id: 13,
      nickname: '서윤후',
      category: '글 · 저널리즘',
      intro: '시와 산문을 쓰며 거닐 수 없는 마음에 보폭을 새깁니다.',
      image: 'seoyunhu.webp',
    },
    {
      id: 14,
      nickname: '담롱',
      category: '영상 제작',
      intro: '서로가 서로의 편이 될 수 있도록,',
      image: 'damlong.webp',
    },
    {
      id: 15,
      nickname: '봅뺏',
      category: '영상 제작',
      intro: '스타워즈 은하계로 떠나는 여행의 길잡이 봅뺏입니다.',
      image: 'bbaet.webp',
    },
    {
      id: 16,
      nickname: '격과서',
      category: '영상 제작',
      intro: '종합격투기 분석 영상 제작 \'격과서\'입니다.',
      image: 'kukqwa.webp',
    },
    {
      id: 17,
      nickname: '아빠사자',
      category: '영상 제작',
      intro: '아빠사자 [쌍둥이 육아로그] 후원 페이지 ',
      image: 'appasaza.webp',
    },
    {
      id: 18,
      nickname: '0000',
      category: '영상 제작',
      intro: '0000',
      image: '0000.webp',
    },
    {
      id: 19,
      nickname: '이랑의 작업실',
      category: '일러스트',
      intro: '식물그림을 그리는 일러스트레이터 김이랑입니다.',
      image: 'elang.webp',
    },
    {
      id: 20,
      nickname: '우이',
      category: '일러스트',
      intro: '일러스트레이터 우이입니다',
      image: 'wooi.webp',
    },
    {
      id: 21,
      nickname: '조맹 (Chommang)',
      category: '일러스트',
      intro: '안녕하세요 조맹입니다 :)',
      image: 'chommang.webp',
    },
    {
      id: 22,
      nickname: 'sehooninseoul',
      category: '음악',
      intro: '당신만 알고 싶은데 친구들도 알면 좋을 것 같은, 음악 트는 청개구리',
      image: 'sehooninseoul.webp',
    },
    {
      id: 23,
      nickname: 'yunzizi 윤지지',
      category: '음악',
      intro: ': 𝐚 𝐩𝐥𝐚𝐲𝐥𝐢𝐬𝐭 𝐜𝐡𝐚𝐧𝐧𝐞𝐥 𝐟𝐨𝐫 𝐚𝐥𝐥',
      image: 'yunzizi.webp',
    },
    {
      id: 24,
      nickname: '버둥',
      category: '음악',
      intro: '나아가는 이야기를 음악에 담는, 뮤지션 버둥 입니다',
      image: 'budung.webp',
    },
    {
      id: 25,
      nickname: '키라라',
      category: '음악',
      intro: '전자음악가 키라라',
      image: 'kirara.webp',
    },
    {
      id: 26,
      nickname: '윤새 (Yunsae)',
      category: '음악',
      intro: '세상에 없던 일렉트로 팝 음악을 만들어요',
      image: 'yunsae.webp',
    },
  ],
};

const ContentProvider = ({ children }) => {
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export { ContentContext, ContentProvider };
