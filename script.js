
// Inicializar AOS (Animate On Scroll)
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 1000,
                once: false
            });

           // Establecer la fecha del evento (10 de octubre de 2025 a las 5:00 PM)
        const eventDate = new Date(2025, 9, 10, 17, 0, 0); // Meses en JS: 0=Enero, 9=Octubre
        
        function updateCountdown() {
            const now = new Date();
            const timeDifference = eventDate - now;
            
            if (timeDifference <= 0) {
                // Si la fecha ya pasó
                document.getElementById('days').textContent = '00';
                document.getElementById('hours').textContent = '00';
                document.getElementById('minutes').textContent = '00';
                document.getElementById('seconds').textContent = '00';
                return;
            }
            
            // Calcular días, horas, minutos y segundos
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            
            // Actualizar los elementos del DOM
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }
        
        // Actualizar el contador cada segundo
        setInterval(updateCountdown, 1000);
        
        // Ejecutar una vez al cargar la página
        updateCountdown();
            
            // Manejar el formulario de confirmación
            document.getElementById('rsvpForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const guests = document.getElementById('guests').value;
                const message = document.getElementById('message').value;
                
                // Crear mensaje para WhatsApp
                let whatsappMessage = `Hola, soy ${name}. Confirmo mi asistencia al baby shower.`;
                
                if (parseInt(guests) > 0) {
                    whatsappMessage += ` Vendré con ${guests} acompañante(s).`;
                }
                
                if (message) {
                    whatsappMessage += ` Y ${message}`;
                }
                
                // Codificar el mensaje para URL
                const encodedMessage = encodeURIComponent(whatsappMessage);
                
                // Número de teléfono (reemplaza con el número real)
                const phoneNumber = "528132656684";
                
                // Crear enlace de WhatsApp
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                
                // Abrir WhatsApp
                window.open(whatsappURL, '_blank');
                
                // Mostrar mensaje de confirmación
                alert('¡Gracias por confirmar! Serás redirigido a WhatsApp para completar tu confirmación.');
            });
        });