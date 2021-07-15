import './errorNotify.css'

export function ErrorNotify({message}) {
    return(
        <p className="error">{message}</p>
    )
}