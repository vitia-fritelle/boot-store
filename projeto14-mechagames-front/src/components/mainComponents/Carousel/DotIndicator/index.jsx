import { VscCircleFilled, VscCircleOutline } from 'react-icons/vsc';

const DotIndicator = ({ num, position, setPosition }) => {
    const setSlide = () => setPosition(num);
    if (num === position) {
        return (
            <VscCircleFilled
                className="dots"
                size={30}
                style={{ cursor: 'pointer' }}/>
        );
    }
    return (
        <VscCircleOutline
            className="dots"
            onClick={setSlide}
            size={30}
            style={{ cursor: 'pointer' }}/>
    );
};
export default ({ position, setPosition, slides }) => (
    <div>
        {
            slides.map((_, index) => <DotIndicator
                num={index}
                position={position}
                setPosition={setPosition}
                key={index}
            />)
        }
    </div>
);
