import Card from './styles';
import { useNavigate } from 'react-router-dom';

export default ({image, name, value, id}) => {
    
    const navigate = useNavigate();

    return(
        <Card onClick={() => navigate(`/product/${id}`)}>
            <img src={image} alt={name} />
            <figcaption>{name}</figcaption>
            <div className="price">R${value.toFixed(2)}</div>
        </Card>
    )
}