import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";

export default function RepeatInstructionsIntent
   (gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   responseBuilder.addMessage(gameSession.helpText);

   return responseBuilder.build();
}