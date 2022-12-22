module Components.Board
  ( boardComponent
  ) where

import Prelude

import Data.Array (replicate, updateAt, (!!))
import Data.Maybe (Maybe(..), fromMaybe)
import Data.Tuple.Nested ((/\))
import Effect.Class (class MonadEffect)
import Jelly.Component (class Component, textSig)
import Jelly.Element as JE
import Jelly.Prop ((:=))
import Jelly.Signal (Signal, newState, readSignal, writeChannel)
import Components.Square (squareComponent)
import UseCases.Calculatewinner (SquareValueType(..), calculateWinner)

nextPlayer :: SquareValueType -> SquareValueType
nextPlayer = case _ of
  X -> O
  O -> X

data GameState = Winner SquareValueType | NextPlayer SquareValueType

derive instance Eq GameState

boardComponent :: forall m. Component m => m Unit
boardComponent = do
  squareArraySig /\ squareArrayChannel <- newState $ replicate 9 Nothing
  gameStateSig /\ gameStateChannel <- newState $ NextPlayer X

  let
    handleClick :: MonadEffect m => Int -> m Unit
    handleClick i = do
      squares <- readSignal squareArraySig
      gameState <- readSignal gameStateSig
      case gameState of
        Winner _ -> pure unit
        NextPlayer player -> when ((squares !! i) == Just Nothing) do
          let
            newSquares = fromMaybe squares $ updateAt (i :: Int) (Just player) squares
          writeChannel squareArrayChannel newSquares
          writeChannel gameStateChannel $ case calculateWinner newSquares of
            Nothing -> NextPlayer $ nextPlayer player
            Just winner -> Winner winner

    renderSquareComponent :: Component m => Int -> m Unit
    renderSquareComponent valueInt = do
      let
        valSig :: Signal (Maybe SquareValueType)
        valSig = do
          squares <- squareArraySig
          pure $ join $ squares !! valueInt
      squareComponent { onClick: handleClick valueInt, value: valSig }

    playStatus :: Signal String
    playStatus = gameStateSig <#> case _ of
      NextPlayer player -> "Next player: " <> show player
      Winner winner -> "Winner: " <> show winner

  JE.div' do
    JE.div' do
      textSig $ playStatus
    JE.div' do
      JE.div [ "class" := "board-row" ] do
        renderSquareComponent 0
        renderSquareComponent 1
        renderSquareComponent 2
    JE.div' do
      JE.div [ "class" := "board-row" ] do
        renderSquareComponent 3
        renderSquareComponent 4
        renderSquareComponent 5
    JE.div' do
      JE.div [ "class" := "board-row" ] do
        renderSquareComponent 6
        renderSquareComponent 7
        renderSquareComponent 8
