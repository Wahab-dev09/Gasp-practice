const mian = document.querySelector('.main');
const cursor = document.querySelector('.cursor');
const image = document.querySelector('.image');

// Move the cursor with the mouse on the main area
mian.addEventListener('mousemove', (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
  });
});

// Scale up the cursor when hovering over the image
image.addEventListener('mousemove', () => {
  cursor.innerHTML = "View more"
  gsap.to(cursor, {
    scale: 2,
  });
});

// Reset the cursor when the mouse leaves the image
image.addEventListener('mouseleave', () => {
  cursor.innerHTML = ""
  gsap.to(cursor, {
    scale: 1,
  });
});
