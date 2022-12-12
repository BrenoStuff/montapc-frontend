const PreparePiece = (pcPieces, type) => {
  if (type === 'graphicscard') {
    return {
      id: pcPieces.graphicscard.data.id,
      name: pcPieces.graphicscard.data.name,
      description: pcPieces.graphicscard.data.description,
      pciExpress: pcPieces.graphicscard.data.pciExpress,
      price: pcPieces.graphicscard.data.price,
      image: pcPieces.graphicscard.data.image
    }
  } else {
    return {
        id: pcPieces[type].data.id,
        name: pcPieces[type].data.name,
        description: pcPieces[type].data.description,
        socket: pcPieces[type].data.socket,
        typeMemory: pcPieces[type].data.typeMemory,
        pciExpress: pcPieces[type].data.pciExpress,
        price: pcPieces[type].data.price,
        image: pcPieces[type].data.image,
    
    }
  }
}

export default PreparePiece