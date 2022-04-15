import { ref } from 'vue'
  /* 
    API STRUCTURE
    
    No. of questions: Number (Required)
    Category: Number
    Difficulty: String
    https://opentdb.com/api.php?amount={no. of questions}&category={category}&difficulty={difficulty}&type=multiple

    No. of questions: Number
    Category: null
    Difficulty: null
    https://opentdb.com/api.php?amount={no. of questions}&type=multiple


    JSON RESPONSE STRUCTURE
    
    {
      "response_code": 0, // 0: success, otherValue: some error occured
      "results": [
        {
          "category": "Sports",
          "type": "multiple",
          "difficulty": "medium",
          "question": "What is the nickname of Northampton town&#039;s rugby union club?",
          "correct_answer": "Saints",
          "incorrect_answers": [
            "Harlequins",
            "Saracens",
            "Wasps"
          ]
        },
        {
          "category": "Geography",
          "type": "multiple",
          "difficulty": "hard",
          "question": "Which of these island countries is located in the Caribbean?",
          "correct_answer": "Barbados",
          "incorrect_answers": [
            "Fiji",
            "Maldives",
            "Seychelles"
          ]
        },
      ]
    }

    DESIRED STRUCTURE

    [
      {
        "category": "Sports",
        "difficulty": "medium",
        "question": "What is the nickname of Northampton town&#039;s rugby union club?",
        "options": [
          {"option": "Harlequins", "isCorrect": false}
          {"option": "Saints", "isCorrect": true}
          {"option": "Wasps", "isCorrect": false}
          {"option": "Saracens", "isCorrect": false}
        ]
      }
    ]

  */


export function useFetch(options) {
  const amount = options.amount
  const difficulty = options.difficulty ? options.difficulty : ''
  const category = options.category ? options.category : ''

  const url = (
    'https://opentdb.com/api.php?&type=multiple' + 
    ( '&amount=' + options.quantity) +
    (category ? '&category=' + category : '') +
    (difficulty ? '&difficulty=' + difficulty : '')
  )

  const data = ref(null)
  const error = ref(null)

  fetch(url)
    .then(res => res.json())
    .then(json => {
      // response error
      if (json.response_code) throw Error 
      else data.value = cleanData(json.results)
    })
    .catch(err => error.value = err)

  return { data, error }

}

function cleanData(data) {
  let cleanedData = data.map(question => {
    return ({
      category: question.category,
      difficulty: question.difficulty,
      question: question.question,
      options: [
        ...question.incorrect_answers.map(option => ({
          option,
          isCorrect: false,
        })),
        {
          option: question.correct_answer,
          isCorrect: true
        },
      ].sort(() => 0.5 - Math.random().toFixed(1))
    })
  })
  return cleanedData
}