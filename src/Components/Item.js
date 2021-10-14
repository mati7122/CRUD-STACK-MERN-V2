import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import defaultPhoto from "../assets/default.png";
import email from '../assets/email.png';
import phone from '../assets/call.png';
import ubication from '../assets/place.png';
import Delete from '../assets/remove.svg';

export default function Item() {

    function Alert(){
        Swal.fire({
            title: 'Wait a minute',
            icon: 'warning',
            text: 'Are you sure want to deleted this user data?',
            showDenyButton: true,
            showConfirmButton: true,
            denyButtonColor: 'red',
            denyButtonText: 'Cancel',
            confirmButtonText: 'Yes',
            confirmButtonColor: 'green'
        })
    }

    return (
        <article className="item-info">
            <button className="item-delete" onClick={() => Alert()}>
                <img src={Delete} alt="Delete"/>
            </button>

            <img className="item-picture" src={defaultPhoto} alt="default"/>

            <h4>Matías Herrera</h4>

            <div>
                <div className="item-contact">
                    <img className="item-img" src={ubication} alt="user"/>
                    <span>Argentina, Bs As</span>
                </div>

                <h4>Contact</h4>
                <div className="item-contact">
                    <img className="item-img" src={phone} alt="phone-img"/>
                    <span>1125815630</span>
                </div>
                <div className="item-contact">
                    <img className="item-img" src={email} alt="email-img"/>
                    <span>matias7122@gmail.com</span>
                </div>
            </div>

            <Link to="/update">
                <input id="button-default" type="button" value="Update" />
            </Link>
        </article>
    );
}