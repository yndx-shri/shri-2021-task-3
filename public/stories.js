function renderTemplate(alias, data) {
    const { color = 'black', text = JSON.stringify(data) } = data;

    return `<div class="slide ${alias}">
        <span style="color:whitesmoke;background:${color}">${text}</span>
        <div data-action="go-next">NEXT</div>
        <div data-action="go-prev">PREV</div>
        <div data-action="restart">RESTART</div>
        <div data-action="update" data-params='{ \"alias\": \"example\", \"data\": { \"color\": \"#FF33C4\" }}'>
            MAKE <strong>PINK</strong>
        </div>
    </div>`;
}