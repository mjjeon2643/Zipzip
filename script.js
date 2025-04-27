
// 버튼 → 지도
document.querySelectorAll('.region-btn').forEach(btn => {
  const regionId = btn.dataset.target;
  const regionPath = document.getElementById(regionId);

  btn.addEventListener('mouseenter', () => regionPath?.classList.add('highlight'));
  btn.addEventListener('mouseleave', () => regionPath?.classList.remove('highlight'));
});

// 지도 → 버튼
document.querySelectorAll('svg .land').forEach(path => {
  const btn = document.querySelector(`.region-btn[data-target="${path.id}"]`);

  path.addEventListener('mouseenter', () => {
    path.classList.add('highlight');
    btn?.classList.add('btn-highlight');
  });

  path.addEventListener('mouseleave', () => {
    path.classList.remove('highlight');
    btn?.classList.remove('btn-highlight');
  });
});
