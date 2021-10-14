import Swal from "sweetalert2";

function Form(props) {

    function Alert() {
        Swal.fire({
            title: 'Succes',
            text: props.message,
            icon: 'success'
        })
    }

    return (
        <>
            <img id="form-img" src={props.img} alt="form-img"/>
            <form className="form-default">
                <div>
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Phone number</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Ubication</label>
                    <input type="text" />
                </div>
                <input id="button-default" type="submit" value={props.value} onClick={() => Alert()} />
            </form>
        </>
    );
}

export default Form;