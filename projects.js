
  // Class for adding additional functionality when an element is in view
  const specialClass = 'special-feature';

  // Get all elements that need visibility checks
  const allContainers = document.querySelectorAll(
    '.applyingboxes .flex-card'
  );

  // Function to check if an element is in view
  function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.bottom > 0 &&
      rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
  }

  // Function to update the visibility status based on scroll position
  function updateVisibility() {
    allContainers.forEach((container) => {
      if (isInView(container)) {
        // Add class to indicate the element is in view
        container.classList.add('container-visible');
        
        // Adding special class for additional functionality when in view
        container.classList.add(specialClass);
      } else {
        // Remove classes if the element is out of view
        container.classList.remove('container-visible');
        container.classList.remove(specialClass); // Removing special class if out of view
      }
    });
  }

  // Event listener for scroll events
  document.addEventListener('scroll', updateVisibility);

  // Initial visibility check on page load
  window.addEventListener('load', updateVisibility);



