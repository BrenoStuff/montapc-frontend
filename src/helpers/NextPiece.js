const NextPiece = (pcPieces, number) => {
	if (number === 1) {
		if (pcPieces[0].type === 'processor') {
			return 'motherboard'
		} else {
			return 'processor'
		}
	}

	if (number === 2) {
		if (pcPieces[0].type === 'graphicsCard') {
			return 'motherboard'
		} else {
			return 'graphicsCard'
		}
	}
}

export default NextPiece