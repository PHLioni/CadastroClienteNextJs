export default function ActionsButtons(props) {
    return (
        <div>
            <button className={` 
             flex justify-center items-center
             rounded-full 
             hover:bg-purple-50 
             p-2
             m-1
             ${props.type === "edit" ? ' text-green-600' : ' text-red-500'}
            `}

                onClick={props.actions.clienteSelectionado()}>{props.icon}</button>
        </div>
    )
}