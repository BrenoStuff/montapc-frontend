const NextPiece = (pcPieces) => {
	if (pcPieces.length === 1) {
		if (pcPieces[0].type === 'processor') {
			return 'motherboard'
		} else {
			return 'processor'
		}
	}

	if (pcPieces.length === 2) {
		if (pcPieces[0].type === 'graphicsCard') {
			return 'motherboard'
		} else {
			return 'graphicsCard'
		}
	}
}

export default NextPiece