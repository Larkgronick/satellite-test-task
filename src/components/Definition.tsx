interface ResultCardState {
    name: string,
    definition: string,
}

const Definition = ({name, definition} : ResultCardState ) => (
        <div>
            <p>{`${name}: ${definition}`}</p>
        </div>
    );

export default Definition;
