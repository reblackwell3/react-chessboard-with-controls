
import GameControls from './GameControls';
import ChessService from '../board/ChessService';
import { useState, useEffect, useRef } from 'react';
import { PgnPosition as Position } from '../common/Position';

class GameChessService extends ChessService {
  constructor(PGN, incrementPositionNum, updatePlayers) {
    super();
    this.positionRef = useRef(new Position(PGN));
    this.intervalIdRef = useRef(null);
    this.incrementPositionNum = incrementPositionNum;
    this.updatePlayers = updatePlayers;

    // State
    this.fen = useState(this.positionRef.current.fen());
    this.status = useState('pause');
    this.customSquareStyles = useState({});
  }

  clearIntervalIfExists() {
    if (this.intervalIdRef.current) {
      clearInterval(this.intervalIdRef.current);
      this.intervalIdRef.current = null;
    }
  }

  nextGame() {
    this.setCustomSquareStyles({});
    this.updatePlayers();
    this.incrementPositionNum();
    this.setStatus('next');
  }


  next() {
    if (this.positionRef.current.next()) {
      this.setFen(this.positionRef.current.fen());
      this.defaultHightlighting();
    } else {
      this.setStatus('end');
      this.clearIntervalIfExists();
    }
  }

  play() {
    this.setStatus('play');
    this.clearIntervalIfExists();
    this.intervalIdRef.current = setInterval(() => this.next(), 1500);
  }

  pause() {
    this.setStatus('pause');
    this.clearIntervalIfExists();
  }

  handlePieceDrop(sourceSquare, targetSquare, piece) {
    // Custom logic to handle piece drop for the game
    return true; // Placeholder
  }

  // Accessors for getting current state in the parent component
  getFen() {
    return this.fen[0];
  }

  getCustomSquareStyles() {
    return this.customSquareStyles[0];
  }

  renderControls() {
    // Render game-specific controls
    return (
      <GameControls onPlay={() => this.play()} onPause={() => this.pause()} onNextGame={() => this.nextGame()} />
    );
  }
}

export default GameChessService;
