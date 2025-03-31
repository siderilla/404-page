class NotFoundComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const template = document.createElement('template');

        template.innerHTML = `
            <style>
                @font-face {
                    font-family: 'Ponymaker';
                    src: url('/assets/Ponymaker-nzAg.ttf');
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                .error {
                    font-size: 60vw !important;
                    font-family: 'Ponymaker', sans-serif !important;
                    position: relative;
                    animation: moveErrorToCenter 0.3s ease-in-out;
                }

                .message {
                    font-size: 10vw;
                    font-family: Arial, Helvetica, sans-serif;
                    position: relative;
                    animation: moveOopsToCenter 0.2s ease-out;
                }

                @media (min-width: 600px) {
                    .message {
                        font-size: 5vw;
                    }
                    .error {
                        font-size: 400px;
                        margin-bottom: -100px;
                    }
                }

                @keyframes moveErrorToCenter {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }

                @keyframes moveOopsToCenter {
                    from {
                        transform: translateY(100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
            </style>
            <div class="container">
                <div class="error">
                    <span>404</span>
                </div>
                <p class="message">Oops! <br> La pagina che cerchi non esiste</p>
            </div>
        `;

        if (this.shadowRoot) {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }
}

customElements.define('not-found-component', NotFoundComponent);
