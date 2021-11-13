import Cliente from "../core/clientes/Cliente";
import { EditIcon, RemoveIcon } from './Icones';

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido

    function renderHeader() {
        return (
            <tr>
                <th className=" text-left p-4">Código</th>
                <th className=" text-left p-4">Nome</th>
                <th className=" text-left p-4">Idade</th>
                {exibirAcoes ? <th className=" p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderData() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : ' bg-purple-100'}`}>
                    <td className=" text-left p-4">{cliente.id}</td>
                    <td className=" text-left p-4">{cliente.nome}</td>
                    <td className=" text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderActions(cliente) : false}
                </tr>
            )
        })
    }

    function renderActions(cliente: Cliente) {
        return (
            <td className=" flex justify-center">
                {props.clienteSelecionado ? (
                    <button className={` 
                        flex justify-center items-center
                        rounded-full 
                        hover:bg-purple-50 
                        p-2
                        m-1
                        text-green-600
                    `}
                        onClick={() => props.clienteSelecionado?.(cliente)}
                    > {EditIcon}</button>
                ) : false
                }
                {
                    props.clienteExcluido ? (
                        <button className={` 
                        flex justify-center items-center
                        rounded-full 
                        hover:bg-purple-50 
                        p-2
                        m-1
                        text-red-500                        
                    `}
                            onClick={() => props.clienteExcluido?.(cliente)}
                        >{RemoveIcon}</button>
                    ) : false
                }
            </td >
        )
    }

    return (
        <table className=" w-full rounded-md overflow-hidden">
            <thead className={`
                text-gray-100 
                bg-gradient-to-r from-purple-500 to-purple-800"            
            `} >
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}