import reactImg from '../assets/react-black.svg';

function Loader() {
    return (
        <>
            <strong>Loading</strong>
            <img id="load" src={reactImg} alt="react" />
        </>
    );
}

export default Loader;