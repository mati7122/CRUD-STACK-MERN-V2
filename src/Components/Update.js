import Form from "./Form";
import user from '../assets/user.png'

export default function Update() {
    return (
        <section className="section-update">
            <div>
                <h1>Update</h1>
                <Form img={user} value="Update" />
            </div>
        </section>
    );
}
