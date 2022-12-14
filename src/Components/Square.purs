module Components.Square
  ( SquarePropsType,
    squareComponent
  )
  where

import Prelude
import Data.Maybe (Maybe(..))
import Web.HTML.Event.EventTypes (click)

import Jelly.Component (class Component, textSig)
import Jelly.Element as JE
import Jelly.Prop ((:=), on)
import Jelly.Signal (Signal)

import UseCases.Calculatewinner (SquareValue(..))

type SquarePropsType m =
  { onClick :: m Unit
  , value :: Signal (Maybe SquareValue) }

squareComponent :: forall m. Component m => SquarePropsType m -> m Unit
squareComponent { onClick, value } = do
  JE.button [ "class" := "square", on click \_ -> onClick ] do
    textSig $ value <#> case _ of
      Just X -> "X"
      Just O -> "O"
      Nothing -> ""

-- type SquarePropsType m =
--   { value :: Signal Int }

-- squareComponent :: forall m. Component m => SquarePropsType m -> m Unit
-- squareComponent { value } = do
--   JE.button [ "class" := "square" ] do
--     textSig $ show <$> value
