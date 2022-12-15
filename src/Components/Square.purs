module Components.Square
  ( SquarePropsType
  , squareComponent
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

{-
  squareComponent の引数の型
  onClick clickしたときに呼び出される関数
  升目の値 Signal かつ Maybe。X or O or Nothing
-}
type SquarePropsType m =
  { onClick :: m Unit
  , value :: Signal (Maybe SquareValue) }

{-
  squareComponent 三目ならべの盤のひとつの升目のComponent
  SquarePropsType m を引数にとり、 m Unitを返す。
  Unit はHaskellの空のタプル()と同じ。
  HTMLを描画する。
  呼び出すときは、
  squareComponent { onClick: ●●, value: ■■ }
  のようにする。
-}
squareComponent :: forall m. Component m => SquarePropsType m -> m Unit
squareComponent { onClick, value } = do
  JE.button [ "class" := "square", on click \_ -> onClick ] do
    -- パターンマッチング
    -- textSig は Signal を表示する Jelly の関数
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
