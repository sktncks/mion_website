const sections = document.querySelectorAll('.section'); // 모든 섹션 선택
let currentIndex = 0; // 현재 활성화된 섹션의 인덱스

window.addEventListener('wheel', (event) => {
    const delta = event.deltaY; // 스크롤 방향 감지
    const windowHeight = window.innerHeight;

    // 스크롤 다운
    if (delta > 0 && currentIndex < sections.length - 1) {
        currentIndex++; // 다음 섹션으로 이동
    }

    // 스크롤 업
    if (delta < 0 && currentIndex > 0) {
        currentIndex--; // 이전 섹션으로 이동
    }

    // 해당 섹션으로 스크롤
    window.scrollTo({
        top: sections[currentIndex].offsetTop,
        behavior: 'smooth', // 부드러운 스크롤 효과
    });
});
