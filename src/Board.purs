module Board
  ( boardComponent
  )
  where

import Prelude

import Data.Array (replicate, (!!), updateAt, modifyAt)
import Data.Array.NonEmpty (elemLastIndex)
import Data.HeytingAlgebra (not)
import Data.Maybe (Maybe(..), fromMaybe, fromJust, isNothing)
import Data.Tuple.Nested ((/\))
import Effect.Class (class MonadEffect)
import Jelly.Component (class Component, text, textSig)
import Jelly.Element as JE
import Jelly.Prop ((:=))
import Jelly.Signal (Signal, modifyChannel_, newState, readSignal, writeChannel)
import Square (squareComponent)
import UseCases.Calculatewinner (Board(..), SquareValue(..), Board, calculateWinner)

-- renderSquareComponent :: forall m. Component m => Int -> m Unit
-- renderSquareComponent valueInt = do
--   squareComponent { value: pure valueInt }

-- init ∷ ∀ (a8 ∷ String). Array (Maybe String)
-- initx ∷ Array (Maybe Int)
-- squareArraySig = (replicate 9 (Nothing :: Maybe Int))


boardComponent :: forall m. Component m => m Unit
boardComponent = do
  let initialArr :: Board
      initialArr = replicate 9 Nothing
  squareArraySig /\ squareArrayChannel <- newState initialArr

  xIsNextSig /\ xIsNextChannel <- newState true

  let renderSquareComponent :: forall m. Component m => Int -> m Unit
      renderSquareComponent valueInt = do
        squareComponent { value: pure valueInt }

  let handleClick :: forall m. MonadEffect m => Int -> m Unit
      handleClick i = do
        squares <- readSignal squareArraySig
        let winner = calculateWinner squares
        when (isNothing winner && isNothing (squares !! i)) do
          xIsNext <- readSignal xIsNextSig
          let squareVal = Just $ if xIsNext then X else O
              newSquares = fromMaybe squares $ updateAt i squareVal squares
          writeChannel squareArrayChannel newSquares
          modifyChannel_ xIsNextChannel not

  let playStatus :: Signal String
      playStatus = do
        squares <- squareArraySig
        xIsNext <- xIsNextSig
        let
          winner = calculateWinner squares
          nextPlayer = if xIsNext then X else O
        pure case winner of
          Nothing -> "Next player: " <> show nextPlayer
          Just w -> "Winner: " <> show w

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
