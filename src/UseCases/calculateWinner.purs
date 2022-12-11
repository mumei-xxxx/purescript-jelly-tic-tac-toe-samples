module UseCases.Calculatewinner
  ( Board
  , SquareValue(..)
  , calculateWinner
  , lines
  , nextPlayer
  ) where

import Control.Alternative (guard)
import Data.Array (all, head, (!!))
import Data.Generic.Rep (class Generic)
import Data.Maybe (Maybe(..))
import Data.Show.Generic (genericShow)
import Prelude (class Eq, class Ord, class Show, bind, discard, pure, ($), (==))

lines :: Array (Array Int)
lines =
  [ [ 0, 1, 2 ]
  , [ 3, 4, 5 ]
  , [ 6, 7, 8 ]
  , [ 0, 3, 6 ]
  , [ 1, 4, 7 ]
  , [ 2, 5, 8 ]
  , [ 0, 4, 8 ]
  , [ 2, 4, 6 ]
  ]

data SquareValue = X | O

derive instance Eq SquareValue
derive instance Ord SquareValue
derive instance Generic SquareValue _

instance Show SquareValue where
  show = genericShow

type Board = Array (Maybe SquareValue)

-- calculateWinner :: Board -> Maybe SquareValue
-- calculateWinner boardArr =
--   let
-- | ある Line が同じ SquareValue で埋まっているかどうか判定する
{-
  https://pursuit.purescript.org/packages/purescript-arrays/7.1.0/docs/Data.Array#v:all
-}
-- pred :: Array Int -> SquareValue -> Boolean
-- pred line sv = all (\i -> boardArr !! i == Just (Just sv)) line

-- | すべての Line, SquareValue の組み合わせについて pred を評価する
-- checked :: Array (Maybe SquareValue)
-- checked = do
--   line <- lines
--   sv <- [ X, O ]
--   pure
--     if pred line sv then
--       Just sv
--     else
--       Nothing
-- in
--   join $ find isJust checked
-- | checked の中で一番最初に Just が出てきたものを返す
-- | find で帰ってくるのは Maybe (Maybe SquareValue) なので、join で一つ unwrap する
{-
  find https://pursuit.purescript.org/packages/purescript-arrays/7.1.0/docs/Data.Array#v:find
  isJust
  https://pursuit.purescript.org/packages/purescript-maybe/6.0.0/docs/Data.Maybe#v:isJust
-}

{-
  [X, O, Nothing, X, O, O, X, O, O]
  [Just X, Just O, Nothing, Just X, Just O, Just O, Just X, Just O, Just O]

  calculateWinner $ map Just [X, O, X, X, O, O, X, O, O]
(Just X)
-}
calculateWinner :: Board -> Maybe SquareValue
calculateWinner boardArr = head do
  line <- lines
  sv <- [ X, O ]
  guard $ all (\i -> boardArr !! i == Just (Just sv)) line
  pure sv

nextPlayer :: SquareValue -> SquareValue
nextPlayer = case _ of
  X -> O
  O -> X
