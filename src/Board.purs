module Board
  ( boardComponent
  )
  where

import Prelude

-- import Effect (Effect)
import Data.Array (replicate)
import Data.Maybe (Maybe(..))
-- import Data.Number (log)
import Data.Tuple.Nested ((/\))
import Jelly.Component (class Component, text, textSig)
import Jelly.Element as JE
import Jelly.Prop ((:=))
import Jelly.Signal (modifyChannel, newState)
import Data.HeytingAlgebra (not)

import Square (squareComponent)
import UseCases.Calculatewinner (SquareValue)

-- handleClick :: Effect Unit
-- handleClick = do
--   squareArraySig /\ squareArrayChannel <- newState (replicate 9  (Nothing :: Maybe Int))

--   xIsNextSig /\ xIsNextChannel <- newState true

renderSquareComponent :: forall m. Component m => Int -> m Unit
renderSquareComponent valueInt = do
  squareComponent { value: pure valueInt }

-- init ∷ ∀ (a8 ∷ String). Array (Maybe String)
-- initx ∷ Array (Maybe Int)
-- squareArraySig = (replicate 9 (Nothing :: Maybe Int))


boardComponent :: forall m. Component m => m Unit
boardComponent = do
  squareArraySig /\ squareArrayChannel <- newState (replicate 9  (Nothing :: Maybe Int))

  xIsNextSig /\ xIsNextChannel <- newState true

  let renderSquareComponent :: forall m. Component m => Int -> m Unit
      renderSquareComponent valueInt = do
        squareComponent { value: pure valueInt }

  -- let handleClick :: Effect Unit
  --     handleClick =
  --       -- modifyChannel squareArrayChannel
  --       modifyChannel xIsNextChannel (not _)

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
