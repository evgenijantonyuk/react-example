import './IconButton.css'

export const IconButton = ({
                               direction,
                               disable,
                               onClick
                           }) => {
    let cls = 'iconButton'
    
    if (direction === 'left') cls += ' left'
    if (direction === 'right') cls += ' right'
    if (disable) cls += ' disable'
    
    return (
        <div className={cls} onClick={onClick} />
    )
}
