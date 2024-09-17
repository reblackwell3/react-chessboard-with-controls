import React from 'react';

const boardService = () => {

  handlePieceDrop(sourceSquare, targetSquare, piece) {
    console.log('piece', piece);
    const move = `${sourceSquare}${targetSquare}`;
    const promotionPiece = piece[1].toLowerCase(); // 'wN' -> 'n'
    const isCorrect =
      this.positionRef.current.guess(move) ||
      this.positionRef.current.guess(`${move}${promotionPiece}`);
    
    if (isCorrect) {
      this.next();
      setTimeout(() => this.next(), 500);
    } else {
      console.log('incorrect move');
        this.incorrectMoveHighlighting(move);
    }
    return isCorrect;
  }


  next() {
    if (this.positionRef.current.next()) {
      this.setFen(this.positionRef.current.fen());
    } else {
      this.setStatus('closed');
    }
  }

}

export default boardService;