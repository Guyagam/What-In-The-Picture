'use strict'

const gQuests = crateQuest()
var gCurrQuestIdx = 0
// var gInterval

function initGame() {
  renderQuest()

}

function renderQuest() {
  var elMainDiv = document.querySelector('.container')
  var strHTML = ''
  strHTML += `<h1>Guess The National Team !<span>⚽🏆</span></h1>`
  strHTML += `<img src="pic/${gCurrQuestIdx}.png"></br>`
  for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
    var currVal = gQuests[gCurrQuestIdx].opts[i]
    strHTML += `<button onclick="checkAnswer(${i})">${currVal}</button>`
  }
  strHTML += '<button onclick="startOver()" class="rest">rest</button>'
  elMainDiv.innerHTML = strHTML
}

function crateQuest() {
  var quest = [
    { id: 1, opts: ['Usa', 'Zambia', 'Argentina', 'France'], correctOptIndex: 2 },
    { id: 2, opts: ['Hungaria', 'Brazil', 'Usa', 'Italy'], correctOptIndex: 1 },
    { id: 3, opts: ['Spain', 'Bulgaria', 'Brazil', 'Cambodia'], correctOptIndex: 0 },
    { id: 4, opts: ['Belarus', 'Brazil', 'Spain', 'Israel'], correctOptIndex: 3 },
    { id: 5, opts: ['Belgium', 'Chile', 'Lita', 'Israel'], correctOptIndex: 0 },
    { id: 6, opts: ['Belgium ', 'Holland', 'Spain', 'Lebanon'], correctOptIndex: 1 },
    { id: 7, opts: ['Uruguay ', 'Brazil', 'Germany', 'Israel'], correctOptIndex: 0 },
    { id: 8, opts: ['Belarus', 'Brazil', 'Spain', 'Germany'], correctOptIndex: 3 },
    { id: 9, opts: ['Belarus', 'Brazil', 'Spain', 'Italy'], correctOptIndex: 3 },
    { id: 10, opts: ['Serbia', 'England', 'Spain', 'Israel'], correctOptIndex: 1 },
  ]
  return quest
}

function checkAnswer(optIdx) {
  var elbtn = document.querySelector('.rest')
  var correct = gQuests[gCurrQuestIdx].correctOptIndex
  if (correct !== optIdx) {
    alert('sorry wrong answer please try agian')
    return
  }
  gCurrQuestIdx++
  if (gCurrQuestIdx >= gQuests.length) {
    alert('Wow! for restart the game press the button below')
    elbtn.style.display = 'block'

  }
  else renderQuest()
  console.log(gCurrQuestIdx)
}

function startOver() {
  gCurrQuestIdx = 0
  renderQuest()
}

