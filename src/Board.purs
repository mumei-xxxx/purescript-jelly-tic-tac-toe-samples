module Board
  ( boardComponent
  )
  where

import Prelude

import Data.Foldable (traverse_)
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
import Jelly.Aff (awaitBody)
import Jelly.Component (class Component, text)
import Jelly.Component (class Component, text, textSig)
import Jelly.Element as JE
import Jelly.Hooks (runHooks_)
import Jelly.Hydrate (mount)
import Jelly.Prop ((:=))
import Jelly.Signal (Signal, newState)
-- import Signal.Hooks (newStateEq, useHooks_)
import Square (squareComponent)

-- type SquarePropsType m =
--   { value :: Signal SquareValueType
--   , onClick :: m Unit
--   }

-- data SquareValueType = String

-- type BoardPropsType m =
--   { value :: Signal String }

-- boardComponent :: forall m. Component m => BoardPropsType m -> m Unit
-- boardComponent { value } = do
--   JE.button [ "class" := "square"] do
--     textSig value

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
