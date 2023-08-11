export function Post(props) { // as propriedades (objeto) são acessadas como parâmetros da função - componente
    return (
        <div>
            <strong>{props.author}</strong> {/* {props.nomedapropriedade} bsuca o conteúdo do objeto (props) */} 
            <p>{props.content}</p> 
        </div>

    )
}