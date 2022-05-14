import {SpinnerInfinity} from 'spinners-react';

export const Button = ({isLoading, isDisabled, children}) => {

	if (isLoading) {
		return (
			<button type="button" disabled>
				<SpinnerInfinity
					color="rgba(255, 255, 255, 1)"
					size="70"
				/>
			</button>
		);
	} else {
		return (
			<button
				type="submit"
				disabled={isDisabled}
				className={isDisabled?'button-disabled':''}>
				{children}
			</button>
		);
	}
}