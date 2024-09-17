const controlsService = {
showHint() {
    const move = this.positionRef.current.hint();
  }

  nextPuzzle() {
    this.incPuzzleNum();
    this.setStatus('next');
  }
}

export default controlsService;