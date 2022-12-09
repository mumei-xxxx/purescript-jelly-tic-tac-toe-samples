module Board
  ( boardComponent
  )
  where

import Prelude

import Data.Array (replicate, updateAt, (!!))
import Data.Maybe (Maybe(..), fromMaybe, isNothing)
import Data.Tuple.Nested ((/\))
import Effect.Class (class MonadEffect)
import Debug

import Jelly.Component (class Component, textSig)
import Jelly.Element as JE
import Jelly.Prop ((:=))
import Jelly.Signal (Signal, modifyChannel_, newState, readSignal, writeChannel)
import Square (squareComponent)
import UseCases.Calculatewinner (Board, SquareValue(..), calculateWinner)

type OnClickFuncType :: forall k. k -> Type
type OnClickFuncType m = {
    onClickFunc :: forall m. MonadEffect m => Int -> m Unit
  }

boardComponent :: forall m. Component m => m Unit
boardComponent = do
  let initialArr :: Board
      initialArr = replicate 9 Nothing
  squareArraySig /\ squareArrayChannel <- newState initialArr

  xIsNextSig /\ xIsNextChannel <- newState true

  let handleClick :: forall m. MonadEffect m => Int -> m Unit
      handleClick i = do
        squares <- readSignal squareArraySig
        let winner = calculateWinner squares
        -- logShow "aa"
        traceM squares
        when (isNothing winner && Just Nothing == (squares !! i)) do
          xIsNext <- readSignal xIsNextSig
          let squareVal = Just $ if xIsNext then X else O
              newSquares = fromMaybe squares $ updateAt (i :: Int) squareVal squares
          writeChannel squareArrayChannel newSquares
          modifyChannel_ xIsNextChannel not

  let renderSquareComponent :: forall m. Component m => OnClickFuncType m -> Int -> m Unit
      renderSquareComponent { onClickFunc } valueInt = do
        let
          valSig = do
            squares <- squareArraySig
            pure $ join $ squares !! valueInt
          func = onClickFunc valueInt
        squareComponent { onClick: func, value: valSig }

  let renderSquareComponentBuilder = renderSquareComponent { onClickFunc: handleClick }

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
        renderSquareComponentBuilder 0
        renderSquareComponentBuilder 1
        renderSquareComponentBuilder 2
    JE.div' do
      JE.div [ "class" := "board-row" ] do
        renderSquareComponentBuilder 3
        renderSquareComponentBuilder 4
        renderSquareComponentBuilder 5
    JE.div' do
      JE.div [ "class" := "board-row" ] do
        renderSquareComponentBuilder 6
        renderSquareComponentBuilder 7
        renderSquareComponentBuilder 8
