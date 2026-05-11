export function play(players) {
  let turnCount = 0;
  const maxTurns = 1000;
  
  while (turnCount < maxTurns) {
    const alivePlayers = players.filter(p => !p.isDead());
    
    if (alivePlayers.length <= 1) {
      break;
    }
    
    for (const player of alivePlayers) {
      if (player.isDead()) continue;
      player.turn(alivePlayers);
      
      if (alivePlayers.filter(p => !p.isDead()).length <= 1) {
        break;
      }
    }
    
    turnCount++;
  }
  
  const winner = players.find(p => !p.isDead());
  return winner;
}