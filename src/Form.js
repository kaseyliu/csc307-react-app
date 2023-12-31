import React, {useState} from 'react';

function Form() {
    const [person, setPerson] = useState(
        {
            name: "",
            job: "",
        }
    );

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "job")
            setPerson(
                {name: person['name'], job: value}
        );
        else
            setPerson(
                {name: value, job: person['job']}
        )
    }

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={person.name}
                onChange={handleChange} />
            
            </input>
        </form>
    )
}

