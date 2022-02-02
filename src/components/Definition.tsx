interface ResultCardState {
    name: string,
    definition: string,
}

const Definition = ({name, definition} : ResultCardState ) => {
    let meaning = definition;
    if (definition === undefined) {
        meaning = 'no data'
    } 

    return (
        <div>
            <p>{`${name}: ${meaning}`}</p>
        </div>
    )};

export default Definition;
