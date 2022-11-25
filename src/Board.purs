module Board
  ( boardComponent
  )
  where

import Prelude

import Jelly.Component (class Component, textSig)
import Jelly.Element as JE
import Jelly.Prop ((:=))
import Square (squareComponent)

renderSquareComponent :: forall m. Component m => Int -> m Unit
renderSquareComponent valueInt = do
  squareComponent { value: pure valueInt }

boardComponent :: forall m. Component m => m Unit
boardComponent = do
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