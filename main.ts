namespace storyFlow {
    let _currentPhase = 0;

    /**
     * Set the current story phase number.
     * Phase 1 = Intro Story, Phase 2 = Dialogue, Phase 3 = Gameplay.
     */
    //% block="set story phase to %phase"
    //% group="Flow"
    export function setStoryPhase(phase: number) {
        _currentPhase = phase;
    }

    /**
     * Advance to the next story phase immediately.
     */
    //% block="skip to next phase"
    //% group="Flow"
    export function skipToNextPhase() {
        _currentPhase += 1;
    }

    /**
     * Pauses the game, but breaks instantly if the story phase changes.
     * @param phase The phase this pause belongs to
     * @param ms milliseconds to pause, eg: 1000
     */
    //% block="pause for %ms ms during phase %phase"
    //% group="Flow"
    export function phasePause(ms: number, phase: number) {
        let steps = ms / 100;
        for (let i = 0; i < steps; i++) {
            if (_currentPhase !== phase) {
                break;
            }
            basic.pause(100);
        }
    }

    /**
     * Checks if the game is still on a specific story phase.
     */
    //% block="is on phase %phase"
    //% group="Flow"
    export function isOnPhase(phase: number): boolean {
        return _currentPhase === phase;
    }
}
