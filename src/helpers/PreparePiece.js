const PreparePiece = (pcPieces, type) => {
  if (type === 'graphicscard') {
    return {
      id: pcPieces.graphicscard.data.id,
      name: pcPieces.graphicscard.data.name,
      description: pcPieces.graphicscard.data.description,
      pciexpress: pcPieces.graphicscard.data.pciexpress,
      price: pcPieces.graphicscard.data.price,
      image: pcPieces.graphicscard.data.image
    }
  } else {
    return {
        id: pcPieces[type].data.id,
        name: pcPieces[type].data.name,
        description: pcPieces[type].data.description,
        socket: pcPieces[type].data.socket,
        typememory: pcPieces[type].data.typememory,
        pciexpress: pcPieces[type].data.pciexpress,
        price: pcPieces[type].data.price,
        image: pcPieces[type].data.image,
    
    }
  }
}

export default PreparePiece