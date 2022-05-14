import ProductImage from './../../assets/images/product-image.svg';
import {useParams, useNavigate, useLocation} from 'react-router-dom';
import {
	ProductPageContainer,
	ProductInfoContainer,
	ProductDescriptionContainer,
} from './styles';

export default () => {
	return (
		<ProductPageContainer>
			<ProductInfoContainer>
				<img src={ProductImage} alt="Product" />
				<h1>Good of War: Collector's Edition</h1>
				<p>R$1299,90</p>
				<button>Adicionar ao carrinho</button>
			</ProductInfoContainer>
			<ProductDescriptionContainer>
				<h2>Descrição do Produto</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Aenean ornare eu libero eget malesuada. Curabitur tincidunt
					egestas lorem ac gravida. Aenean porttitor quis ipsum eget
					eleifend. Vestibulum ante ipsum primis in faucibus orci
					luctus et ultrices posuere cubilia curae; Curabitur ut nisi
					libero. Ut id efficitur leo. Mauris neque turpis, maximus
					sit amet est sit amet, scelerisque dignissim magna. Nulla
					tortor nibh, pretium et pretium sed, varius vel lacus. Duis
					ac mi diam. Nullam sed iaculis tortor, eu faucibus tellus.
					Quisque dui felis, placerat eget dictum vitae, tincidunt sit
					amet velit. Sed id convallis tellus. Praesent tellus nibh,
					efficitur quis lorem sit amet, vestibulum molestie sem. Nunc
					ultricies at sapien id tincidunt.
				</p>
			</ProductDescriptionContainer>
		</ProductPageContainer>
	);
};
