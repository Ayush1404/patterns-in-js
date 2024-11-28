import { GameManager } from "./gameManager";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    GameManager.getInstance().addGame({
        id: Math.random().toString(),
        whitePlayer: "name1",
        blackPlayer: "name2",
        moves: []
    })
}, 5000)
