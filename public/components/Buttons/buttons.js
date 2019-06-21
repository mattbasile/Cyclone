class Button extends HTMLElement{
    constructor(){
        super();
        // this.attachShadow({mode:'close'});
    }
    connectedCallback(){
        let hover = false;
        hover = this.getAttribute('hover');
        let color = this.getAttribute('color');
        let text = this.getAttribute('text');
        let clickable = this.getAttribute('onClick');
        !color ? color = 'blue': null
        !text ? text = 'button': null
        this.innerText = `${text}`
        this.innerHTML = hover ? `<button  class="btn btn-${color} hover:bg-${color}-700">${text}</button>` : `<button class="btn btn-${color}">${text}</button>`
        !clickable ? null : this.addEventListener('click', clickable());
    }
}

// Create 
window.customElements.define("cyclone-button", Button)