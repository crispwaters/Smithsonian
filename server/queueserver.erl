-module(queueserver).
-behavior(gen_server).
-export([start/0, get_message/0, post_message/1, dequeue/0, stop/0]).
-export([init/1, handle_call/3, handle_cast/2, terminate/2]).

start() ->
    gen_server:start({global, queueserver}, queueserver, [], []).

get_message() ->
    gen_server:call({global, queueserver}, get_message).

post_message(Message) ->
    gen_server:cast({global, queueserver}, {post_message, Message}).

dequeue() ->
    gen_server:cast({global, queueserver}, dequeue).

stop() ->
    gen_server:cast({global, queueserver}, stop).

init(_) ->
    code:add_path("/usr/local/Cellar/yaws/1.92/lib/yaws/ebin/"),
    {ok, WD} = file:get_cwd(),
    yaws:start_embedded(
      WD ++ "/www/",
      [{servername, "smithsonianmini"}, {listen, {0,0,0,0}}]),
    {ok, queue:new()}.

handle_call(get_message, _, Queue) ->
    Empty = queue:is_empty(Queue),
    if
	Empty ->
	    {reply, "Default message", Queue};
	true ->
	    {reply, queue:get(Queue), Queue}
    end.

handle_cast({post_message, Message}, Queue) ->
    Empty = queue:is_empty(Queue),
    if
	Empty ->
	    {ok, TRef} = timer:apply_interval(10000, queueserver, dequeue, []),
	    put(timer, TRef);
	true ->
	    ok
    end,
    {noreply, queue:in(Message, Queue)};
handle_cast(dequeue, Queue) ->
    Empty = queue:is_empty(queue:drop(Queue)),
    if
	Empty ->
	    timer:cancel(get(timer));
	true ->
	    ok
    end,
    {noreply, queue:drop(Queue)};
handle_cast(stop, Queue) ->
    {stop, "'stop' was cast", Queue}.

terminate(_, _) ->
    timer:cancel(get(timer)).
