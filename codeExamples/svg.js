const svg = `
 <!-- SVG bilder -->
<img src="img/logo.svg" alt="Pannekakefabrikken logo" /> 

<!-- Inline SVG med alternativ tekst  -->
<svg role="img" aria-labelledby="imageTitle">
    <title id="imageTitle">Kalender</title>
</svg>

<!-- Inline SVG med aria-label, alt-taggen er ikke tilatt på svg-element  -->
<svg role="img" aria-label="en alternativ tekst">
</svg>

<!-- Dekorativ inline SVG  -->
<svg aria-hidden="true">
    ..innhold..
</svg>

<!-- Inline SVG med alternativ tekst og beskrivelse  -->
<svg role="img" aria-label="title description">
    <title id="title">Kort beskrivelse</title>
    <desc id="description">Lang beskrivelse om nødvendig</desc>
</svg>
 `;
export default svg;
