const just = () => {
  // This Is Parent Function
  let n = "Hetuk"; // This Is Going To Garbage

  return () => {
    let n = "Hello"; // Because This Is Running  And Previous "n" Is Destroyed After The End Of Exicutional Stack & This Is The Child Function Of Parent Function
    return n;
  };
};

console.log(just()());

// Or 2nd Method

let ans = just();

ans();

// It Closes The Variable That Are Dependence Its Like Frezzes Then Its Doesnt Allow Them To Destroyed  Only There Is Some Dependence, And What That Means Of Dependences Was => A Child Function Need A Variable From A Parent Function Even Those Parent Function Had Been Called Or After The Function Called The Varaible Destroyed But The Parent Function Share The Variable To The Child Function.
