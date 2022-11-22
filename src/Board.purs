module Board where

import Prelude

import Data.Foldable (traverse_)
import Effect (Effect)
import Effect.Aff (launchAff_)
import Effect.Class (liftEffect)
-- import Jelly (Component, hooks, on, signalC, text, textSig)
import Jelly.Component (class Component, text, textSig)
import Jelly.Aff (awaitBody)
import Jelly.Component (class Component, text)
import Jelly.Element as JE
import Jelly.Hooks (runHooks_)
import Jelly.Hydrate (mount)
import Jelly.Prop ((:=))
import Jelly.Signal (Signal)

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


boardComponent :: forall m. Component m => m Unit
boardComponent = do
  JE.div' do
    JE.div [ "class" := "board-row" ] do
      squareComponent
      squareComponent
      squareComponent
  JE.div' do
    JE.div [ "class" := "board-row" ] do
      squareComponent
      squareComponent
      squareComponent
  JE.div' do
    JE.div [ "class" := "board-row" ] do
      squareComponent
      squareComponent
      squareComponent
