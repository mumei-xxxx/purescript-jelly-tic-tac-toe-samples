(() => {
  // output/Control.Apply/foreign.js
  var arrayApply = function(fs) {
    return function(xs) {
      var l = fs.length;
      var k = xs.length;
      var result = new Array(l * k);
      var n = 0;
      for (var i = 0; i < l; i++) {
        var f = fs[i];
        for (var j = 0; j < k; j++) {
          result[n++] = f(xs[j]);
        }
      }
      return result;
    };
  };

  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function(f) {
      return function(g) {
        return function(x) {
          return f(g(x));
        };
      };
    }
  };
  var compose = function(dict) {
    return dict.compose;
  };

  // output/Control.Category/index.js
  var identity = function(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function(x) {
      return x;
    },
    Semigroupoid0: function() {
      return semigroupoidFn;
    }
  };

  // output/Data.Function/index.js
  var flip = function(f) {
    return function(b) {
      return function(a) {
        return f(a)(b);
      };
    };
  };
  var $$const = function(a) {
    return function(v) {
      return a;
    };
  };

  // output/Data.Functor/foreign.js
  var arrayMap = function(f) {
    return function(arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(arr[i]);
      }
      return result;
    };
  };

  // output/Data.Unit/foreign.js
  var unit = void 0;

  // output/Type.Proxy/index.js
  var $$Proxy = /* @__PURE__ */ function() {
    function $$Proxy2() {
    }
    ;
    $$Proxy2.value = new $$Proxy2();
    return $$Proxy2;
  }();

  // output/Data.Functor/index.js
  var map = function(dict) {
    return dict.map;
  };
  var mapFlipped = function(dictFunctor) {
    var map12 = map(dictFunctor);
    return function(fa) {
      return function(f) {
        return map12(f)(fa);
      };
    };
  };
  var $$void = function(dictFunctor) {
    return map(dictFunctor)($$const(unit));
  };
  var functorFn = {
    map: /* @__PURE__ */ compose(semigroupoidFn)
  };
  var functorArray = {
    map: arrayMap
  };

  // output/Control.Apply/index.js
  var identity2 = /* @__PURE__ */ identity(categoryFn);
  var applyFn = {
    apply: function(f) {
      return function(g) {
        return function(x) {
          return f(x)(g(x));
        };
      };
    },
    Functor0: function() {
      return functorFn;
    }
  };
  var applyArray = {
    apply: arrayApply,
    Functor0: function() {
      return functorArray;
    }
  };
  var apply = function(dict) {
    return dict.apply;
  };
  var applySecond = function(dictApply) {
    var apply1 = apply(dictApply);
    var map9 = map(dictApply.Functor0());
    return function(a) {
      return function(b) {
        return apply1(map9($$const(identity2))(a))(b);
      };
    };
  };
  var lift2 = function(dictApply) {
    var apply1 = apply(dictApply);
    var map9 = map(dictApply.Functor0());
    return function(f) {
      return function(a) {
        return function(b) {
          return apply1(map9(f)(a))(b);
        };
      };
    };
  };

  // output/Control.Applicative/index.js
  var pure = function(dict) {
    return dict.pure;
  };
  var when = function(dictApplicative) {
    var pure15 = pure(dictApplicative);
    return function(v) {
      return function(v1) {
        if (v) {
          return v1;
        }
        ;
        if (!v) {
          return pure15(unit);
        }
        ;
        throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };
  var liftA1 = function(dictApplicative) {
    var apply3 = apply(dictApplicative.Apply0());
    var pure15 = pure(dictApplicative);
    return function(f) {
      return function(a) {
        return apply3(pure15(f))(a);
      };
    };
  };
  var applicativeFn = {
    pure: function(x) {
      return function(v) {
        return x;
      };
    },
    Apply0: function() {
      return applyFn;
    }
  };
  var applicativeArray = {
    pure: function(x) {
      return [x];
    },
    Apply0: function() {
      return applyArray;
    }
  };

  // output/Control.Bind/foreign.js
  var arrayBind = function(arr) {
    return function(f) {
      var result = [];
      for (var i = 0, l = arr.length; i < l; i++) {
        Array.prototype.push.apply(result, f(arr[i]));
      }
      return result;
    };
  };

  // output/Control.Bind/index.js
  var identity3 = /* @__PURE__ */ identity(categoryFn);
  var discard = function(dict) {
    return dict.discard;
  };
  var bindArray = {
    bind: arrayBind,
    Apply0: function() {
      return applyArray;
    }
  };
  var bind = function(dict) {
    return dict.bind;
  };
  var bindFlipped = function(dictBind) {
    return flip(bind(dictBind));
  };
  var discardUnit = {
    discard: function(dictBind) {
      return bind(dictBind);
    }
  };
  var join = function(dictBind) {
    var bind12 = bind(dictBind);
    return function(m) {
      return bind12(m)(identity3);
    };
  };

  // output/Data.Array/foreign.js
  var replicateFill = function(count) {
    return function(value12) {
      if (count < 1) {
        return [];
      }
      var result = new Array(count);
      return result.fill(value12);
    };
  };
  var replicatePolyfill = function(count) {
    return function(value12) {
      var result = [];
      var n = 0;
      for (var i = 0; i < count; i++) {
        result[n++] = value12;
      }
      return result;
    };
  };
  var replicate = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
  var fromFoldableImpl = function() {
    function Cons(head2, tail) {
      this.head = head2;
      this.tail = tail;
    }
    var emptyList = {};
    function curryCons(head2) {
      return function(tail) {
        return new Cons(head2, tail);
      };
    }
    function listToArray(list) {
      var result = [];
      var count = 0;
      var xs = list;
      while (xs !== emptyList) {
        result[count++] = xs.head;
        xs = xs.tail;
      }
      return result;
    }
    return function(foldr2) {
      return function(xs) {
        return listToArray(foldr2(curryCons)(emptyList)(xs));
      };
    };
  }();
  var indexImpl = function(just) {
    return function(nothing) {
      return function(xs) {
        return function(i) {
          return i < 0 || i >= xs.length ? nothing : just(xs[i]);
        };
      };
    };
  };
  var _updateAt = function(just) {
    return function(nothing) {
      return function(i) {
        return function(a) {
          return function(l) {
            if (i < 0 || i >= l.length)
              return nothing;
            var l1 = l.slice();
            l1[i] = a;
            return just(l1);
          };
        };
      };
    };
  };
  var sortByImpl = function() {
    function mergeFromTo(compare2, fromOrdering, xs1, xs2, from3, to) {
      var mid;
      var i;
      var j;
      var k;
      var x;
      var y;
      var c;
      mid = from3 + (to - from3 >> 1);
      if (mid - from3 > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, from3, mid);
      if (to - mid > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, mid, to);
      i = from3;
      j = mid;
      k = from3;
      while (i < mid && j < to) {
        x = xs2[i];
        y = xs2[j];
        c = fromOrdering(compare2(x)(y));
        if (c > 0) {
          xs1[k++] = y;
          ++j;
        } else {
          xs1[k++] = x;
          ++i;
        }
      }
      while (i < mid) {
        xs1[k++] = xs2[i++];
      }
      while (j < to) {
        xs1[k++] = xs2[j++];
      }
    }
    return function(compare2) {
      return function(fromOrdering) {
        return function(xs) {
          var out;
          if (xs.length < 2)
            return xs;
          out = xs.slice(0);
          mergeFromTo(compare2, fromOrdering, out, xs.slice(0), 0, xs.length);
          return out;
        };
      };
    };
  }();
  var all = function(p) {
    return function(xs) {
      var len = xs.length;
      for (var i = 0; i < len; i++) {
        if (!p(xs[i]))
          return false;
      }
      return true;
    };
  };

  // output/Data.Semigroup/foreign.js
  var concatArray = function(xs) {
    return function(ys) {
      if (xs.length === 0)
        return ys;
      if (ys.length === 0)
        return xs;
      return xs.concat(ys);
    };
  };

  // output/Data.Symbol/index.js
  var reflectSymbol = function(dict) {
    return dict.reflectSymbol;
  };

  // output/Data.Semigroup/index.js
  var semigroupUnit = {
    append: function(v) {
      return function(v1) {
        return unit;
      };
    }
  };
  var semigroupArray = {
    append: concatArray
  };
  var append = function(dict) {
    return dict.append;
  };

  // output/Control.Alt/index.js
  var altArray = {
    alt: /* @__PURE__ */ append(semigroupArray),
    Functor0: function() {
      return functorArray;
    }
  };

  // output/Control.Monad/index.js
  var ap = function(dictMonad) {
    var bind6 = bind(dictMonad.Bind1());
    var pure8 = pure(dictMonad.Applicative0());
    return function(f) {
      return function(a) {
        return bind6(f)(function(f$prime) {
          return bind6(a)(function(a$prime) {
            return pure8(f$prime(a$prime));
          });
        });
      };
    };
  };

  // output/Data.Bounded/foreign.js
  var topChar = String.fromCharCode(65535);
  var bottomChar = String.fromCharCode(0);
  var topNumber = Number.POSITIVE_INFINITY;
  var bottomNumber = Number.NEGATIVE_INFINITY;

  // output/Data.Eq/index.js
  var eq = function(dict) {
    return dict.eq;
  };

  // output/Data.Show/index.js
  var show = function(dict) {
    return dict.show;
  };

  // output/Data.Generic.Rep/index.js
  var Inl = /* @__PURE__ */ function() {
    function Inl2(value0) {
      this.value0 = value0;
    }
    ;
    Inl2.create = function(value0) {
      return new Inl2(value0);
    };
    return Inl2;
  }();
  var Inr = /* @__PURE__ */ function() {
    function Inr2(value0) {
      this.value0 = value0;
    }
    ;
    Inr2.create = function(value0) {
      return new Inr2(value0);
    };
    return Inr2;
  }();
  var NoArguments = /* @__PURE__ */ function() {
    function NoArguments2() {
    }
    ;
    NoArguments2.value = new NoArguments2();
    return NoArguments2;
  }();
  var from = function(dict) {
    return dict.from;
  };

  // output/Data.Maybe/index.js
  var identity4 = /* @__PURE__ */ identity(categoryFn);
  var Nothing = /* @__PURE__ */ function() {
    function Nothing2() {
    }
    ;
    Nothing2.value = new Nothing2();
    return Nothing2;
  }();
  var Just = /* @__PURE__ */ function() {
    function Just2(value0) {
      this.value0 = value0;
    }
    ;
    Just2.create = function(value0) {
      return new Just2(value0);
    };
    return Just2;
  }();
  var maybe = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Nothing) {
          return v;
        }
        ;
        if (v2 instanceof Just) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var functorMaybe = {
    map: function(v) {
      return function(v1) {
        if (v1 instanceof Just) {
          return new Just(v(v1.value0));
        }
        ;
        return Nothing.value;
      };
    }
  };
  var map2 = /* @__PURE__ */ map(functorMaybe);
  var fromMaybe = function(a) {
    return maybe(a)(identity4);
  };
  var eqMaybe = function(dictEq) {
    var eq3 = eq(dictEq);
    return {
      eq: function(x) {
        return function(y) {
          if (x instanceof Nothing && y instanceof Nothing) {
            return true;
          }
          ;
          if (x instanceof Just && y instanceof Just) {
            return eq3(x.value0)(y.value0);
          }
          ;
          return false;
        };
      }
    };
  };
  var applyMaybe = {
    apply: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return map2(v.value0)(v1);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Functor0: function() {
      return functorMaybe;
    }
  };
  var bindMaybe = {
    bind: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return v1(v.value0);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Apply0: function() {
      return applyMaybe;
    }
  };

  // output/Data.Either/index.js
  var Left = /* @__PURE__ */ function() {
    function Left2(value0) {
      this.value0 = value0;
    }
    ;
    Left2.create = function(value0) {
      return new Left2(value0);
    };
    return Left2;
  }();
  var Right = /* @__PURE__ */ function() {
    function Right2(value0) {
      this.value0 = value0;
    }
    ;
    Right2.create = function(value0) {
      return new Right2(value0);
    };
    return Right2;
  }();

  // output/Data.Monoid/index.js
  var monoidUnit = {
    mempty: unit,
    Semigroup0: function() {
      return semigroupUnit;
    }
  };
  var monoidArray = {
    mempty: [],
    Semigroup0: function() {
      return semigroupArray;
    }
  };
  var mempty = function(dict) {
    return dict.mempty;
  };

  // output/Effect/foreign.js
  var pureE = function(a) {
    return function() {
      return a;
    };
  };
  var bindE = function(a) {
    return function(f) {
      return function() {
        return f(a())();
      };
    };
  };

  // output/Effect/index.js
  var $runtime_lazy = function(name16, moduleName, init) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2)
        return val;
      if (state3 === 1)
        throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init();
      state3 = 2;
      return val;
    };
  };
  var monadEffect = {
    Applicative0: function() {
      return applicativeEffect;
    },
    Bind1: function() {
      return bindEffect;
    }
  };
  var bindEffect = {
    bind: bindE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var applicativeEffect = {
    pure: pureE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var $lazy_functorEffect = /* @__PURE__ */ $runtime_lazy("functorEffect", "Effect", function() {
    return {
      map: liftA1(applicativeEffect)
    };
  });
  var $lazy_applyEffect = /* @__PURE__ */ $runtime_lazy("applyEffect", "Effect", function() {
    return {
      apply: ap(monadEffect),
      Functor0: function() {
        return $lazy_functorEffect(0);
      }
    };
  });
  var functorEffect = /* @__PURE__ */ $lazy_functorEffect(20);
  var applyEffect = /* @__PURE__ */ $lazy_applyEffect(23);
  var lift22 = /* @__PURE__ */ lift2(applyEffect);
  var semigroupEffect = function(dictSemigroup) {
    return {
      append: lift22(append(dictSemigroup))
    };
  };
  var monoidEffect = function(dictMonoid) {
    var semigroupEffect1 = semigroupEffect(dictMonoid.Semigroup0());
    return {
      mempty: pureE(mempty(dictMonoid)),
      Semigroup0: function() {
        return semigroupEffect1;
      }
    };
  };

  // output/Effect.Ref/foreign.js
  var _new = function(val) {
    return function() {
      return { value: val };
    };
  };
  var read = function(ref) {
    return function() {
      return ref.value;
    };
  };
  var write = function(val) {
    return function(ref) {
      return function() {
        ref.value = val;
      };
    };
  };

  // output/Effect.Ref/index.js
  var $$new = _new;

  // output/Data.Array.ST/foreign.js
  var sortByImpl2 = function() {
    function mergeFromTo(compare2, fromOrdering, xs1, xs2, from3, to) {
      var mid;
      var i;
      var j;
      var k;
      var x;
      var y;
      var c;
      mid = from3 + (to - from3 >> 1);
      if (mid - from3 > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, from3, mid);
      if (to - mid > 1)
        mergeFromTo(compare2, fromOrdering, xs2, xs1, mid, to);
      i = from3;
      j = mid;
      k = from3;
      while (i < mid && j < to) {
        x = xs2[i];
        y = xs2[j];
        c = fromOrdering(compare2(x)(y));
        if (c > 0) {
          xs1[k++] = y;
          ++j;
        } else {
          xs1[k++] = x;
          ++i;
        }
      }
      while (i < mid) {
        xs1[k++] = xs2[i++];
      }
      while (j < to) {
        xs1[k++] = xs2[j++];
      }
    }
    return function(compare2) {
      return function(fromOrdering) {
        return function(xs) {
          return function() {
            if (xs.length < 2)
              return xs;
            mergeFromTo(compare2, fromOrdering, xs, xs.slice(0), 0, xs.length);
            return xs;
          };
        };
      };
    };
  }();

  // output/Data.Foldable/foreign.js
  var foldrArray = function(f) {
    return function(init) {
      return function(xs) {
        var acc = init;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };
  var foldlArray = function(f) {
    return function(init) {
      return function(xs) {
        var acc = init;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
  };

  // output/Control.Plus/index.js
  var plusArray = {
    empty: [],
    Alt0: function() {
      return altArray;
    }
  };
  var empty = function(dict) {
    return dict.empty;
  };

  // output/Data.Tuple/index.js
  var Tuple = /* @__PURE__ */ function() {
    function Tuple2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Tuple2.create = function(value0) {
      return function(value1) {
        return new Tuple2(value0, value1);
      };
    };
    return Tuple2;
  }();
  var snd = function(v) {
    return v.value1;
  };
  var fst = function(v) {
    return v.value0;
  };

  // output/Unsafe.Coerce/foreign.js
  var unsafeCoerce2 = function(x) {
    return x;
  };

  // output/Data.Foldable/index.js
  var foldr = function(dict) {
    return dict.foldr;
  };
  var traverse_ = function(dictApplicative) {
    var applySecond3 = applySecond(dictApplicative.Apply0());
    var pure8 = pure(dictApplicative);
    return function(dictFoldable) {
      var foldr2 = foldr(dictFoldable);
      return function(f) {
        return foldr2(function($454) {
          return applySecond3(f($454));
        })(pure8(unit));
      };
    };
  };
  var for_ = function(dictApplicative) {
    var traverse_1 = traverse_(dictApplicative);
    return function(dictFoldable) {
      return flip(traverse_1(dictFoldable));
    };
  };
  var foldableMaybe = {
    foldr: function(v) {
      return function(v1) {
        return function(v2) {
          if (v2 instanceof Nothing) {
            return v1;
          }
          ;
          if (v2 instanceof Just) {
            return v(v2.value0)(v1);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    },
    foldl: function(v) {
      return function(v1) {
        return function(v2) {
          if (v2 instanceof Nothing) {
            return v1;
          }
          ;
          if (v2 instanceof Just) {
            return v(v1)(v2.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    },
    foldMap: function(dictMonoid) {
      var mempty5 = mempty(dictMonoid);
      return function(v) {
        return function(v1) {
          if (v1 instanceof Nothing) {
            return mempty5;
          }
          ;
          if (v1 instanceof Just) {
            return v(v1.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name]);
        };
      };
    }
  };
  var foldMapDefaultR = function(dictFoldable) {
    var foldr2 = foldr(dictFoldable);
    return function(dictMonoid) {
      var append3 = append(dictMonoid.Semigroup0());
      var mempty5 = mempty(dictMonoid);
      return function(f) {
        return foldr2(function(x) {
          return function(acc) {
            return append3(f(x))(acc);
          };
        })(mempty5);
      };
    };
  };
  var foldableArray = {
    foldr: foldrArray,
    foldl: foldlArray,
    foldMap: function(dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
    }
  };

  // output/Data.Traversable/foreign.js
  var traverseArrayImpl = function() {
    function array1(a) {
      return [a];
    }
    function array2(a) {
      return function(b) {
        return [a, b];
      };
    }
    function array3(a) {
      return function(b) {
        return function(c) {
          return [a, b, c];
        };
      };
    }
    function concat2(xs) {
      return function(ys) {
        return xs.concat(ys);
      };
    }
    return function(apply3) {
      return function(map9) {
        return function(pure8) {
          return function(f) {
            return function(array) {
              function go2(bot, top2) {
                switch (top2 - bot) {
                  case 0:
                    return pure8([]);
                  case 1:
                    return map9(array1)(f(array[bot]));
                  case 2:
                    return apply3(map9(array2)(f(array[bot])))(f(array[bot + 1]));
                  case 3:
                    return apply3(apply3(map9(array3)(f(array[bot])))(f(array[bot + 1])))(f(array[bot + 2]));
                  default:
                    var pivot = bot + Math.floor((top2 - bot) / 4) * 2;
                    return apply3(map9(concat2)(go2(bot, pivot)))(go2(pivot, top2));
                }
              }
              return go2(0, array.length);
            };
          };
        };
      };
    };
  }();

  // output/Data.Array/index.js
  var updateAt = /* @__PURE__ */ function() {
    return _updateAt(Just.create)(Nothing.value);
  }();
  var index = /* @__PURE__ */ function() {
    return indexImpl(Just.create)(Nothing.value);
  }();
  var head = function(xs) {
    return index(xs)(0);
  };

  // output/Control.Monad.Reader.Class/index.js
  var ask = function(dict) {
    return dict.ask;
  };

  // output/Control.Monad.Trans.Class/index.js
  var lift = function(dict) {
    return dict.lift;
  };

  // output/Control.Monad.Writer.Class/index.js
  var tell = function(dict) {
    return dict.tell;
  };

  // output/Effect.Class/index.js
  var monadEffectEffect = {
    liftEffect: /* @__PURE__ */ identity(categoryFn),
    Monad0: function() {
      return monadEffect;
    }
  };
  var liftEffect = function(dict) {
    return dict.liftEffect;
  };

  // output/Control.Monad.Reader.Trans/index.js
  var ReaderT = function(x) {
    return x;
  };
  var runReaderT = function(v) {
    return v;
  };
  var monadTransReaderT = {
    lift: function(dictMonad) {
      return function($147) {
        return ReaderT($$const($147));
      };
    }
  };
  var lift3 = /* @__PURE__ */ lift(monadTransReaderT);
  var mapReaderT = function(f) {
    return function(v) {
      return function($148) {
        return f(v($148));
      };
    };
  };
  var functorReaderT = function(dictFunctor) {
    return {
      map: function() {
        var $149 = map(dictFunctor);
        return function($150) {
          return mapReaderT($149($150));
        };
      }()
    };
  };
  var applyReaderT = function(dictApply) {
    var apply3 = apply(dictApply);
    var functorReaderT1 = functorReaderT(dictApply.Functor0());
    return {
      apply: function(v) {
        return function(v1) {
          return function(r) {
            return apply3(v(r))(v1(r));
          };
        };
      },
      Functor0: function() {
        return functorReaderT1;
      }
    };
  };
  var bindReaderT = function(dictBind) {
    var bind6 = bind(dictBind);
    var applyReaderT1 = applyReaderT(dictBind.Apply0());
    return {
      bind: function(v) {
        return function(k) {
          return function(r) {
            return bind6(v(r))(function(a) {
              var v1 = k(a);
              return v1(r);
            });
          };
        };
      },
      Apply0: function() {
        return applyReaderT1;
      }
    };
  };
  var applicativeReaderT = function(dictApplicative) {
    var applyReaderT1 = applyReaderT(dictApplicative.Apply0());
    return {
      pure: function() {
        var $154 = pure(dictApplicative);
        return function($155) {
          return ReaderT($$const($154($155)));
        };
      }(),
      Apply0: function() {
        return applyReaderT1;
      }
    };
  };
  var monadReaderT = function(dictMonad) {
    var applicativeReaderT1 = applicativeReaderT(dictMonad.Applicative0());
    var bindReaderT1 = bindReaderT(dictMonad.Bind1());
    return {
      Applicative0: function() {
        return applicativeReaderT1;
      },
      Bind1: function() {
        return bindReaderT1;
      }
    };
  };
  var monadAskReaderT = function(dictMonad) {
    var monadReaderT1 = monadReaderT(dictMonad);
    return {
      ask: pure(dictMonad.Applicative0()),
      Monad0: function() {
        return monadReaderT1;
      }
    };
  };
  var monadEffectReader = function(dictMonadEffect) {
    var Monad0 = dictMonadEffect.Monad0();
    var monadReaderT1 = monadReaderT(Monad0);
    return {
      liftEffect: function() {
        var $157 = lift3(Monad0);
        var $158 = liftEffect(dictMonadEffect);
        return function($159) {
          return $157($158($159));
        };
      }(),
      Monad0: function() {
        return monadReaderT1;
      }
    };
  };
  var monadTellReaderT = function(dictMonadTell) {
    var Monad1 = dictMonadTell.Monad1();
    var Semigroup0 = dictMonadTell.Semigroup0();
    var monadReaderT1 = monadReaderT(Monad1);
    return {
      tell: function() {
        var $163 = lift3(Monad1);
        var $164 = tell(dictMonadTell);
        return function($165) {
          return $163($164($165));
        };
      }(),
      Semigroup0: function() {
        return Semigroup0;
      },
      Monad1: function() {
        return monadReaderT1;
      }
    };
  };

  // output/Control.Monad.Writer.Trans/index.js
  var WriterT = function(x) {
    return x;
  };
  var runWriterT = function(v) {
    return v;
  };
  var monadTransWriterT = function(dictMonoid) {
    var mempty5 = mempty(dictMonoid);
    return {
      lift: function(dictMonad) {
        var bind6 = bind(dictMonad.Bind1());
        var pure8 = pure(dictMonad.Applicative0());
        return function(m) {
          return bind6(m)(function(a) {
            return pure8(new Tuple(a, mempty5));
          });
        };
      }
    };
  };
  var mapWriterT = function(f) {
    return function(v) {
      return f(v);
    };
  };
  var functorWriterT = function(dictFunctor) {
    var map9 = map(dictFunctor);
    return {
      map: function(f) {
        return mapWriterT(map9(function(v) {
          return new Tuple(f(v.value0), v.value1);
        }));
      }
    };
  };
  var applyWriterT = function(dictSemigroup) {
    var append3 = append(dictSemigroup);
    return function(dictApply) {
      var apply3 = apply(dictApply);
      var Functor0 = dictApply.Functor0();
      var map9 = map(Functor0);
      var functorWriterT1 = functorWriterT(Functor0);
      return {
        apply: function(v) {
          return function(v1) {
            var k = function(v3) {
              return function(v4) {
                return new Tuple(v3.value0(v4.value0), append3(v3.value1)(v4.value1));
              };
            };
            return apply3(map9(k)(v))(v1);
          };
        },
        Functor0: function() {
          return functorWriterT1;
        }
      };
    };
  };
  var bindWriterT = function(dictSemigroup) {
    var append3 = append(dictSemigroup);
    var applyWriterT1 = applyWriterT(dictSemigroup);
    return function(dictBind) {
      var bind6 = bind(dictBind);
      var Apply0 = dictBind.Apply0();
      var map9 = map(Apply0.Functor0());
      var applyWriterT2 = applyWriterT1(Apply0);
      return {
        bind: function(v) {
          return function(k) {
            return bind6(v)(function(v1) {
              var v2 = k(v1.value0);
              return map9(function(v3) {
                return new Tuple(v3.value0, append3(v1.value1)(v3.value1));
              })(v2);
            });
          };
        },
        Apply0: function() {
          return applyWriterT2;
        }
      };
    };
  };
  var applicativeWriterT = function(dictMonoid) {
    var mempty5 = mempty(dictMonoid);
    var applyWriterT1 = applyWriterT(dictMonoid.Semigroup0());
    return function(dictApplicative) {
      var pure8 = pure(dictApplicative);
      var applyWriterT2 = applyWriterT1(dictApplicative.Apply0());
      return {
        pure: function(a) {
          return pure8(new Tuple(a, mempty5));
        },
        Apply0: function() {
          return applyWriterT2;
        }
      };
    };
  };
  var monadWriterT = function(dictMonoid) {
    var applicativeWriterT1 = applicativeWriterT(dictMonoid);
    var bindWriterT1 = bindWriterT(dictMonoid.Semigroup0());
    return function(dictMonad) {
      var applicativeWriterT2 = applicativeWriterT1(dictMonad.Applicative0());
      var bindWriterT2 = bindWriterT1(dictMonad.Bind1());
      return {
        Applicative0: function() {
          return applicativeWriterT2;
        },
        Bind1: function() {
          return bindWriterT2;
        }
      };
    };
  };
  var monadEffectWriter = function(dictMonoid) {
    var lift5 = lift(monadTransWriterT(dictMonoid));
    var monadWriterT1 = monadWriterT(dictMonoid);
    return function(dictMonadEffect) {
      var Monad0 = dictMonadEffect.Monad0();
      var monadWriterT22 = monadWriterT1(Monad0);
      return {
        liftEffect: function() {
          var $249 = lift5(Monad0);
          var $250 = liftEffect(dictMonadEffect);
          return function($251) {
            return $249($250($251));
          };
        }(),
        Monad0: function() {
          return monadWriterT22;
        }
      };
    };
  };
  var monadTellWriterT = function(dictMonoid) {
    var Semigroup0 = dictMonoid.Semigroup0();
    var monadWriterT1 = monadWriterT(dictMonoid);
    return function(dictMonad) {
      var monadWriterT22 = monadWriterT1(dictMonad);
      return {
        tell: function() {
          var $252 = pure(dictMonad.Applicative0());
          var $253 = Tuple.create(unit);
          return function($254) {
            return WriterT($252($253($254)));
          };
        }(),
        Semigroup0: function() {
          return Semigroup0;
        },
        Monad1: function() {
          return monadWriterT22;
        }
      };
    };
  };

  // output/Effect.Aff/foreign.js
  var Aff = function() {
    var EMPTY = {};
    var PURE = "Pure";
    var THROW = "Throw";
    var CATCH = "Catch";
    var SYNC = "Sync";
    var ASYNC = "Async";
    var BIND = "Bind";
    var BRACKET = "Bracket";
    var FORK = "Fork";
    var SEQ = "Sequential";
    var MAP = "Map";
    var APPLY = "Apply";
    var ALT = "Alt";
    var CONS = "Cons";
    var RESUME = "Resume";
    var RELEASE = "Release";
    var FINALIZER = "Finalizer";
    var FINALIZED = "Finalized";
    var FORKED = "Forked";
    var FIBER = "Fiber";
    var THUNK = "Thunk";
    function Aff2(tag, _1, _2, _3) {
      this.tag = tag;
      this._1 = _1;
      this._2 = _2;
      this._3 = _3;
    }
    function AffCtr(tag) {
      var fn = function(_1, _2, _3) {
        return new Aff2(tag, _1, _2, _3);
      };
      fn.tag = tag;
      return fn;
    }
    function nonCanceler2(error2) {
      return new Aff2(PURE, void 0);
    }
    function runEff(eff) {
      try {
        eff();
      } catch (error2) {
        setTimeout(function() {
          throw error2;
        }, 0);
      }
    }
    function runSync(left, right, eff) {
      try {
        return right(eff());
      } catch (error2) {
        return left(error2);
      }
    }
    function runAsync(left, eff, k) {
      try {
        return eff(k)();
      } catch (error2) {
        k(left(error2))();
        return nonCanceler2;
      }
    }
    var Scheduler = function() {
      var limit = 1024;
      var size3 = 0;
      var ix = 0;
      var queue = new Array(limit);
      var draining = false;
      function drain() {
        var thunk;
        draining = true;
        while (size3 !== 0) {
          size3--;
          thunk = queue[ix];
          queue[ix] = void 0;
          ix = (ix + 1) % limit;
          thunk();
        }
        draining = false;
      }
      return {
        isDraining: function() {
          return draining;
        },
        enqueue: function(cb) {
          var i, tmp;
          if (size3 === limit) {
            tmp = draining;
            drain();
            draining = tmp;
          }
          queue[(ix + size3) % limit] = cb;
          size3++;
          if (!draining) {
            drain();
          }
        }
      };
    }();
    function Supervisor(util) {
      var fibers = {};
      var fiberId = 0;
      var count = 0;
      return {
        register: function(fiber) {
          var fid = fiberId++;
          fiber.onComplete({
            rethrow: true,
            handler: function(result) {
              return function() {
                count--;
                delete fibers[fid];
              };
            }
          })();
          fibers[fid] = fiber;
          count++;
        },
        isEmpty: function() {
          return count === 0;
        },
        killAll: function(killError, cb) {
          return function() {
            if (count === 0) {
              return cb();
            }
            var killCount = 0;
            var kills = {};
            function kill(fid) {
              kills[fid] = fibers[fid].kill(killError, function(result) {
                return function() {
                  delete kills[fid];
                  killCount--;
                  if (util.isLeft(result) && util.fromLeft(result)) {
                    setTimeout(function() {
                      throw util.fromLeft(result);
                    }, 0);
                  }
                  if (killCount === 0) {
                    cb();
                  }
                };
              })();
            }
            for (var k in fibers) {
              if (fibers.hasOwnProperty(k)) {
                killCount++;
                kill(k);
              }
            }
            fibers = {};
            fiberId = 0;
            count = 0;
            return function(error2) {
              return new Aff2(SYNC, function() {
                for (var k2 in kills) {
                  if (kills.hasOwnProperty(k2)) {
                    kills[k2]();
                  }
                }
              });
            };
          };
        }
      };
    }
    var SUSPENDED = 0;
    var CONTINUE = 1;
    var STEP_BIND = 2;
    var STEP_RESULT = 3;
    var PENDING = 4;
    var RETURN = 5;
    var COMPLETED = 6;
    function Fiber(util, supervisor, aff) {
      var runTick = 0;
      var status = SUSPENDED;
      var step2 = aff;
      var fail = null;
      var interrupt = null;
      var bhead = null;
      var btail = null;
      var attempts = null;
      var bracketCount = 0;
      var joinId = 0;
      var joins = null;
      var rethrow = true;
      function run3(localRunTick) {
        var tmp, result, attempt;
        while (true) {
          tmp = null;
          result = null;
          attempt = null;
          switch (status) {
            case STEP_BIND:
              status = CONTINUE;
              try {
                step2 = bhead(step2);
                if (btail === null) {
                  bhead = null;
                } else {
                  bhead = btail._1;
                  btail = btail._2;
                }
              } catch (e) {
                status = RETURN;
                fail = util.left(e);
                step2 = null;
              }
              break;
            case STEP_RESULT:
              if (util.isLeft(step2)) {
                status = RETURN;
                fail = step2;
                step2 = null;
              } else if (bhead === null) {
                status = RETURN;
              } else {
                status = STEP_BIND;
                step2 = util.fromRight(step2);
              }
              break;
            case CONTINUE:
              switch (step2.tag) {
                case BIND:
                  if (bhead) {
                    btail = new Aff2(CONS, bhead, btail);
                  }
                  bhead = step2._2;
                  status = CONTINUE;
                  step2 = step2._1;
                  break;
                case PURE:
                  if (bhead === null) {
                    status = RETURN;
                    step2 = util.right(step2._1);
                  } else {
                    status = STEP_BIND;
                    step2 = step2._1;
                  }
                  break;
                case SYNC:
                  status = STEP_RESULT;
                  step2 = runSync(util.left, util.right, step2._1);
                  break;
                case ASYNC:
                  status = PENDING;
                  step2 = runAsync(util.left, step2._1, function(result2) {
                    return function() {
                      if (runTick !== localRunTick) {
                        return;
                      }
                      runTick++;
                      Scheduler.enqueue(function() {
                        if (runTick !== localRunTick + 1) {
                          return;
                        }
                        status = STEP_RESULT;
                        step2 = result2;
                        run3(runTick);
                      });
                    };
                  });
                  return;
                case THROW:
                  status = RETURN;
                  fail = util.left(step2._1);
                  step2 = null;
                  break;
                case CATCH:
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step2, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step2, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step2 = step2._1;
                  break;
                case BRACKET:
                  bracketCount++;
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step2, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step2, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step2 = step2._1;
                  break;
                case FORK:
                  status = STEP_RESULT;
                  tmp = Fiber(util, supervisor, step2._2);
                  if (supervisor) {
                    supervisor.register(tmp);
                  }
                  if (step2._1) {
                    tmp.run();
                  }
                  step2 = util.right(tmp);
                  break;
                case SEQ:
                  status = CONTINUE;
                  step2 = sequential2(util, supervisor, step2._1);
                  break;
              }
              break;
            case RETURN:
              bhead = null;
              btail = null;
              if (attempts === null) {
                status = COMPLETED;
                step2 = interrupt || fail || step2;
              } else {
                tmp = attempts._3;
                attempt = attempts._1;
                attempts = attempts._2;
                switch (attempt.tag) {
                  case CATCH:
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      status = RETURN;
                    } else if (fail) {
                      status = CONTINUE;
                      step2 = attempt._2(util.fromLeft(fail));
                      fail = null;
                    }
                    break;
                  case RESUME:
                    if (interrupt && interrupt !== tmp && bracketCount === 0 || fail) {
                      status = RETURN;
                    } else {
                      bhead = attempt._1;
                      btail = attempt._2;
                      status = STEP_BIND;
                      step2 = util.fromRight(step2);
                    }
                    break;
                  case BRACKET:
                    bracketCount--;
                    if (fail === null) {
                      result = util.fromRight(step2);
                      attempts = new Aff2(CONS, new Aff2(RELEASE, attempt._2, result), attempts, tmp);
                      if (interrupt === tmp || bracketCount > 0) {
                        status = CONTINUE;
                        step2 = attempt._3(result);
                      }
                    }
                    break;
                  case RELEASE:
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step2, fail), attempts, interrupt);
                    status = CONTINUE;
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      step2 = attempt._1.killed(util.fromLeft(interrupt))(attempt._2);
                    } else if (fail) {
                      step2 = attempt._1.failed(util.fromLeft(fail))(attempt._2);
                    } else {
                      step2 = attempt._1.completed(util.fromRight(step2))(attempt._2);
                    }
                    fail = null;
                    bracketCount++;
                    break;
                  case FINALIZER:
                    bracketCount++;
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step2, fail), attempts, interrupt);
                    status = CONTINUE;
                    step2 = attempt._1;
                    break;
                  case FINALIZED:
                    bracketCount--;
                    status = RETURN;
                    step2 = attempt._1;
                    fail = attempt._2;
                    break;
                }
              }
              break;
            case COMPLETED:
              for (var k in joins) {
                if (joins.hasOwnProperty(k)) {
                  rethrow = rethrow && joins[k].rethrow;
                  runEff(joins[k].handler(step2));
                }
              }
              joins = null;
              if (interrupt && fail) {
                setTimeout(function() {
                  throw util.fromLeft(fail);
                }, 0);
              } else if (util.isLeft(step2) && rethrow) {
                setTimeout(function() {
                  if (rethrow) {
                    throw util.fromLeft(step2);
                  }
                }, 0);
              }
              return;
            case SUSPENDED:
              status = CONTINUE;
              break;
            case PENDING:
              return;
          }
        }
      }
      function onComplete(join5) {
        return function() {
          if (status === COMPLETED) {
            rethrow = rethrow && join5.rethrow;
            join5.handler(step2)();
            return function() {
            };
          }
          var jid = joinId++;
          joins = joins || {};
          joins[jid] = join5;
          return function() {
            if (joins !== null) {
              delete joins[jid];
            }
          };
        };
      }
      function kill(error2, cb) {
        return function() {
          if (status === COMPLETED) {
            cb(util.right(void 0))();
            return function() {
            };
          }
          var canceler = onComplete({
            rethrow: false,
            handler: function() {
              return cb(util.right(void 0));
            }
          })();
          switch (status) {
            case SUSPENDED:
              interrupt = util.left(error2);
              status = COMPLETED;
              step2 = interrupt;
              run3(runTick);
              break;
            case PENDING:
              if (interrupt === null) {
                interrupt = util.left(error2);
              }
              if (bracketCount === 0) {
                if (status === PENDING) {
                  attempts = new Aff2(CONS, new Aff2(FINALIZER, step2(error2)), attempts, interrupt);
                }
                status = RETURN;
                step2 = null;
                fail = null;
                run3(++runTick);
              }
              break;
            default:
              if (interrupt === null) {
                interrupt = util.left(error2);
              }
              if (bracketCount === 0) {
                status = RETURN;
                step2 = null;
                fail = null;
              }
          }
          return canceler;
        };
      }
      function join4(cb) {
        return function() {
          var canceler = onComplete({
            rethrow: false,
            handler: cb
          })();
          if (status === SUSPENDED) {
            run3(runTick);
          }
          return canceler;
        };
      }
      return {
        kill,
        join: join4,
        onComplete,
        isSuspended: function() {
          return status === SUSPENDED;
        },
        run: function() {
          if (status === SUSPENDED) {
            if (!Scheduler.isDraining()) {
              Scheduler.enqueue(function() {
                run3(runTick);
              });
            } else {
              run3(runTick);
            }
          }
        }
      };
    }
    function runPar(util, supervisor, par, cb) {
      var fiberId = 0;
      var fibers = {};
      var killId = 0;
      var kills = {};
      var early = new Error("[ParAff] Early exit");
      var interrupt = null;
      var root = EMPTY;
      function kill(error2, par2, cb2) {
        var step2 = par2;
        var head2 = null;
        var tail = null;
        var count = 0;
        var kills2 = {};
        var tmp, kid;
        loop:
          while (true) {
            tmp = null;
            switch (step2.tag) {
              case FORKED:
                if (step2._3 === EMPTY) {
                  tmp = fibers[step2._1];
                  kills2[count++] = tmp.kill(error2, function(result) {
                    return function() {
                      count--;
                      if (count === 0) {
                        cb2(result)();
                      }
                    };
                  });
                }
                if (head2 === null) {
                  break loop;
                }
                step2 = head2._2;
                if (tail === null) {
                  head2 = null;
                } else {
                  head2 = tail._1;
                  tail = tail._2;
                }
                break;
              case MAP:
                step2 = step2._2;
                break;
              case APPLY:
              case ALT:
                if (head2) {
                  tail = new Aff2(CONS, head2, tail);
                }
                head2 = step2;
                step2 = step2._1;
                break;
            }
          }
        if (count === 0) {
          cb2(util.right(void 0))();
        } else {
          kid = 0;
          tmp = count;
          for (; kid < tmp; kid++) {
            kills2[kid] = kills2[kid]();
          }
        }
        return kills2;
      }
      function join4(result, head2, tail) {
        var fail, step2, lhs, rhs, tmp, kid;
        if (util.isLeft(result)) {
          fail = result;
          step2 = null;
        } else {
          step2 = result;
          fail = null;
        }
        loop:
          while (true) {
            lhs = null;
            rhs = null;
            tmp = null;
            kid = null;
            if (interrupt !== null) {
              return;
            }
            if (head2 === null) {
              cb(fail || step2)();
              return;
            }
            if (head2._3 !== EMPTY) {
              return;
            }
            switch (head2.tag) {
              case MAP:
                if (fail === null) {
                  head2._3 = util.right(head2._1(util.fromRight(step2)));
                  step2 = head2._3;
                } else {
                  head2._3 = fail;
                }
                break;
              case APPLY:
                lhs = head2._1._3;
                rhs = head2._2._3;
                if (fail) {
                  head2._3 = fail;
                  tmp = true;
                  kid = killId++;
                  kills[kid] = kill(early, fail === lhs ? head2._2 : head2._1, function() {
                    return function() {
                      delete kills[kid];
                      if (tmp) {
                        tmp = false;
                      } else if (tail === null) {
                        join4(fail, null, null);
                      } else {
                        join4(fail, tail._1, tail._2);
                      }
                    };
                  });
                  if (tmp) {
                    tmp = false;
                    return;
                  }
                } else if (lhs === EMPTY || rhs === EMPTY) {
                  return;
                } else {
                  step2 = util.right(util.fromRight(lhs)(util.fromRight(rhs)));
                  head2._3 = step2;
                }
                break;
              case ALT:
                lhs = head2._1._3;
                rhs = head2._2._3;
                if (lhs === EMPTY && util.isLeft(rhs) || rhs === EMPTY && util.isLeft(lhs)) {
                  return;
                }
                if (lhs !== EMPTY && util.isLeft(lhs) && rhs !== EMPTY && util.isLeft(rhs)) {
                  fail = step2 === lhs ? rhs : lhs;
                  step2 = null;
                  head2._3 = fail;
                } else {
                  head2._3 = step2;
                  tmp = true;
                  kid = killId++;
                  kills[kid] = kill(early, step2 === lhs ? head2._2 : head2._1, function() {
                    return function() {
                      delete kills[kid];
                      if (tmp) {
                        tmp = false;
                      } else if (tail === null) {
                        join4(step2, null, null);
                      } else {
                        join4(step2, tail._1, tail._2);
                      }
                    };
                  });
                  if (tmp) {
                    tmp = false;
                    return;
                  }
                }
                break;
            }
            if (tail === null) {
              head2 = null;
            } else {
              head2 = tail._1;
              tail = tail._2;
            }
          }
      }
      function resolve(fiber) {
        return function(result) {
          return function() {
            delete fibers[fiber._1];
            fiber._3 = result;
            join4(result, fiber._2._1, fiber._2._2);
          };
        };
      }
      function run3() {
        var status = CONTINUE;
        var step2 = par;
        var head2 = null;
        var tail = null;
        var tmp, fid;
        loop:
          while (true) {
            tmp = null;
            fid = null;
            switch (status) {
              case CONTINUE:
                switch (step2.tag) {
                  case MAP:
                    if (head2) {
                      tail = new Aff2(CONS, head2, tail);
                    }
                    head2 = new Aff2(MAP, step2._1, EMPTY, EMPTY);
                    step2 = step2._2;
                    break;
                  case APPLY:
                    if (head2) {
                      tail = new Aff2(CONS, head2, tail);
                    }
                    head2 = new Aff2(APPLY, EMPTY, step2._2, EMPTY);
                    step2 = step2._1;
                    break;
                  case ALT:
                    if (head2) {
                      tail = new Aff2(CONS, head2, tail);
                    }
                    head2 = new Aff2(ALT, EMPTY, step2._2, EMPTY);
                    step2 = step2._1;
                    break;
                  default:
                    fid = fiberId++;
                    status = RETURN;
                    tmp = step2;
                    step2 = new Aff2(FORKED, fid, new Aff2(CONS, head2, tail), EMPTY);
                    tmp = Fiber(util, supervisor, tmp);
                    tmp.onComplete({
                      rethrow: false,
                      handler: resolve(step2)
                    })();
                    fibers[fid] = tmp;
                    if (supervisor) {
                      supervisor.register(tmp);
                    }
                }
                break;
              case RETURN:
                if (head2 === null) {
                  break loop;
                }
                if (head2._1 === EMPTY) {
                  head2._1 = step2;
                  status = CONTINUE;
                  step2 = head2._2;
                  head2._2 = EMPTY;
                } else {
                  head2._2 = step2;
                  step2 = head2;
                  if (tail === null) {
                    head2 = null;
                  } else {
                    head2 = tail._1;
                    tail = tail._2;
                  }
                }
            }
          }
        root = step2;
        for (fid = 0; fid < fiberId; fid++) {
          fibers[fid].run();
        }
      }
      function cancel(error2, cb2) {
        interrupt = util.left(error2);
        var innerKills;
        for (var kid in kills) {
          if (kills.hasOwnProperty(kid)) {
            innerKills = kills[kid];
            for (kid in innerKills) {
              if (innerKills.hasOwnProperty(kid)) {
                innerKills[kid]();
              }
            }
          }
        }
        kills = null;
        var newKills = kill(error2, root, cb2);
        return function(killError) {
          return new Aff2(ASYNC, function(killCb) {
            return function() {
              for (var kid2 in newKills) {
                if (newKills.hasOwnProperty(kid2)) {
                  newKills[kid2]();
                }
              }
              return nonCanceler2;
            };
          });
        };
      }
      run3();
      return function(killError) {
        return new Aff2(ASYNC, function(killCb) {
          return function() {
            return cancel(killError, killCb);
          };
        });
      };
    }
    function sequential2(util, supervisor, par) {
      return new Aff2(ASYNC, function(cb) {
        return function() {
          return runPar(util, supervisor, par, cb);
        };
      });
    }
    Aff2.EMPTY = EMPTY;
    Aff2.Pure = AffCtr(PURE);
    Aff2.Throw = AffCtr(THROW);
    Aff2.Catch = AffCtr(CATCH);
    Aff2.Sync = AffCtr(SYNC);
    Aff2.Async = AffCtr(ASYNC);
    Aff2.Bind = AffCtr(BIND);
    Aff2.Bracket = AffCtr(BRACKET);
    Aff2.Fork = AffCtr(FORK);
    Aff2.Seq = AffCtr(SEQ);
    Aff2.ParMap = AffCtr(MAP);
    Aff2.ParApply = AffCtr(APPLY);
    Aff2.ParAlt = AffCtr(ALT);
    Aff2.Fiber = Fiber;
    Aff2.Supervisor = Supervisor;
    Aff2.Scheduler = Scheduler;
    Aff2.nonCanceler = nonCanceler2;
    return Aff2;
  }();
  var _pure = Aff.Pure;
  var _throwError = Aff.Throw;
  function _map(f) {
    return function(aff) {
      if (aff.tag === Aff.Pure.tag) {
        return Aff.Pure(f(aff._1));
      } else {
        return Aff.Bind(aff, function(value12) {
          return Aff.Pure(f(value12));
        });
      }
    };
  }
  function _bind(aff) {
    return function(k) {
      return Aff.Bind(aff, k);
    };
  }
  var _liftEffect = Aff.Sync;
  function _parAffMap(f) {
    return function(aff) {
      return Aff.ParMap(f, aff);
    };
  }
  function _parAffApply(aff1) {
    return function(aff2) {
      return Aff.ParApply(aff1, aff2);
    };
  }
  var makeAff = Aff.Async;
  function _makeFiber(util, aff) {
    return function() {
      return Aff.Fiber(util, null, aff);
    };
  }
  var _delay = function() {
    function setDelay(n, k) {
      if (n === 0 && typeof setImmediate !== "undefined") {
        return setImmediate(k);
      } else {
        return setTimeout(k, n);
      }
    }
    function clearDelay(n, t) {
      if (n === 0 && typeof clearImmediate !== "undefined") {
        return clearImmediate(t);
      } else {
        return clearTimeout(t);
      }
    }
    return function(right, ms) {
      return Aff.Async(function(cb) {
        return function() {
          var timer = setDelay(ms, cb(right()));
          return function() {
            return Aff.Sync(function() {
              return right(clearDelay(ms, timer));
            });
          };
        };
      });
    };
  }();
  var _sequential = Aff.Seq;

  // output/Control.Parallel.Class/index.js
  var sequential = function(dict) {
    return dict.sequential;
  };
  var parallel = function(dict) {
    return dict.parallel;
  };

  // output/Control.Parallel/index.js
  var identity5 = /* @__PURE__ */ identity(categoryFn);
  var parTraverse_ = function(dictParallel) {
    var sequential2 = sequential(dictParallel);
    var traverse_3 = traverse_(dictParallel.Applicative1());
    var parallel2 = parallel(dictParallel);
    return function(dictFoldable) {
      var traverse_1 = traverse_3(dictFoldable);
      return function(f) {
        var $48 = traverse_1(function($50) {
          return parallel2(f($50));
        });
        return function($49) {
          return sequential2($48($49));
        };
      };
    };
  };
  var parSequence_ = function(dictParallel) {
    var parTraverse_1 = parTraverse_(dictParallel);
    return function(dictFoldable) {
      return parTraverse_1(dictFoldable)(identity5);
    };
  };

  // output/Partial.Unsafe/foreign.js
  var _unsafePartial = function(f) {
    return f();
  };

  // output/Partial/foreign.js
  var _crashWith = function(msg) {
    throw new Error(msg);
  };

  // output/Partial/index.js
  var crashWith = function() {
    return _crashWith;
  };

  // output/Partial.Unsafe/index.js
  var crashWith2 = /* @__PURE__ */ crashWith();
  var unsafePartial = _unsafePartial;
  var unsafeCrashWith = function(msg) {
    return unsafePartial(function() {
      return crashWith2(msg);
    });
  };

  // output/Effect.Aff/index.js
  var $runtime_lazy2 = function(name16, moduleName, init) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2)
        return val;
      if (state3 === 1)
        throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init();
      state3 = 2;
      return val;
    };
  };
  var $$void2 = /* @__PURE__ */ $$void(functorEffect);
  var Canceler = function(x) {
    return x;
  };
  var functorParAff = {
    map: _parAffMap
  };
  var functorAff = {
    map: _map
  };
  var ffiUtil = /* @__PURE__ */ function() {
    var unsafeFromRight = function(v) {
      if (v instanceof Right) {
        return v.value0;
      }
      ;
      if (v instanceof Left) {
        return unsafeCrashWith("unsafeFromRight: Left");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): " + [v.constructor.name]);
    };
    var unsafeFromLeft = function(v) {
      if (v instanceof Left) {
        return v.value0;
      }
      ;
      if (v instanceof Right) {
        return unsafeCrashWith("unsafeFromLeft: Right");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): " + [v.constructor.name]);
    };
    var isLeft = function(v) {
      if (v instanceof Left) {
        return true;
      }
      ;
      if (v instanceof Right) {
        return false;
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): " + [v.constructor.name]);
    };
    return {
      isLeft,
      fromLeft: unsafeFromLeft,
      fromRight: unsafeFromRight,
      left: Left.create,
      right: Right.create
    };
  }();
  var makeFiber = function(aff) {
    return _makeFiber(ffiUtil, aff);
  };
  var launchAff = function(aff) {
    return function __do() {
      var fiber = makeFiber(aff)();
      fiber.run();
      return fiber;
    };
  };
  var launchAff_ = function($74) {
    return $$void2(launchAff($74));
  };
  var applyParAff = {
    apply: _parAffApply,
    Functor0: function() {
      return functorParAff;
    }
  };
  var monadAff = {
    Applicative0: function() {
      return applicativeAff;
    },
    Bind1: function() {
      return bindAff;
    }
  };
  var bindAff = {
    bind: _bind,
    Apply0: function() {
      return $lazy_applyAff(0);
    }
  };
  var applicativeAff = {
    pure: _pure,
    Apply0: function() {
      return $lazy_applyAff(0);
    }
  };
  var $lazy_applyAff = /* @__PURE__ */ $runtime_lazy2("applyAff", "Effect.Aff", function() {
    return {
      apply: ap(monadAff),
      Functor0: function() {
        return functorAff;
      }
    };
  });
  var pure2 = /* @__PURE__ */ pure(applicativeAff);
  var monadEffectAff = {
    liftEffect: _liftEffect,
    Monad0: function() {
      return monadAff;
    }
  };
  var liftEffect2 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var effectCanceler = function($75) {
    return Canceler($$const(liftEffect2($75)));
  };
  var parallelAff = {
    parallel: unsafeCoerce2,
    sequential: _sequential,
    Monad0: function() {
      return monadAff;
    },
    Applicative1: function() {
      return $lazy_applicativeParAff(0);
    }
  };
  var $lazy_applicativeParAff = /* @__PURE__ */ $runtime_lazy2("applicativeParAff", "Effect.Aff", function() {
    return {
      pure: function() {
        var $82 = parallel(parallelAff);
        return function($83) {
          return $82(pure2($83));
        };
      }(),
      Apply0: function() {
        return applyParAff;
      }
    };
  });
  var parSequence_2 = /* @__PURE__ */ parSequence_(parallelAff)(foldableArray);
  var semigroupCanceler = {
    append: function(v) {
      return function(v1) {
        return function(err) {
          return parSequence_2([v(err), v1(err)]);
        };
      };
    }
  };
  var nonCanceler = /* @__PURE__ */ $$const(/* @__PURE__ */ pure2(unit));
  var monoidCanceler = {
    mempty: nonCanceler,
    Semigroup0: function() {
      return semigroupCanceler;
    }
  };

  // output/Jelly.Signal/foreign.js
  var newChannelImpl = (initialValue) => () => ({
    subscriptions: /* @__PURE__ */ new Set(),
    value: initialValue
  });
  var modifyChannelImpl = (channel) => (fn) => () => {
    channel.value = fn(channel.value);
    channel.subscriptions.forEach((subscription) => {
      subscription.cleaner();
      subscription.cleaner = subscription.callback(channel.value)();
    });
  };
  var readChannel = (channel) => () => channel.value;
  var subscribeChannel = (channel) => (callback) => () => {
    const subscription = {
      callback,
      cleaner: callback(channel.value)()
    };
    channel.subscriptions.add(subscription);
    return () => {
      subscription.cleaner();
      channel.subscriptions.delete(subscription);
    };
  };

  // output/Jelly.Signal/index.js
  var map3 = /* @__PURE__ */ map(functorEffect);
  var apply2 = /* @__PURE__ */ apply(applyEffect);
  var pure3 = /* @__PURE__ */ pure(applicativeEffect);
  var identity6 = /* @__PURE__ */ identity(categoryFn);
  var applySecond2 = /* @__PURE__ */ applySecond(applyEffect);
  var mempty2 = /* @__PURE__ */ mempty(/* @__PURE__ */ monoidEffect(/* @__PURE__ */ monoidEffect(monoidUnit)));
  var functorSignal = {
    map: function(f) {
      return function(v) {
        return {
          run: function(cb) {
            return v.run(function($102) {
              return cb(f($102));
            });
          },
          get: map3(f)(v.get)
        };
      };
    }
  };
  var mapFlipped2 = /* @__PURE__ */ mapFlipped(functorSignal);
  var applySignal = {
    apply: function(v) {
      return function(v1) {
        return {
          run: function(cb) {
            return v.run(function(f) {
              return v1.run(function($103) {
                return cb(f($103));
              });
            });
          },
          get: apply2(v.get)(v1.get)
        };
      };
    },
    Functor0: function() {
      return functorSignal;
    }
  };
  var lift23 = /* @__PURE__ */ lift2(applySignal);
  var bindSignal = {
    bind: function(v) {
      return function(f) {
        return {
          run: function(cb) {
            return v.run(function(a) {
              var v1 = f(a);
              return v1.run(cb);
            });
          },
          get: function __do() {
            var a = v.get();
            var v1 = f(a);
            return v1.get();
          }
        };
      };
    },
    Apply0: function() {
      return applySignal;
    }
  };
  var semigroupSignal = function(dictSemigroup) {
    return {
      append: lift23(append(dictSemigroup))
    };
  };
  var applicativeSignal = {
    pure: function(a) {
      return {
        run: function(cb) {
          return cb(a);
        },
        get: pure3(a)
      };
    },
    Apply0: function() {
      return applySignal;
    }
  };
  var pure1 = /* @__PURE__ */ pure(applicativeSignal);
  var monoidSignal = function(dictMonoid) {
    var semigroupSignal1 = semigroupSignal(dictMonoid.Semigroup0());
    return {
      mempty: pure1(mempty(dictMonoid)),
      Semigroup0: function() {
        return semigroupSignal1;
      }
    };
  };
  var subscribe = function(chn) {
    return {
      run: subscribeChannel(chn),
      get: readChannel(chn)
    };
  };
  var runSignal = function(dictMonadEffect) {
    var liftEffect7 = liftEffect(dictMonadEffect);
    return function(v) {
      return liftEffect7(v.run(identity6));
    };
  };
  var watchSignal = function(dictMonadEffect) {
    var bind12 = bind(dictMonadEffect.Monad0().Bind1());
    var liftEffect7 = liftEffect(dictMonadEffect);
    var runSignal1 = runSignal(dictMonadEffect);
    return function(sig) {
      return bind12(liftEffect7($$new(true)))(function(isInit) {
        return runSignal1(mapFlipped2(sig)(function(eff) {
          return function __do() {
            var init = read(isInit)();
            if (init) {
              return applySecond2(write(false)(isInit))(mempty2)();
            }
            ;
            return eff();
          };
        }));
      });
    };
  };
  var readSignal = function(dictMonadEffect) {
    var liftEffect7 = liftEffect(dictMonadEffect);
    return function(v) {
      return liftEffect7(v.get);
    };
  };
  var newChannel = function(dictMonadEffect) {
    var $104 = liftEffect(dictMonadEffect);
    return function($105) {
      return $104(newChannelImpl($105));
    };
  };
  var newState = function(dictMonadEffect) {
    var Monad0 = dictMonadEffect.Monad0();
    var bind12 = bind(Monad0.Bind1());
    var newChannel1 = newChannel(dictMonadEffect);
    var pure23 = pure(Monad0.Applicative0());
    return function(a) {
      return bind12(newChannel1(a))(function(chn) {
        return pure23(new Tuple(subscribe(chn), chn));
      });
    };
  };
  var modifyChannel_ = function(dictMonadEffect) {
    var liftEffect7 = liftEffect(dictMonadEffect);
    return function(c) {
      return function(f) {
        return liftEffect7(modifyChannelImpl(c)(f));
      };
    };
  };
  var writeChannel = function(dictMonadEffect) {
    var modifyChannel_1 = modifyChannel_(dictMonadEffect);
    return function(c) {
      return function(a) {
        return modifyChannel_1(c)($$const(a));
      };
    };
  };
  var writeChannel1 = /* @__PURE__ */ writeChannel(monadEffectEffect);
  var memoSignal = function(dictMonadEffect) {
    var Monad0 = dictMonadEffect.Monad0();
    var bind12 = bind(Monad0.Bind1());
    var newChannel1 = newChannel(dictMonadEffect);
    var runSignal1 = runSignal(dictMonadEffect);
    var pure23 = pure(Monad0.Applicative0());
    return function(sig) {
      return bind12(newChannel1(unit))(function(chn) {
        return bind12(runSignal1(mapFlipped2(sig)(function(eff) {
          return function __do() {
            var v = eff();
            writeChannel1(chn)(v.value0)();
            return v.value1;
          };
        })))(function(cln) {
          return pure23(new Tuple(subscribe(chn), cln));
        });
      });
    };
  };

  // output/Web.Event.EventTarget/foreign.js
  function eventListener(fn) {
    return function() {
      return function(event) {
        return fn(event)();
      };
    };
  }
  function addEventListener(type) {
    return function(listener) {
      return function(useCapture) {
        return function(target5) {
          return function() {
            return target5.addEventListener(type, listener, useCapture);
          };
        };
      };
    };
  }
  function removeEventListener(type) {
    return function(listener) {
      return function(useCapture) {
        return function(target5) {
          return function() {
            return target5.removeEventListener(type, listener, useCapture);
          };
        };
      };
    };
  }

  // output/Jelly.Hooks/index.js
  var monoidEffect2 = /* @__PURE__ */ monoidEffect(monoidUnit);
  var semigroupEffect2 = /* @__PURE__ */ semigroupEffect(semigroupUnit);
  var mapFlipped3 = /* @__PURE__ */ mapFlipped(functorSignal);
  var writeChannel2 = /* @__PURE__ */ writeChannel(monadEffectEffect);
  var discard2 = /* @__PURE__ */ discard(discardUnit);
  var liftEffect3 = /* @__PURE__ */ liftEffect(monadEffectEffect);
  var lift4 = /* @__PURE__ */ lift(monadTransReaderT);
  var map4 = /* @__PURE__ */ map(functorSignal);
  var join2 = /* @__PURE__ */ join(bindSignal);
  var void1 = /* @__PURE__ */ $$void(functorEffect);
  var tell2 = /* @__PURE__ */ tell(/* @__PURE__ */ monadTellWriterT(monoidEffect2)(monadEffect));
  var monadHooks = /* @__PURE__ */ monadWriterT(monoidEffect2)(monadEffect);
  var monadEffectHooks = /* @__PURE__ */ monadEffectWriter(monoidEffect2)(monadEffectEffect);
  var memoSignal2 = /* @__PURE__ */ memoSignal(monadEffectHooks);
  var bindHooks = /* @__PURE__ */ bindWriterT(semigroupEffect2)(bindEffect);
  var bind2 = /* @__PURE__ */ bind(bindHooks);
  var discard22 = /* @__PURE__ */ discard2(bindHooks);
  var applicativeHooks = /* @__PURE__ */ applicativeWriterT(monoidEffect2)(applicativeEffect);
  var pure12 = /* @__PURE__ */ pure(applicativeHooks);
  var useHooks = function(dict) {
    return dict.useHooks;
  };
  var useHooks_ = function(dictMonadHooks) {
    var void2 = $$void(dictMonadHooks.MonadEffect0().Monad0().Bind1().Apply0().Functor0());
    var useHooks1 = useHooks(dictMonadHooks);
    return function(sig) {
      return void2(useHooks1(sig));
    };
  };
  var useCleaner = function(dict) {
    return dict.useCleaner;
  };
  var useSubscriber = function(dictMonadHooks) {
    var MonadEffect0 = dictMonadHooks.MonadEffect0();
    var Monad0 = MonadEffect0.Monad0();
    var Bind1 = Monad0.Bind1();
    var bind32 = bind(Bind1);
    var newState2 = newState(MonadEffect0);
    var pure23 = pure(Monad0.Applicative0());
    var liftEffect22 = liftEffect(MonadEffect0);
    var applySecond1 = applySecond(Bind1.Apply0());
    var discard33 = discard2(Bind1);
    var useCleaner1 = useCleaner(dictMonadHooks);
    var useHooks_1 = useHooks_(dictMonadHooks);
    return function(subscribe2) {
      return function(handler) {
        return bind32(newState2(pure23(unit)))(function(v) {
          return bind32(liftEffect22(subscribe2(function(e) {
            return writeChannel2(v.value1)(applySecond1(handler(e))(pure23(unit)));
          })))(function(sub2) {
            return discard33(useCleaner1(sub2))(function() {
              return useHooks_1(v.value0);
            });
          });
        });
      };
    };
  };
  var useEvent = function(dictMonadHooks) {
    var useSubscriber1 = useSubscriber(dictMonadHooks);
    return function(target5) {
      return function(eventType) {
        return function(handler) {
          var subscribe2 = function(callback) {
            return function __do() {
              var el2 = liftEffect3(eventListener(callback))();
              liftEffect3(addEventListener(eventType)(el2)(false)(target5))();
              return removeEventListener(eventType)(el2)(false)(target5);
            };
          };
          return useSubscriber1(subscribe2)(handler);
        };
      };
    };
  };
  var monadHooksReaderT = function(dictMonadHooks) {
    var MonadEffect0 = dictMonadHooks.MonadEffect0();
    var Monad0 = MonadEffect0.Monad0();
    var lift1 = lift4(Monad0);
    var bind32 = bind(bindReaderT(Monad0.Bind1()));
    var ask3 = ask(monadAskReaderT(Monad0));
    var useHooks1 = useHooks(dictMonadHooks);
    var monadEffectReader2 = monadEffectReader(MonadEffect0);
    return {
      useCleaner: function() {
        var $252 = useCleaner(dictMonadHooks);
        return function($253) {
          return lift1($252($253));
        };
      }(),
      useHooks: function(sig) {
        return bind32(ask3)(function(r) {
          return lift1(useHooks1(map4(flip(runReaderT)(r))(sig)));
        });
      },
      MonadEffect0: function() {
        return monadEffectReader2;
      }
    };
  };
  var monadHooksWriterTSignal = function(dictMonadHooks) {
    var MonadEffect0 = dictMonadHooks.MonadEffect0();
    var Monad0 = MonadEffect0.Monad0();
    var useCleaner1 = useCleaner(dictMonadHooks);
    var Bind1 = Monad0.Bind1();
    var useHooks1 = useHooks(dictMonadHooks);
    var Applicative0 = Monad0.Applicative0();
    return function(dictMonoid) {
      var monoidSignal3 = monoidSignal(dictMonoid);
      var lift1 = lift(monadTransWriterT(monoidSignal3))(Monad0);
      var bindWriterT2 = bindWriterT(semigroupSignal(dictMonoid.Semigroup0()))(Bind1);
      var bind32 = bind(bindWriterT2);
      var discard33 = discard2(bindWriterT2);
      var tell1 = tell(monadTellWriterT(monoidSignal3)(Monad0));
      var pure23 = pure(applicativeWriterT(monoidSignal3)(Applicative0));
      var monadEffectWriter2 = monadEffectWriter(monoidSignal3)(MonadEffect0);
      return {
        useCleaner: function($254) {
          return lift1(useCleaner1($254));
        },
        useHooks: function(sig) {
          return bind32(lift1(useHooks1(map4(runWriterT)(sig))))(function(sigAW) {
            return discard33(tell1(join2(map4(snd)(sigAW))))(function() {
              return pure23(map4(fst)(sigAW));
            });
          });
        },
        MonadEffect0: function() {
          return monadEffectWriter2;
        }
      };
    };
  };
  var runHooks = function(dictMonadEffect) {
    var liftEffect22 = liftEffect(dictMonadEffect);
    return function(v) {
      return liftEffect22(runWriterT(v));
    };
  };
  var runHooks1 = /* @__PURE__ */ runHooks(monadEffectEffect);
  var runHooks_ = function(m) {
    return void1(runHooks1(m));
  };
  var monadHooksHooks = {
    useCleaner: function(cleaner) {
      return tell2(cleaner);
    },
    useHooks: function(sig) {
      return bind2(memoSignal2(mapFlipped3(sig)(function(h) {
        return runHooks1(h);
      })))(function(v) {
        return discard22(tell2(v.value1))(function() {
          return pure12(v.value0);
        });
      });
    },
    MonadEffect0: function() {
      return monadEffectHooks;
    }
  };
  var liftHooks = function(dictMonadHooks) {
    var MonadEffect0 = dictMonadHooks.MonadEffect0();
    var Monad0 = MonadEffect0.Monad0();
    var Bind1 = Monad0.Bind1();
    var bind32 = bind(Bind1);
    var runHooks2 = runHooks(MonadEffect0);
    var discard33 = discard2(Bind1);
    var useCleaner1 = useCleaner(dictMonadHooks);
    var pure23 = pure(Monad0.Applicative0());
    return function(m) {
      return bind32(runHooks2(m))(function(v) {
        return discard33(useCleaner1(v.value1))(function() {
          return pure23(v.value0);
        });
      });
    };
  };

  // output/Jelly.Prop/index.js
  var pure13 = /* @__PURE__ */ pure(applicativeSignal);
  var PropAttribute = /* @__PURE__ */ function() {
    function PropAttribute2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    PropAttribute2.create = function(value0) {
      return function(value1) {
        return new PropAttribute2(value0, value1);
      };
    };
    return PropAttribute2;
  }();
  var PropHandler = /* @__PURE__ */ function() {
    function PropHandler2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    PropHandler2.create = function(value0) {
      return function(value1) {
        return new PropHandler2(value0, value1);
      };
    };
    return PropHandler2;
  }();
  var PropMountEffect = /* @__PURE__ */ function() {
    function PropMountEffect2(value0) {
      this.value0 = value0;
    }
    ;
    PropMountEffect2.create = function(value0) {
      return new PropMountEffect2(value0);
    };
    return PropMountEffect2;
  }();
  var attrValueString = /* @__PURE__ */ function() {
    return {
      toAttrValue: Just.create
    };
  }();
  var toAttrValue = function(dict) {
    return dict.toAttrValue;
  };
  var on = /* @__PURE__ */ function() {
    return PropHandler.create;
  }();
  var attr = function(dictAttrValue) {
    var toAttrValue3 = toAttrValue(dictAttrValue);
    return function(name16) {
      return function(value12) {
        return new PropAttribute(name16, pure13(toAttrValue3(value12)));
      };
    };
  };

  // output/Jelly.Component/index.js
  var textSig = function(dict) {
    return dict.textSig;
  };
  var el = function(dict) {
    return dict.el;
  };
  var el$prime = function(dictComponent) {
    var el1 = el(dictComponent);
    return function(tag) {
      return el1(tag)([]);
    };
  };

  // output/Jelly.Element/index.js
  var div$prime = function(dictComponent) {
    return el$prime(dictComponent)("div");
  };
  var div2 = function(dictComponent) {
    return el(dictComponent)("div");
  };
  var button = function(dictComponent) {
    return el(dictComponent)("button");
  };

  // output/Control.Alternative/index.js
  var guard = function(dictAlternative) {
    var pure8 = pure(dictAlternative.Applicative0());
    var empty2 = empty(dictAlternative.Plus1());
    return function(v) {
      if (v) {
        return pure8(unit);
      }
      ;
      if (!v) {
        return empty2;
      }
      ;
      throw new Error("Failed pattern match at Control.Alternative (line 48, column 1 - line 48, column 54): " + [v.constructor.name]);
    };
  };
  var alternativeArray = {
    Applicative0: function() {
      return applicativeArray;
    },
    Plus1: function() {
      return plusArray;
    }
  };

  // output/Data.Show.Generic/foreign.js
  var intercalate2 = function(separator) {
    return function(xs) {
      return xs.join(separator);
    };
  };

  // output/Data.Show.Generic/index.js
  var append2 = /* @__PURE__ */ append(semigroupArray);
  var genericShowArgsNoArguments = {
    genericShowArgs: function(v) {
      return [];
    }
  };
  var genericShowArgs = function(dict) {
    return dict.genericShowArgs;
  };
  var genericShowConstructor = function(dictGenericShowArgs) {
    var genericShowArgs1 = genericShowArgs(dictGenericShowArgs);
    return function(dictIsSymbol) {
      var reflectSymbol2 = reflectSymbol(dictIsSymbol);
      return {
        "genericShow'": function(v) {
          var ctor = reflectSymbol2($$Proxy.value);
          var v1 = genericShowArgs1(v);
          if (v1.length === 0) {
            return ctor;
          }
          ;
          return "(" + (intercalate2(" ")(append2([ctor])(v1)) + ")");
        }
      };
    };
  };
  var genericShow$prime = function(dict) {
    return dict["genericShow'"];
  };
  var genericShowSum = function(dictGenericShow) {
    var genericShow$prime1 = genericShow$prime(dictGenericShow);
    return function(dictGenericShow1) {
      var genericShow$prime2 = genericShow$prime(dictGenericShow1);
      return {
        "genericShow'": function(v) {
          if (v instanceof Inl) {
            return genericShow$prime1(v.value0);
          }
          ;
          if (v instanceof Inr) {
            return genericShow$prime2(v.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Show.Generic (line 26, column 1 - line 28, column 40): " + [v.constructor.name]);
        }
      };
    };
  };
  var genericShow = function(dictGeneric) {
    var from3 = from(dictGeneric);
    return function(dictGenericShow) {
      var genericShow$prime1 = genericShow$prime(dictGenericShow);
      return function(x) {
        return genericShow$prime1(from3(x));
      };
    };
  };

  // output/UseCases.Calculatewinner/index.js
  var genericShowConstructor2 = /* @__PURE__ */ genericShowConstructor(genericShowArgsNoArguments);
  var bind3 = /* @__PURE__ */ bind(bindArray);
  var discard3 = /* @__PURE__ */ discard(discardUnit)(bindArray);
  var guard2 = /* @__PURE__ */ guard(alternativeArray);
  var pure4 = /* @__PURE__ */ pure(applicativeArray);
  var X = /* @__PURE__ */ function() {
    function X2() {
    }
    ;
    X2.value = new X2();
    return X2;
  }();
  var O = /* @__PURE__ */ function() {
    function O2() {
    }
    ;
    O2.value = new O2();
    return O2;
  }();
  var genericSquareValue_ = {
    to: function(x) {
      if (x instanceof Inl) {
        return X.value;
      }
      ;
      if (x instanceof Inr) {
        return O.value;
      }
      ;
      throw new Error("Failed pattern match at UseCases.Calculatewinner (line 32, column 1 - line 32, column 38): " + [x.constructor.name]);
    },
    from: function(x) {
      if (x instanceof X) {
        return new Inl(NoArguments.value);
      }
      ;
      if (x instanceof O) {
        return new Inr(NoArguments.value);
      }
      ;
      throw new Error("Failed pattern match at UseCases.Calculatewinner (line 32, column 1 - line 32, column 38): " + [x.constructor.name]);
    }
  };
  var showSquareValue = {
    show: /* @__PURE__ */ genericShow(genericSquareValue_)(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor2({
      reflectSymbol: function() {
        return "X";
      }
    }))(/* @__PURE__ */ genericShowConstructor2({
      reflectSymbol: function() {
        return "O";
      }
    })))
  };
  var eqSquareValue = {
    eq: function(x) {
      return function(y) {
        if (x instanceof X && y instanceof X) {
          return true;
        }
        ;
        if (x instanceof O && y instanceof O) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var eq2 = /* @__PURE__ */ eq(/* @__PURE__ */ eqMaybe(/* @__PURE__ */ eqMaybe(eqSquareValue)));
  var nextPlayer = function(v) {
    if (v instanceof X) {
      return O.value;
    }
    ;
    if (v instanceof O) {
      return X.value;
    }
    ;
    throw new Error("Failed pattern match at UseCases.Calculatewinner (line 84, column 14 - line 86, column 9): " + [v.constructor.name]);
  };
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  var calculateWinner = function(boardArr) {
    return head(bind3(lines)(function(line) {
      return bind3([X.value, O.value])(function(sv) {
        return discard3(guard2(all(function(i) {
          return eq2(index(boardArr)(i))(new Just(new Just(sv)));
        })(line)))(function() {
          return pure4(sv);
        });
      });
    }));
  };

  // output/Web.HTML.Event.EventTypes/index.js
  var domcontentloaded = "DOMContentLoaded";
  var click = "click";

  // output/Square/index.js
  var attr2 = /* @__PURE__ */ attr(attrValueString);
  var mapFlipped4 = /* @__PURE__ */ mapFlipped(functorSignal);
  var squareComponent = function(dictComponent) {
    var button2 = button(dictComponent);
    var textSig2 = textSig(dictComponent);
    return function(v) {
      return button2([attr2("class")("square"), on(click)(function(v1) {
        return v.onClick;
      })])(textSig2(mapFlipped4(v.value)(function(v1) {
        if (v1 instanceof Just && v1.value0 instanceof X) {
          return "X";
        }
        ;
        if (v1 instanceof Just && v1.value0 instanceof O) {
          return "O";
        }
        ;
        if (v1 instanceof Nothing) {
          return "";
        }
        ;
        throw new Error("Failed pattern match at Square (line 25, column 25 - line 28, column 20): " + [v1.constructor.name]);
      })));
    };
  };

  // output/Board/index.js
  var mapFlipped5 = /* @__PURE__ */ mapFlipped(functorSignal);
  var show2 = /* @__PURE__ */ show(showSquareValue);
  var eq12 = /* @__PURE__ */ eq(/* @__PURE__ */ eqMaybe(/* @__PURE__ */ eqMaybe(eqSquareValue)));
  var discard4 = /* @__PURE__ */ discard(discardUnit);
  var bind4 = /* @__PURE__ */ bind(bindSignal);
  var pure5 = /* @__PURE__ */ pure(applicativeSignal);
  var join3 = /* @__PURE__ */ join(bindMaybe);
  var attr3 = /* @__PURE__ */ attr(attrValueString);
  var Winner = /* @__PURE__ */ function() {
    function Winner2(value0) {
      this.value0 = value0;
    }
    ;
    Winner2.create = function(value0) {
      return new Winner2(value0);
    };
    return Winner2;
  }();
  var NextPlayer = /* @__PURE__ */ function() {
    function NextPlayer2(value0) {
      this.value0 = value0;
    }
    ;
    NextPlayer2.create = function(value0) {
      return new NextPlayer2(value0);
    };
    return NextPlayer2;
  }();
  var boardComponent = function(dictComponent) {
    var MonadEffect0 = dictComponent.MonadHooks0().MonadEffect0();
    var Monad0 = MonadEffect0.Monad0();
    var Bind1 = Monad0.Bind1();
    var bind12 = bind(Bind1);
    var newState2 = newState(MonadEffect0);
    var readSignal3 = readSignal(MonadEffect0);
    var Applicative0 = Monad0.Applicative0();
    var pure15 = pure(Applicative0);
    var when2 = when(Applicative0);
    var discard1 = discard4(Bind1);
    var writeChannel3 = writeChannel(MonadEffect0);
    var squareComponent2 = squareComponent(dictComponent);
    var div$prime2 = div$prime(dictComponent);
    var textSig2 = textSig(dictComponent);
    var div3 = div2(dictComponent);
    return bind12(newState2(replicate(9)(Nothing.value)))(function(v) {
      return bind12(newState2(new NextPlayer(X.value)))(function(v1) {
        var playStatus = mapFlipped5(v1.value0)(function(v2) {
          if (v2 instanceof NextPlayer) {
            return "Next player: " + show2(v2.value0);
          }
          ;
          if (v2 instanceof Winner) {
            return "Winner: " + show2(v2.value0);
          }
          ;
          throw new Error("Failed pattern match at Board (line 56, column 35 - line 58, column 39): " + [v2.constructor.name]);
        });
        var handleClick = function(dictMonadEffect) {
          return function(i) {
            return bind12(readSignal3(v.value0))(function(squares) {
              return bind12(readSignal3(v1.value0))(function(gameState) {
                if (gameState instanceof Winner) {
                  return pure15(unit);
                }
                ;
                if (gameState instanceof NextPlayer) {
                  return when2(eq12(index(squares)(i))(new Just(Nothing.value)))(function() {
                    var newSquares = fromMaybe(squares)(updateAt(i)(new Just(gameState.value0))(squares));
                    return discard1(writeChannel3(v.value1)(newSquares))(function() {
                      return writeChannel3(v1.value1)(function() {
                        var v2 = calculateWinner(newSquares);
                        if (v2 instanceof Nothing) {
                          return new NextPlayer(nextPlayer(gameState.value0));
                        }
                        ;
                        if (v2 instanceof Just) {
                          return new Winner(v2.value0);
                        }
                        ;
                        throw new Error("Failed pattern match at Board (line 43, column 43 - line 45, column 31): " + [v2.constructor.name]);
                      }());
                    });
                  }());
                }
                ;
                throw new Error("Failed pattern match at Board (line 37, column 7 - line 45, column 31): " + [gameState.constructor.name]);
              });
            });
          };
        };
        var handleClick1 = handleClick(MonadEffect0);
        var renderSquareComponent = function(dictComponent1) {
          return function(valueInt) {
            var valSig = bind4(v.value0)(function(squares) {
              return pure5(join3(index(squares)(valueInt)));
            });
            return squareComponent2({
              onClick: handleClick1(valueInt),
              value: valSig
            });
          };
        };
        var renderSquareComponent1 = renderSquareComponent(dictComponent);
        return div$prime2(discard1(div$prime2(textSig2(playStatus)))(function() {
          return discard1(div$prime2(div3([attr3("class")("board-row")])(discard1(renderSquareComponent1(0))(function() {
            return discard1(renderSquareComponent1(1))(function() {
              return renderSquareComponent1(2);
            });
          }))))(function() {
            return discard1(div$prime2(div3([attr3("class")("board-row")])(discard1(renderSquareComponent1(3))(function() {
              return discard1(renderSquareComponent1(4))(function() {
                return renderSquareComponent1(5);
              });
            }))))(function() {
              return div$prime2(div3([attr3("class")("board-row")])(discard1(renderSquareComponent1(6))(function() {
                return discard1(renderSquareComponent1(7))(function() {
                  return renderSquareComponent1(8);
                });
              })));
            });
          });
        }));
      });
    });
  };

  // output/Web.DOM.Element/foreign.js
  var getProp = function(name16) {
    return function(doctype) {
      return doctype[name16];
    };
  };
  var _namespaceURI = getProp("namespaceURI");
  var _prefix = getProp("prefix");
  var localName = getProp("localName");
  var tagName = getProp("tagName");
  function setAttribute(name16) {
    return function(value12) {
      return function(element) {
        return function() {
          element.setAttribute(name16, value12);
        };
      };
    };
  }
  function removeAttribute(name16) {
    return function(element) {
      return function() {
        element.removeAttribute(name16);
      };
    };
  }

  // output/Data.Nullable/foreign.js
  var nullImpl = null;
  function nullable(a, r, f) {
    return a == null ? r : f(a);
  }
  function notNull(x) {
    return x;
  }

  // output/Data.Nullable/index.js
  var toNullable = /* @__PURE__ */ maybe(nullImpl)(notNull);
  var toMaybe = function(n) {
    return nullable(n, Nothing.value, Just.create);
  };

  // output/Web.DOM.ParentNode/foreign.js
  var getEffProp = function(name16) {
    return function(node) {
      return function() {
        return node[name16];
      };
    };
  };
  var children = getEffProp("children");
  var _firstElementChild = getEffProp("firstElementChild");
  var _lastElementChild = getEffProp("lastElementChild");
  var childElementCount = getEffProp("childElementCount");

  // output/Web.Internal.FFI/foreign.js
  function _unsafeReadProtoTagged(nothing, just, name16, value12) {
    if (typeof window !== "undefined") {
      var ty = window[name16];
      if (ty != null && value12 instanceof ty) {
        return just(value12);
      }
    }
    var obj = value12;
    while (obj != null) {
      var proto = Object.getPrototypeOf(obj);
      var constructorName = proto.constructor.name;
      if (constructorName === name16) {
        return just(value12);
      } else if (constructorName === "Object") {
        return nothing;
      }
      obj = proto;
    }
    return nothing;
  }

  // output/Web.Internal.FFI/index.js
  var unsafeReadProtoTagged = function(name16) {
    return function(value12) {
      return _unsafeReadProtoTagged(Nothing.value, Just.create, name16, value12);
    };
  };

  // output/Web.DOM.Element/index.js
  var toNode = unsafeCoerce2;
  var toEventTarget = unsafeCoerce2;
  var fromNode = /* @__PURE__ */ unsafeReadProtoTagged("Element");

  // output/Web.HTML/foreign.js
  var windowImpl = function() {
    return window;
  };

  // output/Web.HTML.HTMLDocument/foreign.js
  function _body(doc) {
    return doc.body;
  }
  function _readyState(doc) {
    return doc.readyState;
  }

  // output/Web.HTML.HTMLDocument.ReadyState/index.js
  var Loading = /* @__PURE__ */ function() {
    function Loading2() {
    }
    ;
    Loading2.value = new Loading2();
    return Loading2;
  }();
  var Interactive = /* @__PURE__ */ function() {
    function Interactive2() {
    }
    ;
    Interactive2.value = new Interactive2();
    return Interactive2;
  }();
  var Complete = /* @__PURE__ */ function() {
    function Complete2() {
    }
    ;
    Complete2.value = new Complete2();
    return Complete2;
  }();
  var parse = function(v) {
    if (v === "loading") {
      return new Just(Loading.value);
    }
    ;
    if (v === "interactive") {
      return new Just(Interactive.value);
    }
    ;
    if (v === "complete") {
      return new Just(Complete.value);
    }
    ;
    return Nothing.value;
  };

  // output/Web.HTML.HTMLDocument/index.js
  var map5 = /* @__PURE__ */ map(functorEffect);
  var toDocument = unsafeCoerce2;
  var readyState = function(doc) {
    return map5(function() {
      var $4 = fromMaybe(Loading.value);
      return function($5) {
        return $4(parse($5));
      };
    }())(function() {
      return _readyState(doc);
    });
  };
  var body = function(doc) {
    return map5(toMaybe)(function() {
      return _body(doc);
    });
  };

  // output/Web.HTML.HTMLElement/index.js
  var toNode2 = unsafeCoerce2;

  // output/Web.HTML.Window/foreign.js
  function document2(window2) {
    return function() {
      return window2.document;
    };
  }

  // output/Web.HTML.Window/index.js
  var toEventTarget2 = unsafeCoerce2;

  // output/Jelly.Aff/index.js
  var bindFlipped2 = /* @__PURE__ */ bindFlipped(bindEffect);
  var pure6 = /* @__PURE__ */ pure(applicativeFn);
  var discard5 = /* @__PURE__ */ discard(discardUnit);
  var mempty3 = /* @__PURE__ */ mempty(/* @__PURE__ */ monoidEffect(monoidCanceler));
  var discard23 = /* @__PURE__ */ discard5(bindAff);
  var bind1 = /* @__PURE__ */ bind(bindAff);
  var liftEffect4 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var pure22 = /* @__PURE__ */ pure(applicativeAff);
  var map6 = /* @__PURE__ */ map(functorMaybe);
  var awaitDomContentLoaded = /* @__PURE__ */ makeAff(function(callback) {
    return function __do() {
      var w = windowImpl();
      var rs = bindFlipped2(readyState)(bindFlipped2(document2)(windowImpl))();
      if (rs instanceof Loading) {
        var et = toEventTarget2(w);
        var listener = eventListener(pure6(callback(new Right(unit))))();
        addEventListener(domcontentloaded)(listener)(false)(et)();
        return effectCanceler(removeEventListener(domcontentloaded)(listener)(false)(et));
      }
      ;
      callback(new Right(unit))();
      return mempty3();
    };
  });
  var awaitBody = /* @__PURE__ */ discard23(awaitDomContentLoaded)(function() {
    return bind1(liftEffect4(bindFlipped2(body)(bindFlipped2(document2)(windowImpl))))(function(htmlEl) {
      return pure22(map6(toNode2)(htmlEl));
    });
  });

  // output/Jelly.Hydrate/foreign.js
  var createDocumentType = (name16) => (publicId2) => (systemId2) => (doc) => () => doc.implementation.createDocumentType(name16, publicId2, systemId2);
  var convertInnerHtmlToNodes = (innerHtml) => () => {
    const div3 = document.createElement("div");
    div3.innerHTML = innerHtml;
    return Array.from(div3.childNodes);
  };
  var updateChildren = (elem2) => (children2) => () => {
    const prevNodes = Array.from(elem2.childNodes);
    const nodesSet = new Set(children2);
    const nodesToRemove = prevNodes.filter((node) => !nodesSet.has(node));
    nodesToRemove.forEach((node) => elem2.removeChild(node));
    let itrNode = elem2.firstChild;
    for (const node of children2) {
      if (itrNode === node) {
        itrNode = itrNode.nextSibling;
        continue;
      }
      if (itrNode === null) {
        elem2.appendChild(node);
        continue;
      }
      elem2.insertBefore(node, itrNode);
    }
  };

  // output/Web.DOM.Document/foreign.js
  var getEffProp2 = function(name16) {
    return function(doc) {
      return function() {
        return doc[name16];
      };
    };
  };
  var url = getEffProp2("URL");
  var documentURI = getEffProp2("documentURI");
  var origin2 = getEffProp2("origin");
  var compatMode = getEffProp2("compatMode");
  var characterSet = getEffProp2("characterSet");
  var contentType = getEffProp2("contentType");
  var _documentElement2 = getEffProp2("documentElement");
  function createElement(localName2) {
    return function(doc) {
      return function() {
        return doc.createElement(localName2);
      };
    };
  }
  function _createElementNS(ns) {
    return function(qualifiedName) {
      return function(doc) {
        return function() {
          return doc.createElementNS(ns, qualifiedName);
        };
      };
    };
  }
  function createTextNode(data) {
    return function(doc) {
      return function() {
        return doc.createTextNode(data);
      };
    };
  }

  // output/Web.DOM.Document/index.js
  var createElementNS = function($6) {
    return _createElementNS(toNullable($6));
  };

  // output/Web.DOM.DocumentType/foreign.js
  var getProp2 = function(name16) {
    return function(doctype) {
      return doctype[name16];
    };
  };
  var name15 = getProp2("name");
  var publicId = getProp2("publicId");
  var systemId = getProp2("systemId");

  // output/Web.DOM.DocumentType/index.js
  var toNode4 = unsafeCoerce2;
  var fromNode2 = /* @__PURE__ */ unsafeReadProtoTagged("DocumentType");

  // output/Web.DOM.Node/foreign.js
  var getEffProp3 = function(name16) {
    return function(node) {
      return function() {
        return node[name16];
      };
    };
  };
  var baseURI = getEffProp3("baseURI");
  var _ownerDocument = getEffProp3("ownerDocument");
  var _parentNode = getEffProp3("parentNode");
  var _parentElement = getEffProp3("parentElement");
  var childNodes = getEffProp3("childNodes");
  var _firstChild = getEffProp3("firstChild");
  var _lastChild = getEffProp3("lastChild");
  var _previousSibling = getEffProp3("previousSibling");
  var _nextSibling = getEffProp3("nextSibling");
  var _nodeValue = getEffProp3("nodeValue");
  var textContent = getEffProp3("textContent");
  function setTextContent(value12) {
    return function(node) {
      return function() {
        node.textContent = value12;
      };
    };
  }

  // output/Web.DOM.Node/index.js
  var map7 = /* @__PURE__ */ map(functorEffect);
  var nextSibling = /* @__PURE__ */ function() {
    var $15 = map7(toMaybe);
    return function($16) {
      return $15(_nextSibling($16));
    };
  }();
  var firstChild = /* @__PURE__ */ function() {
    var $25 = map7(toMaybe);
    return function($26) {
      return $25(_firstChild($26));
    };
  }();

  // output/Web.DOM.Text/index.js
  var toNode5 = unsafeCoerce2;
  var fromNode3 = /* @__PURE__ */ unsafeReadProtoTagged("Text");

  // output/Jelly.Hydrate/index.js
  var monoidSignal2 = /* @__PURE__ */ monoidSignal(monoidArray);
  var monadWriterT2 = /* @__PURE__ */ monadWriterT(monoidSignal2)(monadHooks);
  var semigroupSignal2 = /* @__PURE__ */ semigroupSignal(semigroupArray);
  var mapFlipped6 = /* @__PURE__ */ mapFlipped(functorSignal);
  var discard6 = /* @__PURE__ */ discard(discardUnit);
  var mempty4 = /* @__PURE__ */ mempty(/* @__PURE__ */ monoidEffect(/* @__PURE__ */ monoidEffect(monoidUnit)));
  var pure7 = /* @__PURE__ */ pure(applicativeSignal);
  var bind5 = /* @__PURE__ */ bind(bindHooks);
  var liftEffect5 = /* @__PURE__ */ liftEffect(monadEffectHooks);
  var bindFlipped3 = /* @__PURE__ */ bindFlipped(bindEffect);
  var discard24 = /* @__PURE__ */ discard6(bindHooks);
  var map8 = /* @__PURE__ */ map(functorEffect);
  var map1 = /* @__PURE__ */ map(functorSignal);
  var for_2 = /* @__PURE__ */ for_(applicativeEffect)(foldableArray);
  var monadTellSignalArrayNodeH = /* @__PURE__ */ monadTellReaderT(/* @__PURE__ */ monadTellWriterT(monoidSignal2)(monadHooks));
  var tell3 = /* @__PURE__ */ tell(monadTellSignalArrayNodeH);
  var monadHooksHydrateM = /* @__PURE__ */ monadHooksReaderT(/* @__PURE__ */ monadHooksWriterTSignal(monadHooksHooks)(monoidArray));
  var liftHooks2 = /* @__PURE__ */ liftHooks(monadHooksHydrateM);
  var useHooks2 = /* @__PURE__ */ useHooks(monadHooksHydrateM);
  var monadEffectHydrateM = /* @__PURE__ */ monadEffectReader(/* @__PURE__ */ monadEffectWriter(monoidSignal2)(monadEffectHooks));
  var liftEffect1 = /* @__PURE__ */ liftEffect(monadEffectHydrateM);
  var readSignal2 = /* @__PURE__ */ readSignal(monadEffectHydrateM);
  var monadAskRefMaybeNodeHydra = /* @__PURE__ */ monadAskReaderT(monadWriterT2);
  var ask2 = /* @__PURE__ */ ask(monadAskRefMaybeNodeHydra);
  var bindHydrateM = /* @__PURE__ */ bindReaderT(/* @__PURE__ */ bindWriterT(semigroupSignal2)(bindHooks));
  var bind22 = /* @__PURE__ */ bind(bindHydrateM);
  var discard32 = /* @__PURE__ */ discard6(bindHydrateM);
  var applicativeHydrateM = /* @__PURE__ */ applicativeReaderT(/* @__PURE__ */ applicativeWriterT(monoidSignal2)(applicativeHooks));
  var pure14 = /* @__PURE__ */ pure(applicativeHydrateM);
  var runSignalRegister = function(dictMonadHooks) {
    return function(dictMonadEffect) {
      var runSignal2 = runSignal(dictMonadEffect);
      var watchSignal2 = watchSignal(dictMonadEffect);
      return function(doInitialize) {
        if (doInitialize) {
          return runSignal2;
        }
        ;
        return watchSignal2;
      };
    };
  };
  var useRegisterChildren = function(dictMonadHooks) {
    var MonadEffect0 = dictMonadHooks.MonadEffect0();
    var bind32 = bind(MonadEffect0.Monad0().Bind1());
    var runSignalRegister1 = runSignalRegister(dictMonadHooks)(MonadEffect0);
    var useCleaner2 = useCleaner(dictMonadHooks);
    return function(doInitialize) {
      return function(elem2) {
        return function(chlSig) {
          return bind32(runSignalRegister1(doInitialize)(mapFlipped6(chlSig)(function(chl) {
            return function __do() {
              updateChildren(elem2)(chl)();
              return mempty4();
            };
          })))(function(cleaner) {
            return useCleaner2(cleaner);
          });
        };
      };
    };
  };
  var useRegisterChildren1 = /* @__PURE__ */ useRegisterChildren(monadHooksHooks);
  var useRegisterProp = function(dictMonadHooks) {
    var MonadEffect0 = dictMonadHooks.MonadEffect0();
    var bind32 = bind(MonadEffect0.Monad0().Bind1());
    var runSignalRegister1 = runSignalRegister(dictMonadHooks)(MonadEffect0);
    var useCleaner2 = useCleaner(dictMonadHooks);
    var useEvent2 = useEvent(dictMonadHooks);
    return function(doInitialize) {
      return function(element) {
        return function(v) {
          if (v instanceof PropAttribute) {
            return bind32(runSignalRegister1(doInitialize)(mapFlipped6(v.value1)(function(value12) {
              return function __do() {
                (function() {
                  if (value12 instanceof Nothing) {
                    return removeAttribute(v.value0)(element)();
                  }
                  ;
                  if (value12 instanceof Just) {
                    return setAttribute(v.value0)(value12.value0)(element)();
                  }
                  ;
                  throw new Error("Failed pattern match at Jelly.Hydrate (line 43, column 7 - line 45, column 46): " + [value12.constructor.name]);
                })();
                return mempty4();
              };
            })))(function(cleaner) {
              return useCleaner2(cleaner);
            });
          }
          ;
          if (v instanceof PropHandler) {
            return useEvent2(toEventTarget(element))(v.value0)(v.value1);
          }
          ;
          if (v instanceof PropMountEffect) {
            return v.value0(element);
          }
          ;
          throw new Error("Failed pattern match at Jelly.Hydrate (line 40, column 40 - line 51, column 19): " + [v.constructor.name]);
        };
      };
    };
  };
  var useRegisterProps = function(dictMonadHooks) {
    var traverse_3 = traverse_(dictMonadHooks.MonadEffect0().Monad0().Applicative0())(foldableArray);
    var useRegisterProp1 = useRegisterProp(dictMonadHooks);
    return function(doInitialize) {
      return function(element) {
        return function(props) {
          return traverse_3(useRegisterProp1(doInitialize)(element))(props);
        };
      };
    };
  };
  var useRegisterProps1 = /* @__PURE__ */ useRegisterProps(monadHooksHydrateM);
  var useRegisterText = function(dictMonadHooks) {
    var MonadEffect0 = dictMonadHooks.MonadEffect0();
    var bind32 = bind(MonadEffect0.Monad0().Bind1());
    var runSignalRegister1 = runSignalRegister(dictMonadHooks)(MonadEffect0);
    var useCleaner2 = useCleaner(dictMonadHooks);
    return function(doInitialize) {
      return function(txt) {
        return function(txtSig) {
          return bind32(runSignalRegister1(doInitialize)(mapFlipped6(txtSig)(function(tx) {
            return function __do() {
              setTextContent(tx)(toNode5(txt))();
              return mempty4();
            };
          })))(function(cleaner) {
            return useCleaner2(cleaner);
          });
        };
      };
    };
  };
  var useRegisterText1 = /* @__PURE__ */ useRegisterText(monadHooksHydrateM);
  var hydrateNode = function(convertTo) {
    return function(convertFrom) {
      return function(make) {
        return bind22(ask2)(function(realNodeRef) {
          return bind22(liftEffect1(read(realNodeRef)))(function(maybeNode) {
            var v = function(v1) {
              return bind22(liftEffect1(make))(function(a) {
                return discard32(tell3(pure7([convertFrom(a)])))(function() {
                  return pure14(new Tuple(a, false));
                });
              });
            };
            if (maybeNode instanceof Just) {
              var $132 = convertTo(maybeNode.value0);
              if ($132 instanceof Just) {
                return bind22(liftEffect1(nextSibling(maybeNode.value0)))(function(ns) {
                  return discard32(liftEffect1(write(ns)(realNodeRef)))(function() {
                    return discard32(tell3(pure7([maybeNode.value0])))(function() {
                      return pure14(new Tuple($132.value0, true));
                    });
                  });
                });
              }
              ;
              return v(true);
            }
            ;
            return v(true);
          });
        });
      };
    };
  };
  var hydrate = function(v) {
    return function(node) {
      return bind5(liftEffect5(bindFlipped3($$new)(firstChild(node))))(function(realNodeRef) {
        return bind5(runWriterT(runReaderT(v)(realNodeRef)))(function(v1) {
          return useRegisterChildren1(true)(node)(v1.value1);
        });
      });
    };
  };
  var mount = function(cmp) {
    return function(node) {
      return discard24(liftEffect5(updateChildren(node)([])))(function() {
        return hydrate(cmp)(node);
      });
    };
  };
  var componentHydrateM = {
    el: function(tag) {
      return function(props) {
        return function(children2) {
          return bind22(liftEffect1(windowImpl))(function(w) {
            return bind22(liftEffect1(map8(toDocument)(document2(w))))(function(d) {
              return bind22(hydrateNode(fromNode)(toNode)(createElement(tag)(d)))(function(v) {
                return discard32(liftHooks2(hydrate(children2)(toNode(v.value0))))(function() {
                  return useRegisterProps1(!v.value1)(v.value0)(props);
                });
              });
            });
          });
        };
      };
    },
    elNS: function(namespace) {
      return function(tag) {
        return function(props) {
          return function(children2) {
            return bind22(liftEffect1(windowImpl))(function(w) {
              return bind22(liftEffect1(map8(toDocument)(document2(w))))(function(d) {
                return bind22(hydrateNode(fromNode)(toNode)(createElementNS(new Just(namespace))(tag)(d)))(function(v) {
                  return discard32(liftHooks2(hydrate(children2)(toNode(v.value0))))(function() {
                    return useRegisterProps1(!v.value1)(v.value0)(props);
                  });
                });
              });
            });
          };
        };
      };
    },
    elVoid: function(tag) {
      return function(props) {
        return bind22(liftEffect1(windowImpl))(function(w) {
          return bind22(liftEffect1(map8(toDocument)(document2(w))))(function(d) {
            return bind22(hydrateNode(fromNode)(toNode)(createElement(tag)(d)))(function(v) {
              return useRegisterProps1(!v.value1)(v.value0)(props);
            });
          });
        });
      };
    },
    textSig: function(ts) {
      return bind22(liftEffect1(windowImpl))(function(w) {
        return bind22(liftEffect1(map8(toDocument)(document2(w))))(function(d) {
          return bind22(hydrateNode(fromNode3)(toNode5)(createTextNode("")(d)))(function(v) {
            return useRegisterText1(!v.value1)(v.value0)(ts);
          });
        });
      });
    },
    rawSig: function(innerHtmlSig) {
      return bind22(ask2)(function(realNodeRef) {
        return bind22(useHooks2(map1(function($154) {
          return liftEffect1(convertInnerHtmlToNodes($154));
        })(innerHtmlSig)))(function(nodesSig) {
          var skipRef = function __do() {
            var maybeNode = read(realNodeRef)();
            if (maybeNode instanceof Just) {
              var ns = nextSibling(maybeNode.value0)();
              return write(ns)(realNodeRef)();
            }
            ;
            if (maybeNode instanceof Nothing) {
              return write(Nothing.value)(realNodeRef)();
            }
            ;
            throw new Error("Failed pattern match at Jelly.Hydrate (line 143, column 9 - line 147, column 47): " + [maybeNode.constructor.name]);
          };
          return bind22(readSignal2(nodesSig))(function(nodes) {
            return discard32(liftEffect1(for_2(nodes)(function(v) {
              return skipRef;
            })))(function() {
              return tell3(nodesSig);
            });
          });
        });
      });
    },
    doctype: function(name16) {
      return function(publicId2) {
        return function(systemId2) {
          return bind22(liftEffect1(windowImpl))(function(w) {
            return bind22(liftEffect1(map8(toDocument)(document2(w))))(function(d) {
              return bind22(hydrateNode(fromNode2)(toNode4)(createDocumentType(name16)(publicId2)(systemId2)(d)))(function() {
                return pure14(unit);
              });
            });
          });
        };
      };
    },
    MonadHooks0: function() {
      return monadHooksHydrateM;
    }
  };

  // output/Main/index.js
  var attr4 = /* @__PURE__ */ attr(attrValueString);
  var liftEffect6 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var traverse_2 = /* @__PURE__ */ traverse_(applicativeEffect)(foldableMaybe);
  var component = function(dictComponent) {
    var div3 = div2(dictComponent);
    return div3([attr4("class")("game")])(div3([attr4("class")("game-board")])(boardComponent(dictComponent)));
  };
  var component1 = /* @__PURE__ */ component(componentHydrateM);
  var main = /* @__PURE__ */ launchAff_(/* @__PURE__ */ bind(bindAff)(awaitBody)(function(bodyMaybe) {
    return liftEffect6(traverse_2(function() {
      var $10 = mount(component1);
      return function($11) {
        return runHooks_($10($11));
      };
    }())(bodyMaybe));
  }));

  // <stdin>
  main();
})();
