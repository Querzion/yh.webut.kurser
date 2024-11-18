const T2doListItem = ({ t2do, removeT2do, toggleComplete }) => {
    return (
        <li className={`t2do ${t2do.completed ? 'completed' : ''}`}>
            <div className="t2do-left" onClick={() => toggleComplete(t2do)}>
                <input id="t2do-checkmark-test5" className="t2do-checkmark hidden" type="checkbox" />
                <label htmlFor="t2do-checkmark-test5">
                    <p className="t2do-text t2do-checked">{ t2do.title }</p>
                </label>
            </div>
            <div className="t2do-right">
                <button className="t2do-btn" onClick={() => removeT2do(t2do.id)}><i className="fa-solid fa-trash"></i></button>
            </div>
        </li>
    )
}

export default T2doListItem