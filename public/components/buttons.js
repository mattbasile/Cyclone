class Button extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        let text = this.getAttribute('text');
        this.innerText = `${text}`
    }
}

// Create 