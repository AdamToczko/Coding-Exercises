My Languages

Your task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
    return Object.keys(results).filter(el => results[el] >=60).sort((a,b)=>results[b]-results[a])
   }

   // another solution 

   myLanguages = r => Object.keys(r).sort((a,b) => r[b]-r[a]).filter(k => r[k] >= 60)