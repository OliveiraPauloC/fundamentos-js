class JogoDaMemoria {
    // se mandar um obj = { tela: 1, idade: 2, etc: 3 }
    // vai ignorar o resto das propriedades e pegar somente a propriedade tela
    constructor({tela}) {
        this.tela = tela
        // caminho do arquivo, sempre relativo ao index.html
        this.heroisIniciais = [
            { img: './arquivos/amy.png', name: 'amy' },
            { img: './arquivos/batman.png', name: 'batman' },
            { img: './arquivos/bowie.png', name: 'bowie' },
            { img: './arquivos/farao.png', name: 'farao' },
            { img: './arquivos/juiza.png', name: 'juiza' },
            { img: './arquivos/ninja.png', name: 'ninja' }
        ]
    }
    // para usar o this, não podemos usar static!
    inicializar() {
        // vai pegar todas as funções da classe tela
        // coloca todos os heróis na tela
        this.tela.atualizarImagens(this.heroisIniciais)
    }
}