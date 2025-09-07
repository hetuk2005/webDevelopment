// 1. Longest Common Prefix

let arr = ["flower", "flow", "flight"];

// console.log(jhola);

// Output="fl";

function prefix() {
  let jhola = arr[0];
  let jhola_len = jhola.length;
  for (let i = 1; i < arr.length; i++) {
    let current_str = arr[i];
    while (jhola !== current_str.substring(0, jhola_len)) {
      jhola_len--;
      if (jhola_len == 0) return "";
      jhola = jhola.substring(0, jhola_len);
    }
  }
  return jhola;
}

let ans = prefix();
console.log(ans);

// 2. Valid Parentheses
