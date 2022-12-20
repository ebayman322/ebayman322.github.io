{\rtf1\ansi\ansicpg1252\cocoartf2707
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Monaco;}
{\colortbl;\red255\green255\blue255;\red39\green129\blue201;\red0\green0\blue0;\red199\green203\blue211;
\red255\green255\blue255;\red212\green20\blue102;\red235\green16\blue47;\red20\green152\blue106;}
{\*\expandedcolortbl;;\cssrgb\c18039\c58431\c82745;\cssrgb\c0\c0\c0;\cssrgb\c81961\c83529\c85882;
\cssrgb\c100000\c100000\c100000;\cssrgb\c87451\c18824\c47451;\cssrgb\c94902\c17255\c23922;\cssrgb\c0\c65098\c49020;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
const\cf4  form = \cf6 document\cf4 .\cf7 getElementById\cf4 (\cf8 'quiz-form'\cf4 );\
\cf2 const\cf4  scoreDisplay = \cf6 document\cf4 .\cf7 getElementById\cf4 (\cf8 'score'\cf4 );\
\cf2 const\cf4  totalQuestionsDisplay = \cf6 document\cf4 .\cf7 getElementById\cf4 (\cf8 'total-questions'\cf4 );\
\
form.\cf7 addEventListener\cf4 (\cf8 'submit'\cf4 , (event) => \{\
  event.\cf7 preventDefault\cf4 ();\
\
  \cf2 let\cf4  score = \cf6 0\cf4 ;\
  \cf2 const\cf4  totalQuestions = form.\cf7 querySelectorAll\cf4 (\cf8 '.question'\cf4 ).length;\
  totalQuestionsDisplay.textContent = totalQuestions;\
\
  form.\cf7 querySelectorAll\cf4 (\cf8 '.question'\cf4 ).\cf7 forEach\cf4 ((question) => \{\
    \cf2 const\cf4  selectedOption = question.\cf7 querySelector\cf4 (\cf8 'input:checked'\cf4 );\
    \cf2 if\cf4  (selectedOption && selectedOption.value === \cf8 'correct-answer'\cf4 ) \{\
      score++;\
    \}\
  \});\
\
  scoreDisplay.textContent = score;\
\});}