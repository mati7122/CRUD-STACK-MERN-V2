import Form from "./Form";

function AddUser(props) {

    return (
        <section className="section-update">
            <h1>{props.title}</h1>
            <Form img={props.img}  value={props.value} message={props.message}/>
        </section>
    );
}

export default AddUser;