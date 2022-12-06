module Square
  ( SquarePropsType,
  squareComponent
  )
  where

import Prelude

import Jelly.Component (class Component, textSig)
import Jelly.Element as JE
import Jelly.Prop ((:=), on)
import Jelly.Signal (Signal)
import UseCases.Calculatewinner (SquareValue)
-- import Web.HTML.HTMLElement (click)
import Web.HTML.Event.EventTypes (click)

type SquarePropsType m =
  { onClick :: m Unit
  , value :: Signal SquareValue }

squareComponent :: forall m. Component m => SquarePropsType m -> m Unit
squareComponent { onClick, value } = do
  JE.button [ "class" := "square", on click \_ -> onClick ] do
    textSig $ show <$> value

-- type SquarePropsType m =
--   { value :: Signal Int }

-- squareComponent :: forall m. Component m => SquarePropsType m -> m Unit
-- squareComponent { value } = do
--   JE.button [ "class" := "square" ] do
--     textSig $ show <$> value
