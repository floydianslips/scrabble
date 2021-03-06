(*A [node] is composed of a character and a map from characters to children nodes*)
type t

(*[empty] is an empty trie*)
val empty : t

(*[is_empty] returns whether or not a trie is the empty trie*)
val is_empty : t -> bool

(*[add] adds a string to an existing trie*)
val add : string -> t -> t

(*[remove] is unimplemented and returns the same trie*)
val remove: string -> t -> t

(*[mem] returns whether or not a word exists in a trie*)
val mem: string -> t -> bool

(*[is_leaf] returns whether or not a given string is fully extended*)
val is_leaf : string -> t -> bool

(*[is_valid_word] returns whether or not a given string is a valid word*)
val is_valid_word : string -> t -> bool

(*[extenstions] returns all possible extentions of an input string*)
val extensions : string -> t -> string list

(*[make] is a function which accepts a string and returns a completed trie*)
val make : string -> t

(*[dict_from_file] takes in the name of a file and returns a pair of
  dictionaries created from the file. The first dictionary is the set of
  forward words, the second dictionary is the set of backward words*)
val dict_from_file : string -> t * t

(*END OF INTERNAL FUNCTIONS*)

(*[in_dict] returns true if a string is in the offical scrabble dictionary*)
val in_dict : string -> bool

(*[in_back_dict] returns true if a string appears in the backwards dictionary*)
val in_back_dict : string -> bool

(*[has_extensions] takes in a string and returns whether or not it
  is possible to extend it*)
val has_extensions : string -> bool

(*[has_back_extensions] takes in a string and returns whether or not it
  has possible back extensions*)
val has_back_extensions : string -> bool