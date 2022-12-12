const NextPiece = (pcPieces, number) => {
	if (number === 1) {
		if (Object.keys(pcPieces)[0] === 'processor') {
			return 'motherboard'
		} else {
			return 'processor'
		}
	}

	if (number === 2) {
		if (Object.keys(pcPieces)[0] === 'graphicscard') {
			return 'motherboard'
		} else {
			return 'graphicscard'
		}
	}
}

export default NextPiece