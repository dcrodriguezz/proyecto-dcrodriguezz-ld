function irA(id) { document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    } 
 // ── NAVEGACIÓN POR TECLADO ──
    document.addEventListener('keydown', function(event) {

      // event.key nos dice qué tecla se presionó
      switch (event.key.toLowerCase()) {
        case 'w':
          irA('servicios');
          break;
        case 'a':
          irA('portafolio');
          break;
        case 's':
          irA('contacto');
          break;
        case 'd':
          irA('inicio');
          break;
      }
    });