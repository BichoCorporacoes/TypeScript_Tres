import Processo from "../abstracoes/processo";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import Armazem from "../dominio/armazem";
import MenuTipoCadastroClienteAcomodacao from "../menus/menuTipoCadastroAcomodacaoCliente";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";

export default class CadastroClienteAcomodacao extends Processo {
  private cliente: Cliente;
  private acomodacoes: Acomodacao[];
  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
    this.menu = new MenuTipoCadastroClienteAcomodacao();
    this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
  }

  processar(): void {
    this.menu.mostrar();
    let entrada = this.entrada.receberNumero("Digite o numero do quarto");
    this.acomodacoes.forEach((alvo, index) => {
      switch (entrada) {
        case index + 1:
          if (entrada == index + 1) {
            let acomodacao = new Acomodacao(
              alvo.NomeAcomadacao,
              alvo.CamaSolteiro,
              alvo.CamaCasal,
              alvo.Suite,
              alvo.Climatizacao,
              alvo.Garagem
            );
            this.cliente.Acomodacao = acomodacao;
          }
          break;
      }
    });
  }
}
