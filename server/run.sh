#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR
/usr/local/bin/erl -noshell -heart -sname queueserver -run queueserver start
