document.addEventListener('DOMContentLoaded', function () {
    // Toggle sections
    document.querySelectorAll('.toggle-btn').forEach(function (button) {
        button.addEventListener('click', function () {
            var targetId = button.getAttribute('data-target');
            var targetElement = document.getElementById(targetId);
            ;
            if (targetElement) {
                targetElement.classList.toggle('hidden');
                button.textContent = targetElement.classList.contains('hidden') ? 'Show Details' : 'Hide Details';
            }
        });
    });
});
