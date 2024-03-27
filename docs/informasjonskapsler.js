        function toggleCookies() {
            var button = document.getElementById('cookieBtn');
            if (button.textContent === 'Aktiver') {
                alert('Cookies er aktivert');
                button.textContent = 'Deaktiver';
            } else {
                alert('Cookies er deaktivert');
                button.textContent = 'Aktiver';
            }
        }