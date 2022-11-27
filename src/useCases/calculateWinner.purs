module Usecases.Calculatewinner where

import Prelude

import Data.Show
import Data.Array
import Data.Maybe (Maybe(..))
import Data.Traversable (for)

lines :: Array(Array Int)
lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

data SquareValue = X | O

instance showSquareValue :: Show SquareValue where
  show X = "X"
  show O = "O"

type BoardArrType = Array(Maybe SquareValue)



calculateWinner :: BoardArrType -> Maybe SquareValue
calculateWinner boardArr =
  for lines \line -> do
    let a = line !! 0
    let b = line !! 1
    let c = line !! 2
    if  boardArr !! a &&
        boardArr !! a == boardArr !! b &&
        boardArr !! b == boardArr !! c
    then boardArr !! a
    else Nothing

