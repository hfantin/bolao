class NegociacoesView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>JOGO</th>
                    <th>NUMEROS</th>
                </tr>
            </thead>

            <tbody>
            ${model.paraArray().map(negociacao => `
                <tr>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                </tr>
                `).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
    }
}
