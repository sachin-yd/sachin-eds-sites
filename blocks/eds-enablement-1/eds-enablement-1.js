export default function decorate(block) {
  block.classList.add('session-two');

  [...block.children].forEach((row, i) => {
    row.classList.add('eds-enablement-1-row');
    if (i > 0) row.classList.add('eds-enablement-1-row-divider');
  });
}
