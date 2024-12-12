import axios from 'axios';

const Republics = () => {
    axios.get('http://127.0.0.1:8000/republics/')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

    return (
        <div>
            <h1>Repúblicas</h1>
        </div>
    )
}

export default Republics;