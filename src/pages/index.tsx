import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/clientes/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Pedro', 30, '1'),
    new Cliente('Ariane', 28, '2'),
    new Cliente('Anthony', 1, '3'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `} >
      <Layout titulo="Cadastro Simples">
        <div className=" flex justify-end">
          <Botao cor="green" className=" mb-4">
            Novo Cliente
          </Botao>
        </div>
        {/*  <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} /> */}
        <Formulario cliente={clientes[2]} />
      </Layout>
    </div>
  )
}
