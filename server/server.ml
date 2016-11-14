
open Cohttp
open Yojson
open HttpServer

open Game

(* Yojson aliases *)

(* [from_string] is Yojson.Basic.from_string *)
let from_string = Yojson.Basic.from_string
(* [to_string_case] is Yojson.Basic.Util.to_string *)
let to_string = Yojson.Basic.Util.to_string
(* [member] is Yojson.Basic.Util.member *)
let member = Yojson.Basic.Util.member
(* [to_list] is Yojson.Basic.Util.to_list *)
let to_list = Yojson.Basic.Util.to_list
(* [to_int] is Yojson.Basic.Util.to_int *)
let to_int = Yojson.Basic.Util.to_int

(* [games] is the list of games currently running *)
let games = ref []

(* [num_players] is the number of players registered since startup *)
let num_players = ref 0

(* [cors_control req] responds with Access-Control headers to enable CORS *)
let cors_control req = 
  let headers = 
    Header.init_with "Access-Control-Allow-Origin" "*" 
    |> fun header -> Header.add header "Access-Control-Allow-Headers" 
                                       "content-type"
    |> fun header -> Header.add header "Access-Control-Allow-Methods"
                                       "GET,POST,PUT,OPTIONS"
  in
  {headers;status=`OK;res_body=""}

(* [create_game req] creates a game given the request [req] *)
let create_game req = 
  let json = Yojson.Basic.from_string req.req_body in
  let player_name = json |> member "playerName" |> to_string in
  let name = json |> member "gameName" |> to_string in
  let player_id = !num_players in
  let grid = Grid.empty in
  let base_player = 
    {player_id;player_name="Computer";tiles=[];score=0;order=0;ai=true}
  in
  let players = 
    [
      base_player; {base_player with player_id=player_id + 1;order=1};
      {base_player with player_id=player_id + 2;order=2};
      {base_player with player_id=player_id + 3;order=3;player_name};
    ]
  in
  num_players := !num_players + 4;
  let remaining_tiles = [] in
  let new_game = 
    {id=List.length !games;name;grid;players;remaining_tiles;turn=0}
  in
  games := new_game::!games;
  let headers = 
    Header.init_with "content-type" "application/json"
    |> fun header -> Header.add header "Access-Control-Allow-Origin" "*"
  in
  let res_body = Game.to_json new_game in
  {headers;status=`OK;res_body}

(* [Full] is an exception that represents a full game *)
exception Full

(* [join_game req] joins a player to a game given the request [req] *)
let join_game req = 
  let json = Yojson.Basic.from_string req.req_body in
  let id = json |> member "id" |> to_int in
  let player_name = json |> member "name" |> to_string in
  let default_headers =
    Header.init_with "content-type" "text/plain"
    |> fun header -> Header.add header "Access-Control-Allow-Origin" "*"
  in
  try
    let game = List.find (fun game -> game.id = id) !games in
    let substituted = 
      try List.find (fun player -> player.ai) game.players
      with Not_found -> raise Full
    in
    substituted.player_name <- player_name;
    substituted.ai <- false;
    let headers = 
      Header.init_with "content-type" "application/json"
      |> fun header -> Header.add header "Access-Control-Allow-Origin" "*"
    in
    let res_body = 
      "{\"playerID\":" ^ string_of_int substituted.player_id ^
      Game.to_json game ^ "}"
    in
    {headers;status=`OK;res_body}
  with
  | Not_found -> {
      headers=default_headers;
      status=`Not_found;
      res_body="Game with id " ^ string_of_int id ^ " not found"
    }
  | Full -> {
      headers=default_headers;
      status=`Bad_request;
      res_body="Game with id " ^ string_of_int id ^ " is full"
    }

let _ = 
  HttpServer.add_route (`OPTIONS,"/api/game") cors_control;
  HttpServer.add_route (`PUT,"/api/game") create_game;
  HttpServer.add_route (`POST,"/api/game") join_game;
  HttpServer.run ~port:8000 ()