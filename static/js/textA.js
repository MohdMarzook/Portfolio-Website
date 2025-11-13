
  document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);

    const targetId = urlParams.get('id');

    if (targetId) {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });

document.addEventListener('DOMContentLoaded', () => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');


        const containers = document.querySelectorAll('.projectcontent'); // Select the parent element
        containers.forEach(container => {
            const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6'); // Select all h tags within it

            headings.forEach(heading => {
                heading.classList.add('rubber-band'); // Add the class to each heading
            });
        });

    if (canHover.matches) {



      // --- PART 1: SETUP SCRIPT ---
      // Select all elements with the .rubber-band class
      const rubberBands = document.querySelectorAll('.rubber-band');

      rubberBands.forEach(element => {
        const originalText = element.textContent;
        const words = originalText.split(' ');
        element.textContent = ''; // Clear the original content
        words.forEach(word => {
            let word_span = document.createElement("span");
            word_span.className = "rubber-word";
            const characters = Array.from(word);

            characters.forEach(char => {
              if (char === '%') {
                element.appendChild(document.createElement('br'));
              } else {
                const span = document.createElement('span');
                span.className = 'rubber-letter';
                span.textContent = char;
                if (char === ' ') {
                  span.innerHTML = '&nbsp;'; // Handle spaces
                }
                word_span.appendChild(span);
              }
            });
            element.appendChild(word_span);
            const space = document.createElement('span');
            space.textContent = ' ';
            element.appendChild(space);
        })

      });

      // --- PART 2: EVENT HANDLER SCRIPT ---
      // Now that the spans are created, find them all
      const letters = document.querySelectorAll('.rubber-letter');

      letters.forEach(letter => {
        // Add the animation class on hover
        letter.addEventListener('mouseenter', () => {
          letter.classList.add('is-animating');
        });

        // Remove the class when the animation is finished
        letter.addEventListener('animationend', () => {
          letter.classList.remove('is-animating');
        });
      });
    }
    else{
        const rubberBands = document.querySelectorAll('.rubber-band');
        rubberBands.forEach(element => {
          const originalText = element.textContent;

          const newHtml = originalText.replaceAll('%', '<br>');
          element.innerHTML = newHtml;
        });
    }
});
