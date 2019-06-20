class Button extends HTMLElement{
    constructor(){
        super();
        // this.attachShadow({mode:'close'});
    }
    connectedCallback(){
        let color = this.getAttribute('color');
        let text = this.getAttribute('text');
        this.innerText = `${text}`
        this.innerHTML = `<button class="btn btn-${color}">${text}</button>`
    }
}

// Create 
window.customElements.define("cyclone-button", Button)