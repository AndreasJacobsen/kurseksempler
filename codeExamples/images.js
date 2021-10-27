const images = `<!-- Meningsbærende bilder skal ha alternativ tekst -->
    <img src="img/pannekaker/pannekake.png" alt="Godt stekt pannekake med rømme og jordbærsyltetøy"  />

    <!-- Uten alt tekst, bruk da en tom alt-atributt eller aria-hidden="true" -->
    <img alt="" src="img/backgrounds/fancyBackground.png" />

    <!-- Figure skal også ha alt tekst selv om en figcaption benyttes -->
    <!-- Figcaption er noe annet enn alternativ tekst -->
    <figure>
      <img
        src="img/husbanken/admDir.png"
        alt="Portrett av en smilende Osmund i dress med runde brilles og grå dress"
      />
      <figcaption>Osmund Kaldheim</figcaption>
    </figure>

    <!-- alt-tekst bli overskrevet av aria-labelledby -->
    <img src="img/monaLisa.jpg" aria-labelledby="mona" alt="Mona lisa" />
    <p id="mona">
      Mona Lisa ble malt ett sted mellom 1503-1519 og kjøpt av Kong Frans i
      Fraknrike
    </p>`;

export default images;
