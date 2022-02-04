interface ResultCardState {
    name: string,
    definition: string,
}

const Definition = ({name, definition} : ResultCardState ) => <p>{`${name}: ${definition || 'no data'}`}</p>

export default Definition;
