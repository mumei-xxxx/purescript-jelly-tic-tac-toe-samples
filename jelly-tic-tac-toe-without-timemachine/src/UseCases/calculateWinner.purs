module UseCases.Calculatewinner
  ( Board
  , SquareValueType(..)
  , calculateWinner
  , lines
  ) where

import Prelude (class Eq, class Ord, class Show, bind, discard, pure, ($), (==))
import Control.Alternative (guard)
import Data.Array (all, head, (!!))
import Data.Generic.Rep (class Generic)
import Data.Maybe (Maybe(..))
import Data.Show.Generic (genericShow)

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

data SquareValueType = X | O

derive instance Eq SquareValueType
derive instance Ord SquareValueType
derive instance Generic SquareValueType _

instance Show SquareValueType where
  show = genericShow

type Board = Array (Maybe SquareValueType)

{-
  [X, O, Nothing, X, O, O, X, O, O]
  [Just X, Just O, Nothing, Just X, Just O, Just O, Just X, Just O, Just O]
> import Data.Maybe
> calculateWinner $ map Just [X, O, X, X, O, O, X, O, O]
(Just X)
-}
calculateWinner :: Board -> Maybe SquareValueType
calculateWinner boardArr = head do
  line <- lines
  squareValue <- [ X, O ]
  guard $ all (\i -> boardArr !! i == Just (Just squareValue)) line
  pure squareValue


