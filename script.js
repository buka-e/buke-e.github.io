// Smooth scrolling for the navigation bar
$(document).ready(function(){
    // Smooth scrolling for anchor links
    $('.NavigationBar a').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800); // Adjust the speed of scrolling if needed
    });
});
// Smooth scrolling to the landing page bar
$('.Name').on('click', function() {
    $('html, body').animate({
      scrollTop: $('.LandingPage').offset().top
    }, 'slow');
  });

// Function to check if element is in viewport
function isElementInViewport(elem) {
    var elementTop = elem.offset().top + 500;
    var elementBottom = elementTop + elem.outerHeight() - 800;
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
}

$(document).ready(function() {
    // Check on scroll if the Projects section is fully in the viewport
    $(window).scroll(function() {
        var projectsSection = $('#projects'); // Change to your projects section ID
        if (isElementInViewport(projectsSection)) {
            // Projects section is fully in the viewport
            $('body').addClass('projects-background'); // Add a class to change background color
        } else {
            // Projects section is not fully in the viewport
            $('body').removeClass('projects-background'); // Remove the class to revert the background color
        }
    });
});

// Drawing a circle following the cursor
document.addEventListener('DOMContentLoaded', function() {
    const projectTitle = document.querySelector('.ProjectTitle');
    const circle = projectTitle.querySelector('.circle');
    const circleText = projectTitle.querySelector('.circle-text');
    const projectGrid = document.querySelector('.project-grid');

    // Event listener for when the cursor enters the projects grid
    projectGrid.addEventListener('mouseenter', () => {
        circle.style.display = 'none'; // Hide the circle initially
        circleText.style.display = 'none'; // Hide the circle text initially
        projectTitle.addEventListener('mousemove', trackCursor); // Start tracking cursor movement
    });

    // Event listener for when the cursor leaves the projects grid
    projectGrid.addEventListener('mouseleave', () => {
        circle.style.display = 'none'; // Hide the circle when leaving the grid
        circleText.style.display = 'none'; // Hide the circle text when leaving the grid
        projectTitle.removeEventListener('mousemove', trackCursor); // Stop tracking cursor movement
    });

    // Function to track cursor movement
    function trackCursor(e) {
        circle.style.display = 'block';
        circle.style.left = e.pageX - circle.clientWidth / 2 + 'px';
        circle.style.top = e.pageY - circle.clientHeight / 2 + 'px';
        circleText.style.display = 'block';
        circleText.style.left = e.pageX - circleText.clientWidth / 2 + 'px'; // Center text horizontally
        circleText.style.top = e.pageY - circleText.clientHeight / 2 + 'px'; // Center text vertically
    }
});


// Copying the email address
document.addEventListener('DOMContentLoaded', function() {
    const emailContent = document.getElementById('emailContent');

    emailContent.addEventListener('click', function() {
        const email = emailContent.innerText;
        navigator.clipboard.writeText(email)
            .then(() => {
                alert('Email address copied to clipboard: ' + email);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });
});

