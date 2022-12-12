const NextAction = (pcPieces, number) => {
	if (number === 1) {
		if (number === 1) {
            if (Object.keys(pcPieces)[0] === 'processor') {
                return '/list-by-processor'
            }
            if (Object.keys(pcPieces)[0] === 'motherboard') {
                return '/list-by-motherboard'
            }
            if (Object.keys(pcPieces)[0] === 'graphicscard') {
                return '/list-by-graphicscard'
            }
        }
    
        if (number === 2) {
            if (Object.keys(pcPieces)[0] === 'processor') {
                return '/list-by-motherboard'
            } else {
                return '/list-by-processor'
            }

        }
    }
}

export default NextAction